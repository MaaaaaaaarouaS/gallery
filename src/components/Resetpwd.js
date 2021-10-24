import React from 'react'
import { Grid,Paper, Button} from '@material-ui/core'
import {Link} from "react-router-dom"
const Resetpwd=()=>{
    const btnstyle={textTransform : 'none',margin:'8px 0',backgroundColor: '#f1AB65',borderRadius:'20px',width: '150px',color:'white',fontSize:'15px'}
    const link1={color:'white',textDecoration: 'none' }
    return(
        <div className="Body_pwd">
        <Grid style={{margin:'auto',padding:'15px'}}>  
            <h3>Subjet:Resset Account Password</h3>
            <Paper className="grid_form1" elevation={0} >
            <h3>Dear @username,</h3>
            <p>We've received a request to reset your password fpr your LOGO account.</p>
            <h3>Simply click on the button to set a new password:</h3>
                <Grid align='center'>
                    <Button type='submit' variant="contained" style={btnstyle} fullWidth><Link to="/notif" style={link1}>Reset Password</Link></Button>
                </Grid>
            <p>If this is a mistake just ingnore this email,your password will not be changed</p>
            </Paper>  
        </Grid>  
        </div>
    )
}
export default Resetpwd