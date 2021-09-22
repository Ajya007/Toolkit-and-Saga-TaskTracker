import axios from 'axios'

export  function requestPostMethod(action){
 
     return axios.post("https://node-app-tasktracker.herokuapp.com/tasks",action)
}