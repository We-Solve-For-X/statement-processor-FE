import React from 'react'
import PageLayout from '../components/PageLayout';
import { useRouter } from 'next/router';
import Button from '@material-ui/core/Button'
import CategoryList from '../components/CategoryList'

export default class Processor extends React.Component {

constructor(props) {
    super(props);
    this.state = { counter: 0 };
}

render() {
    return (
        <PageLayout>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", padding: 15}}>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start"}}>
                    <h1>Statement Processor</h1>
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start"}}>
                    <h2>Define Search Categories</h2>
                    <CategoryList/>
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start"}}>
                    <h2>Upload File</h2>
                    <input type="file" onChange={this.fileHandler.bind(this)} style={{"padding":"10px"}} />
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start"}}>
                <Button variant="contained" color="secondary">
                Process Statement
                </Button>
                </div>

            </div>
        </PageLayout>
    )
}

fileHandler = (event) => {
    let fileObj = event.target.files[0];
    console.log('uploaded')             

  }

}


