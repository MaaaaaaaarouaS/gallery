import React from 'react'
import { Grid,Paper,TextField,Button,Typography} from '@material-ui/core'
const Verify=()=>{
    const btn1style={fontFamily: 'Times, Times New Roman, serif',textTransform : 'none',margin:'8px 0',marginTop:'10px',backgroundColor: '#ffe599',borderRadius:'10px',width: '160px',color:'white',fontSize:'18px'}
    const inputstyle={marginBottom:'10px',marginTop:'10px'}
    const h2style={fontSize:'17px'}
    return(
        <Grid> 
            <Paper className="grid_form" style={{marginTop:'17%'}} elevation={0} >
            <h2 style={h2style}>We sent you a NEW code (expire in 09:53)</h2>  
            <Typography style={{fontSize:'11px'}}>Enter it belo to verify email@email.com</Typography>             
            <TextField style={inputstyle}  label='Password' variant="outlined" type='password' fullWidth size="small"required/>
            </Paper>
            <Grid className="grid_verify" align='center'>
                <span  className="logo"><p style={{marginTop:'50px'}}>Logo</p></span>
            </Grid>
            <Grid className="grid_1_verify" align='center'>
                <Button type='submit' variant="contained" style={btn1style} fullWidth>Sign up</Button>
            </Grid>   
        </Grid>      
    )
} 
export default Verify