import React from 'react'
import { Grid,Paper,Button} from '@material-ui/core'
import {Link} from "react-router-dom"
import Logo from './Logo'
import Footer from './Footer'
const Notif=()=>{
    const btnstyle={textTransform : 'none',margin:'8px 0',backgroundColor: '#f1AB65',borderRadius:'20px',width: '150px',color:'white',fontSize:'15px'}
    const h2style={textAlign:'center',fontSize:'17px'}
    const link1={color:'white',textDecoration: 'none' }
    return(
        <Grid> 
            <Paper className="grid_form" style={{marginTop:'15%'}} elevation={0} >               
               <h2 style={h2style}>We've sent you an email with password reset instructions.</h2>
               <h2 style={h2style}>If the email doesn't show up soon,check your spam folder.</h2>
                 <Grid align='center'>
                    <Button type='submit' variant="contained" style={btnstyle} fullWidth><Link to="/login" style={link1}>Return To Login</Link></Button>
                </Grid>
            </Paper>
            <Grid style={{marginTop:'65%'}}>
                <Logo/>
                <Footer/>
            </Grid>
        </Grid>     
    )
}
export default Notif