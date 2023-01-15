function removeAlerts() {
    document.getElementById("error").innerHTML = "";
    document.getElementById("erroruser").innerHTML = "";
    document.getElementById("errorpwd").innerHTML = "";
    document.getElementById("errorpwdchar").innerHTML = "";
}


let logins = JSON.parse('{ "users" : [ { "name":"Kim" , "password":"Kimm1%" }, { "name":"Elisa" , "password":"Elisa1%" } ]}');


function validateForm(submitType) {
    removeAlerts();

    var username = document.forms["myForm"]["user"].value;
    var pwd = document.forms["myForm"]["pass"].value;
    //    let logins = JSON.parse(users);

    switch (submitType) {
        case 'Register':
            if (!username && !pwd) {
                document.getElementById("errorpwdchar").innerHTML = "Please input username and password";
                return false;
            } else if (username == null || username == "") {
                document.getElementById("erroruser").innerHTML = "Please input your username";
                return false;
            } else if (pwd == null || pwd == "") {
                document.getElementById("errorpwd").innerHTML = "Please input your password";
                return false;
            } else if (pwd.length < 6) {
                document.getElementById("errorpwdchar").innerHTML = "Your password must be minimum 6 characters";
                return false;
            } else if (username.length > 15) {
                document.getElementById("erroruser").innerHTML = "Your username must not be longer than 15 characters";
                return false;
            } else if (pwd.search(/[A-Z]/) < 0) {
                document.getElementById("errorpwdchar").innerHTML = "Your password must contain an uppercase letter";
                return false;
            } else if (pwd.search(/[a-z]/) < 0) {
                document.getElementById("errorpwdchar").innerHTML = "Your password must contain an lowercase letter";
                return false;$  } else if (pwd.search(/[!?*#.,@%&+-ç=)("^`£$:;°§¨)]/) < 0) {
                document.getElementById("errorpwdchar").innerHTML = "Your password must contain an special charachter";
                return false;
            }
            
            var newLogin =
                { "name": username, "password": pwd };
            logins.users.push(newLogin);
            console.log(logins);
            document.getElementById("errorpwdchar").innerHTML = "Successfully registered, please login";
            return false;
            
   break;

        case 'Login':
            let found = false;
            let i = 0;
            for (i = 0; i < logins.users.length && !found; ++i) {
                if (username == logins.users[i].name) {
                    if (pwd == logins.users[i].password) {
                        found = true;
                    }         
                }
          
            }
            if (found) {
                document.getElementById("errorpwdchar").innerHTML = "welcome: " + logins.users[i - 1].name;
            }
            else {
                document.getElementById("errorpwdchar").innerHTML = "login invalid ";
            }
            return false;
            break;

    }
