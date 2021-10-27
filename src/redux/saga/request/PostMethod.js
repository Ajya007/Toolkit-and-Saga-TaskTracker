import axios from 'axios'

export  async function requestPostMethod(action){
 
     return await axios.post("https://node-app-tasktracker.herokuapp.com/tasks",action)
}