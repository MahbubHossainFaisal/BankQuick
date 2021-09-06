import React, {useState} from 'react'
import classes from './CloseAccount.module.css'
const CloseAccount = (props) => {
    const [username,setUsername] = useState('')
    const [pin,setPin] = useState('')

    const usernameHandler = (event) =>{
        setUsername(event.target.value)
    }

    const pinHandler = (event) =>{
        setPin(event.target.value)
    }

    const closeAccountHandler = (event) =>{
        event.preventDefault()
        
        if(username === props.userAccount.username && pin === props.userAccount.pin){
            console.log(username,pin)
            const updatedAccounts = props.allAccounts.filter(acc => acc.username!== username && acc.pin !== pin)
            props.updateAccounts(updatedAccounts)

            props.notify('Account deleted! Login again to check!')
           
        } 
        else{
            props.notify('Username or password not valid!')
        }
    }
    return (
        <div className={classes.container}>

            <form onSubmit={closeAccountHandler} >
                <div className={classes.closeInputs}>
                    <input type='text' id='username' value={username} onChange={usernameHandler} />
                    <input type='password' id='pin' value={pin} onChange={pinHandler} />
                </div>
                <div className={classes.closeLabels}>
                    <h4>Confirm User</h4>
                    <h4>Confirm Pin</h4>
                </div>
                <div className={classes.closeButton}>
                    <button type='submit' className='btn btn-light btn-lg'  >Close</button>
                </div>
            </form>

        </div>
    )
}

export default CloseAccount
