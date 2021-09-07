import React from 'react'
import classes from './Summary.module.css'
const Summary = (props) => {
    return (
        <div className={classes.summary}>
            <div className={classes.in}>
                <span className={classes.intxt}>IN</span>
                <span>
                    {
                        props.account.movements.filter((mov) => mov>0).reduce((ele,mov) => ele+mov)
                    }৳
                </span>
            </div>
            <div className={classes.out}>
                <span className={classes.outtxt}>OUT</span>
                <span>
                    {
                        Math.abs(props.account.movements.filter((mov) => mov < 0).reduce((ele, mov) => ele + mov,0))
                    }৳
                </span>
            </div>
            <div className={classes.interest}>
                <span className={classes.interesttxt}>INTEREST</span>
                <span>
                    {
                        props.account.movements.filter((mov) => mov > 0)
                        .map((deposite) => (deposite*1.2)/100 )
                        .filter((interest) => interest>=1)
                        .reduce((acc,interest)=> acc+interest,0).toFixed(2)
                    }৳
                </span>
            </div>

            <div className={classes.sort}>
                <p>Sort</p>
            </div>
        </div>
    )
}

export default Summary
