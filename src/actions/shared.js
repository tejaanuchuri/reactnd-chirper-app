import { getInitialData } from '../utils/api'
import { receieveUsers } from '../actions/users'
import { receieveTweets } from '../actions/tweets'
import { setAuthedUser } from '../actions/authedUser'
const AUTHED_ID = 'tylermcginnis'
export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
            .then(({users,tweets}) => {
                dispatch(receieveUsers(users))
                dispatch(receieveTweets(tweets))
                dispatch(setAuthedUser(AUTHED_ID))
            })
    }
}