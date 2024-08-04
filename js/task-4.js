

////////////////////////////////////////////////////////
const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);
const loginFormObject = {};
 
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  
  if (email === "" || password === "") {
    return alert('All form fields must be filled in');
  }
    loginFormObject.email = email;
    loginFormObject.password = password;
  console.log(loginFormObject); 
  form.reset();
}
////////////////////////////////////////////////////////////////

const styles = document.createElement('style');
styles.textContent =
  ` .login-form{
        display: flex;
     flex-direction: column;
  }
 `;
document.head.append(styles);