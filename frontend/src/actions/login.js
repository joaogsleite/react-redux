import uuid from '../utils/uuid'

export function restore(){
    if(sessionStorage.getItem('token'))
        return {
            type    : "RESTORE_SESSION",
            payload : {
                username : sessionStorage.getItem('username'),
                token    : sessionStorage.getItem('token')
            }
        }
    else return {
        type : "RESTORE_SESSION_FAILED"
    }
}

export function login(username){
    const token = uuid()
    sessionStorage.setItem('username',username)
    sessionStorage.setItem('token',token)
    return {
        type    : "LOGIN",
        payload : {
            username,
            token
        }
    }
}

export function logout(){
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('username')
    return {
        type : "LOGOUT"
    }
}
