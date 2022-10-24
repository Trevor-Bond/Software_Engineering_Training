import * as actionTypes from './actionTypes';

export const storeResultSync = (result) => {
  return {
    type: actionTypes.STORE_RESULT,
    payload: {
      result,
    },
  };
};

export const storeResult = (result) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldCounter = getState().ctr.counter;
      console.log(oldCounter);
      dispatch(storeResultSync(result));
    }, 2000);
  };
};

export const deleteResult = (id) => {
  return {
    type: actionTypes.DELETE_RESULT,
    payload: {
      id,
    },
  };
};