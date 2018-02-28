import {ADD_NOTE, DELETE_NOTE, EDIT_NOTE, SELECT_NOTE} from '../actions/action-types';

const initialState= {
    listing:[{
      id:1,
      title:'first note',
      details:'What are the Action_Types? Why is it necessary to create it?',
      date:'1/1/2018'
    }, {
      id:2,
      title:'second note',
      details:'Which one to use and why? How to apply multiple middlewares?',
      date:'2/1/2018'
    }, {
      id:3,
      title:'third note',
      details:'Naming conventions to define the Components and how to import and export the Components',
      date:'3/1/2018'
    }],
    singleNote:{
      id: undefined,
      title: '',
      details: '',
      date: ''
    }
  };


const reducerNotes = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        listing: [ ...state.listing, action.payload]        
      }
    case EDIT_NOTE:
      return {
        ...state,
        listing: state.listing.map(singleNote => {
          if(singleNote.id === action.payload.id) {
            return action.payload
          }
          return singleNote;
        }),
      }
      case SELECT_NOTE:
        return {
          ...state,
          singleNote: {
            ...state.singleNote,
            ...action.payload
        }
    }
    case DELETE_NOTE:
      console.log('listing ',state.listing)
      console.log("DELETE_NOTE ---> ",action.payload)
      return{
        ...state,
        listing: state.listing.filter(note => note.id != action.payload.id)
      }
    default:
      return state;
  }
};
export default reducerNotes;