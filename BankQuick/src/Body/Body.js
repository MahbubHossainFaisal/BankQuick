import React, { useState } from 'react'
import classes from './Body.module.css'
import CloseAccount from './CloseAccount/CloseAccount'
import RequestLoan from './RequestLoan/RequestLoan'
import Transactions from './Transactions/Transactions'
import TransferMoney from './TransferMoney/TransferMoney'
import WithdrawAmount from './WithdrawAmount/WithdrawAmount'

const Body = (props) => {

    const [notification,setNotification] = useState('')
    const totalDeposit = props.account.movements.filter((mov)=> mov>0).reduce((sum,ele)=> sum+ele,0)
    const totalWithdraw = props.account.movements.filter((mov)=> mov<0).reduce((sum,ele) => sum+ele,0)
    let accountMovementsArray = [...props.account.movements]
    //console.log(accountMovementsArray)
    accountMovementsArray.sort((a,b) => a-b)
    //console.log(props.account.movements)
    const currentBalance = totalDeposit-Math.abs(totalWithdraw) //used abs because total withdraw value is negative
    
    
    return (
        <div className={classes.body}>
            <div classname={classes.welcomeMsg}>
                <h1>Welcome, {props.account.owner.split(' ')[0]}!</h1>
            </div>
            <div className={classes.currentBalance}>
                <div className={classes.currentBalanceLabel}>
                    <label>Current Balance</label>
                    <p>As of 15/04/2021</p>
                </div>
                <div className={classes.notification}>
                    {notification}
                </div>
                <div className={classes.currentBalanceAmount}>
                    <p>
                        {currentBalance}৳
                    </p>
                </div>
            </div>
           <div className={classes.transactionSection}>
                <div className={classes.transactionHistory}>
                       <div>
                        <h1> Transaction history</h1>
                       </div>
                    {console.log(props.sortSignal)}
                    <div className={classes.transactions}>
                       { 
                        props.sortSignal ?
                         accountMovementsArray.map((mov,i) =>{
                            return(
                                <Transactions movement={mov} key={i} />
                            )
                         }) : props.account.movements.map((mov, i) => {
                             return (
                                 <Transactions movement={mov} key={i} />
                             )
                         })
                       }
                       
                    </div>
                </div>
                
                <div className={classes.transactionModules}>

                    <div className={classes.firstTwoCard}>
                        <div className={classes.transferMoney}>
                            <h1>Transfer Money</h1>
                            <TransferMoney
                             allAccount={props.allAccount}
                             userAccount={props.account}
                             notify={setNotification}
                             updateAccount={props.updateAccount}  />
                        </div>
                        <div className={classes.requestLoan}>
                            <h1>Request Loan</h1>
                            <RequestLoan
                            userAccount={props.account}
                            updateAccount={props.updateAccount}
                            notify={setNotification}
                            />
                        </div>
                    </div>
                    <div className={classes.lastTwoCard}>
                        <div className={classes.withdrawAmount}>
                            <h1>Withdraw Amount</h1>
                            <WithdrawAmount
                                userAccount={props.account}
                                updateAccount={props.updateAccount}
                                notify={setNotification}
                            />
                        </div>
                        <div className={classes.closeAccount}>
                            <h1>Close Account</h1>
                            <CloseAccount 
                            userAccount={props.account}
                            allAccounts={props.allAccount}
                             updateAccounts={props.updateAccounts}
                                notify={setNotification}
                                loginStatus={props.loginStatus}/>
                        </div>
                    </div>

                </div>
           </div>
        </div>
    )
}

export default Body
