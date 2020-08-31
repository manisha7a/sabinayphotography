import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { signIn, signOut } from '../actions'

const GoogleAuth = ({ isSignedIn,signIn,signOut }) => {
    const [auth, setAuth] = useState();

     const onLogInClick = () => {
         auth.signIn();
     }
    
     const onLogOutClick = () => {
         auth.signOut();
     }
    
     const renderAuthButton = () =>{
        if(isSignedIn === null){
            return null;
        } else if (isSignedIn){
            return(
            <Button color="primary" onClick={onLogOutClick}>
                <i className="fa fa-google"/> Sign Out 
            </Button>
            );
        } else {
            return(
            <Button color="primary" onClick={onLogInClick}>
                <i className="fa fa-google"/> Sign In with Google
            </Button>
            );
        }
    }

    useEffect(() => {
        const onAuthChange = (isSignedIn) => {
            if (isSignedIn) {
                signIn(window.gapi.auth2.getAuthInstance().currentUser.get().getId());
            } else {
                signOut();
            }
         };

        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '974320587171-qapm6jm237fk5arnh98hes48ki28bb7l.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                setAuth(window.gapi.auth2.getAuthInstance());
                onAuthChange(window.gapi.auth2.getAuthInstance().isSignedIn.get());
                window.gapi.auth2.getAuthInstance().isSignedIn.listen(onAuthChange);
            });
        });
    },[signIn, signOut])

    return(
    <div>{renderAuthButton()}</div>
    );
}

const mapStateToProps = state => {
    return {
    isSignedIn:state.auth.isSignedIn}
}
export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth)