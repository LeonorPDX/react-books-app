import { combineReducers } from "redux";
 
const rootReducer = combineReducers({
  books: manageBooks,
  user: manageUser,
});
 
export default rootReducer;


function manageBooks(state = [], action) {
    switch (action.type) {
      case 'ADD_ALL_BOOKS':

        return action.books

      default:
        return state;
    }
};

function manageUser(state = {username: "", id: 0, userBooks: [], userNotes: []}, action) {
    switch (action.type) {
        case 'ADD_USER':
  
          return {...state, username: action.user.username, id: action.user.id, userBooks: action.user.books, userNotes: action.user.notes }

          // case 'ADD_USER_BOOK' returns state and concat action.book onto userBooks
          // case 'ADD_USER_NOTE' returns state and concat action.note onto userNotes
          // case 'REMOVE_USER_BOOK' returns statre and filters userBooks for book matching action.book

        default:
          return state;
      }
};