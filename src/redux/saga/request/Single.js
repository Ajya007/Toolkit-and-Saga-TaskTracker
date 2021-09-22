import axios from 'axios'

export function requestSingleUser(action){
        return axios.request({
            method:"get",
            url:`https://node-app-tasktracker.herokuapp.com/tasks/`
        })
}