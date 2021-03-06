import uuidv4 from 'uuid';
import _ from 'lodash';

import {
  CREATE_TODO_LIST,
  DELETE_TODO_LIST,
  FETCH_TODO_LISTS,
  REQUEST_TODO_LISTS,
  RECEIVE_TODO_LISTS,
} from '../actions/todoListActions';

export const todoInitialState = {
  isFetching: false,
  data: [],
};

export default (state = todoInitialState, action) => {
  switch (action.type) {
    case FETCH_TODO_LISTS:
      // TODO: change loading state
      return state;

    case REQUEST_TODO_LISTS:
      return _.assign({}, state, {
        isFetching: true,
      });

    case RECEIVE_TODO_LISTS:
      return _.assign({}, state, {
        isFetching: false,
        data: action.todoLists,
      });

    case CREATE_TODO_LIST:
      return _.assign({}, state, {
        data: state.data.concat([{
          id: `${uuidv4()}-todoList`,
          name: action.listName,
        }]),
      });

    default:
      return state;
  }
};
