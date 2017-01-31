$("document").ready(function() {
    
    
    /**
     * Step 1: Complete this function so that the form DOES NOT submit until both fields have a value
     * 
     * returns true if both fields have a value
     * returns false if the First Name OR Phone Number is empty
     *if .val is equal to an empty stirng
    */
    var validate = function(form) {
        if ($("#firstName").val() && $('#phoneNumber').val()){
           return true;
           }
     
        else if ($("#firstName").val() || $('#phoneNumber').val() == ""){
        return false; 
    
   } };
    
    /**
     * Perform JavaScript validation before submitting the request to the server
     */
    var processForm = function(form, url, data) {
        // Get the status from the validate function
        var isValid = validate(form);
        if(!isValid) {
            /** 
             * Step 2: Use the showModal function to display the results returned from the server
             */
             console.log('You must fill in all fields to submit the form');
            
        } else {
            $.ajax({
              type: "POST",
              url: url,
              data: data,
              success: function(res) {
                var result = $.parseJSON(res);
                
                /** 
                 * Step 3: Use the showModal function to display the results returned from the server
                 */
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
        
        /**
         * Step 4 (Extra Credit):
         * Use the bootstrap 'Alerts' feature instead of a modal
         * Documentation: http://getbootstrap.com/javascript/#alerts-examples
         */
    }
    
    // Stop the form from submitting so that it can be validated
    $("button#submitForm").click(function(event) {
        var contact_form = $("form.form-contact");
        var url = "https://scripted-forms-mdepuy.c9users.io/process-contact-form.php";
        var data = contact_form.serialize();
        
        processForm(contact_form, url, data);
        
        return false;
    });
    
    // Hide the alerts
    $("#errorAlert").hide();
    $("#successAlert").hide();
});