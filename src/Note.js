import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'; 
import {addNote, editNote} from './actions/index';

class Note extends React.Component{
    constructor(props){
        super(props);
    }

    buttonClicked(){
        if(this.props.action==='ADD_NOTE'){
            var note = {
                'id': this.props.incrementKey(),
                'title': document.getElementById('title').value, 
                'details': document.getElementById('details').value,
                'date': ''
            }
            this.props.addNote(note);
        }
        else{
            var note = {
                ...this.props.singleNote,
                'title': document.getElementById('title').value, 
                'details': document.getElementById('details').value
            }
            this.props.editNote(note);
        }
        this.props.toggle()
    }

    render(){
        return(
            <div>
                <div>
                    <input type='text' id='title' type='text' className='title-input' defaultValue={this.props.action==='EDIT_NOTE'?this.props.singleNote.title:''}/>
                </div>
                <div>
                    <textarea id='details' rows='5' cols='50' className='note-input' defaultValue={this.props.action==='EDIT_NOTE'?this.props.singleNote.details:''}/>
                </div>
                <div>
                    <button onClick={() => this.buttonClicked() }>{this.props.action}</button>
                    <button onClick={()=>this.props.toggle()} >Cancle</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        singleNote: state.notes.singleNote
    }
}

function mapDisplatchToProps(dispatch){
    return bindActionCreators({ addNote, editNote }, dispatch);

}

export default connect(mapStateToProps, mapDisplatchToProps)(Note);
