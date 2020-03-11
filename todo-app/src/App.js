import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList';



let clientId = 1;
let address = 1;

class App extends Component {
  constructor(props){
    super(props)

    this.removeTodo = this.removeTodo.bind(this);

    this.state = {
      isOn: false,
      input: '',
      todos: [],
      clientId: clientId,
      address: address
    }
  }
  toggle = () => {
    this.setState({isOn: !this.state.isOn}) 
  }

  inputChange = event => {
    this.setState({
      input: event.target.value
    })
  }

  formSubmit = event => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.input],
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
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello World, From Patrick</h1>
          <form onSubmit={this.formSubmit}>
            <input value={this.state.input} onChange={this.inputChange} />
            <button onClick = {this.toggle} type="submit">Submit</button>
          </form>
          <ToDoList todos={this.state.todos} removeTodo={this.removeTodo} />
        </header>
      </div>
    );
  }
}

export default App;
