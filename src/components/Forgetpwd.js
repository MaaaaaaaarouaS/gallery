import React from 'react'
import { Grid,Paper,TextField, Button} from '@material-ui/core'
import {Link} from "react-router-dom"
import Logo from './Logo'
import Footer from './Footer';
const Forgetpwd=()=>{
    const btnstyle={textTransform : 'none',margin:'8px 0',backgroundColor: '#f1AB65',borderRadius:'20px',width: '150px',color:'white',fontSize:'15px'}
    const inputstyle={marginBottom:'10px'}
    const link1={color:'white',textDecoration: 'none' }
    return(
        <Grid> 
            <Paper className="grid_form" style={{marginTop:'15%'}} elevation={0} >
                <Grid align='center'>
                    <span className="dot"></span>
                    <h2>Log in</h2>
                </Grid>
                <TextField style={inputstyle} label="Email" variant="outlined" fullWidth size="small"required/>
                 <Grid align='center'>
                    <Button type='submit' variant="contained" style={btnstyle} fullWidth><Link to="reset_password" style={link1}>Submit</Link></Button>
                </Grid>
            </Paper>
            <Grid style={{marginTop:'65%'}}>
                <Logo/>
                <Footer/>
            </Grid>
        </Grid>       
    )
}
export default Forgetpwd