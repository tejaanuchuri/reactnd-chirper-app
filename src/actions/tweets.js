export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'

export function receieveTweets (tweets) {
    return {
        type : RECEIVE_TWEETS,
        tweets, 
    }
}