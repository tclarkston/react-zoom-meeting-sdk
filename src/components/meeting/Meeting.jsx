import React from 'react';
// import styles from './Meeting.module.css';

import { ZoomMtg } from '@zoom/meetingsdk';

ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();

function Meeting({data}) {

  var authEndpoint = 'http://localhost:7077/api/meeting'
  // var authEndpoint = 'http://localhost:4000'; //Working express api.
  
  var sdkKey = 'u9vx8rD3So2Wb7JOVeXKKg'
  var leaveUrl = 'http://localhost:9999'

  function getSignature(e) {
    e.preventDefault();

    fetch(authEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        meetingNumber: data.meetingNumber,
        role: data.role
      })
    })
    .then(res => res.json())
    .then(response => {
      startMeeting(response.signature)
    }).catch(error => {
      console.log(error);
      console.error(error)
    })
  }

  function startMeeting(signature) {
    document.getElementById('zmmtg-root').style.display = 'block'

    ZoomMtg.init({
      leaveUrl: leaveUrl,
      patchJsMedia: true,
      success: (success) => {
        console.log(success)

        ZoomMtg.join({
          signature: signature,
          sdkKey: sdkKey,
          meetingNumber: data.meetingNumber,
          passWord: data.password,
          userName: data.userName,
          userEmail: data.userEmail,
          tk: sdkKey,
          zak: sdkKey,
          success: (success) => {
            console.log(success)
          },
          error: (error) => {
            console.log(error)
          }
        })
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  //For testing: remove for live site. Put async call into useEffect to run once on first load to get the signature and load the data.
  return (
    <div className="App">
      <main>
        <h1>Zoom Meeting SDK Sample React</h1>

        <button onClick={getSignature}>Join Meeting</button>
      </main>
    </div>
  );
}

export default Meeting;