function statusChangeCallback(response) { // Called with the results from FB.getLoginStatus().
    // console.log('statusChangeCallback');
    // console.log(response);                   // The current login status of the person.
    if (response.status === 'connected') { // Logged into your webpage and Facebook.
        localStorage.setItem('token', response.authResponse.accessToken)
            // localStorage.setItem('email', response.authResponse.email)
            // {console.log('itemset')};
        testAPI();
        setElement(true);

    } else {
        setElement(false); // Not logged into your webpage or we are unable to tell.
        document.getElementById('status').innerHTML = 'Please log ' +
            'into this webpage.';
    }
}

logout = document.querySelector('.logout');
logout.addEventListener('click', () => {
    FB.logout(function(response) {
        alert('logged out');
        window.reload();
    });
})

function checkLoginState() { // Called when a person is finished with the Login Button.
    FB.getLoginStatus(function(response) { // See the onlogin handler
        statusChangeCallback(response);
    });
}


window.fbAsyncInit = function() {
    FB.init({
        appId: '1285067144966043',
        cookie: true, // Enable cookies to allow the server to access the session.
        xfbml: true, // Parse social plugins on this webpage.
        version: 'v5.0' // Use this Graph API version for this call.
    });


    FB.getLoginStatus(function(response) { // Called after the JS SDK has been initialized.
        statusChangeCallback(response); // Returns the login status.
        if (response.status === 'connected') {}
    });
};


(function(d, s, id) { // Load the SDK asynchronously
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function testAPI() { // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
        console.log('Successful login for: ' + response.name);
        document.getElementById('status').innerHTML =
            'Thanks for logging in, ' + response.name + '!';
    });
}


// For some reason this is backwards...
function setElement(isLoggedIn) {
    if (isLoggedIn) {
        // alert('logged in');
        document.querySelector('#login').classList.toggle('hide');
        document.querySelector('#searchContainer').classList.toggle('hide');
        document.querySelector('#display-data').classList.toggle('hide');
        document.getElementById('status').innerHTML = 'Please log ' +
            'into this webpage.';
        // window.reload();
    } else {
        alert('Please Login With Facebook To Continue');
    }
}