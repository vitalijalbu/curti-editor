// recoil.js
import { atom } from 'recoil';

export const formValuesState = atom({
  key: 'formValuesState',
  default: {},
});

export const formsState = atom({
  key: 'formsState',
  default: [],
});
