export const getChosenPostReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_CHOSEN_POST': return { ...state, ...action.payload };
    default: return state;
  }
}