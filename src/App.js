import React, { Component } from 'react';
import './App.css';
import {TaskView} from './views/taskView';
import {TaskViewModel} from "./ViewModels/TaskViewModel";

class App extends Component {
  
  render() {
    
    const model = new TaskViewModel();

    return (
      <TaskView model={model}/>
    );
  }
}

export default App;
