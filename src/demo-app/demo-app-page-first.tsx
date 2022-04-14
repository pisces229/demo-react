import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  useCommonConstructor,
  useCommonBindStateValue,
  useCommonBindStateArray,
  useCommonRouteGuard,
} from "./demo-app-hook";
import {
  CommonOptionModel,
  FirstFormModel,
  FirstGridModel,
} from "./demo-app-model";
import {
  StoreState,
  firstSaveForm,
  firstSaveGrid,
  commonMessage,
  firstModifyCommonMessage,
} from "./demo-app-redux";
import { Head1, Head2, Head3 } from './demo-app-page-first-styled';

export function DemoAppPageFirst() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const common = useSelector((state: StoreState) => state.rootReducer.first.common);
  const [option, setOption] = useState<CommonOptionModel[]>([
    { value: 'A', text: 'AAAAA' },
    { value: 'B', text: 'BBBBB' },
    { value: 'C', text: 'CCCCC' },
    { value: 'D', text: 'DDDDD' },
    { value: 'E', text: 'EEEEE' },
  ]);
  const [form, setForm] = useState<FirstFormModel>(
    { ...useSelector((state: StoreState) => state.rootReducer.first.form) }
  );
  const [grid, setGrid] = useState<FirstGridModel[]>(
    [ ...useSelector((state: StoreState) => state.rootReducer.first.grid) ]
  );
  const {
    input: commonBindFormInput,
    select: commonBindFormSelect,
    textarea: commonBindFormTextarea
  } = useCommonBindStateValue(form, setForm);
  const {
    input: commonBindGridInput,
    select: commonBindGridSelect,
    textarea: commonBindGridTextarea
  } = useCommonBindStateArray(grid, setGrid);
  useCommonRouteGuard();
  useCommonConstructor(() => {
    // do something
  });
  // useEffect
  useEffect(
    () => {
      console.log('MOUNTED');
      return () => console.log('UNMOUNTED');
    }
  );
  const onClickNavigate = () => {
    dispatch(firstSaveForm(form));
    dispatch(firstSaveGrid(grid));
    navigate('../second');
  };
  const onChangeSyncMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(commonMessage(e.target.value));
  };
  const onChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(firstModifyCommonMessage(e.target.value));
  };
  const onClickFormClear = () => {
    setForm({
      input: '',
      select: '',
      textarea: '',
    });
  };
  const onClickGridCreate = () => {
    const row = (grid.length > 0 ? grid[grid.length - 1].row : 0) + 1;
    grid.push({
      row,
      checkbox: false,
      input: row.toString(),
      select: '',
      textarea: row.toString()
    });
    setGrid([ ...grid ]);
  };
  const onClickGridRemove = (index?: number) => () => {
    if (index! >= 0) {
      setGrid([ ...grid.filter((gridItem, gridIndex) => gridIndex !== index) ]);
    } else {
      setGrid([ ...grid.filter((gridItem) => !gridItem.checkbox) ]);
    }
  };
  return (
  <>
    <Head2>DemoAppPageFirst</Head2>
    <button onClick={onClickNavigate}>Second</button>
    <br />
    <h3>Common</h3>
    sync message:<input type='text' value={common.message} onChange={onChangeSyncMessage} />
    <br />
    message:<input type='text' value={common.message} onChange={onChangeMessage} />
    <br />
    <h3>Form</h3>
    <button onClick={onClickFormClear}>Clear</button>
    <br />
    input:<input type='text' name='input' value={form.input} onChange={commonBindFormInput} />
    <br />
    select:<select name='select' value={form.select} onChange={commonBindFormSelect}>
      <option value=''>Please To Select</option>
      {option.map((optionItem, optionIndex) =>
      <option key={optionIndex} value={optionItem.value}>{optionItem.text}</option>
      )}
    </select>
    <br />
    textarea:<textarea name='textarea' value={form.textarea} onChange={commonBindFormTextarea} />
    <br />
    <h3>Grid</h3>
    <button onClick={onClickGridCreate}>Create</button>
    &nbsp;
    <button onClick={onClickGridRemove()}>Remove</button>
    <br />
    <table>
      <thead>
        <tr>
          <td>row</td>
          <td>remove</td>
          <td>checkbox</td>
          <td>input</td>
          <td>select</td>
          <td>textarea</td>
        </tr>
      </thead>
      <tbody>
        {grid.map((gridItem, gridIndex) =>
        <tr key={gridIndex}>
          <td>
            {gridItem.row}
          </td>
          <td>
          <button onClick={onClickGridRemove(gridIndex)}>Remove</button>
          </td>
          <td>
            <input type='checkbox' name='checkbox' checked={gridItem.checkbox} onChange={commonBindGridInput(gridIndex)} />
          </td>
          <td>
            <input type='text' name='input' value={gridItem.input} onChange={commonBindGridInput(gridIndex)} />
          </td>
          <td>
            <select name='select' value={gridItem.select} onChange={commonBindGridSelect(gridIndex)}>
              <option value=''>Please To Select</option>
              {option.map((optionItem, optionIndex) =>
              <option key={optionIndex} value={optionItem.value}>{optionItem.text}</option>
              )}
            </select>
          </td>
          <td>
            <textarea name='textarea' value={gridItem.textarea} onChange={commonBindGridTextarea(gridIndex)} />
          </td>
        </tr>
        )}
      </tbody>
    </table>
  </>
  );
}
