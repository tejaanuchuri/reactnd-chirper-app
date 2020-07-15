export const RECEIVE_TWEETS = 'RECEIVE_USERS'

export function receiveTweets(tweets) {
    return {
        type:RECEIVE_TWEETS,
        tweets,
    }
}