import Task from "../../objects/Task";
import './task-form.css';
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import "react-datepicker/dist/react-datepicker.css"; 
import React, { useState } from 'react';
const addlist = [
  'one1', 'two2', 'three3'
];
const defaultOption = addlist[0];
const repeat = [
  'one', 'two', 'three'
];
const defaultOptions = repeat[0];


export default class TaskForm extends React.Component {
  render = () => {
    let handlePost = this.props.handlePost
    const [duedate, setDuedate] = useState(new Date());
    const [duetime, setDuetime] = useState('10:00');
    return (
      <div className="messageForm">
       
        <input id="what" placeholder="say something..." />
        <DatePicker id ="duedate" selected={duedate} onChange={(date) => setDuedate(date)} />
      <br/>
      <label>Due Time</label>
     
      <TimePicker id ="duetime" onChange={setDuetime} value={duetime} />
      <br/>
     
      <label>Repeat</label>
      <Dropdown id ="repeat" options={repeat} onChange={this._onSelect} value={defaultOptions} placeholder="Select an option" />
 
      <br/>
      <label>Add to list</label>
      <Dropdown  id = "addlist" options={addlist} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
 
      <br/>
        <button onClick={() => {
          let text = document.getElementById("what").value
          let repeat = document.getElementById("repeat").value
          let addlist =  document.getElementById("addlist").value
          let duedate =  document.getElementById("duedate").value
          let duetime =  document.getElementById("duetime").value
          let newTask = new Task(text, repeat,duedate,duetime,addlist)
          handlePost(newTask)
          document.getElementById("what").value = ''
          document.getElementById("repeat").value = ''
          document.getElementById("duedate").value = ''
          document.getElementById("duetime").value = ''
          document.getElementById("addlist").value = ''
          
        }}>
          Add
        </button>
      </div>
    )
  }
}