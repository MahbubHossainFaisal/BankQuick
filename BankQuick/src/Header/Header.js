import React from 'react'
import Input from '../Form/Input'
import classes from './Header.module.css'
import bankLogo from '../Assets/header/bank.png'

const Header = () => {
    return (
        <div className={classes.header}>
            <div className='container'>
               <div className='row d-flex justify-content-center'>
                   <div className='col-2 fs-1 fw-bold text-center'>
                       BankQuick
                   </div>
                   <div className='col-1 text-center d-flex'>
                       <img src={bankLogo} className='img-rounded' alt='banklogo' />
                   </div>
                   <div clasName='col-9 d-flex'>
                       <Input />
                   </div>
               </div>
            </div>
        </div>
    )
}

export default Header
