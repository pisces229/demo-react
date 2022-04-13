import { createAction } from "@reduxjs/toolkit"

export const commonAction = createAction('common/action', (value: string) => {
  return {
    payload: value,
  }
});
