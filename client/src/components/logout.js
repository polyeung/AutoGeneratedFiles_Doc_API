import React from 'react'
import {GoogleLogout} from 'react-google-login'


const clientId = "808988139908-umt2s1gsc1ntrml0j89vvtj2jvii6qmu.apps.googleusercontent.com"

function Logout() {
    const onSuccess = () => {
        console.log("Log our success");
    }
    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            >
            </GoogleLogout>
        </div>
    )

}

export default Logout;