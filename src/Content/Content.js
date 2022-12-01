import React, { useState, useEffect } from 'react'
import smartContract from "../service/contract";
import { web3 } from "../service/contract";
import Tweet from "../Tweet/Tweet";
import TweetContainer from '../TweetContainer/TweetContainer';
import { ContentContainer } from './style.js';

export default function Content() {
    const [account, setAccount] = useState('');
    const [tweets, setTweets] = useState([]);

    const updateTweets = (response) => {
        let newTweets = [];
        for (let i = response.length - 1; i >= 0; i--) {
            newTweets.push({
                id: response[i][0],
                author: response[i][1],
                content: response[i][2],
                isdeleted: response[i][3],
            });
        }
        setTweets(newTweets);
    };

    //listenning the account
    useEffect(() => {
        web3.eth.getAccounts().then(setAccount);

        async function listenMMAccount() {
            if (window.ethereum) {
                window.ethereum.on('accountsChanged', async function () {
                    const accounts = await web3.eth.getAccounts();
                    setAccount(accounts);
                });
            }
        }
        listenMMAccount();
    }, []);

    useEffect(() => {

        let subscription = web3.eth.subscribe('newBlockHeaders', (error) => {
            if (!error) {
                smartContract.methods.getAllTweets().call().then(updateTweets);
            }
        });

        return subscription.unsubscribe((error, success) => {
            if (success) {
                console.log('Successfully unsubscribed');
            }
        });
    }, [], 500);

    

    // MAP OF TWEETS
    let listOfTweets = tweets.map( (tweet) => {
        return(
            <TweetContainer
                key = {tweet.id}
                id = {tweet.id}
                content= {tweet.content}
                author = {tweet.author}
            />
        )
    })

    return (
        <ContentContainer>
            <div className='contentClass'>

            <h2> Feed </h2>
                {listOfTweets}
            </div>
        </ContentContainer>
    );
}
