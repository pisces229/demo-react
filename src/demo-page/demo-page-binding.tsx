import React, { Fragment, useEffect, useState } from "react";
// hook
function useConstructor(callBack = () => {}) {
  const [init, setInit] = useState(false);
  if (!init) {
    console.log("useConstructor");
    callBack();
    setInit(true);
  }
}
function useValueBinding<T>(
  state: T,
  setState: React.Dispatch<React.SetStateAction<T>>
) {
  const input = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.type) {
      case "text": {
        setState({ ...state, [e.target.name]: e.target.value });
        break;
      }
      case "checkbox": {
        if (e.target.value === "on") {
          setState({ ...state, [e.target.name]: e.target.checked });
        } else {
          let value = (state as any)[e.target.name] as string[];
          if (e.target.checked) {
            if (!value.includes(e.target.value)) {
              value.push(e.target.value);
            }
          } else {
            if (value.includes(e.target.value)) {
              value.splice(value.indexOf(e.target.value), 1);
            }
          }
          setState({ ...state, [e.target.name]: value });
        }
        break;
      }
      case "radio": {
        setState({ ...state, [e.target.name]: e.target.value });
        break;
      }
      case "file": {
        if (e.target.files!.length! > 0) {
          setState({ ...state, [e.target.name]: e.target.files });
        } else {
          setState({ ...state, [e.target.name]: null });
        }
        break;
      }
    }
  };
  const select = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!e.target.multiple) {
      setState({ ...state, [e.target.name]: e.target.value });
    } else {
      const value: string[] = [];
      for (let i = 0; i < e.target.options.length; ++i) {
        if (e.target.options[i].selected) {
          value.push(e.target.options[i].value);
        }
      }
      setState({ ...state, [e.target.name]: value });
    }
  };
  const textarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return { input, select, textarea };
}
function useGridValueBinding<T>(
  state: T[],
  setState: React.Dispatch<React.SetStateAction<T[]>>
) {
  const input = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.type) {
      case "text": {
        state[index] = { ...state[index], [e.target.name]: e.target.value };
        setState([...state]);
        break;
      }
      case "checkbox": {
        if (e.target.value === "on") {
          state[index] = { ...state[index], [e.target.name]: e.target.checked };
        } else {
          let value = (state[index] as any)[e.target.name] as string[];
          if (e.target.checked) {
            if (!value.includes(e.target.value)) {
              value.push(e.target.value);
              state[index] = { ...state[index], [e.target.name]: value };
            }
          } else {
            if (value.includes(e.target.value)) {
              value.splice(value.indexOf(e.target.value), 1);
              state[index] = { ...state[index], [e.target.name]: value };
            }
          }
        }
        setState([...state]);
        break;
      }
      case "radio": {
        state[index] = { ...state[index], [e.target.name]: e.target.value };
        setState([...state]);
        break;
      }
      case "file": {
        if (e.target.files!.length! > 0) {
          state[index] = { ...state[index], [e.target.name]: e.target.files };
        } else {
          state[index] = { ...state[index], [e.target.name]: null };
        }
        setState([...state]);
        break;
      }
    }
  };
  const select =
    (index: number) => (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (!e.target.multiple) {
        state[index] = { ...state[index], [e.target.name]: e.target.value };
      } else {
        const value: string[] = [];
        for (let i = 0; i < e.target.options.length; ++i) {
          if (e.target.options[i].selected) {
            value.push(e.target.options[i].value);
          }
        }
        state[index] = { ...state[index], [e.target.name]: value };
      }
      setState([...state]);
    };
  const textarea =
    (index: number) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      state[index] = { ...state[index], [e.target.name]: e.target.value };
      setState([...state]);
    };
  return { input, select, textarea };
}
// interface
interface CommonOptionModel {
  value: string;
  text: string;
}
interface FormModel {
  inputText: string;
  inputCheckbox: boolean;
  inputCheckboxes: string[];
  inputRadio: string;
  selectSingle: string;
  selectMultiple: string[];
  textarea: string;
  inputFile: FileList | null;
  inputFiles: FileList | null;
}
interface GridModel {
  row: number;
  checkbox: boolean;
  inputText: string;
  inputCheckbox: boolean;
  inputCheckboxes: string[];
  inputRadio: string;
  selectSingle: string;
  selectMultiple: string[];
  textarea: string;
  inputFile: FileList | null;
  inputFiles: FileList | null;
}
// render
export function DemoPageBinding() {
  console.log(`DemoPageTest`);
  // useState
  const [option, setOption] = useState<CommonOptionModel[]>([]);
  const [form, setForm] = useState<FormModel>({
    inputText: "InputText",
    inputCheckbox: false,
    inputCheckboxes: ["A"],
    inputRadio: "",
    selectSingle: "",
    selectMultiple: [],
    textarea: "Textarea",
    inputFile: null,
    inputFiles: null,
  });
  const [grid, setGrid] = useState<GridModel[]>([]);
  // useConstructor
  useConstructor(() => {
    setOption([
      { value: "A", text: "AAAAA" },
      { value: "B", text: "BBBBB" },
      { value: "C", text: "CCCCC" },
      { value: "D", text: "DDDDD" },
      { value: "E", text: "EEEEE" },
    ]);
    for (let i = 0; i < 5; ++i) {
      grid.push({
        row: i,
        checkbox: false,
        inputText: `InputText[${i}]`,
        inputCheckbox: false,
        inputCheckboxes: ["A"],
        inputRadio: "",
        selectSingle: "",
        selectMultiple: [],
        textarea: `Textarea[${i}]`,
        inputFile: null,
        inputFiles: null,
      });
    }
    setGrid([...grid]);
  });
  // useEffect
  useEffect(() => {
    console.log("useEffect");
  });
  // useBinding
  const {
    input: onChangeBindValueInput,
    select: onChangeBindValueSelect,
    textarea: onChangeBindValueTextarea,
  } = useValueBinding(form, setForm);
  const {
    input: onChangeGridBindValueInput,
    select: onChangeGridBindValueSelect,
    textarea: onChangeGridBindValueTextarea,
  } = useGridValueBinding(grid, setGrid);
  // evnet
  const onClickPrintForm = () => {
    console.log(JSON.stringify(form));
    console.log(form.inputFile);
    console.log(form.inputFiles);
  };
  const onClickPrintGrid = (index: number) => {
    console.log(JSON.stringify(grid[index]));
    console.log(grid[index].inputFile);
    console.log(grid[index].inputFiles);
  };
  return (
    <>
      <h1>Form</h1>
      <table>
        <tbody>
          <tr>
            <td>inputText</td>
            <td>
              <input
                type="text"
                name="inputText"
                value={form.inputText}
                onChange={onChangeBindValueInput}
              />
            </td>
          </tr>
          <tr>
            <td>inputCheckbox</td>
            <td>
              <input
                type="checkbox"
                name="inputCheckbox"
                checked={form.inputCheckbox}
                onChange={onChangeBindValueInput}
              />
            </td>
          </tr>
          <tr>
            <td>inputCheckboxs</td>
            <td>
              {option.map((item, index) => (
                <Fragment key={index}>
                  <input
                    type="checkbox"
                    name="inputCheckboxes"
                    value={item.value}
                    checked={form.inputCheckboxes.includes(item.value)}
                    onChange={onChangeBindValueInput}
                  />
                  {item.text}
                </Fragment>
              ))}
            </td>
          </tr>
          <tr>
            <td>inputRadio</td>
            <td>
              {option.map((item, index) => (
                <Fragment key={index}>
                  <input
                    type="radio"
                    name="inputRadio"
                    value={item.value}
                    checked={item.value === form.inputRadio}
                    onChange={onChangeBindValueInput}
                  />
                  {item.text}
                </Fragment>
              ))}
            </td>
          </tr>
          <tr>
            <td>selectSingle</td>
            <td>
              <select
                name="selectSingle"
                value={form.selectSingle}
                onChange={onChangeBindValueSelect}
              >
                <option value="">Please To Select</option>
                {option.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.text}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>selectMultiple</td>
            <td>
              <select
                multiple
                name="selectMultiple"
                value={form.selectMultiple}
                onChange={onChangeBindValueSelect}
              >
                {option.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.text}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>textarea</td>
            <td>
              <textarea
                name="textarea"
                value={form.textarea}
                onChange={onChangeBindValueTextarea}
              />
            </td>
          </tr>
          <tr>
            <td>inputFile</td>
            <td>
              <input
                type="file"
                name="inputFile"
                onChange={onChangeBindValueInput}
              />
            </td>
          </tr>
          <tr>
            <td>inputFiles</td>
            <td>
              <input
                type="file"
                multiple
                name="inputFiles"
                onChange={onChangeBindValueInput}
              />
            </td>
          </tr>
          <tr>
            <td>input onChange Console</td>
            <td>
              <input
                type="text"
                onChange={(e) => {
                  console.log("onChange1");
                  console.log("onChange2");
                }}
              />
            </td>
          </tr>
          <tr>
            <td>button onClick</td>
            <td>
              <button onClick={onClickPrintForm}>Print Form</button>
            </td>
          </tr>
        </tbody>
      </table>
      <h1>Grid</h1>
      <table>
        <thead>
          <tr>
            <th>row</th>
            <th>inputText</th>
            <th>inputCheckbox</th>
            <th>inputCheckboxs</th>
            <th>inputRadio&nbsp;&nbsp;&nbsp;&nbsp;</th>
            <th>selectSingle</th>
            <th>selectMultiple</th>
            <th>textarea</th>
            <th>inputFile</th>
          </tr>
        </thead>
        <tbody>
          {grid.map((gridItem, gridIndex) => (
            <tr key={gridIndex}>
              <td>
                <button onClick={() => onClickPrintGrid(gridIndex)}>
                  Print Grid Row[{gridItem.row}]
                </button>
              </td>
              <td>
                <input
                  type="text"
                  name="inputText"
                  size={10}
                  value={gridItem.inputText}
                  onChange={onChangeGridBindValueInput(gridIndex)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="inputCheckbox"
                  checked={gridItem.inputCheckbox}
                  onChange={onChangeGridBindValueInput(gridIndex)}
                />
              </td>
              <td>
                {option.map((optionItem, optionIndex) => (
                  <div key={optionIndex}>
                    <input
                      type="checkbox"
                      name="inputCheckboxes"
                      value={optionItem.value}
                      checked={gridItem.inputCheckboxes.includes(
                        optionItem.value
                      )}
                      onChange={onChangeGridBindValueInput(gridIndex)}
                    />
                    {optionItem.text}
                  </div>
                ))}
              </td>
              <td>
                {option.map((optionItem, optionIndex) => (
                  <div key={optionIndex}>
                    <input
                      type="radio"
                      name="inputRadio"
                      value={optionItem.value}
                      checked={optionItem.value === gridItem.inputRadio}
                      onChange={onChangeGridBindValueInput(gridIndex)}
                    />
                    {optionItem.text}
                  </div>
                ))}
              </td>
              <td>
                <select
                  name="selectSingle"
                  value={gridItem.selectSingle}
                  onChange={onChangeGridBindValueSelect(gridIndex)}
                >
                  <option value="">Please To Select</option>
                  {option.map((optionItem, optionIndex) => (
                    <option key={optionIndex} value={optionItem.value}>
                      {optionItem.text}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <select
                  multiple
                  name="selectMultiple"
                  value={gridItem.selectMultiple}
                  onChange={onChangeGridBindValueSelect(gridIndex)}
                >
                  {option.map((optionItem, optionIndex) => (
                    <option key={optionIndex} value={optionItem.value}>
                      {optionItem.text}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <textarea
                  name="textarea"
                  value={gridItem.textarea}
                  onChange={onChangeGridBindValueTextarea(gridIndex)}
                />
              </td>
              <td>
                <input
                  type="file"
                  name="inputFile"
                  onChange={onChangeGridBindValueInput(gridIndex)}
                />
                <input
                  type="file"
                  multiple
                  name="inputFiles"
                  onChange={onChangeGridBindValueInput(gridIndex)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
