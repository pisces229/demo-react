import React from "react";

export class DemoDefaultErrorBoundary extends React.Component<any,{ hasError: boolean }>{
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: any) {
    console.log(error);
    // 更新 state 以至於下一個 render 會顯示 fallback UI
    return { hasError: true };
  }
  componentDidCatch(error: any, errorInfo: any) {
    console.log(error);
    console.log(errorInfo);
    // 你也可以把錯誤記錄到一個錯誤回報系統服務
    // logErrorToMyService(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      // 你可以 render 任何客製化的 fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
