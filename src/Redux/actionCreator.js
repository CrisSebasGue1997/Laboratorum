import Axios from 'axios'
import { GET_ALL_POST, GET_ALL_SPECIALITIES, GET_ALL_COURSES, GET_ALL_TEACHERS, GET_POST, GET_SPECIALITY, GET_COURSE, GET_FRAME } from './actions'

export const getAllPost = () =>dispatch =>{
    Axios.get(`${process.env.REACT_APP_API_URL}/posts`)
    .then(res=>{
        return dispatch({
            type:GET_ALL_POST,
            posts:res.data
        })
    })
    
}
export const getAllSpecialities = () =>dispatch =>{
    Axios.get(`${process.env.REACT_APP_API_URL}/especialidades`)
    .then(res=>{
        return dispatch({
            type:GET_ALL_SPECIALITIES,
            specialities:res.data
        })
    })
    
}
export const getAllCourses = () =>dispatch =>{
    Axios.get(`${process.env.REACT_APP_API_URL}/cursos`)
    .then(res=>{
        return dispatch({
            type:GET_ALL_COURSES,
            courses:res.data
        })
    })
    
}
export const getAllTeacher = () =>dispatch =>{
    Axios.get(`${process.env.REACT_APP_API_URL}/profesores`)
    .then(res=>{
        return dispatch({
            type:GET_ALL_TEACHERS,
            teachers:res.data
        })
    })
    
}
export const getPost = id =>dispatch =>{
    Axios.get(`${process.env.REACT_APP_API_URL}/posts/${id}`)
    .then(res=>{
        return dispatch({
            type:GET_POST,
            post:res.data
        })
    })
    
}
export const getSpeciality = id =>dispatch =>{
    Axios.get(`${process.env.REACT_APP_API_URL}/especialidades/${id}`)
    .then(res=>{
        return dispatch({
            type:GET_SPECIALITY,
            speciality:res.data
        })
    })
    
}
export const getCourse = id =>dispatch =>{
    Axios.get(`${process.env.REACT_APP_API_URL}/cursos/${id}`)
    .then(res=>{
        return dispatch({
            type:GET_COURSE,
            course:res.data
        })
    })
    
}
export const getFragment = id =>dispatch =>{
    Axios.get(`${process.env.REACT_APP_API_URL}/clase/${id}`)
    .then(res=>{
        return dispatch({
            type:GET_FRAME,
            fragment:res.data
        })
    })
    
}

