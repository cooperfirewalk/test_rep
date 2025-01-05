var oldForm = document.forms.test,
  formData = new FormData(oldForm);
console.log(formData.get("code"), formData === oldForm);

