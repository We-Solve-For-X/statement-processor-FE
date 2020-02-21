import React from 'react'
import PageLayout from '../components/PageLayout';
import { useRouter } from 'next/router';
import Button from '@material-ui/core/Button'
import CategoryList from '../components/CategoryList'
import spacing from '../config/spacing'
import colors from '../config/colors'

export default class Processor extends React.Component {

constructor(props) {
    super(props);
    this.state = { counter: 0 };
}

render() {
    return (
        <PageLayout color={colors.secondaryBrown}>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", width: "100%"}}>
                
                <div style={{backgroundColor: colors.primaryGrey ,width: "100%", height: 120 ,display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", paddingLeft: spacing.sidesPrimary, paddingRight: spacing.sidesPrimary}}>
                    <h1 style={{color: colors.primaryWhiteWashed}}>Statement Processor</h1>
                </div>

                 <div style={{width: "100%", paddingTop: 20, paddingRight: spacing.sidesPrimary, paddingLeft: spacing.sidesPrimary, backgroundColor: colors.secondaryBrown ,display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start"}}>
                    <h2>(1) Define Search Categories</h2>
                    <CategoryList/>
                </div>

                <div style={{width: "100%", paddingBottom: 15, paddingRight: spacing.sidesPrimary, paddingLeft: spacing.sidesPrimary, backgroundColor: colors.secondaryBrown ,display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start"}}>
                    <h2>(2) Upload File</h2>
                    <input type="file" onChange={this.fileHandler.bind(this)} style={{"padding":"10px"}} />
                </div>

                <div style={{width: "100%", padding: 30 ,paddingRight: spacing.sidesPrimary, paddingLeft: spacing.sidesPrimary, backgroundColor: colors.secondaryBrown ,display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start"}}>
                    <h2>(3) Process Statement</h2>
                    <Button variant="contained" style={{backgroundColor: colors.primaryGrey, textEmphasisColor: 'blue'}}>
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


