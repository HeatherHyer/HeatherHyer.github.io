/* NOTE: */
/* Use the form Service from LMS3b and extend it by adding a 'containerId' and 'templateId' */
/* Add a 'render' method, which will render a lodash template into the 'content' div in index.html.*/
/* see comments inline */
class formService {
     constructor(viewModel,containerId, templateId, formId, actionUrl,  supressSubmit)
    {
        this.viewModel = viewModel;
        this.formId = formId;
        this.formAction = actionUrl;
        this.method = "POST";
        this.supressSubmit=supressSubmit;

        //PLEASE ADD THESE LINES TO YOUR CONSTRUCTOR
        this.containerId = containerId;
        this.templateId=templateId;
        this.render();
        //END

        //this.init();

    }
    init() {
      //same as your current init
    }

    render() {
      //ADD FUNCTION, BUT DO NOT CHANGE the body of it. You must render everything in the 'formRenderer' template defined in index.html
      //compile the lodash template into a template function
       let myForm = _.template($("#"+this.templateId).html());

      //render form into content div using lodash template and ONLY viewModel as the source of meta data
      //note, your view model may need to have 'formId' added to it and anything else not associated with fields
      $("#"+this.containerId).html(myForm(this.viewModel));
    }



}
