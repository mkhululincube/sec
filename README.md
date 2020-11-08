## Citizen Dapp -  Powered by Ethereum

Demo Application link: (username: admin password: admin ): https://securrency-int.herokuapp.com/

Dockerhub Repository link https://hub.docker.com/r/mkhululincube/citizen

Demo video link: https://youtu.be/jH4O_ThxG_Y

Invision Mockups link: https://mkhululincube15742.invisionapp.com/console/share/J31RMGLUVR

Spec document https://docs.google.com/presentation/d/1YKTXaAWgpW-XF5aWvEJNHvg76w-H-PxlUxGpPpMKkfw/edit?usp=sharing

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

Start the server

    npm install


### Alternative docker setup if you prefer to run the application on docker

#### Visit for docker setup or  https://hub.docker.com/r/mkhululincube/citizen

### How to use the dapp application

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

### Dispatch action to  to set web3 config 

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


# DEVOPS 

#### CI/CD Implemented Using Heroku

Application hosted on heroku

Heroku is linked to application codebase on github repo https://github.com/mkhululincube/sec/

## Automated deployment is setup on heroku 

![alt text](https://user-images.githubusercontent.com/16665636/98450713-5a414e00-2158-11eb-868d-aedc0990325d.png)


## If automated tests fail deploymentbalso fails

![alt text](https://user-images.githubusercontent.com/16665636/98450775-008d5380-2159-11eb-8538-e65a4d92e8e0.png)

## Email sent to registered account

![alt text](https://user-images.githubusercontent.com/16665636/98458027-d8781180-21a5-11eb-95d5-817f47411efa.png)


## If automated tests pass deployment also passes

![alt text](https://user-images.githubusercontent.com/16665636/98450839-90cb9880-2159-11eb-91fd-a6eac6b064dd.png)

## Our docker image is also updated if our test passes

![alt text](https://user-images.githubusercontent.com/16665636/98450886-046da580-215a-11eb-9da3-25b8042ea7d8.png)



# Docker Setup

## Build Image from Dockerfile or pull image from dockerhub

    docker pull mkhululincube/citizen

![alt text](https://user-images.githubusercontent.com/16665636/98450968-ed7b8300-215a-11eb-8621-39d14288c428.png)

## List images to see if the image is downloaded

    docker images

![alt text](https://user-images.githubusercontent.com/16665636/98450997-4814df00-215b-11eb-8761-24c99e007785.png)

## Spin up the image to create a container and map the port

    docker run --name citizen -p 4680:3000 -d mkhululi/citizen

## List containers to see if the image is downloaded

    docker ps
    
![alt text](https://user-images.githubusercontent.com/16665636/98451128-6e874a00-215c-11eb-944a-7b2b43b6ba7a.png)
    
## Get docker engine ip

    docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' imageNameOrID

## Using the IP Address, add the ip on the url and the configured port

😄😄 Happy Programming !!








