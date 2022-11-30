import React from "react";
import './task.css'

export default class CmpTask extends React.Component {
  state = {
    id: this.props.id,
    what: this.props.task.what,
    repeat: this.props.task.repeat,
    duedate: this.props.task.duedate,
    updated: this.props.task.updated,
    textDisabled: true,
    btnEditDelete: 'block',
    btnSave: 'none'
  }

  UNSAFE_componentWillReceiveProps = (props) => this.setState({
    id: props.task.id,
    what: props.task.what,
    repeat: props.task.repeat,
    duedate: props.task.duedate,
    updated: props.task.updated
  })

  render = () => {
    let handleDelete = this.props.handleDelete
    let handleSave = this.props.handleSave
    return (
      <div className="task">
        <dl>
          <dt>
            Task from&nbsp;
            <span className="author">
              {this.state.author}
            </span>
          </dt>
          <dd>
            <input
              id={"text" + this.state.id}
              className="text"
              value={this.state.text}
              disabled={this.state.textDisabled}
              onChange={this.handleChange.bind(this)} />
          </dd>
          <dd>
            <span className="dates">
              duedate:{this.state.duedate.toLocaleDateString()}&nbsp;
              Updated:{this.state.updated.toLocaleDateString()}
            </span>
          </dd>
          <dd>
            <div id="btnEditDelete" style={{ display: this.state.btnEditDelete }}>
              <button onClick={this.handleEdit.bind(this)}>Edit</button>
              &nbsp;
              <button onClick={() => handleDelete(this.state.id)}>Delete</button>
            </div>
            <div id="btnSave" style={{ display: this.state.btnSave }}>
              <button onClick={() => {
                handleSave(this.state.id, this.state.text)
                this.setState({
                  textDisabled: true,
                  btnEditDelete: 'block',
                  btnSave: 'none'
                })
              }}>Save</button>
            </div>
          </dd>
        </dl>
      </div >
    )
  }

  handleEdit = (event) => {
    event.preventDefault()
    this.setState({
      what: '',
      textDisabled: false,
      btnEditDelete: 'none',
      btnSave: 'block'
    })
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({ what: event.target.value })
  }
}