import { SET_AUTHED_USER } from  '../actions/authedUser'

export default function authedUsers (state=null, actions) {
    switch(actions.type) {
        case SET_AUTHED_USER:
            return actions.id
        default :
            return state;
    }
}