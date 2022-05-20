import { count } from 'console';
import React from 'react';
export interface DemoContextContextModel {
  count: number;
  plusCount: Function;
}
export const DemoContextContext = React.createContext<DemoContextContextModel>({
  count: 1,
  plusCount: () => {},
});
// export const DemoContext = React.createContext<DemoContextModel>({
//   count: 0,
//   plusCount: () => {},
// }).displayName = "DemoContextFirst";
