import React from 'react'
import {GoogleLogin} from 'react-google-login'

const clientId = "808988139908-umt2s1gsc1ntrml0j89vvtj2jvii6qmu.apps.googleusercontent.com"

function Login(){

    const onSuccess = (res) => {
        console.log("Login Success! Current user: ", res.profileObj);
    }
    const onFailure = (res) => {
        console.log("Login Fail! res", res);
    }



    return(
    <div id = "signInButton">
        <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        >

        </GoogleLogin>

    </div>
    )
}

export default Login;