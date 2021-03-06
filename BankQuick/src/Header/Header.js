import React from 'react'
import Form from '../Form/Form'
import classes from './Header.module.css'
const Header = ({userName,password,login}) => {
    return (
        <div className={classes.container}>
           <div className={classes.headerName}>
                <p>BankQuick</p>
           </div>
           <div className={classes.logo}>
               <img src='./Assets/header/bank.png' alt='banklogo' />
           </div>
           <div className={classes.form}>
                <Form userName={userName} Password={password} login={login} />
           </div>
        </div>
    )
}

export default Header
