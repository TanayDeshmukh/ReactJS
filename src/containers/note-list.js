import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectNote, deleteNote } from '../actions/index';
import {bindActionCreators} from 'redux'; 

class NoteList extends Component{
    
    noteSelected(note){
        this.props.setAction('EDIT_NOTE');
        this.props.selectNote(note);
        this.props.toggleState();
    }

    renderList(){
        return this.props.notes.map((note)=>{
            return(
                <ul key={note.id} className='note-list-item'>
                    {console.log('list id = ',note.id)}
                    <button onClick={() => this.noteSelected(note)}>{note.title}</button>
                    <button onClick={() => this.props.deleteNote(note)}>Del</button>
                </ul>
            );
        });
    }

    render(){
        console.log(this.props.notes);
        return(
            <ul className='note-list'>
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state){
    return{
        notes: state.notes.listing
    }; 
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectNote, deleteNote }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);