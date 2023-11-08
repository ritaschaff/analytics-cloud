const logging = false; // Set this to true to log details to the browser console

/* Using the ID of the element, a click event is attached
   so when you click the button, the button's current
   title and URL will be sent to Analytics Cloud
*/
myButton.addEventListener("click", sendToAnalyticsCloud);

function sendToAnalyticsCloud() {

    Analytics.track("buttonClicked", {
        "buttonTitle": myButtonLink.innerText,
        "buttonLink": myButtonLink.href,
    });

    if (logging) {
        console.log("Sent to Analytics Cloud: " + 
                    "↳ buttonTitle: " + myButtonLink.innerText + 
                  "\n↳ buttonLink: " + myButtonLink.href);
    }
}