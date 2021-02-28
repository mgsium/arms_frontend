import React from "react";

import { cx } from "emotion";
import Styles from "./LoginStyles";
import Template from "../Template/Template";
import AuthCard from "../../Widgets/AuthCard/AuthCard";
import { Form, Button } from "react-bootstrap";
import AuthCredentialsBuilder from "../../../helpers/AuthCredentialsBuilder";
import User from "../../../types/User";

import $ from "jquery";
import AuthCredentials from "../../../types/AuthCredentials";

type Props = {};
type State = {
    authCredentialsBuilder: AuthCredentialsBuilder,
    emailIsValid: boolean,
    showErrorMsg: boolean
};

export default class Login extends React.Component<Props, State> {

    usernameCharacterLimit: number = 60;

    constructor(props: Props) {
        super(props);

        this.state = {
            authCredentialsBuilder: new AuthCredentialsBuilder(),
            emailIsValid: true,
            showErrorMsg: (new URLSearchParams(window.location.search)).has("error")
        }

        // Method Bindings
        this.fieldsAreValid = this.fieldsAreValid.bind(this);
        this.submit = this.submit.bind(this);
        this.updateEmailField = this.updateEmailField.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
    }

    updateEmailField(e: any) {
        const authCredentialsBuilder: AuthCredentialsBuilder = this.state.authCredentialsBuilder;
        authCredentialsBuilder.setEmail(e.target.value);
        this.setState({ authCredentialsBuilder: authCredentialsBuilder, emailIsValid: this.emailIsValid(authCredentialsBuilder.getEmail()) });
    }

    updatePassword(e: any) {
        const authCredentialsBuilder: AuthCredentialsBuilder = this.state.authCredentialsBuilder;
        authCredentialsBuilder.setPassword(e.target.value);
        this.setState({ authCredentialsBuilder: authCredentialsBuilder });
    }

    emailIsValid(email: string): boolean {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable no-useless-escape
        return re.test(String(email).toLowerCase());
    }

    fieldsAreValid(): boolean {
        return !!$("#email_field").val() && this.state.emailIsValid && !!$("#password_field").val();
    }

    submit() {
        const authCred: AuthCredentials = this.state.authCredentialsBuilder.buildUser();
        
        // Register
        fetch("http://localhost:3001/login", {
            headers: {"Content-Type": "application/json"},
            method: "POST",
            credentials: "include",
            body: JSON.stringify(authCred)
        });
    }

    render() {
        return (
            <Template>
                <h1 className="page-header">Login</h1>
                <br/>
                <div className="ml-auto mr-auto" style={{ display: "table", width: "100%", maxWidth: "600px", minHeight: "60vh" }}>
                    <AuthCard>
                        <Form className={cx( Styles.formStyles, "ml-auto mr-auto" )}>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                    placeholder="Enter Email..." 
                                    id="email_field"
                                    name="email"
                                    size="lg"
                                    value={this.state.authCredentialsBuilder.getEmail()}
                                    onChange={this.updateEmailField}
                                    onFocus={this.updateEmailField}
                                    defaultValue=""
                                    isInvalid={!this.state.emailIsValid}
                                />
                            </Form.Group>
                            <br/>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    placeholder="Enter Password..." 
                                    id="password_field"
                                    name="password"
                                    type="password"
                                    size="lg"
                                    value={this.state.authCredentialsBuilder.getPassword()}
                                    onChange={this.updatePassword}
                                    onFocus={this.updatePassword}
                                    defaultValue=""
                                />
                            </Form.Group>
                            <div className={cx( Styles.errorBoxStyles )} hidden={!this.state.showErrorMsg}>
                                The username and password combination does not match any account on record. Please try again.
                            </div>
                            <Button 
                                size="lg" 
                                variant="success"
                                className={cx( Styles.submitButtonStyles )} 
                                disabled={!this.fieldsAreValid()}
                                onClick={() => {this.submit(); window.location.href = "/"}}
                            >
                                Submit
                            </Button>
                        </Form>
                    </AuthCard>
                </div>
            </Template>
        )
    }

}