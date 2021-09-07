import React,{useState} from 'react'
import classes from './RequestLoan.module.css'

const RequestLoan = (props) => {
    const [loan,setLoan] = useState('')

    const loanHandler = (event) =>{
        setLoan(event.target.value)
    }

    const requestLoanSubmitHandler = (event) =>{
        event.preventDefault()

        const amount = parseInt(loan)

        if(amount > 0 && amount <= 20000){
            const updatedAmount = [...props.userAccount.movements, amount]
            const updatedAccount = {
                ...props.userAccount,
                movements: updatedAmount
            }
            props.updateAccount(updatedAccount)
            event.target.reset()
            props.notify('Request has been accepted!')
            setLoan('')
        }
        else if(amount > 20000){
            props.notify('max limit of loan is 20000৳')
        }
        else{
            props.notify('Invalid amount!')
            event.target.reset()
            setLoan('')
        }
    }
    return (
        <div className={classes.container}>

            <form onSubmit={requestLoanSubmitHandler}>
                <div className={classes.loanInput}>
                    <input type='number' id='loan' value={loan} onChange={loanHandler} />
                    
                </div>
                <div className={classes.loanLabel}>
                    <h4>Loan Amount</h4>
                </div>
                <div className={classes.loanButton}>
                    <button type='submit' className='btn btn-light btn-md'  >Request</button>
                </div>
            </form>

        </div>
    )
}

export default RequestLoan
