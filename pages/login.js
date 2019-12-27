import { useRouter } from 'next/router';
import Layout from '../components/MyLayout';
import LinkMUI from '../components/myLibrary/LinkMUI'
import Paper from '@material-ui/core/Paper';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import images from '../assets/images/images'

const Login = () => {
    return (
        <div style={{backgroundColor: "#DEDEDE", display: "flex", flexDirection: "column", height: "100vh", width: "100vw", justifyContent: "center", alignItems: "center"}}>
            <Paper elevation={1} style={{width: "80%", height: "80%", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center"}} >
                <h1 style={{lineHeight: 0.8}}>Statement Processor</h1>
                <img src={require('../public/images/numbers-excel.jpeg')} />
                <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center"}}>
                    <TextField id="standard-basic" label="Username" style = {{width: 250, margin: 10}}/>
                    <TextField id="standard-basic" label="Password" style = {{width: 250, margin: 10}}/>
                    <LinkMUI href="/about" title="Login" variant="contained" style={{margin: 10, width: 200}}>
                        Login Here
                    </LinkMUI>
                </div>
            </Paper>
        </div>
    )
}

export default Login


// import Layout from '../components/MyLayout';
// import Link from 'next/link';
// import fetch from 'isomorphic-unfetch';

// const Index = props => (
//   <Layout>
//     <h1>Batman TV Shows</h1>
//     <ul>
//       {props.shows.map(show => (
//         <li key={show.id}>
//           <Link href="/post2/[id]" as={`/post2/${show.id}`}>
//             <a>{show.name}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// );

// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();

//   console.log(`Show data fetched. Count: ${data.length}`);

//   return {
//     shows: data.map(entry => entry.show)
//   };
// };

// export default Index;