import React from 'react'
import { Grid,Paper,Button} from '@material-ui/core'
import {Link} from "react-router-dom"
import Logo from './Logo'
const Notif=()=>{
    const btnstyle={textTransform : 'none',margin:'8px 0',backgroundColor: '#e1b11e',borderRadius:'20px',width: '150px',color:'white',fontSize:'15px'}
    const h2style={textAlign:'center',fontSize:'17px'}
    const link1={color:'white',textDecoration: 'none' }
    const logo={marginTop:'11%'}
    return(
        <Grid> 
            <Paper className="grid_form" style={{marginTop:'15%'}} elevation={0} >               
               <h2 style={h2style}>We've sent you an email with password reset instructions.</h2>
               <h2 style={h2style}>If the email doesn't show up soon,check your spam folder.</h2>
                 <Grid align='center'>
                    <Button type='submit' variant="contained" style={btnstyle} fullWidth><Link to="/" style={link1}>Return To Login</Link></Button>
                </Grid>
            </Paper>
            <div style={logo}>
                <Logo/>
            </div> 
        </Grid>     
    )
}
export default Notif