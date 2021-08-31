import React from 'react'
import classes from './Body.module.css'
import Transactions from './Transactions/Transactions'

const Body = (props) => {
    return (
        <div className={classes.body}>
            <div className={classes.currentBalance}>
                <div className={classes.currentBalanceLabel}>
                    <label>Current Balance</label>
                    <p>As of 15/04/2021</p>
                </div>
                <div className={classes.currentBalanceAmount}>
                    <p>000$</p>
                </div>
            </div>
           <div className={classes.transactionSection}>
                <div className={classes.transactionHistory}>
                       <div>
                        <h1> Transaction history</h1>
                       </div>
                    
                    <div className={classes.transactions}>
                       {
                           props.accounts[0].movements.map((mov,i)=>{
                              return(
                                  <Transactions movement={mov} index={i} />
                              )
                           })
                       }
                    </div>
                </div>
                
                <div className={classes.transactionModules}>

                    <div className={classes.firstTwoCard}>
                        <div className={classes.transferMoney}>
                            <h1>Transfer Money</h1>
                        </div>
                        <div className={classes.requestLoan}>
                            <h1>Request Loan</h1>
                        </div>
                    </div>
                    <div className={classes.lastTwoCard}>
                        <div className={classes.withdrawAmount}>
                            <h1>Withdraw Amount</h1>
                        </div>
                        <div className={classes.closeAccount}>
                            <h1>Close Account</h1>
                        </div>
                    </div>

                </div>
           </div>
        </div>
    )
}

export default Body
