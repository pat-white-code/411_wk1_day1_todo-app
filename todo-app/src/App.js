import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList';
import Moment from 'react-moment';
import moment from 'moment';


class App extends Component {
  constructor(props){
    super(props)

    this.removeTodo = this.removeTodo.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.isComplete = this.isComplete.bind(this);
    this.handleUnfinished = this.handleUnfinished.bind(this);

    this.state = {
      input: '',
      todos: [],
      completedIndexes: []
    }
  }

  handleComplete = (index) => {
    this.setState({completedIndexes: [...this.state.completedIndexes, index]});
    // this.render();
  } 
  
  // handleComplete = (timeStamp) => {
  //   let indexToUpdate = this.state.todos.findIndex(element => element.timeStamp === timeStamp)
  //   this.setState({todos: todos[indexToUpdate]})
  //   this.setState({completedIndexes: [...this.state.completedIndexes, index]});
  //   // this.render();
  // } 

  handleUnfinished = (index) => {
    let indexToSplice = this.state.completedIndexes.findIndex(element => element === index);
    this.state.completedIndexes.splice(indexToSplice, 1);
    this.setState({completedIndexes: [...this.state.completedIndexes]})
  }

  isComplete = (index) =>{
    return this.state.completedIndexes.includes(index)
  }

  inputChange = event => {
    this.setState({
      input: event.target.value
    })
  }

  formSubmit = event => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, {text:this.state.input, timeStamp: moment().format('YYYY-MM-DD HH:mm:ss')}],
      input: ''
    })
  }

  removeTodo = e => {
    let index = e.target.dataset.index;
    this.state.todos.splice(index, 1)
    this.setState({todos: [...this.state.todos]})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1><Moment format="LL - LT" /></h1>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>What do you need to do today? </h1>
          <form onSubmit={this.formSubmit}>
            <input value={this.state.input} onChange={this.inputChange} />
            <button onClick = {this.toggle} type="submit">Submit</button>
          </form>
          <ToDoList 
            todos={this.state.todos} 
            removeTodo={this.removeTodo} 
            isComplete={this.isComplete}
            handleComplete={this.handleComplete}
            handleUnfinished={this.handleUnfinished}/>

        </header>
      </div>
    );
  }
}

export default App;


// import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';


// class App extends Component {
//   constructor(props){
//     super(props)


//     this.state = {
//       input: '',
//       todos: [{timestamp: 'YYYY-MM-HH'}],
//       completedIndexes: []
//     }
//   }

//   render(){
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           {this.state.todos[0].timestamp}

//         </header>
//       </div>
//     );
//   }
// }