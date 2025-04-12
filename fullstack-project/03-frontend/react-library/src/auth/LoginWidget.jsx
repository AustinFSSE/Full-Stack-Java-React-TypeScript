import { Redirect } from 'react-router-dom';
import { useOktaAuth } from "@okta/okta-react";
import OktaSignInWidget from "./OktaSignInWidget";


const LoginWidget = ({ config }) => {
    const { oktaAuth, authState } = useOktaAuth();
    const onSuccess = (tokens) => {
        console.log("Success tokens:", tokens); // Make sure tokens are logged
        if (tokens && tokens.idToken && tokens.accessToken) {
            oktaAuth.handleLoginRedirect(tokens);  // Proceed with login redirect if tokens are valid
        } else {
            console.error("Tokens are missing");
        }
    };


    const onError = (error) => {
        console.log("LoginWidget error: ", error);
    }



    return authState.isAuthenticated ?
        <Redirect to={{ pathname: "/" }}/>
        :
        <OktaSignInWidget config={config} onSuccess={onSuccess} onError={onError}/>;
}

export default LoginWidget;