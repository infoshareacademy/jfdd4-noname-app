import React from 'react'
import {connect} from 'react-redux'
import {logIn} from './actionCreators'
import {Form, FormGroup, Col, ControlLabel, FormControl, Button} from 'react-bootstrap'

const mapStateToProps = (state) => ({
    token: state.login.key,
    userName: state.login.username

})

const mapDispatchToProps = (dispatch) => ({
    logIn: (username, password) => dispatch(logIn(username, password)),
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
                <Form horizontal
                      onSubmit={(event) => {
                          event.preventDefault()
                          this.props.logIn(this.state.username, this.state.password)

                      }}>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={4}>
                            Nazwa użytkownika
                        </Col>
                        <Col sm={8}>
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
                        <Col componentClass={ControlLabel} sm={4}>
                            Hasło
                        </Col>
                        <Col sm={8}>
                            <FormControl
                                type="password"
                                placeholder="Password"
                                onChange={(event) => this.setState({
                                    password: event.target.value
                                })}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={4} sm={8}>
                            <Button type="submit">
                                Zaloguj się
                            </Button>
                            <div>Witaj, {this.props.userName}</div>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)