console.log("Kundal.io: Outch!!, I am injected.");


function render_subscribe_box(element_id, app_id){
    feature_element = document.getElementById(element_id);
    if ( feature_element != null){
        console.log("Found feedback-form element")
        
        // Create a new iframe element
        var iframe = document.createElement('iframe');
    
        // Set the attributes of the iframe
        iframe.src = "http://localhost:8000/f/widgets/subscribe/"+app_id+"/";  // URL of the page to be displayed
        iframe.width = "100%";                    // Width of the iframe
        iframe.height = "200";                   // Height of the iframe
        
        // Optionally, add some styling to the iframe
        iframe.style.border = "0px"; // Example of adding a border
    
        // Append the iframe to the body of the document
        feature_element.appendChild(iframe);
    
    } else {
        console.log("Info: Required parent element is not present!")
    }
    
}

function render_contact_box(element_id, app_id){
    feature_element = document.getElementById(element_id);
    if ( feature_element != null){
        console.log("Found contact-form element")
        
        // Create a new iframe element
        var iframe = document.createElement('iframe');
    
        // Set the attributes of the iframe
        iframe.src = "http://localhost:8000/f/widgets/contact/"+app_id+"/";  // URL of the page to be displayed
        iframe.width = "100%";                    // Width of the iframe
        iframe.height = "300";                   // Height of the iframe
        
        // Optionally, add some styling to the iframe
        iframe.style.border = "0px"; // Example of adding a border
    
        // Append the iframe to the body of the document
        feature_element.appendChild(iframe);
    
    } else {
        console.log("Info: Required parent element is not present!")
    }
    
}
