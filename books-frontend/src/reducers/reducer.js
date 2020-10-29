import { combineReducers } from "redux";
 
const rootReducer = combineReducers({
  books: manageBooks,
  user: manageUser,
});
 
export default rootReducer;


function manageBooks(state = {allBooks: [], displayBooks: []}, action) {
    switch (action.type) {
      case 'ADD_ALL_BOOKS':

        return {...state, allBooks: action.books, displayBooks: action.books}
        
    case 'UPDATE_DISPLAY_BOOKS':

        return {...state, displayBooks: action.books}
    
      default:
        return state;
    }
};

function manageUser(state = {username: "", id: 0, userBooks: [], userNotes: []}, action) {
    switch (action.type) {
        case 'ADD_USER':
  
          return {...state, username: action.user.username, id: action.user.id, userBooks: action.user.books, userNotes: action.user.notes }

        default:
          return state;
      }
};