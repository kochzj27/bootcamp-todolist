import React from 'react';
import AddTask from '../AddTask/AddTask';
import TaskList from '../TaskList/TaskList';
import TaskFilter from '../TaskFilter/TaskFilter';
import './TaskApp.css';


class TaskApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [{ text: 'learn to ride bike', status: 'active' }, { text: 'cook dinner for next 6 weeks', status: 'completed' }],
      selectedFilter: 'active'
    };
    this.newTask = this.newTask.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }

  newTask(task) {
    let taskObj = Object.assign({
      text: task,
      status: 'active'
    });
    let tempState = Object.assign({}, this.state);
    tempState.tasks.push(taskObj);
    this.setState({
      tempState
    });
  }

  changeFilter(filter) {
    let filt = filter.toLowerCase();
    this.setState({
      selectedFilter: filt
    });
  }

  updateStatus(name) {
    let newObj = Object.assign({
      text: name,
      status: 'completed'
    });
    let tasks = this.state.tasks.filter(x => x.text !== name);
    tasks.push(newObj)
    this.setState({
      tasks
    });
  }

  render() {
    return (
      <div id='container'>
        <h1 className='pinkish large-text'>todos</h1>
        <AddTask newTask={this.newTask} />
        <TaskList list={this.state.tasks} selectedFilter={this.state.selectedFilter} updateStatus={this.updateStatus} />
        <TaskFilter list={this.state.tasks} selectedFilter={this.state.selectedFilter} changeFilter={this.changeFilter} />
      </div>
    );
  }

}

export default TaskApp;