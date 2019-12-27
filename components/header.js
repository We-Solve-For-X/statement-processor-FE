import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LinkMUI from '../components/myLibrary/LinkMUI'


export default function ButtonAppBar() {

  return (
    <div>
      <AppBar position="static">

        <Toolbar style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
         <div>
          <LinkMUI title={"process"} href={'/process'}/>
          <LinkMUI title={"about"} href={'/about'}/>
         </div>
         
         <div>
          <LinkMUI title={"logout"} href={'/'}/>
         </div>
        </Toolbar>
        
      </AppBar>
    </div>
  );
}







// import Link from 'next/link';
// import Button from '@material-ui/core/Button';

// const linkStyle = {
//   marginRight: 15
// };

// const Header = () => (
//   <div>
//     <Link href="/process">
//       <a style={linkStyle}>Processor</a>
//     </Link>
//     <Link href="/about">
//       <a style={linkStyle}>About</a>
//     </Link>
//     <Link href="/login">
//       <a style={linkStyle}>Logout</a>
//     </Link>
//   </div>
// );

// export default Header;