if (window == top) {
    window.addEventListener('keyup', doKeyPress, false);
}
    
var bookmarks = {}, url;

bookmarks['G'] = 'https://www.google.com/'; // Google
bookmarks['w'] = 'https://www.wikipedia.org/';  // Wikipedia

function doKeyPress(event){
    if(event.ctrlKey && event.altKey && !event.shiftKey) {
        if(url = bookmarks[String.fromCharCode(event.keyCode)]) {
            window.open(url);
        }   
    }
}
