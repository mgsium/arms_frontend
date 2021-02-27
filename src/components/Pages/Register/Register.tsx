import React from "react";

import { cx } from "emotion";
import Styles from "./RegisterStyles";
import Template from "../Template/Template";
import AuthCard from "../../Widgets/AuthCard/AuthCard";
import { Form, Button } from "react-bootstrap";
import UserBuilder from "../../../helpers/UserBuilder";
import User from "../../../types/User";

import $ from "jquery";

type Props = {};
type State = {
    userBuilder: UserBuilder,
    emailIsValid: boolean
};

export default class Register extends React.Component<Props, State> {

    usernameCharacterLimit: number = 60;

    constructor(props: Props) {
        super(props);

        this.state = {
            userBuilder: new UserBuilder(),
            emailIsValid: true
        }

        // Method Bindings
        this.fieldsAreValid = this.fieldsAreValid.bind(this);
        this.submit = this.submit.bind(this);
        this.updateEmailField = this.updateEmailField.bind(this);
        this.updateUsernameField = this.updateUsernameField.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.updateMentorState = this.updateMentorState.bind(this);
    }

    updateEmailField(e: any) {
        const userBuilder: UserBuilder = this.state.userBuilder;
        userBuilder.setEmail(e.target.value);
        this.setState({ userBuilder: userBuilder, emailIsValid: this.emailIsValid(userBuilder.getEmail()) });
    }

    updateUsernameField(e: any) {
        const userBuilder: UserBuilder = this.state.userBuilder;
        userBuilder.setUsername(e.target.value);
        this.setState({ userBuilder: userBuilder });
    }

    updatePassword(e: any) {
        const userBuilder: UserBuilder = this.state.userBuilder;
        userBuilder.setPassword(e.target.value);
        this.setState({ userBuilder: userBuilder });
    }

    updateMentorState(e: any) {
        const userBuilder: UserBuilder = this.state.userBuilder;
        userBuilder.setMentorStatus(e.target.value == "Mentor");
        this.setState({ userBuilder: userBuilder });
    }

    emailIsValid(email: string): boolean {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable no-useless-escape
        return re.test(String(email).toLowerCase());
    }

    fieldsAreValid(): boolean {
        return !!$("#email_field").val() && this.state.emailIsValid && !!$("#username_field").val() && !!$("#password_field").val() && !!$("#role_field").val();
    }

    submit() {
        const user: User = this.state.userBuilder.buildUser();
        
        // Register
        fetch("http://localhost:3001/register", {
            headers: {"Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify(user)
        });
    }

    render() {
        return (
            <Template>
                <h1 className="page-header">Sign Up</h1>
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
                                    value={this.state.userBuilder.getEmail()}
                                    onChange={this.updateEmailField}
                                    onFocus={this.updateEmailField}
                                    defaultValue=""
                                    isInvalid={!this.state.emailIsValid}
                                />
                            </Form.Group>
                            <br/>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control 
                                    placeholder="Enter Username..." 
                                    id="username_field"
                                    name="username"
                                    size="lg"
                                    maxLength={this.usernameCharacterLimit}
                                    value={this.state.userBuilder.getUsername()}
                                    onChange={this.updateUsernameField}
                                    onFocus={this.updateUsernameField}
                                    defaultValue=""
                                />
                                <Form.Text className="text-muted">
                                    <span style={{float: 'right'}}>{this.state.userBuilder.getUsername() ? this.state.userBuilder.getUsername().length : 0} / {this.usernameCharacterLimit}</span>
                                </Form.Text>
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
                                    value={this.state.userBuilder.getPassword()}
                                    onChange={this.updatePassword}
                                    onFocus={this.updatePassword}
                                    defaultValue=""
                                />
                            </Form.Group>
                            <br/>
                            <Form.Group controlId="formRoleField">
                                <Form.Label>I'm a...</Form.Label>
                                <Form.Control 
                                    size="lg" 
                                    as="select" 
                                    id="role_field"
                                    defaultValue="Mentee"
                                    onChange={this.updateMentorState}
                                >
                                    <option>Mentor</option>
                                    <option>Mentee</option>
                                </Form.Control>
                            </Form.Group>
                            <Button 
                                size="lg" 
                                variant="success"
                                className={cx( Styles.submitButtonStyles )} 
                                disabled={!this.fieldsAreValid()}
                                onClick={() => {this.submit(); window.location.href = "/login"}}
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