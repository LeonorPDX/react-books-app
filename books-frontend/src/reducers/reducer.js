import { combineReducers } from "redux";
 
const rootReducer = combineReducers({
  allBooks: manageBooks,
  displayBooks: manageDisplayBooks,
  notes: manageNotes,
  user: manageUser,
});
 
export default rootReducer;


function manageBooks(state = [], action) {
    switch (action.type) {
      case 'ADD_ALL_BOOKS':

        return state.concat(action.books)
  
      default:
        return state;
    }
};

function manageDisplayBooks(state = [], action) {
    switch (action.type) {
      case 'SET_DISPLAY_BOOKS':

        return [action.books]
  
      default:
        return state;
    }
};

function manageNotes(state = [], action) {
    switch (action.type) {
      case 'ADD_NOTES':

        return state.concat(action.notes)
  
      default:
        return state;
    }
};

function manageUser(state = {username: nil, id: nil}, action) {
    switch (action.type) {
        case 'ADD_USER':
  
          return {...state, username: action.user.username, id: action.user.id}

        default:
          return state;
      }
};