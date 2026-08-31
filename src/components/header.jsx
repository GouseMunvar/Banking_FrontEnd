import React from 'react'
import Logo from './logo'

const Header = () => {
  return (
    <div style={{width:"100%",display:"flex",alignItems:"center",height:"38px",gap:"12px",marginBottom:"10px"}}>
        <Logo/>
        <h3 style={{color:"#F2F2F5"}}>VoltWallet</h3>
    </div>
  )
}

export default Header
