// recoil.js
import { atom } from 'recoil';

export const editorState = atom({
  key: 'editorState',
  default: [],
});

// handle selected text
export const textSelected = atom({
  key: 'textSelected',
  default: null,
});
