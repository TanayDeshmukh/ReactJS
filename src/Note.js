import React, { Component } from 'react';

class Note extends React.Component{
    constructor(props){
        super(props);
        this.actionTaken = this.actionTaken.bind(this);
    }

    actionTaken(){

        var title = document.getElementById('title').value;
        var details = document.getElementById('details').value;

        var item = this.props.item?this.props.item:null;
        if(item){
            item.title = title;
            item.details = details;
        }
        console.log(this.props.action);

        if(this.props.action === 'Add'){
            let newItem = {id:undefined,title:title, details:details, date:''};
            this.props.addFunction(newItem);    
        }
        else{
            this.props.editFunction(item);
       }
       this.props.toggle();
    }

    render(){
        console.log('-----------------------------------------'+this.props.toggle);
        return(
            <div>
                <div>
                    <input type='text' id='title' type='text' placeholder='Title' className='title-input' defaultValue={this.props.item?this.props.item.title:''}/>
                </div>
                <div>
                    <textarea id='details' rows='5' cols='50' placeholder='Note' className='note-input' defaultValue={this.props.item?this.props.item.details:''}/>
                </div>
                <div>
                    <button onClick={this.actionTaken}>{this.props.action}</button>
                    <button onClick={this.props.toggle} >Cancle</button>
                </div>
            </div>
        );
    }
}

export default Note;