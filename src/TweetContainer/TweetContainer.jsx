import React from 'react'
import { MainTweetDiv } from './styled'

function TweetContainer(props) {
  return (
    <MainTweetDiv>
        <p id='tweetAuthor'>  Author: {props.author}</p>
        <p id= 'tweetContent'>{props.content}</p>
    </MainTweetDiv>
  )
}

export default TweetContainer
