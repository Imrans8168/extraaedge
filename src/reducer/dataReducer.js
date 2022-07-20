import * as ActionType from "../constants/ActionTypes";
let initialState = {
  dataPlaceholder: [],
  dataDicebear: [],
  fetchError: false,
  like: false,
  edit: {},
  delete: {},
};
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_DATA_PLACEHOLDER: {
      return {
        ...state,
        dataPlaceholder: action.payload,
      };
    }
    case ActionType.GET_DATA_DICEBEAR: {
      return {
        ...state,
        dataDicebear: [...state.dataDicebear, action.payload],
      };
    }
    case ActionType.GET_ERROR: {
      return {
        ...state,
        dataDicebear: action.payload,
      };
    }
    case ActionType.LIKE: {
      return {
        ...state,
        like: action.payload,
      };
    }
    case ActionType.EDIT: {
      return {
        ...state,
        edit: action.payload,
      };
    }

    default:
      return state;
  }
};

export default dataReducer;
