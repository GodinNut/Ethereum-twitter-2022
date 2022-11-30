# Getting Started with Ethereum Twitter App

## ethereum-twitter-2022-fall

To run the app, first create a file named .env in which add your PRIVATE_KEY generated from MetaMask and your API_KEY from alchemy.com. In addition add the code bellow in .env to avoid some errors that may appear.

    SKIP_PREFLIGHT_CHECK=true

    GENERATE_SOURCEMAP=false

Then install all dependencies

    npm i

once it's done, you can run the app by command

    npm start

It takes some time to fetch data from contract at the time you run the app, so please BE PATIENT.
If something went wrong and the app did not start, remove "GENERATE_SOURCEMAP=false && " from scripts of "start" in package.json
