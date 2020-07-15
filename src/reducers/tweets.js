import { RECEIVE_TWEETS } from  '../actions/tweets'

export default function users (state={}, actions) {
    switch(actions.type) {
        case RECEIVE_tweets:
            return {
                ...state,
                ...action.tweets
            }
        default :
            return state;
    }
}