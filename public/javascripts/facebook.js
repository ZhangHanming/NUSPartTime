window.fbAsyncInit = function() {
  FB.init({
    appId: '833829723419057',
    xfbml: true,
    cookie: true,
    version: 'v2.7'
  });

  FB.getLoginStatus(function(response){
    console.log(response);
    if (response.status === 'connected') {
      $("#fb-login-wrapper p").text("Log out");

      var userID = FB.getAuthResponse().userID;
      $.post('/userManagement/update_session_user_id', {
        id: userID
      }).done(function (data, textStatus) {
        if (data.need_redirect) {
          $.post('/userManagement/create_user', {
            id: userID
          }).done(function (data, textStatus) {
            if (typeof data.redirect == 'string') {
              window.location = data.redirect;
            }
          });
        }
      });
    }
  });
};

/**
 * This function aims at allowing users to log in and log out
 * This function will check user's login status first
 */
function fb_toggle() {
  // checkt login status first
  FB.getLoginStatus(function(response) {
    console.log(response);

    if (response.status === 'connected') {
      FB.logout(function(response) {
        console.log("logged out from FB");
        $("#fb-login-wrapper p").text("Log in");
        $.post('/userManagement/logout', {}).done(function (data, textStatus) {
          if (typeof data.redirect == 'string') {
            window.location = data.redirect;
          }
        });
      });
    } else {
      FB.login(function(response) {
        if (response.authResponse) {
          console.log("logged in from FB");
          // access_token = response.authResponse.accessToken; //get access token
          // user_id = response.authResponse.userID; //get FB UID

          $.post('/userManagement/create_user', {
            id: FB.getAuthResponse().userID,
            name: FB.getAuthResponse().name
          }).done(function (data, textStatus) {
            if (typeof data.redirect == 'string') {
              window.location = data.redirect;
            }
          });
        } else {
          //user hit cancel button
          console.log('User cancelled login or did not fully authorize.');
        }
      }, {
        scope: 'public_profile, email'
      });
    }
  });
}

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
