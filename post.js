document.getElementById('twitter-share-button').addEventListener('click', function() {
            
    var text = "Join me at Event Name on October 10, 2023! #EventName";
    var twitterURL = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text);
    window.open(twitterURL, '_blank');
});

document.getElementById('linkedin-share-button').addEventListener('click', function() {
   
    var text = "Join me at Event Name on October 10, 2023!";
    var linkedinURL = "https://www.linkedin.com/shareArticle?mini=true&url=YOUR_EVENT_URL&title=Event%20Name&summary=" + encodeURIComponent(text) + "&source=LinkedIn";
    window.open(linkedinURL, '_blank');
});
