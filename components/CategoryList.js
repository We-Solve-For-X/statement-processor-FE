import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import ListItem from '../components/ListItem'

export default class Processor extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            listItems: [], //[{category: "cat name", keywords: ["keya", "keyb"]}]
     }
    }
    
    render() {
        const { listItems } = this.state
        return (
            <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start"}}>
                <ul>
                    {listItems.map((obj) => { return(
                        <ListItem disabled={true} object={obj} key={obj.category} removeCategory={this.removeCategory} />
                    )})}
                </ul>
                <ListItem disabled={false} addItem={this.addCategory} />
            </div>
        )
    }

    addCategory = (catName = '', catKeys = [], id = 0) => {
        const newObj = {category: catName, keywords: catKeys, id: id}
        const newListItems = this.state.listItems.concat(newObj)
        this.setState({listItems: newListItems})
    }

    removeCategory = (category = '') => {
        const newListItems = this.state.listItems.filter(function(obj){
            return category != obj.category
        });
        this.setState({listItems: newListItems})
    }
}

