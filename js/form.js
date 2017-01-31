$("document").ready(function() {
    
    // Stop the form from submitting so that it can be validated
    $("button#submitForm").click(function(event) {
        var contact_form = $("form.form-contact");
        var url = "https://scripted-forms-mdepuy.c9users.io/process-contact-form.php";
        var data = contact_form.serialize();
        
        processForm(contact_form, url, data);
        // Step 2: add a debug statement here
        
        // Step 3: Open the page in Chrome with the console open
        // Step 4: Submit the form and "step through" the debugger
        
        return false;
    });
    
    var validate = function(form) {
        return true;
    };
    
    /**
     * Perform JavaScript validation before submitting the request to the server
     */
    var processForm = function(form, url, data) {
        // Get the status from the validate function
        var isValid = validate(form);
        if(!isValid) {
             console.log('You must fill in all fields to submit the form');
            
        } else {
            $.ajax({
              type: "POST",
              url: url,
              data: data,
              success: function(res) {
                var result = $.parseJSON(res);
                // Step 1: add a debug statement here
        
                console.dir(result)
              },
              dataType: "text"
            });
        }    
    };
    
    /**
     * This function pops up a modal
     */
    var showModal = function(status, message) {
        $('#exampleModal').modal('show');
        $('#exampleModal').find('.modal-title').text(status);
        $('#exampleModal').find('.modal-body .modal-message').text(message);
    }
    
    // Hide the alerts
    $("#errorAlert").hide();
    $("#successAlert").hide();
});