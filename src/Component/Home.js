import React, {Component} from 'react'
import { Button, Container, Paper } from '@material-ui/core'

export default class Home extends Component{
    render(){
        return(
            <Container>
                <Paper>
                    <Button onClick={this.handleLogOut}>Login</Button>
                    <h1>Ini Home</h1>
                </Paper>
            </Container>
        )
    }
}