
import React from 'react'
import classes from './Form.module.css'
const Form = ({userName,Password,login}) => {
    return (
        <div className={classes.form}>
           
                <div className={classes.userInput}>
                    <label htmlFor="username" id='username'>Username</label>
                    <input
                        type="text"
                        id="username"
                        onChange={userName}
                    />

                </div>
                <div className={classes.pinInput}>
                    <label htmlFor="password" id='password'>Password</label>
                    <input
                        type="text"
                        id="password"
                        onChange={Password}
                    />

                </div>


                <button type="submit" className='btn btn-primary btn-lg' onClick={login}>
                    Login
                </button>

        </div>
    )
}

export default Form
