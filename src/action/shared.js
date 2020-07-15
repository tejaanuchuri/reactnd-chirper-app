import { getInitialData } from '../utils/api'
import { receiveUsers } from '../action/users'
import { receiveTweets } from '../actions/tweets'

const AUTH
export function handleInitialDate () {
    return (dispatch) => {
        return getInitialData()
            .then(({ users, tweets})=>{
                dispatch(receiveUsers(users))
                dispatch(receiveTweets(tweets))
            })
    }
}