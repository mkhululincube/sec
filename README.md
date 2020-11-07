## Citizen Ethereum powered application

Demo URL : https://securrency-int.herokuapp.com/

Docker URL : https://hub.docker.com/r/mkhululincube/citizen

#### Tech Stack

* React v 16.8

* Redux

* Ant Design

* Jest

* Heroku (CI/CD)

* Docker

* Ethereum

* Web3

## Set up

### Setup on your computer

Download and Install Node JS : https://nodejs.org/en/download/

#### Clone repository

    Git clone https://github.com/mkhululincube/sec.git

#### Extract the downloaded file using any zipping tool

#### Open terminal and change directory to the project

    cd /path/to/the/project
    
Download the dependencies

    npm install


### Alternative docker setup

## Visit for docker setup or  https://hub.docker.com/r/mkhululincube/citizen


***  To use the dapp app you need to use Metamask browser extension. If you have done this already please go to Part 3. If you don’t have MetaMask, you MUST install it, otherwise it may result in a permanent loss of funds!  ***

#### Step 1: Add MetaMask extension to chrome
Click “Add to Chrome” to Install MetaMask as Google Chrome extension. Visit https://metamask.io

#### Step 2: Creating a wallet
Click on the Metamask logo. Switch to Ropsten Test Network, read and agree to the MetaMask terms and Conditions. Click “Create new wallet”. This depends on your browser.

#### Step 3: Get free coins
Visit https://faucet.metamask.io/ to get free tokens

### !!! Happy testing !!! 😄


___ Username ___ : admin

___ Password ___ : admin


## Demo In Pictures

### Login

#### Username and Password Validation 

If username and password is correct token is stored in localstorage, alternatively we can store it in session or cookie and set the expiration date.

Action is also fired/initiated to store authentication state is global storage.

```javascript
   const onSubmit = data => {
    dispatch(AdminLoggedIn(data))
     localStorage.setItem('citizenMicroFrontend-token', JSON.stringify({
       loggedIn: true,
       token: data,
       username: data.username
     }));
     props.history.push('/home')
    } 
```

![alt text](https://github.com/mkhululincube/sec/blob/main/screenshots/login.png)


### Home page

### Dispatch action to check if metamask is configured

    dispatch(Web3Provider(Web3.givenProvider))

##### If metamask is not set

![alt text](https://github.com/mkhululincube/sec/blob/main/screenshots/noMetamaskAddCitizen.png)


##### If metamask is set

![alt text](https://github.com/mkhululincube/sec/blob/main/screenshots/home.png)

### Add Citizen

#### Validation

* Age should greater than 18 and less than 150

* Age required

* City required

* Name required

* someNote required

```javascript
   {
     type: "number",
     name: "age",
     label: "Age",
     min : 18,
     max : 150,
     required: true,
     value: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i",
     message: "Invalid Age"
 
   },
   {
     type: "text",
     name: "city",
     label: "City",
     required: true,
     value: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i",
     message: "Invalid City"
 
   }
```

#### On Validation pass

Note the submission returns a promise therefore we have to async/await

```javascript
            try {
              await citizensList.methods.addCitizen(age, city, name, someNote).send({ from: accounts[0] })
            .once('receipt', (receipt) => {
              setSucessMessage(true);
              setLoading(false);
              setShowForm(false);     
          })
            } catch (e) {
              setNoAccount(true);
              setLoading(false);
          } finally {
              console.log('We do cleanup here');
          }
```

#### If account has no fund an error is caught and error is shown

![alt text](https://github.com/mkhululincube/sec/blob/main/screenshots/notokens.png)

#### If account has funds

![alt text](https://github.com/mkhululincube/sec/blob/main/screenshots/sucess.png)


### Citizen list page

#### Protected Page (check login token in localstorage)

```Javascript
        <Route
        {...rest}
        render={({ location }) =>
        sellerToken ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
```


Check on the global store if metamask is set

      const web3Provider = useSelector(state=>state.Web3Provider);

#### IF metamask is set

![alt text](https://github.com/mkhululincube/sec/blob/main/screenshots/listCitizens.png)

#### IF metamask is not set

![alt text](https://github.com/mkhululincube/sec/blob/main/screenshots/noMetamaskCitizenList.png)


### View citizen notes

![alt text](https://github.com/mkhululincube/sec/blob/main/screenshots/notes.png)




