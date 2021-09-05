import React,{useState} from 'react'
import Accounts from '../../Data/data'
import classes from './TransferMoney.module.css'
const TransferMoney = (props) => {
    
    const [transferTo,setTransferTo] = useState('')
    const [transferredAmount,setTransferredAmount] = useState('')



    const transferToHandler = (event) =>{
        setTransferTo(event.target.value)
    }

    const transferAmountHandler = (event) =>{
        
        setTransferredAmount(event.target.value)
    }

    const transferFinishHandler = ()=>{
        setTransferTo('')
        setTransferredAmount('')
    }
   
        const transferSubmitHandler = (event) => {
            event.preventDefault()
          
            const recieverAccount = props.allAccount.find(acc => acc.username === transferTo)
            //calculating user account balance
            const userAccountBalance = props.userAccount.movements.reduce((sum, ele) => sum + ele, 0)
            //console.log(props.userAccountMovements)
            //console.log(transferredAmount,recieverAccount,userAccountBalance)

            const amount = parseInt(transferredAmount)
            
            if (amount > 0 && amount <= userAccountBalance && recieverAccount && recieverAccount !== props.userAccount) {
               const updatedUserAccountAmount = [...props.userAccount.movements,-amount];
               const updatedUserAccount = {
                   ...props.userAccount,
                   movements: updatedUserAccountAmount
               }
               props.updateAccount(updatedUserAccount)
            
               // props.userAccount.movements.push(-amount)
                recieverAccount.movements.push(amount)
                props.notify('Amount has been transferred!')
                // console.log(recieverAccount.movements)
                event.target.reset()
                transferFinishHandler()
                
                
            }
            else {
                props.notify('Amount is not valid')
                event.target.reset()
                transferFinishHandler()
            }
        }
    

    return (
        <div className={classes.container}>
           
               <form onSubmit={transferSubmitHandler}>
                <div className={classes.transferInputs}>
                    <input type='text' id='transferTo' value={transferTo} onChange={transferToHandler}  />
                    <input type='text' id='transferAmount' value={transferredAmount} onChange={transferAmountHandler}  />
                </div>
                <div className={classes.transferLabels}>
                    <span>Transfer to</span>
                    <span>Amount</span>
                </div>
                <div className={classes.transferButton}>
                    <button type='submit' className='btn btn-light btn-lg'  >➨</button>
                </div>
               </form>
           
        </div>
    )
}

export default TransferMoney
