import React,{useState} from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import Summary from './Footer/Summary'
import Accounts from './Data/data'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/lumen/bootstrap.min.css'

function App() {
  const [accounts,setAccounts] = useState(Accounts)
  const [userName,setUserName] = useState('')
  const [password,setPassword] = useState('')
  const [recievedAccount,setRecievedAccount] = useState({})
  const [loginSuccess,setLoginSuccess] = useState(false)

  const userNameChangeHandler = (event) =>{
    setUserName(event.target.value)
  }
  const setPasswordHandler = (event) =>{
    setPassword(event.target.value)
  }
  const updateRecievedAccountHandler = (acc) =>{
    setRecievedAccount(acc)
  }
  const updateAllAccountHandler = (accs) =>{
    setAccounts(accs)
  }

  const loginHandler = (event) =>{
    event.preventDefault();
    //console.log(userName)
    //console.log(password)
    const checkUserName = accounts.some( (acc) => acc.username === userName)
    //console.log(checkUserName)
    const checkPin = accounts.some((acc) => acc.username===userName && acc.pin === password)
    //console.log(checkPin)
    
    if(checkUserName && checkPin){
      const findAccount = accounts.find((acc) => acc.username === userName)
      //console.log(findAccount)
      setRecievedAccount(findAccount)
      setLoginSuccess(true)
      event.target.reset();
      
    }
    else{
      setLoginSuccess(false)
      event.target.reset()
    }
  }
  return (
    <div>
     <Header userName={userNameChangeHandler} password={setPasswordHandler} login={loginHandler} />
      {!loginSuccess && <h1>Insert your valid username and password please!</h1>}
      {loginSuccess && <Body account={recievedAccount}
       updateAccount={updateRecievedAccountHandler} 
       allAccount={accounts}
       updateAccounts={updateAllAccountHandler}
       loginStatus={setLoginSuccess} />}
      {loginSuccess && <Summary account={recievedAccount} />}
    </div>
  );
}

export default App;
