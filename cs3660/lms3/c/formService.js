/*
The formService is a class that performs all necessary functions to handle form validation for a generic form.
The rules are defined in the viewModel.js file included.
The service should apply any necessary attributes to the form and inputs in order to implement a user friendly
When a user tabs out of a field, the field itself should be validated, not the entire form
The 'actionUrl' parameter should be set as the action attribute on the form, if the form is valid
the default action should be allowed, which is a redirect to the 'actionUrl'
Use utility methods and getters to simplify your code and keep it DRY!
*/
class formService {
     constructor(viewModel,containerId, templateUrl, templateId, formId, actionUrl,  supressSubmit)
    {
        this.viewModel = viewModel;      //original data, should never change
        this.formId = formId;
        this.formAction = actionUrl;
        this.method = "POST";
        this.supressSubmit=supressSubmit;   //so I can suppress redirect on submit
        this.containerId = containerId;
        this.templateUrl = templateUrl;
        this.templateId=templateId;
        this.init();
    }
    render() {
       //this should grab the lodash template from the templateUrl and render the form
       let myForm = _.template($('#formRenderer').html());
       $('.content').html(myForm(viewModel));

    }
    init() {
      //render form first
      this.render();
        //setup submit callback
         //set up on change
        //set form to 'novalidate'
        //set form action
        //set css class 'needs-validation' or whatever class you  want to us
    }

    submit(ev){
        //validate form
        //if form is not valid, suppress default events
        //also suppress default events if this.supressSubmit is true
    }

    change(ev) {
        //validate specific field
        this.validateField(ev.target);
    }

    validateForm(){
         //iterate viewModel and validate each field based on the rules]
         this.viewModel.fields.forEach(function(item) {
          if (item.name != "id") {
             let el = document.querySelector("[name="+ item.name + "]");
             if (item.validation.required && !item.value) {
               var div = document.createElement("DIV");
               div.innerHTML = item.validation.requiredMessage;
               el.parentNode.appendChild(div);
             }
             if (item.validation.regex && !RegExp(item.validation.regex).test(item.value)) {
               el.setAttribute("valid", "false");
               var div = document.createElement("DIV");
               div.innerHTML = item.validation.invalidMessage;
               el.parentNode.appendChild(div);
             }
             if (item.value && item.name == "pass2" && item.value != document.querySelector("[name=pass1]").value) {
               var div = document.createElement("DIV");
               div.innerHTML = item.validation.mismatchMessage;
               el.parentNode.appendChild(div);
             }
           }
         });
         //in the 'validation' section for each field
         //end result should be the fields have the :valid or :invalid properties set
         //your CSS should be applied to the fields that are valid/invalid
         //any validation messages should be placed in a div inserted into the DOM dynamically
         //once the field is valid, the divs should be removed
    }


    getFieldViewModel(getId) {
        //utility function you could use to get the viewmodel for a specific field

    }
    validateField(el) {
        //called by 'change' event
        //validate a specific field based on its view model
        if (el.name != "id") {
           let el = document.querySelector("[name="+ el.name + "]");
           if (el.validation.required && !item.value) {
             var div = document.createElement("DIV");
             div.innerHTML = el.validation.requiredMessage;
             el.parentNode.appendChild(div);
           }
           if (el.validation.regex && !RegExp(el.validation.regex).test(el.value)) {
             el.setAttribute("class", "invalid");
             var div = document.createElement("DIV");
             div.innerHTML = el.validation.invalidMessage;
             el.parentNode.appendChild(div);
           }
           if (el.value && el.name == "pass2" && el.value != document.querySelector("[name=pass1]").value) {
             var div = document.createElement("DIV");
             div.innerHTML = el.validation.mismatchMessage;
             el.parentNode.appendChild(div);
           }
         }
    }
    validatePassword(field, view)
    {
      //method for validating passwords
      //check required

      //note that where you have a second password field
      //it has a 'matchEl' field showing the other element it's contents must match
      //it also has a 'mismatchMessage' to display when it doesn't match
      //if has value,and matched other field
      //simply check if format for password is correct using regex you create
      //remember passwords must be min 8 chars, one _, one Capital letter
      }
    validateRequired(field, message)
    {
     //function to validate whether a field has contents
    }

    validateRegex(field, regex, message)
    {
      //function to test a regex expression for validity for various inputTypes
      //tel, email, password..
    }

    setValidity(el, isValid, message){
        //utility function to set validity on a field
    }
    /* create whatever additional utility methods you need */

}
