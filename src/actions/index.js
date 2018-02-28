import {ADD_NOTE, EDIT_NOTE, SELECT_NOTE, DELETE_NOTE} from "../actions/action-types";

export const addNote = note =>{
    return{
        type: ADD_NOTE,
        payload: note 
    }
};

export const editNote = note => {
    return{
        type: EDIT_NOTE,
        payload: note
    }
};

export const selectNote = note => {
    return{
        type: SELECT_NOTE,
        payload: note
    }
};

export const deleteNote = note =>{
    console.log('delete note action -> ', note);
    return{
        type: DELETE_NOTE,
        payload: note
    }
}