import React from 'react'
import { Grid,Paper, Button, Typography,Link } from '@material-ui/core'
import Logo from './Logo'
import Footer from './Footer'
const SignupAccount=()=>{
    const btntwitch={fontFamily: 'serif',textTransform : 'none',margin:'8px 0',backgroundColor: '#8457cc',borderRadius:'6px',width: '85%',color:'white',fontSize:'14px'}
    const btnfb={fontFamily: 'serif',textTransform : 'none',margin:'8px 0',backgroundColor: '#356cac',borderRadius:'6px',width: '85%',color:'white',fontSize:'14px'}
    const btntwiter={fontFamily: 'serif',textTransform : 'none',margin:'8px 0',backgroundColor: '#66afff',borderRadius:'6px',width: '85%',color:'white',fontSize:'14px'}
    const btngoogle={fontFamily: 'serif',textTransform : 'none',margin:'8px 0',backgroundColor: '#eb3d50',borderRadius:'6px',width: '85%',color:'white',fontSize:'14px'}
    const btnemail={fontFamily: 'serif',textTransform : 'none',margin:'8px 0',backgroundColor: '#f1be74',borderRadius:'6px',width: '85%',color:'white',fontSize:'14px'}
    return(
        <Grid> 
            <Paper className="grid_form" elevation={0} >
                <Grid align='center'>
                    <span className="dot"></span>
                    <h2>Create your account</h2>
                </Grid>
                <Grid align='center'>
                    <Button type='submit' variant="contained" style={btntwitch} fullWidth>Sign up with Twitch</Button>
                    <Button type='submit' variant="contained" style={btnfb} fullWidth>Sign up with Facebook</Button>
                    <Button type='submit' variant="contained" style={btntwiter} fullWidth>Sign up with Twiter</Button>
                    <Button type='submit' variant="contained" style={btngoogle} fullWidth>Sign up with Google</Button>
                    <Button type='submit' variant="contained" style={btnemail} fullWidth>Sign up with Email</Button>
                </Grid>
                <Typography style={{fontSize:'11px'}} align='center'> Already have an account ? 
                     <Link style={{color:'#f1AB65',paddingLeft:'10px'}} href="#" >
                         Log in! 
                     </Link>
                    </Typography>
                <Grid align='center'>
                    <p style={{color:'#5b5b5b',fontSize:'10px',maxWidth:'85%'}}>We'll never post or share anything without your permission.</p>                
                </Grid>
            </Paper>
            <Grid style={{marginTop:'55%'}}>
                <Logo/>
                <Footer/>
            </Grid> 
        </Grid>        
    )
}
export default SignupAccount