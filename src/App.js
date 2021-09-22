import './App.css';
import { useEffect,useState} from 'react';
import Tasks from './Tasks';

import { useDispatch,useSelector} from 'react-redux';
import{ getUser,postMethod,deleteMethod,patchMethod} from "./redux/ducks/userSlice"


function App() {
  const user=useSelector((state) => state.user.user)
  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(getUser())
  },[dispatch,user])



  const [text,setText]=useState('');
const [day,setDay]=useState('');
const [reminder,setReminder]=useState(false);


const textHandler = (e) =>{
  setText(e.target.value);

}
 const dayHandler= (e) =>{
  setDay(e.target.value);

}
const reminderHandler = (e) =>{
  setReminder(e.currentTarget.checked);
}

const deleteHandler= async (id) =>{
  dispatch(deleteMethod(id))
}

const toggleHandler= async (id) =>{
  dispatch(patchMethod(id))
}


const submitHandler = async (e) =>{
e.preventDefault()
const tasks={text,day,reminder}
dispatch(postMethod(tasks))
setText('')
setDay('')
setReminder(false)
};



return (

  <div className="whole-app">
    <div className="App">
      <div className="container">
        <h1>Task Tracker</h1>

 <form className="addForm" onSubmit={submitHandler}>
            <div className='form-control'>
              <label>Task</label>
              <input type="text" placeholder="Add Task" value={text}  onChange={textHandler}/>
            </div>
            <div className='form-control'>
              <label>Day and time</label>
              <input type="date" placeholder="Add Day and Time" value={day}  onChange={dayHandler} />
            </div>
              <div className="reminder">
              <label>Set Reminder</label>
              <input type="Checkbox"  checked={reminder} onChange={reminderHandler} />
              </div>
            <div className="save-btn">
              <button  type="submit">Save Task</button>
              </div>


        </form>
          <div className="detail">
          { user && user.map(el =>  <Tasks key={el._id} el={el} deleteHandler={deleteHandler} toggleHandler={toggleHandler}/>) }
          </div>
          </div>
    </div>
    </div>
  ); 
}

export default App;
