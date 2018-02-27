import React, { Component } from 'react';

class ListItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {id:this.props.id, title:this.props.title, details:this.props.details, date:this.props.date};
    }

    render(){
        return(
            <div>
                <label className='title'>{this.state.title}</label>
                <button className='delete-button'><label>Del</label></button>
            </div>
        );
    }
}

export default ListItem;