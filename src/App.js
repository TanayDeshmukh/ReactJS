import React, { Component } from 'react';
import './App.css';
import Note from './Note';

var tempList = [{
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
}];

class App extends Component {

  constructor(props){
    super(props);
    this.state = {showDetails:false, itemKey:3};
    this.toggleState = this.toggleState.bind(this);
    this.incrementKey = this.incrementKey.bind(this);
    this.addToList = this.addToList.bind(this);
    this.delete = this.delete.bind(this);
  }

  incrementKey(){
    this.setState(prevState => ({itemKey:prevState.itemKey + 1}));
    console.log('++++++++++'+this.state.itemKey);
    return this.state.itemKey;
  }

  addToList(item){
    console.log('------------------>'+item.title);
    item.id = this.incrementKey();
    item.date = '';
    tempList.push(item);
  }

  editList(item){
    tempList[item.id].title = item.title;
    tempList[item.id].details = item.detils;
  }

  toggleState(item, action) {
    // alert('toggle : '+this.state.showDetails);
    this.setState(prevState => ({showDetails:!prevState.showDetails, item:item, action:action}));
  }

  delete(id){
    tempList.splice(id-1, 1);
  }

  renderList = (tempList) =>  {
    var list = tempList.map((item)=>
        <div>
          <button className='btn-lst' onClick={() => this.toggleState(item, 'Save')}>{item.title}</button>
          <button clasName='btn-del' onClick={() => this.delete(item.id)}>Del</button>
        </div>
    )
    
      return(<ul>{list}</ul>);
  }
  render() {
  //  alert('Show details flag : '+this.state.showDetails);
    if(this.state.showDetails){
      return(
        <div>
          <Note toggle={this.toggleState} action={this.state.action} item={this.state.item} addFunction={this.addToList} editFunction={this.editList}/>
        </div>
      );
    }
    else{
      return (
        <div>
          <div>
            {this.renderList(tempList)}
          </div>
          <div>
            <button className='btn-add' onClick={() => this.toggleState(null, 'Add')}>Add</button>
          </div>
        </div>
      );
    }
  }
}

export default App;
