import {ADD_USER} from '../action/actionType';

const initialState = {
  users: [
    {
      name: 'zhangsan',
    },
  ],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: state.users.concat(action.user),
      };
    default:
      return state;
  }
};
