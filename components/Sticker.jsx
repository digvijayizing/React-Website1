import React from 'react'
import "./sticker.css"
export default function Sticker () {
  return (
    <div className='bg2'>
      <div className='sec1'>
       <div className='lin'> <button className='colorblock'>1</button><p className='par'>NGFW, IDS/IPS,VPN,MFA,<br></br> NAC ,DLP</p></div>
       <div className='lin'> <button className='colorblock'>2</button><p className='par'>Email Archival ,DMARC & <br></br>Domain Protection</p></div>
       <div className='lin'> <button className='colorblock'>3</button><p className='par'>SASE,SSE,ZTNA.CASB,<br></br>EDR XDR ,SOC,MDM</p></div>
       <div className='lin'> <button className='colorblock'>4</button><p className='par'>WAF,DDoS Vuln Scan,<br></br>BAS,API Security</p></div>
       <div className='lin'> <button className='colorblock'>5</button><p className='par'>Access and Identity Mgmt.,<br></br> PAM ,UEBA</p></div>
      </div>
<div className='sec2'>
       <div className='lin'> <button className='colorblock'>6</button><p className='par'>Data backup and Archival,<br></br>Encryption</p></div>
       <div className='lin'> <button className='colorblock'>7</button><p className='par'>IoT Security ,WIPS,Sec <br></br>Awarness Training</p></div>
      </div>
    </div>
  )
}
