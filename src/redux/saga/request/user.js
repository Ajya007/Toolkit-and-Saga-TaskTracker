import axios from 'axios'

export function requestGetUser(){
        return axios.request({
            method:"get",
            url:"https://node-app-tasktracker.herokuapp.com/tasks"
        })
}