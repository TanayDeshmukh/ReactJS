import React, {Component} from 'react';
import NoteList from '../containers/note-list'
import Note from '../Note';

export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {showDetails: false, action: undefined, key: 4};
        this.toggle = this.toggle.bind(this);
        this.setAction = this.setAction.bind(this);
        this.addNote = this.addNote.bind(this);
        this.incrementKey = this.incrementKey.bind(this);
    }

    incrementKey(){
        this.setState(prevState => ({key:prevState.key + 1}));
        console.log('KEY = ',this.state.key);
        return this.state.key;
      }
    setAction(action){
        this.setState({action:action})
    }

    toggle(){
        this.setState(prevState => ({showDetails:!prevState.showDetails}));
    }

    addNote(){
        this.setAction('ADD_NOTE');
        this.toggle();
    }

    render(){
        if(this.state.showDetails){
            return(
                <div>
                    <Note toggle={this.toggle} action={this.state.action} incrementKey={this.incrementKey}/>
                </div>
            );
        }
        else{
            return(
                <div>
                    <div>
                        <NoteList toggleState={this.toggle} setAction={this.setAction}/>
                    </div>
                    <div>
                        <button onClick={() => this.addNote()}>Add</button>
                    </div>
                </div>
            );
        }
    }    
}