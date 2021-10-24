import React from 'react'
import { Grid,Paper,TextField, Button, Typography} from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from "react-router-dom";
import './Signup'
import Logo from './Logo';
import Footer from './Footer';
const Login=()=>{
    const btnstyle={textTransform : 'none',margin:'8px 0',backgroundColor: '#f1AB65',borderRadius:'20px',width: '150px',color:'white',fontSize:'15px'}
    const inputstyle={marginBottom:'10px'}
    const linkstyle={textDecoration: 'none',color:'#f1AB65',paddingLeft:'10px'}
    const link1={color:'white',textDecoration: 'none' }
    return(
        <Grid> 
            <Paper className="grid_form" elevation={0} >
                <Grid align='center'>
                    <span className="dot"></span>
                    <h2>Log in</h2>
                </Grid>
                <TextField style={inputstyle} label="Email" variant="outlined" fullWidth size="small"required/>
                <TextField style={inputstyle}  label='Password' variant="outlined" type='password' fullWidth size="small"required/>
                <FormControlLabel 
                    control={
                    <Checkbox 
                    style={{
                        color: "#f1AB65",
                        width: 16,
                        height: 16
                      }}
                        name="checkedB"
                        size="small"
                    />
                    }
                    label={<Typography variant="body2" style={{fontSize:'12px'}} >Auto Login</Typography>}
                 />
                 <Typography><Link style={{color:'#5b5b5b',fontSize:'12px'}} to="/forget_password">Forgot password?</Link></Typography>
                <Grid align='center'>
                    <Button type='submit' variant="contained" style={btnstyle} fullWidth><Link style={link1} to="/gallery">Log in</Link></Button>
                </Grid>
                <Typography style={{fontSize:'11px'}} align='center'> Don't have an account ? 
                     <Link style={linkstyle} to="/signup" >
                         Sign up! 
                     </Link>
                    </Typography>
                <Grid align='center'>
                    <p style={{color:'#5b5b5b',fontSize:'10px',maxWidth:'85%'}}>We'll never post or share anything without your permission.</p>                
                </Grid>
            </Paper>
            <Grid style={{marginTop:'60%'}}>
                <Logo/>
                <Footer/>
            </Grid>   
        </Grid>      
    )
}
export default Login