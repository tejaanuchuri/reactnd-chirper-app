import { getInitialData } from '../utils/api'
import { receiveTweets } from '../actions/tweets'
import { receiveUsers, receieveUsers } from '../actions/users'
import { setAuthedUser } from '../actions/authedUser'
const AUTHED_ID = 'tylermcginnis'
export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
            .then(({users,tweets}) => {
                dispatch(receieveUsers(users))
                dispatch(receiveTweets(tweets))
                dispatch(setAuthedUser(AUTHED_ID))
            })
    }
}