import React from 'react';
export interface DemoContextContextModel {
  count: number;
  plusCount: Function;
}
export const DemoContextContext = React.createContext<DemoContextContextModel>({
  count: 1,
  plusCount: () => {},
});
