import React from "react";

import CmpTask from "../task/task";
import './task-list.css'

export default class TaskList extends React.Component {
  state = {
    tasks: this.props.tasks
  }

  UNSAFE_componentWillReceiveProps = (props) => this.setState({ tasks: props.tasks })

  handleDelete = (id) => this.setState({
    tasks: this.state.tasks.filter(task => task.id !== id)
  })

  handleSave = (id,what,repeat,duedate,duetime,addlist) => {
    for (let task of this.state.tasks) {
      if (task.id === id) {
        task.what = what
        task.repeat = repeat
        task.duedate = duedate
        task.duetime = duetime
        task.addlist = addlist
      }
    }
  }

  render = () => (<>
    {
      this.state.tasks.length > 0 ?
        <><h4>You have {this.state.tasks.length} Tasks</h4>
          <div type="success">
            {this.state.tasks.map(task =>
              <CmpTask
                key={task.id}
                id={task.id}
                task={task}
                what={task.what}
                repeat={task.repeat}
                duedate={task.duedate}
                duetime={task.duetime}
                addlist={task.addlist}
                handleDelete={this.handleDelete}
                handleSave={this.handleSave} />
            )}
          </div></>
        :
        <div type="error">No Tasks Yet</div>
    }
  </>)
}