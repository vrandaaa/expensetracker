import React from 'react';
import {useState} from 'react';
import './Auth.css'
import bill from '../../assets/bill.jpg'
import money from '../../assets/money.jpg'

const LoginSignup = () => {
  const[isLogin,setIsLogin] = useState(true)
 
  return (
    <div className='wrapper'>
      <div className='left-side'>
        <div className='formContainer'>
          <div className='buttons'>
            <button className={isLogin? 'active' : " " }  onClick={() => setIsLogin(true)}>Login</button>
            <button className={!isLogin? 'active': " "} onClick={() => setIsLogin(false)}>Signup</button>
          </div>
          {isLogin ? 
          (
            <form action="">
              <input type="email" placeholder='Enter Email'/>
              <input type="password" placeholder='Enter Password' />
              <a href='#'>Forgot Passoword?</a>
              <button className='submitBtn'>Login</button>
              <a href='#'>New user? Please - <span onClick={() => setIsLogin(false)}>SignUp</span></a>
            </form>
          ): " "}

          {!isLogin ? 
          (
            <form action="">
              <input type="email" placeholder='Enter Email'/>
              <input type="password" placeholder='Enter Password' />
              <input type="password" placeholder='Confirm Password' />
              <button className='submitBtn'>SignUp</button>
              <a href='#'>Already a user? Please - <span onClick={() => setIsLogin(true)}>Login</span></a>
            </form>
          )
          :""}
        </div>
      </div>

      <div className='imageSide'>
          <div className="right-side-text">
            <h2>Welcome Back to ExpenseTracker</h2>
            <p>Manage your finances with simplicity and precision.</p>
          </div>
          {/* Images are now part of the content, but the text is added below */}
          <div className="imagesGroup">
             <img src={bill} alt="Bill management" className="billImg" />
             <img src={money} alt="Money and POS" className="mmoneyImg" />
          </div>
      </div>
    </div>
  )
}

export default LoginSignup;