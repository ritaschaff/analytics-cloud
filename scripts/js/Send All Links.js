/* 
    Setting this to TRUE will log messages to the console
    and prevent the default link behavior, e.g. opening
    links on a new tab
*/
var testing = false; 

var links = document.querySelectorAll(".send-link-to-analytics-cloud a");
links.forEach(function(link, index) {
    link.addEventListener("click", function(event) {

        if(testing){
            // Prevent the default behavior of the link (e.g., navigating to a new page)
            event.preventDefault();
            
            // Log the innerHTML and href attributes of the clicked link
            console.log("Link " + (index + 1) + " sent to Analytics Cloud:" + "\n↳ Label: " + link.innerHTML + "\n↳ URL: " + link.getAttribute("href"));
        }

        // Send the clicked link to Analytics Cloud
        var linkLabelValue = links[index].innerHTML;
        var linkUrlValue = links[index].getAttribute("href");
        sendLinkToAnalyticsCloud("linkClicked", linkLabelValue, linkUrlValue);

    });
});

function sendLinkToAnalyticsCloud(eventName, linkLabelValue, linkUrlValue){
    Analytics.track(eventName,{
       'linkLabel': linkLabelValue,
       'linkUrl': linkUrlValue
    });
}