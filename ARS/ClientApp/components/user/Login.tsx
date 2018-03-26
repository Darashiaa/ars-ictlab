import * as React from 'react';
import * as immutable from 'immutable'
import { RouteComponentProps } from 'react-router';
import * as api from '../Api'
import { User } from '../Model'
import { UserComponent } from './User'
import * as auth from '../Authentication';

interface LoginState { username:String, password:String }

export class Login extends React.Component<RouteComponentProps<{}>, LoginState> {

    constructor() {
        super();
        this.state = { username : "", password : "" };
    }

    // componentWillMount(){
    //     this.isLoggedIn();
    // }

    isLoggedIn(){
        if(auth.isLoggedIn()){
            // replace with something that isnt native js
            window.location.replace('/home');
        }
        return this.checkCredentials();
    }

    checkCredentials(){
        auth.checkCredentials(this.state.username, this.state.password);
    }

    onSignIn(googleUser) {
        console.log(googleUser)
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }

    public render() {
        return <div>
            <div className="page-header">
                <h1>Log in to the ARS</h1>
            </div>
            <div className="g-signin2" data-onsuccess="onSignIn"></div>
        </div>
    }
}
