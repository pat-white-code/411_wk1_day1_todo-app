import React, { Component } from 'react';
import moment from 'moment';


class ToDO extends Component {
  constructor(props){
    super(props)
    this.state = {
      status: undefined,
      finished: false,
      props: props
    }
  }
  toggleComplete = () => {
    this.setState({ finished: !this.state.finished });
  }

  handleStatus = (e) => {
    let newStatus = e.target.value;
    this.setState({ status: newStatus});
  }

  render() {
    const {todo, removeTodo} = this.props;
    let classList = '';
    if(this.state.finished) {classList += 'complete'};
    if (this.state.status) {classList += ' ' + this.state.status};

    return (
      <li className={classList}> 
        {todo.text} -- {moment(todo.timeStamp).fromNow()} 
        <button onClick = {this.toggleComplete}> {(!this.state.finished ? 'Mark Complete' : 'Mark Unfinished')}</button>
        <button onClick={removeTodo}>Clear</button> 
        <select onChange={this.handleStatus}>
          <option value=''>Set Status</option>
          <option value='green'>Green</option>
          <option value='yellow'>yellow</option>
          <option value='red'>red</option>
        </select>
      </li>
    );
  }
}

export default ToDO;
