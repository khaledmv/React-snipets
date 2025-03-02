import React, { Component } from 'react'
import CustomButton from './custom-button.components';

import { signInWithGoogle } from '../utils/firebase/firebase';


export class LogIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({email:'', password:''});
    }

    handleChange = e => {
        const { value, name } = e.target;
        
        this.setState({ [name]: value})
    }

  render() {
    return (
      <div>
          
          <div className="login-header-text">
          <h2> I already have an account</h2>
          <span> Sign in with your email and password</span>
          </div>
       
          <form action="" onSubmit={this.handleSubmit}>
        
           <div className="email">
            <input 
            type="email" 
            name="email" 
            id="email" 
            value={this.state.email}
            required
            onChange={this.handleChange}
            />
            <label htmlFor="email"> Email </label>
           </div>
            
            <div className='password'>
                <input type="password" 
                name="password" 
                id="password" 
                value={this.state.password}
                onChange={this.handleChange}
                 required />
                <label htmlFor="password">Password</label>
            </div>

           <CustomButton type="submit"> 
            Sign In Forms
           </CustomButton>

           <CustomButton onClick={signInWithGoogle}> 
            Sign In Google
           </CustomButton>
    
          </form>
      </div>
    )
  }
}

export default LogIn