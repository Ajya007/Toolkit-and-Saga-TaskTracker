import axios from 'axios'

export  function requestPatchMethod(action){
 
return  axios.patch(`https://node-app-tasktracker.herokuapp.com/tasks/${action[0]}`,action[1])
}