import React from 'react'
import { Card, Button } from 'react-bootstrap'

function ToDo(props) {
    return (
        <Card style={{ marginBottom: 5 }}>
            <Card.Title style={{ "padding": "20px", "display": "flex" }}>
                <input style={{margin: "auto"}} type="checkbox" />
                <h2 style={{ width: "100%", marginLeft: 10 }}>{props.title}</h2>
                <Button onClick={props.deleteHandler} variant="danger" >delete</Button>
            </Card.Title>
        </Card>
    )
}
export default ToDo
