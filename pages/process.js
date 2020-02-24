import React from 'react'
import PageLayout from '../components/PageLayout';
import { useRouter } from 'next/router';
import Button from '@material-ui/core/Button'
import CategoryList from '../components/CategoryList'
import SearchIcon from '@material-ui/icons/Search';
import BackupIcon from '@material-ui/icons/Backup';
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
                
                <div style={{boxSizing: "border-box", borderTopLeftRadius: 20, borderTopRightRadius: 20,
                    width: "100%", maxWidth: "100vw", backgroundColor: colors.primaryGrey, height: 105 ,display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", paddingLeft: spacing.sidesPrimary, paddingRight: spacing.sidesPrimary}}>
                    <h1 style={{color: colors.primaryOffWhite}}>Statement Processor</h1>
                </div>

                 <div style={{width: "100%", paddingTop: 25,backgroundColor: colors.greySecondary ,display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", paddingLeft: spacing.boxesPrimary, paddingRight: spacing.boxesPrimary, boxSizing: "border-box"}}>
                    <h2>Define Search Categories</h2>
                    <CategoryList/>
                </div>

                <div style={{width: "100%", paddingTop: 40, backgroundColor: colors.greySecondary ,display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", paddingLeft: spacing.boxesPrimary, paddingRight: spacing.boxesPrimary, boxSizing: "border-box"}}>
                    <h2>Upload File   </h2>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <BackupIcon/>
                        <input type="file" onChange={this.fileHandler.bind(this)} style={{"padding":"10px"}} />
                    </div>
                </div>

                <div style={{borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
                    width: "100%", paddingTop: 40, paddingBottom: 60, backgroundColor: colors.greySecondary ,display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", paddingLeft: spacing.boxesPrimary, paddingRight: spacing.boxesPrimary, boxSizing: "border-box"}}>
                    <h2>Process Statement</h2>
                    <Button variant="contained" style={{color: colors.primaryOffWhite, backgroundColor: colors.primaryGrey, textEmphasisColor: 'blue'}}>
                        Start
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


