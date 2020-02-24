import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

const ListItem = (props) => {

    const [categoryName, setCategoryName] = useState("");
    const [categoryList, setCategoryList] = useState("");
    const isDisabled = props.disabled
    
    const onAddItem = () => {
        props.addItem(categoryName, categoryList)
        setCategoryName("")
        setCategoryList("")
     };
     const onRemoveCategory = () => {
         props.removeCategory(props.object.category)
     };

    return(
        <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", height: 45}}>
            <TextField
            disabled={isDisabled}
            style={{margin: 10}}
            label={isDisabled ? false : "Category Name"}
            value={isDisabled ? props.object.category : categoryName}
            onChange={(event) => {return setCategoryName(event.target.value)}}
            />
            <TextField
            disabled={isDisabled}
            style={{margin: 10}}
            label={isDisabled ? false : "Keywords"}
            value={isDisabled ? props.object.keywords : categoryList}
            onChange={(event) => {return setCategoryList(event.target.value)}}
            />

            {isDisabled ? <Button onClick={() => onRemoveCategory()}><RemoveCircleIcon/></Button> : <Button onClick={() => {(categoryName != "") ? onAddItem() : null}}><AddCircleIcon/></Button>}
        </div>
    )
}

export default ListItem