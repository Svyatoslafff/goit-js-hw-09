import"./assets/styles-B1ofJ-Cy.js";import{v as l}from"./assets/vendor-DNUhFu_y.js";const a={email:"",message:""},e={formItem:document.querySelector(".feedback-form"),emailInput:document.querySelector("input[name = email]"),messageTextarea:document.querySelector("textarea[name = message]"),toLocalStorage(t){t.srcElement.localName==="input"&&(a.email=t.srcElement.value),t.srcElement.localName==="textarea"&&(a.message=t.srcElement.value),localStorage.setItem("feedback-form-state",JSON.stringify(a))},formSubmit(t){if(t.preventDefault(),e.emailInput.value===""||e.messageTextarea.value===""){alert("Fill please all fields");return}if(!l.isEmail(e.emailInput.value)){alert("Incorrect email");return}console.log(a),e.emailInput.value="",e.messageTextarea.value="",a.email="",a.message="",localStorage.setItem("feedback-form-state",JSON.stringify(a))}},m=JSON.parse(localStorage.getItem("feedback-form-state"));e.emailInput.value=m.email;e.messageTextarea.value=m.message;a.email=m.email;a.message=m.message;e.formItem.addEventListener("input",e.toLocalStorage);e.formItem.addEventListener("submit",e.formSubmit);
//# sourceMappingURL=2-form.js.map
