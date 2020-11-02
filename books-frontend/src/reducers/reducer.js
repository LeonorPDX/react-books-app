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

          // case 'REMOVE_USER_BOOK' returns statre and filters userBooks for book matching action.book
        case 'ADD_USER_BOOK':
             
          return {
            ...state,
            userNotes: state.userNotes,
            userBooks: state.userBooks.concat(action.book)
          } 

        case 'ADD_NOTE':
        
          return {
            ...state,
            userBooks: state.userBooks,
            userNotes: state.userNotes.concat(action.note)
          } 
          

        default:
          return state;
      }
};