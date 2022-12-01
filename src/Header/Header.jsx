import React, { useState, useEffect } from 'react'
import Textfield from '@mui/material/TextField';
import Button from '@mui/material/Button';

import smartContract from '../service/contract.js';
import { HeaderContainer } from './style.js';
import Content from '../Content/Content'

export default function Header() {
    const [tweet, setTweet] = useState('');
    const [error, setError] = useState(null);
    const [currentAccount, setCurrentAccount] = useState(null);

    

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_accounts'}).then(handleAccountsChanged).catch((err) => {
                console.error(err);
            });
        }
    },[]);

    const handleAccountsChanged = (accounts) => {
        if (accounts.length === 0 ) {
            setError('Please connect to Metamask');
            setCurrentAccount(null);
        } else if (accounts[0] !== currentAccount) {
            setCurrentAccount(accounts[0]);
        }
    };

    const enableMetamask = async () => {
        if (window.ethereum) {
            window.ethereum
            .request({ method: 'eth_requestAccounts' })
            .then((response) => { 
                handleAccountsChanged(response);
                setError(null);})
            .catch((err) => {
                if (err.code === 40001) {
                    setError('Please connect to Metamask');
                } else {
                    setError(err);
                }
            });
        } else {
            setError('Your browser does not seem compatible with Ethereum.');
        }
    };

    const handleSubmit = async () => {
        smartContract.methods.addTweet(tweet, false).send({ from: currentAccount }).then( (response) => {
            setTweet(" ")
            }).catch( (err) => console.log(`error: ${err}`));
        setError(null);
    };

    return (
        <HeaderContainer>
            <Button
                variant='contained'
                className='w-full'
                onClick={enableMetamask}
                disabled={currentAccount !== null}
            >
                Enable Metamask
            </Button>
            <form
            noValidate
            autoComplete='off'
            className='w-full flex justify-between mt-3'
            onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
                }}
            >
                <div id='textfield' className='w-5/6 pr-1'>
                    <Textfield
                    id='outlined-basic'
                    label='Your tweet'
                    variant='outlined'
                    className='w-full'
                    multiline
                    onChange={(e) => setTweet(e.target.value)}
                    />
                </div>
                <div id='tweetbutton' className='pl-1 w-1/6 h-14'>
                    <Button
                    variant='contained'
                    color='primary'
                    className='w-full h-full'
                    type='submit'
                    disabled={currentAccount === null}
                    >
                        Tweet
                    </Button>
                </div>
            </form>
            {error && <div className='text-red-600 font-bold'>{error}</div>}

            <hr/>
        </HeaderContainer>
    );
};
