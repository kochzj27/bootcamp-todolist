import React from 'react';
import './TaskList.css';

const TaskList = (props) => {

  function clickEvent(e) {
    props.updateStatus(e.target.innerText);
  }

  let actives = props.list.filter(x => x.status === 'active');
  actives = actives.map((item, idx) => {
    return (
      <div id='taskList' key={idx}>
        <span><i className="far fa-circle circle"></i></span>
        <h3 onClick={(e) => clickEvent(e)} className='listText'>{item.text}</h3>
      </div>
    )
  });

  let inactives = props.list.filter(x => x.status === 'completed');
  inactives = inactives.map((item, idx) => {
    return (
      <div id='taskList' key={idx}>
        <span><i className="fas fa-circle circle"></i></span>
        <h3 className='listText crossed'>{item.text}</h3>
      </div>
    )
  });



  return (
    <div>
      {props.selectedFilter === 'active' || props.selectedFilter === 'all' ? actives : null}
      {props.selectedFilter === 'completed' || props.selectedFilter === 'all' ? inactives : null}
    </div>
  );
}

export default TaskList;