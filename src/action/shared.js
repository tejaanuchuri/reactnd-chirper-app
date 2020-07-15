import { getInitialData } from '../utils/api'
import { receiveUsers } from '../action/users'
import { receiveTweets } from '../actions/tweets'
import { setAuther } from '../action/authedUser'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialDate () {
    return (dispatch) => {
        return getInitialData()
            .then(({ users, tweets})=>{
                dispatch(receiveUsers(users))
                dispatch(receiveTweets(tweets))
            })
    }
}