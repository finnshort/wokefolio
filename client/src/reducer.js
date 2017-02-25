import { INIT_PORTFOLIO } from './actionTypes';

const initialState = {
  'portfolio': []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case INIT_PORTFOLIO:
    return Object.assign({}, state, {
      'portfolio': action.portfolio
    });
  default:
    return state;
  }
}
