var btt = document.getElementById("back-to-top"),
    body = document.body,
    docElem = document.documentElement,
    offset = 100,
    scrollPos, docHeight;
    // isFirefox = 1;
    // navvigator.UserAgent.toLowerCase().indexOf("firefox") > 1

// step two:- calculate the document height
docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
// set offset to a quater of document height
if ( docHeight != 'undefined'){
    offset = docHeight / 16;
}

// add event listner for scroll
window.addEventListener("scroll", function(event) {
    scrollPos = body.scrollTop || docElem.scrollTop;

    btt.className = ( scrollPos > offset ) ? "visible" : "";
} );