import React  from "react";
import './signup.css'
import { makeStyles } from '@mui/styles';
import { ClassNames } from '@emotion/react';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { signup } from "../../Services/userservice";
const FirstnameRegex =/^[A-Z][a-zA-Z]*$/
const LastnameRegex =/^[A-Z][a-zA-Z]*$/
const EmailRegex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PasswordRegex=/(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=-])[a-zA-Z0-9!@#$%^&*()_+=-]{8}$/;


const useStyles = makeStyles((theme) => ({
 body:{
    
    "@media (min-width:320px) and (max-width : 480px)" :{
        whiteSpace: 'nowrap'
      }
 },
    textfeild : {
     "@media (min-width:320px) and (max-width : 480px)" :{
       width:340
     },
     "@media only screen and (min-width : 481px) and (max-width : 768px)": {
        width:340
     },
     "@media only screen and (min-width: 769px) and (max-width: 1024px)":
     {
        width:340
     }
    },
    image:{
        "@media (min-width:320px) and (max-width : 480px)" :{
          display:'none'
          }
    },
    h2tag:{
        "@media (min-width:320px) and (max-width : 480px)" :{
            fontSize:19
          }
    }
  
  }))
function Signup()
{
    const ClassNames = useStyles();
    const [signupObj,setSignupObj] = React.useState({firstname : "",lastname:"",email:"",password:"",confirmpassword:""})
    const [regexObj,setRegexObj] = React.useState({firstborder: false,firstHelper: "",lastborder: false,
    lastHelper: "",emailborder: false,emailHelper: "",passwordborder: false,passwordHelper: "",confirmpassborder:false,confirmpassHelper:""})
    const takeFirstname = (e) => {
        setSignupObj({...signupObj,firstname:e.target.value})
    }
    const takeLastname = (e) => {
        setSignupObj({...signupObj,lastname:e.target.value})
    }
    const takeEmail = (e) => {
        setSignupObj({...signupObj,email:e.target.value})
    }
    const takePassword = (e) => {
        setSignupObj({...signupObj,password:e.target.value})
    }
    const takeConfirmPassword = (e) => {
        setSignupObj({...signupObj,confirmpassword:e.target.value})
    }
    const Submit =() => { 
    if(signupObj.firstname === ""&&signupObj.lastname===""&&signupObj.email===""&&signupObj.password===""&&signupObj.confirmpassword==="") {
        setRegexObj({...regexObj,firstborder: true,lastborder:true,emailborder:true,passwordborder:true,
            firstHelper :"Enter first name",lastHelper:"enter last name",emailHelper:"enter username",
            passwordHelper:"enter password",confirmpassborder:true,confirmpassHelper:"Enter confirm password"})
            
    } 
    else{
        let FirstNametest = FirstnameRegex.test(signupObj.firstname);
        let LastNametest = LastnameRegex.test(signupObj.lastname);
        let EmailTest = EmailRegex.test(signupObj.email);
        let PasswordTest = PasswordRegex.test(signupObj.password);

        if(FirstNametest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                firstborder: false,
                firstHelper:""
              }));
        }
        else if(FirstNametest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                firstborder: true,
                firstHelper:"Enter correct name"
              }));
        }
        if(LastNametest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                lastborder: false,
                lastHelper:""
              }));
        }
        else if(LastNametest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                lastborder: true,
                lastHelper:"enter correct last name"
              }));
        }
        if(EmailTest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                emailborder: false,
                emailHelper:""
              }));
        }
        else if(EmailTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                emailborder: true,
                emailHelper:"enter valid email address"
              }));
        }
        if(PasswordTest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                passwordborder: false,
                passwordHelper:""
              }));
        }
        else if(PasswordTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                passwordborder: true,
                passwordHelper:"enter valid password"
              }));
        }

      
        if(EmailTest===true&&FirstNametest===true&&LastNametest===true&&PasswordTest===true) {
            signup(signupObj).then((response)=>{console.log(response)}).catch((error)=>{console.log(error)})
        }
    }
    
}

return(
<div class="signup">
    <div class="inputdata">
        <div>
            <img src="img/Google.png" alt="google"/>
        </div>
        <div>
            <h2 className={ClassNames.h2tag}>Create Your Google Account</h2>
        </div>
        <div class="textfeild1">
            
        <TextField onChange={takeFirstname}  className ={ClassNames.textfeild} sx={{ marginRight: 1,paddingBottom:2}} error={regexObj.firstborder} helperText={regexObj.firstHelper}  id="outlined-basic" label="Firstname" size="small"  variant="outlined" />
        <TextField onChange={takeLastname}  className ={ClassNames.textfeild}  error={regexObj.lastborder} helperText={regexObj.lastHelper}  id="outlined-basic" label="Last Name"   size="small"   variant="outlined" />
        </div>
        <TextField  className ={ClassNames.textfeild} onChange={takeEmail} error={regexObj.emailborder} helperText={regexObj.emailHelper} id="outlined-basic" label="Username"   size="small"   variant="outlined" />
       
        <small class="text">You can use Letters,numbers and periods</small>
           
        <div class="textfeild1">
        <TextField onChange={takePassword}  className ={ClassNames.textfeild} sx={{ marginRight: 1,paddingBottom:2}} error={regexObj.passwordborder} helperText={regexObj.passwordHelper}  id="outlined-basic" label="Password"   size="small"   variant="outlined" />
            <TextField id="outlined-basic"   className ={ClassNames.textfeild}  label="Confirm Password" onChange={takeConfirmPassword} error={regexObj.confirmpassborder} helperText={regexObj.confirmpassHelper}  size="small"   variant="outlined" /><br></br>
            <small class="text">Use 8 or more characters with a mix of letters, numbers & symbols</small>
        </div>
        <div>
        <FormGroup>
            <FormControlLabel  control={<Checkbox defaultChecked />} label="Show Password" />
        
        </FormGroup>
        </div>
        <div class="signupfooter">
        <Link to="/" className="btn btn-primary">Signin instead</Link>
        
            <Button variant="contained" onClick={Submit}>Next</Button>
        </div>
    </div>
    <div class="image">
    <img height="200px"src="img/acc.png" alt="google"/>
    </div>
</div>)
}
export default Signup;