import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }   

    handleChange=event=>{

        const {value, name}= event.target;
        console.log(event.target);
        this.setState({[name]:value})
    }
    

    handleClick=event=>{
        event.preventDefault();
        this.setState({email:'', password:''})    
    }
        


    render(){
        return(
            <div className='sign-in'>
                <form onSubmit={this.handleClick}>
                    <FormInput name='email' 
                               label='Email' 
                               type='email' 
                               handleChange={this.handleChange} 
                               value={this.state.email} required />
                    <FormInput name='password' 
                               label='Password' 
                               type='password' 
                               handleChange={this.handleChange} 
                               value={this.state.password} required/>
                    <div className='buttons'>
                    <CustomButton type='submit'>Sign in </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with gooogle</CustomButton>
                    </div>  
                </form>
            </div>
        )
    }
}

export default SignIn