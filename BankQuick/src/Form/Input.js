import React from 'react'

const Input = () => {
    return (
        <form>
           <div className='row justify-content-center'>
                <div className='col-4'>

                    <label for='username' className='fw-bold' >Username</label>
                    <input className='form-control' id='user' placeholder='username' />
                    <label for='password' className='fw-bold'>Password</label>
                    <input className='form-control' id='password' placeholder='password' />

                </div>
                   <div className='row'>
                       <div className='col-4'>

                       </div>
                       <div className='col-2'>
                        <button className='btn btn-primary mt-2 justify-content-center'>Login</button>
                       </div>
                   </div>
                
           </div>
            

            
        </form>
    )
}

export default Input
