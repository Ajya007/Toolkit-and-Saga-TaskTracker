import React from 'react'

function Tasks({el,deleteHandler,toggleHandler}) {
    return (
        <div className={`task  noselect ${el.reminder ? 'show' : ''}`} onDoubleClick={ () =>toggleHandler(el._id)}>
              <div  className="task-text">
                   <h1>{el.text}</h1>
                   <p>{el.day}</p>
                   </div> 

                <button className="deletebtn" onClick={() => deleteHandler(el._id)} >delete</button>

        </div>
    )
}

export default Tasks
