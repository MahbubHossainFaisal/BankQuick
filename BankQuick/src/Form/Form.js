
import React from 'react'
import classes from './Form.module.css'
const Form = () => {
    return (
        <div className={classes.form}>
            <div className={classes.userInput}>
                <label htmlFor="username" id='username'>Username</label>
                <input
                    type="text"
                    id="username"
                />
                    
            </div>
            <div className={classes.pinInput}>
                <label htmlFor="password" id='password'>Password</label>
                <input
                    type="password"
                    id="password"
                />

            </div>
            
              
                <button type="submit" className='btn btn-primary'>
                    Login
                </button>
               
            
        </div>
    )
}

export default Form
