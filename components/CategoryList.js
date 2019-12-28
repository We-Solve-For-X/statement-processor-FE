import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';

export default class Processor extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            categories: [],
            catName: '',
            catKeys: ''
     }
    }
    
    render() {
        const {catName, catKeys, categories} = this.state
        return (
            <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", padding: 15}}>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end"}}>
                <TextField
                style={{margin: 10}}
                label="Category Name"
                value={catName}
                onChange={(event) => {return this.setState({catName: event.target.value})}}
                />
                <TextField
                style={{margin: 10}}
                label="Keywords"
                value={catKeys}
                onChange={(event) => {return this.setState({catKeys: event.target.value})}}

                />
                <Button onClick={this.addCategory}>Add</Button>
                </div>
                
                <ul>
                    {categories.map((val) => {return(
                        <li key={val.name}>
                    <div>
                    <h5>Category: {val.name}</h5>
                    <h5>Keys:     {val.keys}</h5>
                    </div>
                        </li>
                    )})}
                </ul>
            </div>
        )
    }

    addCategory = () => {
        const { categories, catKeys, catName } = this.state
        const nCategories = categories.concat([{name: catName, keys: catKeys}])
        this.setState({
            categories: nCategories,
            catName: '',
            catKeys: ''
        })
    }
    

}

