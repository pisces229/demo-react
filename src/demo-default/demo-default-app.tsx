import React, { lazy, Suspense } from 'react';
import { DemoDefaultErrorBoundary } from './demo-default-error-boundary';
const DemoDefaultLazyComponent = lazy(() =>
  import('./demo-default-lazy-component').then((module) => ({
    default: module.DemoDefaultLazyComponent,
  })),
);
// ----- Welcome -----
function Welcome(prop: { value: string }) {
  return (
    <div>
      <h1> ----- Welcome ----- </h1>
      <h3>Hello, {prop.value}</h3>
    </div>
  );
}
// ----- Clock -----
function Clock() {
  return (
    <div>
      <h1> ----- Clock ----- </h1>
      <ClockFirst value={new Date()} />
      <ClockSecond />
    </div>
  );
}
function ClockFirst(props: { value: Date }) {
  return (
    <div>
      <h2>ClockFirst</h2>
      <h3>It is {props.value.toLocaleTimeString()}.</h3>
    </div>
  );
}
class ClockSecond extends React.Component<{}, { value: Date }> {
  private timer!: NodeJS.Timer;
  constructor(props: {}) {
    super(props);
    this.state = { value: new Date() };
  }
  componentDidMount() {
    this.timer = setInterval(() => this.setState({ value: new Date() }), 1000);
    this.setState((data: { value: Date }, props: { value: string }) => ({
      value: data.value,
    }));
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div>
        <h2>ClockSecond</h2>
        <h3>It is {this.state.value.toLocaleTimeString()}.</h3>
      </div>
    );
  }
}
// ----- PropState -----
function PropState() {
  return (
    <div>
      <h1> ----- PropState ----- </h1>
      <PropStateFirst value="PropState" />
    </div>
  );
}
class PropStateFirst extends React.Component<
  { value: string },
  { value: string }
> {
  private timer!: NodeJS.Timer;
  constructor(props: { value: string }) {
    super(props);
    this.state = { value: '' };
  }
  componentDidMount(): void {
    this.setState({ value: 'FirstComponent' });
  }
  render() {
    return (
      <div>
        <h2>PropStateFirst</h2>
        <h3>props.value:{this.props.value}</h3>
        <h3>state.value:{this.state.value}</h3>
        <PropStateSecond value={this.state.value} />
      </div>
    );
  }
}
class PropStateSecond extends React.Component<
  { value: string },
  { value: string }
> {
  private timer!: NodeJS.Timer;
  constructor(props: { value: string }) {
    super(props);
    this.state = { value: '' };
  }
  componentDidMount() {
    this.setState({ value: 'SecondComponent' });
  }
  render() {
    return (
      <div>
        <h2>PropStateSecond</h2>
        <h3>props.value:{this.props.value}</h3>
        <h3>state.value:{this.state.value}</h3>
      </div>
    );
  }
}
// ----- Event -----
function Event() {
  return (
    <div>
      <h1> ----- Event ----- </h1>
      <EventFirst />
    </div>
  );
}
class EventFirst extends React.Component<{}, { value: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = { value: true };
    // this.clickFirst = this.clickFirst.bind(this);
  }
  // Function.prototype.bind
  clickFirst(e: React.MouseEvent<HTMLElement>) {
    console.log(e);
    this.setState((data: { value: boolean }) => ({ value: !data.value }));
  }
  // arrow function
  clickSecond = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    this.setState((data: { value: boolean }) => ({ value: !data.value }));
  };
  render() {
    return (
      <>
        {/* <button onClick={this.clickFirst}> */}
        <button onClick={this.clickFirst.bind(this)}>
          {this.state.value ? 'ON' : 'OFF'}
        </button>
        <button onClick={this.clickSecond}>
          {this.state.value ? 'ON' : 'OFF'}
        </button>
      </>
    );
  }
}
// ----- Condition -----
function Condition() {
  return (
    <div>
      <h1> ----- Condition ----- </h1>
      <ConditionFirst value={1} />
      <ConditionSecond value={3} />
    </div>
  );
}
function ConditionFirst(prop: { value: number }) {
  return <>{prop.value > 0 && <h2>{'prop.value > 0'}</h2>}</>;
}
function ConditionSecond(prop: { value: number }) {
  switch (prop.value) {
    case 0: {
      return <h2>case 0</h2>;
    }
    case 1: {
      return <h2>case 1</h2>;
    }
    default: {
      return <h2>default</h2>;
    }
  }
}
// ----- List -----
function List() {
  return (
    <div>
      <h1> ----- List ----- </h1>
      <ListFirst />
      <ListSecond />
    </div>
  );
}
function ListFirst() {
  const items = [{ value: 'A' }, { value: 'B' }];
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item.value}</li>
      ))}
    </ul>
  );
}
function ListSecond() {
  const items = [{ value: 'A' }, { value: 'B' }];
  const result = items.map((item, index) => (
    // 正確！Key 應該在 array 內被指定。
    <ListSecondItem key={index} value={item.value} />
  ));
  return <ul>{result}</ul>;
}
function ListSecondItem(props: { value: string }) {
  // 正確！你不需要在這裡指出 key：
  return <li>{props.value}</li>;
}
// ----- Form -----
function Form() {
  return (
    <div>
      <h1> ----- Form ----- </h1>
      <FormFirst />
    </div>
  );
}
class FormFirst extends React.Component<
  {},
  { input: string; textarea: string; select: string; checkbox: boolean }
