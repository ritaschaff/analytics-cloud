var customButtonViewed = fragmentElement.querySelector("#custom-button-viewed");
customButtonViewed.addEventListener('click', function(){
	alert('Custom asset event has been sent to Analytics Cloud: custom-button | Viewed')
});

var customButtonDownloaded = fragmentElement.querySelector("#custom-button-downloaded");
customButtonDownloaded.addEventListener('click', function(){
	alert('Custom asset event has been sent to Analytics Cloud: custom-button | Downloaded')
});