import LinkMUI from '../components/myLibrary/LinkMUI'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import images from '../assets/images/images'

const Login = () => {
    return (
        <div style={{backgroundColor: "#DEDEDE", display: "flex", flexDirection: "column", height: "100vh", width: "100vw", justifyContent: "center", alignItems: "center"}}>
            <Paper elevation={1} style={{width: "80%", height: "80%", maxHeight: 500, maxWidth: 400, display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center"}} >
                <h1 style={{lineHeight: 0.8}}>Statement Processor</h1>
                {/* <img src={images.excelNumbers} style={{ display: "block", width: "35vw" }} /> */}
                <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center"}}>
                    <TextField id="standard-basic" label="Username" style = {{width: 250, margin: 10}}/>
                    <TextField id="standard-basic" label="Password" style = {{width: 250, margin: 10}}/>
                    <LinkMUI href="/process" title="Login" variant="contained" style={{margin: 10, width: 200}}>
                        Login Here
                    </LinkMUI>
                </div>
            </Paper>
        </div>
    )
}

export default Login