> {
  constructor(props: {}) {
    super(props);
    this.state = { input: '', textarea: '', select: '', checkbox: false };
  }
  formSubmit = (event: React.FormEvent<HTMLElement>) => {
    console.log(event);
    event.preventDefault();
  };
  inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    this.setState({ ...this.state, input: event.target.value });
  };
  textareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(event);
    this.setState({ ...this.state, textarea: event.target.value });
  };
  selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event);
    this.setState({ ...this.state, select: event.target.value });
  };
  checkboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    this.setState({ ...this.state, checkbox: event.target.checked });
  };
  componentDidUpdate() {
    console.log(`state:${JSON.stringify(this.state)}`);
  }
  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <label>
          Input:
          <input
            type="text"
            value={this.state.input}
            onChange={this.inputChange}
          />
          <br />
          Textarea:
          <textarea
            value={this.state.textarea}
            onChange={this.textareaChange}
          />
          <br />
          Select:
          <select value={this.state.select} onChange={this.selectChange}>
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
            <option value="d">D</option>
          </select>
          <br />
          Check:
          <input
            type="checkbox"
            value={this.state.input}
            onChange={this.checkboxChange}
          />
          <br />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
// ----- Temperature -----
function Temperature() {
  return (
    <div>
      <h1> ----- Temperature ----- </h1>
      <TemperatureMain />
    </div>
  );
}
class TemperatureMain extends React.Component<
  {},
  { scale: string; temperature: string }
> {
  constructor(props: {}) {
    super(props);
    this.state = { scale: '', temperature: '' };
  }
  celsiusChange = (temperature: string) => {
    this.setState({ scale: 'c', temperature });
  };
  fahrenheitChange = (temperature: string) => {
    this.setState({ scale: 'f', temperature });
  };
  tryConvert(temperature: string, convert: Function) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
  toCelsius = (value: number) => ((value - 32) * 5) / 9;
  toFahrenheit = (value: number) => (value * 9) / 5 + 32;
  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === 'f'
        ? this.tryConvert(temperature, this.toCelsius)
        : temperature;
    const fahrenheit =
      scale === 'c'
        ? this.tryConvert(temperature, this.toFahrenheit)
        : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.celsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.fahrenheitChange}
        />
        <TemperatureBoil celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
class TemperatureInput extends React.Component<
  { scale: string; temperature: string; onTemperatureChange: Function },
  {}
> {
  constructor(props: {
    scale: string;
    temperature: string;
    onTemperatureChange: Function;
  }) {
    super(props);
    this.state = {};
  }
  change = (event: React.ChangeEvent<HTMLInputElement>) =>
    this.props.onTemperatureChange(event.target.value);
  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>
          Enter temperature in {scale === 'f' ? 'Fahrenheit' : 'Celsius'}:
        </legend>
        <input value={temperature} onChange={this.change} />
      </fieldset>
    );
  }
}
function TemperatureBoil(props: { celsius: number }) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  } else {
    return <p>The water would not boil.</p>;
  }
}
// ----- Dialog -----
function Dialog() {
  return (
    <div>
      <h1> ----- Dialog ----- </h1>
      <DialogMain />
    </div>
  );
}
class DialogMain extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <DialogFirst>
          <h4>children</h4>
        </DialogFirst>
        <DialogParent
          left={<DialogSibling value="LEFT" />}
          right={<DialogSibling value="RIGHT" />}
        />
      </>
    );
  }
}
function DialogFirst(props: { children: any }) {
  return (
    <div>
      <h3>DialogFirst</h3>
      {props.children}
    </div>
  );
}
function DialogParent(props: { left: any; right: any }) {
  return (
    <div>
      <h3>Left</h3>
      {props.left}
      <h3>Right</h3>
      {props.right}
    </div>
  );
}
function DialogSibling(prop: { value: string }) {
  return (
    <>
      <h6>{prop.value}</h6>
    </>
  );
}
export function DemoDefaultApp() {
  return (
    <>
      <Welcome value="React" />
      <Clock />
      <PropState />
      <Event />
      <Condition />
      <List />
      <Form />
      <Temperature />
      <Dialog />
      <DemoDefaultErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <DemoDefaultLazyComponent />
        </Suspense>
      </DemoDefaultErrorBoundary>
    </>
  );
}
