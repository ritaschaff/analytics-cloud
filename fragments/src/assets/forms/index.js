var formButtonViewed = fragmentElement.querySelector("#formbutton-viewed");
formButtonViewed.addEventListener('click', function(){
	alert('Form asset event has been sent to Analytics Cloud: form-button | Viewed')
});

var formButtonSubmitted = fragmentElement.querySelector("#formbutton-submitted");
formButtonSubmitted.addEventListener('click', function(){
	alert('Form asset event has been sent to Analytics Cloud: form-button | Submitted')
});