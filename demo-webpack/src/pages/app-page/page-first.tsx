import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import produce from 'immer';
import { usePageLayoutStore } from '@/stores/app-page/page-layout-store';
import { usePageActionStore } from '@/stores/app-page/page-action';
import {
  PageFirstAction,
  usePageFirstStore,
} from '@/stores/app-page/page-first-store';
import {
  PageSecondAction,
  usePageSecondStore,
} from '@/stores/app-page/page-second-store';

type FormState = {
  stringValue?: string;
  numberValue?: number;
  booleanValue?: boolean;
};
const initFormState: FormState = {
  stringValue: '',
  numberValue: 0,
  booleanValue: false,
};

const Index = () => {
  const navigate = useNavigate();
  const initialRef = useRef(false);
  const [action] = useState(usePageActionStore.getState().getAction());
  const [form, setForm] = useState<FormState>(() => {
    // console.log('once');
    switch (usePageActionStore.getState().getAction()) {
      case PageFirstAction.Empty: {
        return initFormState;
      }
      case PageFirstAction.Query: {
        return usePageFirstStore.getState().getForm();
      }
      default: {
        return initFormState;
      }
    }
  });
  useEffect(() => {
    if (!initialRef.current) {
      initialRef.current = true;
      switch (action) {
        case PageFirstAction.Empty: {
          // do something
          break;
        }
        case PageFirstAction.Query: {
          // do something
          break;
        }
        default: {
          // do something
          break;
        }
      }
      usePageActionStore.getState().setAction();
    }
  }, [action]);
  const onClickCreate = () => {
    usePageFirstStore.getState().setForm(form);
    usePageActionStore.getState().setAction(PageSecondAction.Create);
    navigate('/second');
  };
  const onClickModify = () => {
    usePageFirstStore.getState().setForm(form);
    usePageActionStore.getState().setAction(PageSecondAction.Modify);
    usePageSecondStore.getState().setForm({ stringValue: form.stringValue });
    navigate('/second');
  };
  return (
    <>
      <h3>Page First</h3>
      <p>Action:[{action}]</p>
      <button
        type="button"
        onClick={() => usePageLayoutStore.getState().setMessage('First')}
      >
        Message
      </button>
      <table>
        <tbody>
          <tr>
            <td>stringValue</td>
            <td>
              <input
                type="text"
                value={form.stringValue}
                onChange={async (event) =>
                  setForm(
                    produce((draft) => {
                      draft.stringValue = event.target.value;
                    }),
                  )
                }
              ></input>
            </td>
          </tr>
          <tr>
            <td>numberValue</td>
            <td>
              <input
                type="number"
                value={form.numberValue}
                onChange={async (event) =>
                  setForm(
                    produce((draft) => {
                      draft.numberValue = parseInt(event.target.value);
                    }),
                  )
                }
              ></input>
            </td>
          </tr>
          <tr>
            <td>booleanValue</td>
            <td>
              <input
                type="checkbox"
                checked={form.booleanValue}
                onChange={async (event) =>
                  setForm(
                    produce((draft) => {
                      draft.booleanValue = event.target.checked;
                    }),
                  )
                }
              ></input>
            </td>
          </tr>
        </tbody>
      </table>
      <button type="button" onClick={onClickCreate}>
        Create
      </button>
      &nbsp;
      <button type="button" onClick={onClickModify}>
        Modify
      </button>
      &nbsp;
    </>
  );
};
export default Index;
