import React from 'react'
import '../App.css'
import Logo from './Logo'
import { Grid,Paper,TextField, Button, Typography} from '@material-ui/core'
import {Link} from "react-router-dom";
const Signup=()=>{
    const btnstyle={textTransform : 'none',margin:'8px 0',backgroundColor: '#e1b11e',borderRadius:'20px',width: '150px',color:'white',fontSize:'15px'}
    const inputstyle={marginBottom:'10px'}
    const linkstyle={textDecoration: 'none',color:'#e1b11e',paddingLeft:'10px'}
    const pstyle={color:'#5b5b5b',fontSize:'10px',maxWidth:'85%'}
    const link1={color:'white',textDecoration: 'none' }
    return(
        <Grid> 
            <Paper className="grid_form" elevation={0} >
                <Grid align='center'>
                    <span className="dot"></span>
                    <h2>Create your account</h2>
                </Grid>
                <TextField style={inputstyle} label="Email" variant="outlined" fullWidth size="small"required/>
                <TextField style={inputstyle}  label='Username' variant="outlined" fullWidth size="small"required/>
                <TextField style={inputstyle}  label='Password' variant="outlined" type='password' fullWidth size="small"required/>
                <TextField style={inputstyle}  label='Confirm password' variant="outlined" type='password' fullWidth size="small"required/>
                <Grid align='center'>
                    <Button type='submit' variant="contained" style={btnstyle} fullWidth><Link style={link1} to="/Signup_with_Account">Create Account</Link></Button>
                </Grid>
                <Typography style={{fontSize:'11px'}} align='center'> Already have an account ? 
                     <Link to="/" style={linkstyle}>
                         Log in! 
                     </Link>
                    </Typography>
                <Grid align='center'>
                    <p style={pstyle}>By creating an account,you agree to our <Link to="/conditions"> Terms and Conditions.</Link>We'll never post or share anything wiyhout your permission</p>                
                </Grid>
            </Paper>
           <Logo/>
        </Grid>
        
    )
}
export default Signup