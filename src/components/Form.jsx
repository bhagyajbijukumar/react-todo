import React from 'react'
import { FormControl, Button } from 'react-bootstrap'

function Form(props) {
    return (
        <div className="inline" style={{display: "flex"}}>
            <FormControl onChange={props.onChange} type="text" placeholder="Add a ToDo..." className="" />
            <Button onClick={props.onClick} variant="outline-success">Add</Button>
        </div>
    )
}

export default Form
