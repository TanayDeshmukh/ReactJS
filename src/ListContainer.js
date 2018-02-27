import React, { Component } from 'react';
import ListItem from './ListItem';

class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {list:this.props.list.map((item)=>{
            <ListItem key={item.id}
                        title={item.title}
                        value={item.details}
                        date={item.date} />            
        })};
    }

    

    render(){
        return(
            <div>
                <ul>
                    {this.state.list}
                </ul>
            </div>
        );
    }
}

export default Container;