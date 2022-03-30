import React  from "react";
import './signin.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {signin} from '../../Services/userservice'
import {useHistory} from  "react-router-dom";
import { Link } from 'react-router-dom';
import Signup from "../SignUp/signup";
const emailRegex = /^[a-zA-Z0-9]+.[a-zA-Z0-9]+@[A-Za-z0-9]+.[a-zA-Z]{2,3}(.[a-zA-Z]{2})?$/
const PasswordRegex=/(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=-])[a-zA-Z0-9!@#$%^&*()_+=-]{8}$/



function Signin()
{
    const history=useHistory();
    const [signinObj,setSigninObj] = React.useState({email : "", password : ""})
    const [regexObj,setRegexObj]= React.useState({emailBorder: false,emailHelper: "",passwordBorder : false, passwordHelper:""})
   
    const takeEmail = (event) => {
                setSigninObj({...signinObj,email:event.target.value})
    }

    const takePassword = (event) => {
        setSigninObj({...signinObj,password:event.target.value})
}


const submit =() => {   
    if(signinObj.email === "" && signinObj.password === "") {
        setRegexObj({...regexObj,emailBorder: true,passwordBorder: true, emailHelper :"Enter an email",passwordHelper:"Enter an password"})
    } else {
        let emaiTest = emailRegex.test(signinObj.email);
        let PasswordTest = PasswordRegex.test(signinObj.password);

        if(emaiTest===true) {
            setRegexObj((prevState) => ({
                ...prevState,
                emailBorder: false,
                emailHelper:""
              }));
        }
        else if(emaiTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                emailBorder: true,
                emailHelper:"enter valid email"
              }));
        }
        if(PasswordTest===true) {
            setRegexObj((prevState) => ({
                ...prevState,
                passwordBorder: false,
                passwordHelper:""
              }));
        }
        else if(PasswordTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                passwordBorder: true,
                passwordHelper:"enter valid password"
              }));
        }
        
        if(emaiTest===true||PasswordTest===true)
        {
            signin(signinObj).then((response)=>{
                console.log(response);
                history.push("/dashboard");
                localStorage.setItem("token",response.data.data)}).catch((error)=>{console.log(error)})
        }
    }
}
return(
        <div class="signin">
            <img src="img/Google.png" alt="google"/>
            <h2>Sign In</h2>
            <span class="acc">Use your Google Account</span>
            <TextField onChange={takeEmail} error={regexObj.emailBorder} helperText={regexObj.emailHelper}  id="outlined-basic" label="Email or Phone" size="small"  variant="outlined" />
            <br></br>
            <TextField error={regexObj.passwordBorder} helperText={regexObj.passwordHelper}  onChange={takePassword} id="outlined-basic" label="Password" size="small"  variant="outlined" />
             <a href="google.com" class="forget">Forgot Email?</a>
             <p>Not your computer? Use Guest mode to sign in privately. <a href="google.com">Learn More</a></p>
             <div class="signinfooter">
             <Link to="/signup" className="btn btn-primary">Sign up</Link>
                 <Button onClick={submit} variant="contained">Next</Button>
             </div>
        </div>

    )
}
export default Signin