import axios from 'axios'

export function requestDeleteMethod (action){
//    await  axios.delete(`https://node-app-tasktracker.herokuapp.com/tasks/${action}`)

 console.log("delete")
        return axios.request({
            method:"DELETE",
            url:`https://node-app-tasktracker.herokuapp.com/tasks/${action}`,
        })
}