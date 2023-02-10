
import './App.css';
import  React, {useEfect, useEffect} from 'react';
import LoginButton from "./components/login";
import LogoutButton from "./components/logout";
import {gapi} from 'gapi-script';


const CLIENT_ID = "808988139908-umt2s1gsc1ntrml0j89vvtj2jvii6qmu.apps.googleusercontent.com";
const API_KEY = "AIzaSyCEJI8skglxKphl9_Xn0GaJGcMMGFd_eMA";
const SCOPES = "https://www.googleapis.com/auth/drive";

function createFile(tag){
  // make blank documents
  var accessToken = gapi.auth.getToken().access_token;
  fetch('https://docs.googleapis.com/v1/documents',{
    method:"POST",
    headers: new Headers({'Authorization': 'Bearer' + accessToken})
  }).then((res) => {
    return res.json();
  }).then(function(val){
    console.log(val);
    console.log(val.documentId);
  });

}
function App() {
  useEffect(() => {
    function start(){
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPES
      })
    };
    gapi.load('client:auth2', start)
  })
  return (
    <div className="App">
     <LoginButton/>
     <LogoutButton/>
     <button onClick={() => createFile('stats250')}>Create STATS250 NOTE</button>
    </div>
  );
}

export default App;
