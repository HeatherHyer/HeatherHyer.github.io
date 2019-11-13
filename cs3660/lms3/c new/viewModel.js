
/*in this file you need to create a regex for the password fields */

 var viewModel= {
   
     fields: [
         {
             label: "Id",
             name: "id",
             hidden: true,
             inputType: "hidden",
             validation: {
                 required: false,
             }
         },
         {
             label: "First Name",
             name: "firstName",
             inputType: "text",
             placeholder: "Enter your first name here",
             validation: {
                 required: true,
                 requiredMessage: "Last name is required!"
             }
         },
         {
             label: "Last Name",
             name: "lastName",
             inputType: "text",
             placeholder: "Enter your last name here",
             validation: {
                 required: true,
                 requiredMessage: "Last name is required!"
             }
         },
         {
             label: "Phone Number",
             name: "phone",
             inputType: "tel",
             placeholder: "Enter your phone number here",
             validation: {
                 required: true,
                 requiredMessage: "Phone Number is required!",
                 invalidMessage: "Invalid Phone Number",
                 regex: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
             }
         },
          {
             label: "Password",
             name: "pass1",
             inputType: "password",
             placeholder: "Enter your password",
             validation: {
                
                 required: true,
                 requiredMessage: "Password is required!",
                 invalidMessage: "Password must be min 8 chars, one _, one Capital letter",
                 
                 regex: "DEFINE YOURSELF"
             }
         },
          {
             label: "Retype Password",
             name: "pass2",
             inputType: "password",
             placeholder: "Retype your password",
             validation: {
                 matchEl: "pass1",
                 required: true,
                 requiredMessage: "Password is required!",
                 invalidMessage: "Password must be min 8 chars, one _, one Capital letter",
                 mismatchMessage: "Passwords must match",
                 regex: "DEFINE YOURSELF"
             }
         },
         {
             label: "Email Address",
             name: "email",
             inputType: "email",
             placeholder: "Enter your email here",
             validation: {
                 required: true,
                 requiredMessage: "Email Address is required!",
                 invalidMessage: "Invalid Email address",
                 regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
             }
         },
         {
             label: "How do you like CS3660?",
             name: "state-of-mind",
             hidden: false,
             inputType: "radio",
             validation: {
                 required: true
             },
             options: [
                  {
                   label: "Awful!",
                   value:"awful"
                  },
                 {
                   label: "Decent",
                   value:"decent"
                  },
                  {
                   label: "Good",
                   value:"good"
                  }
                  ]
         },
         {
             label: "Professor Grade",
             name: "professorGrade",
             hidden: false,
             inputType: "select",
             placeholder: "Grade your professor",
             validation: {
                 required: true
             },
             options: [
                  {
                   label: "Awful",
                   value:"great"
                  },
                 {
                   label: "Bad",
                   value:"stupendous"
                  },
                  {
                   label: "Good",
                   value:"good"
                  },
                    {
                   label: "Excellent",
                   value:"excellent"
                  }
                  ]
         },
          {
             label: "Are you being completely honest?",
             name: "honesty_check",
             hidden: false,
             inputType: "checkbox",
             validation: {
                 required: true
             }
         }
     ]

 }