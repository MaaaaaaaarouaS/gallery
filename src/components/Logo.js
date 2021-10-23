import React from 'react'
import { Grid,Button} from '@material-ui/core'
import {Link} from "react-router-dom";
const Logo=()=>{
    const btn1style={fontFamily: 'serif',textTransform : 'none',margin:'8px 0',backgroundColor: '#ffe599',borderRadius:'10px',width: '160px',fontSize:'18px'}
    const btn2style={fontFamily: 'serif',textTransform : 'none',margin:'8px 0',border:' 1px solid #ffe599',borderRadius:'10px',width: '100px',fontSize:'16px'}
    const link1={color:'white',textDecoration: 'none' }
    const link2={color:'#ffe599',textDecoration: 'none'}
    return(   
        <Grid> 
            <Grid className="grid" align='center'>
                <span  className="logo"><p style={{marginTop:'50px'}}>Logo</p></span>
            </Grid>
            <Grid className="grid_1" align='center'>
                <Button type='submit' variant="contained" style={btn1style} fullWidth><Link style={link1} to="/signup">Sign up</Link></Button>
                <h1>OR</h1>
                <Button type='submit' style={btn2style} fullWidth><Link style={link2} to="/">Log in</Link></Button>
            </Grid>  
        </Grid>   
    )
}
export default Logo