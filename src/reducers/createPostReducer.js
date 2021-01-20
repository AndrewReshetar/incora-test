export const createPostReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_POST': {
      localStorage.setItem('createdPost', JSON.stringify([...state, action.payload]))
      return [...state, action.payload];
    }
    default: return state;
  }
}