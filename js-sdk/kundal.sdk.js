console.info("Kundal.io: Outch!!, I am injected.");

const FeatureCollection = {

    identify(e, n){
        console.info("Identify Called!");
        console.info(e);
        console.info(n);
    },
    
    subscribe_box(e, n) {
        console.info("subscribe_box Called!");
        console.info(e);
        console.info(n);
        feature_element = document.getElementById(e.elementID);
        if ( feature_element != null){
            console.log("Found feedback-form element")
            
            // Create a new iframe element
            var iframe = document.createElement('iframe');
        
            // Set the attributes of the iframe
            iframe.src = "http://localhost:8000/f/widgets/subscribe/"+e.appID+"/";  // URL of the page to be displayed
            iframe.width = "100%";                    // Width of the iframe
            // iframe.height = "200";                   // Height of the iframe
            iframe.referrerPolicy = 'unsafe-url'
            
            // Optionally, add some styling to the iframe
            iframe.style.border = "0px"; // Example of adding a border
            iframe.style.flex = "column"; // Example of adding a border
        
            // Append the iframe to the body of the document
            feature_element.appendChild(iframe);
        
        } else {
            console.log("Info: Required parent element is not present!")
        }

    },
    contact_box(e, n) {
        console.info("contact_box Called!");
        console.info(e);
        console.info(n);
        feature_element = document.getElementById(e.elementID);
        if ( feature_element != null){
            console.log("Found contact-form element")
            
            // Create a new iframe element
            var iframe = document.createElement('iframe');
        
            // Set the attributes of the iframe
            iframe.src = "http://localhost:8000/f/widgets/contact/"+e.appID+"/";  // URL of the page to be displayed
            iframe.width = "100%";                    // Width of the iframe
            iframe.height = "300";                   // Height of the iframe
            iframe.referrerPolicy = 'no-referrer'
            
            // Optionally, add some styling to the iframe
            iframe.style.border = "0px"; // Example of adding a border
        
            // Append the iframe to the body of the document

            var newframe = document.createElement('div');
            newframe.appendChild(document.createElement('h1'));
            feature_element.appendChild(newframe);
        
        } else {
            console.log("Info: Required parent element is not present!")
        }        
    }
}

function Feature() {
    const e = arguments[0]
      , t = Array.prototype.slice.call(arguments, 1);
    if (!e)
        return void console.warn("Kundal: No methodName supplied to SDK");
    const n = FeatureCollection[e];
    if (n)
        return n.apply(null, t);
    console.warn("Kundal: Invalid methodName supplied to SDK: " + e)
}


window?.Kundal?.initialized || ((window.Kundal && window.Kundal.q || []).forEach((e=>{
    Feature.apply(null, e)
})));




