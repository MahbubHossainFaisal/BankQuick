import React,{useState} from 'react'
import classes from './WithdrawAmount.module.css'
const WithdrawAmount = (props) => {
    const [withdraw,setWithdraw] = useState('')

    const withdrawHandler = (event) =>{
        setWithdraw(event.target.value)
    }

    const withdrawSubmitHandler = (event) =>{
        event.preventDefault()

        const amount = parseInt(withdraw)
        const userAccountBalance = props.userAccount.movements.reduce((sum, ele) => sum + ele, 0)
        if (amount > 0 && amount<= userAccountBalance) {
            const updatedAmount = [...props.userAccount.movements, -amount]
            const updatedAccount = {
                ...props.userAccount,
                movements: updatedAmount
            }
            props.updateAccount(updatedAccount)
            event.target.reset()
            props.notify('Withdrawn has been done!')
            setWithdraw('')
        }
        
        else {
            props.notify('Invalid amount!')
            event.target.reset()
            setWithdraw('')
        }

    }
    return (
        <div className={classes.container}>

            <form onSubmit={withdrawSubmitHandler}>
                <div className={classes.withdrawInput}>
                    <input type='number' id='loan' value={withdraw} onChange={withdrawHandler} />

                </div>
                <div className={classes.withdrawLabel}>
                    <h4>Withdraw amount</h4>
                </div>
                <div className={classes.withdrawButton}>
                    <button type='submit' className='btn btn-light btn-md'  >Withdraw</button>
                </div>
            </form>

        </div>
    )
}

export default WithdrawAmount
