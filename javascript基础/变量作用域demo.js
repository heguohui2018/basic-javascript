var page1 = 250;
var page2 = 380;
function showVars() {
    var page1 = 20;
    page2 = 20;
    return "local variable 'page1' = " + page1 + "\nGlobal variable 'page2' = " + page2;
}

var message = showVars();
alert(message +"\nGlobal variable 'page1' = " + page1);
