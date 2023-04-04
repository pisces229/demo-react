import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import produce from 'immer';
import { usePageLayoutStore } from '../../stores/app-page/page-layout-store';
import { usePageActionStore } from '../../stores/app-page/page-action';
import { PageSecondAction, usePageSecondStore } from '../../stores/app-page/page-second-store';
import { PageFirstAction } from '../../stores/app-page/page-first-store';

interface FormState {
  stringValue?: string;
  numberValue?: number;
  booleanValue?: boolean;
}
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
      case PageSecondAction.Create: {
        return initFormState;
      }
      case PageSecondAction.Modify: {
        return usePageSecondStore.getState().getForm();
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
        case PageSecondAction.Create: {
          // do something
          break;
        }
        case PageSecondAction.Modify: {
          // do something
          break;
        }
        default: {
          navigate('/first');
          break;
        }
      }
      usePageActionStore.getState().setAction();
    }
  }, [action, navigate]);
  const onClickBack = () => {
    usePageActionStore.getState().setAction(PageFirstAction.Query);
    navigate('/first');
  };
  return (
    <>
      <h3>Page Second</h3>
      <button type="button" onClick={() => usePageLayoutStore.getState().setMessage('Second')}>
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
      <button type="button" onClick={onClickBack}>
        Back
      </button>
      &nbsp;
    </>
  );
};
export default Index;
