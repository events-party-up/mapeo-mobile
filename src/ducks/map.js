// @flow

import update from 'immutability-helper';
import { create } from '../lib/redux';
import type { MapState } from '../types/map';
import { keyBy } from 'lodash';

export const {
  type: STYLE_LIST,
  action: styleList,
  reducer: styleListReducer
} = create('STYLE_LIST', {
  success: (state, action) =>
    update(state, {
      map: {
        styles: {
          $set: keyBy(action.payload, 'id')
        }
      }
    })
});

export const {
  type: STYLE_SELECT,
  action: styleSelect,
  reducer: styleSelectReducer
} = create('STYLE_SELECT', {
  start: (state, action) =>
    update(state, {
      map: {
        selectedStyle: {
          $set: action.meta
        }
      }
    })
});

export default [styleListReducer, styleSelectReducer];
