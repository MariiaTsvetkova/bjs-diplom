"use strict";

let form = new UserForm();

form.loginFormCallback = data => {
     ApiConnector.login(data, response => {
         if (response.success === true) {
             location.reload();
         }

         console.error(response.error);
     });
 }

 form.registerFormCallback = data => {
     ApiConnector.register(data, response => {
         if (response.success === true) {
             location.reload();
         }

         console.error(response.error);
     });
 }

