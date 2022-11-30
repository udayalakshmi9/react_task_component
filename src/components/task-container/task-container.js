import React from "react";
// import data from "../../api/data";
import TaskForm from "../task-form/task-form";
import TaskList from "../task-list/task-list";
import './task-container.css'

export default class TaskContainer extends React.Component {
  state = {
    tasks: []
  }

  UNSAFE_componentWillReceiveProps = (props) => this.setState({ tasks: props.tasks })

  handlePost = (task) => {
    let tasks = this.state.tasks
    tasks.push(task)
    this.setState({
      tasks: tasks
    })
  }

  render = () => (
    <div>
      <h3 className="heading">Tasks</h3>
      <TaskList tasks={this.state.tasks} />
      <TaskForm handlePost={this.handlePost} />
    </div>
  )
}