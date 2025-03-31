
function validate() {
  const username = document.contact.username.value;
  const email = document.contact.email.value;
  const mobile = document.contact.mobile.value;

  const message = document.contact.message.value;
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const mobileError = document.getElementById("mobileError");

  const messageError = document.getElementById("messageError");
  const alphaExp = /^[a-zA-Z]+$/;

  const mailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const numExp = /^[0-9]+$/;
  const mssgExp = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
  let nameStatus = false;
  let emailStatus = false;
  let mobileStatus = false;
  let messageStatus = false;

  //Name Validation

  if (username === "") {
    nameError.textContent = "*Please Enter Your  FullName";
  } else {
    if (username.match(alphaExp)) {
      nameError.textContent = "";
      nameStatus = true;
    } else {
      nameError.textContent = "*Name should be Only Characters";
    }
  }

  //Email Validation
  if (email === "") {
    emailError.textContent = "*Please Enter Email Address";
  } else {
    if (email.match(mailExp)) {
      emailError.textContent = "";
      emailStatus = true;
    } else {
      emailError.textContent = "*Please Enter Vaild Email ID";
    }
  }

  //Mobile Validation

  if (mobile === "") {
    mobileError.textContent = "*Please Enter Mobile Number";
  } else {
    if (mobile.match(numExp)) {
      if (mobile.length === 10) {
        mobileError.textContent = "";
        mobileStatus = true;
      } else {
        mobileError.textContent = "*Mobile Number should be 10 digits";
      }
    } else {
      mobileError.textContent = "*Mobile Number should be Only Numbers";
    }
  }

  //Message Validation
  if (message === "") {
    messageError.textContent = "*Please Enter Message";
  } else {
    if (message.match(mssgExp)) {
      messageError.textContent = "";
      messageStatus = true;
    } else {
      messageError.textContent = "*Please Enter Your Opinion";
    }
  }

  //Return Validation

  if (nameStatus &&emailStatus  && mobileStatus && messageStatus) {
    alert("Thankyou for Contacting us! We will get back to you shortly ")
    document.getElementById("myForm").reset();
    document.getElementById("nameError").style.display="none"
    document.getElementById("emailError").style.display="none"
    document.getElementById("mobileError").style.display="none"
    document.getElementById("messageError").style.display="none"

   
    return true;
    
  } else {
    return false;
  }
  
}
document.getElementById("myForm").addEventListener("submit",function(event)
{
event.preventDefault();
validate()

})
