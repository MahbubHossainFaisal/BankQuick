import React from 'react'
import Form from '../Form/Form'
import classes from './Header.module.css'
const Header = () => {
    return (
        <div className={classes.container}>
           <div className={classes.headerName}>
                <h1>BankQuick</h1>
           </div>
           <div className={classes.logo}>
               <img src='./Assets/header/bank.png' height='100px' width='100px' alt='banklogo' />
           </div>
           <div className={classes.form}>
                <Form />
           </div>
        </div>
    )
}

export default Header
