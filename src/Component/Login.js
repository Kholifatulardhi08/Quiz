import React, { Component } from 'react'
import { Button, Container, Grid, TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default class Login extends Component {
    state = {
        email:'',
        password: ''
    }
    render() {
         const {email, password} = this.state
        return (
            <Container>
                <Grid container style={{ justifyContent: 'center' }}>
                    <Grid xs="4">
                        <h2> Login </h2>
                        <form>
                            <TextField fullWidth margin="dense" type="email" size="small" value={email} onChange={this.handleChangeField} name="email" label="Email" required />
                            <TextField fullWidth margin="dense" type="password" size="small" value={password} onChange={this.handleChangeField} name="password" label="Password" required />
                            <Button fullWidth margin="dense" variant="contained" color="primary">Login</Button>
                        </form>
                        <p>Belum Punya Akun? <Link to="/registrasi">Sign Up</Link></p>
                        <p>Ingin Masuk Sebagai Guest? <Link to="/App">Guest</Link></p>
                </Grid>
                </Grid>
            </Container >
        )
    }
}
