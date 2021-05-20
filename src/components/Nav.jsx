import React from 'react'
import {Navbar} from 'react-bootstrap'

function Nav() {
    return (
        <div>
            <Navbar expand="lg" variant="dark" bg="success">
                <Navbar.Brand className="mx-auto"><h2>TODO LIST</h2></Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default Nav
