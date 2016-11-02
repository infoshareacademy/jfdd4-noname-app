import React from 'react'
import {connect} from 'react-redux'
import {logIn, logOut} from './actionCreators'
import {Form, FormGroup, Col, ControlLabel, FormControl, Button} from 'react-bootstrap'

const mapStateToProps = (state) => ({
    token: state.login.key,
    userName: state.login.username,
})

const mapDispatchToProps = (dispatch) => ({
    logIn: (username, password) => dispatch(logIn(username, password)),
    logOut: (token) => dispatch(logOut(token)),
})


class LoginForm extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <div>

                { this.props.userName === 'Zaloguj się' ?
                <Form horizontal
                      onSubmit={(event) => {
                          event.preventDefault()
                          this.props.logIn(this.state.username, this.state.password)

                      }}>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} smOffset={2} sm={8}>
                            Nazwa użytkownika
                        </Col>
                        <Col smOffset={2} sm={8}>
                            <FormControl
                                type="text"
                                placeholder="username"
                                onChange={(event) => this.setState({
                                    username: event.target.value
                                })}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} smOffset={2} sm={8}>
                            Hasło
                        </Col>
                        <Col smOffset={2} sm={8}>
                            <FormControl
                                type="password"
                                placeholder="password"
                                onChange={(event) => this.setState({
                                    password: event.target.value
                                })}
                            />
                        </Col >
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={8}>
                            <Button type="submit">
                                Zaloguj się
                            </Button>

                        </Col>
                    </FormGroup>
                </Form>  :


                    <Col smOffset={2} sm={8}>
                        <Button type="submit"
                                onClick={(event) => {
                                    event.preventDefault()
                                    this.props.logOut(this.props.token)
                                }}>
                            Wyloguj się
                        </Button>

                    </Col>


                }
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)