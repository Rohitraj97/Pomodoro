    import React from 'react';
    import { GoogleLogin } from 'react-google-login';

    const clientId = 'YOUR CLIENT_ID.apps.googleusercontent.com';

    function Login() {

    const onSuccess = (res) => { console.log('[Login Success] currentUser:', res.profileobj);

    }

    const onFailure = (res) => { console.log('[Login failed] res:', res);

    return ( <div>

    <GoogleLogin

    clientId={clientId}

    buttonText="Login"

    onSuccess={onSuccess}

    onFailure ={onFailure} cookiePolicy={"single_host_origin"}

    style={{ marginTop: "100px" }}

    issignedIn={true}
/>
    </div>

   

    )
}
    }

    export default Login;