var loggingAnalytics = false; // Set this to true in order to log all the navigation elements that are found on the page

var logs = "";
/*
    Finding all the navigation links on the page
*/
document.querySelectorAll(".nav-link").forEach(function(navItem) {

    /* 
        navItem.innerText is the title of the navigation menu element
        navItem.href is the URL of the navigation element
    */
    if (loggingAnalytics
        && typeof navItem.innerText !== 'undefined'
        && typeof navItem.href !== 'undefined')
    {        
        logs += "Title: " + navItem.innerText + "\nURL: " + navItem.href + "\n\n";
    }

    /* 
        Clicking on a navItem will send the title and the URL
        to Analytics Cloud
    */
    navItem.addEventListener("click", function(event) {


        /*
            Clicking on a navigation item is different from the navItem element
            this is why the parentNode.href is used to get the URL
        */
        let title = event.target.innerText;
        let link = event.target.parentNode.href;
        
        if (typeof title !== 'undefined' && typeof link !== 'undefined') {

            if (loggingAnalytics) {
                console.log("Navigation Item clicked: \n" + 
                            "↳ Title: " + title + 
                          "\n↳ URL: " + link);
            }

            sendToAnalyticsCloud(title, link);
        };
    });
});

if(loggingAnalytics){
    console.log(logs);
}

// Sending the data to Analytics Cloud
function sendToAnalyticsCloud(title, link) {

    Analytics.track("navItemClicked", {
        "navTitle": title,
        "navLink": link,
    });

    if(loggingAnalytics){
       console.log("Sent to Analytics Cloud:\n\n" + 
                   "navItemClicked\n" + 
                   "↳ navTitle: " + title + 
                 "\n↳ navLink: " + link); 
    }
}