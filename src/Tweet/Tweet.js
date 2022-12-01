import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { TweetContainer } from './style';

import smartContract from '../service/contract';

import { web3 } from '../service/contract';


const Tweet = ({ id, author, content, account }) => {
    const [edit, setEdit] = useState(false);
    const [tweet, setTweet] = useState("");
    const [error, setError] = useState(null);

    const handleDelete = async () => {
        try {
            // get the current user ID
            const userAccount = await web3.eth.getAccount();
            smartContract.methods.deletTweet(id, true).send({ from: userAccount })
        } catch (error) {
            setError("Somthing went wrong. Please try again.");
        }
    };


    const handleChange = (event) => {
        setTweet(event.target.value);
    };

    const handleSubmit = async () => {
        const userAccount = await web3.eth.getAccounts();
        smartContract.methods.addTweet(tweet, false).send({ from: userAccount[0] });
    };


    return (
        <TweetContainer>

        </TweetContainer>

    );

};

Tweet.propTypes = {
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default Tweet;
