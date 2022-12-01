# Getting Started with Ethereum Twitter App

## ethereum-twitter-2022-fall

This is just the frontend code repository. The smart contract repository is here https://github.com/shahidcaan/blockchain-cwk

If you want to deploy the contract for yourself, you need to create a file named .env in which passing your PRIVATE_KEY generated from MetaMask and your API_KEY from, such as, alchemy.com. In addition, add the code bellow in .env to avoid some irrelevant errors that may appear.

    SKIP_PREFLIGHT_CHECK=true

    GENERATE_SOURCEMAP=false

To run the frontend app, install all dependencies

    npm i

once it's done, you can run the app locally by

    npm start
or
    npm run start

It takes some time to fetch data from contract at the time you run the app, so please BE PATIENT.

If something went wrong and the app did not start, remove "GENERATE_SOURCEMAP=false && " from the scripts of "start" in package.json
