import React from 'react'
import classes from './Transactions.module.css'
const Transactions = (props) => {
    return (
        <div className={classes.transactions}>
            <div className={props.movement > 0 ? `${classes.transactionTypeGreen}` : `${classes.transactionTypeRed}`}>
                {props.movement > 0 ? `Deposited` : `Withdrawed`}
            </div>
            <div className={classes.transactionDate}>
                12/02/2021
            </div>
            <div className={classes.transactionAmount}>
                {Math.abs(props.movement)}$
            </div>
        </div>
    )
}

export default Transactions
