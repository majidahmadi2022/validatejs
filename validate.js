/**
 * validate js 
 * all function that you need to validate data in javascript
 * @version 0.0.1
 */

/**
 * EmailValidate() 
 * @params Email string
 * @return boolean result of check
 */
const EmailValidate = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};


// todo : persian phone number
// todo : persian national code
// todo : persian bank cards
// todo : persian Sheba number
// todo : persian DateValid


