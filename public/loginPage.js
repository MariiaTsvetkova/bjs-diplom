"use strict";

let form = new UserForm();

form.loginFormCallback = data => {
     ApiConnector.login(data, response => {
         if (response.success === true) {
             location.reload();
         }

         let message = response.error;
         form.setLoginErrorMessage(message);
     });
 }

 form.registerFormCallback = data => {
     ApiConnector.register(data, response => {
         if (response.success === true) {
             location.reload();
         }

         let message = response.error;
         form.setRegisterErrorMessage(message)
     });
 }

