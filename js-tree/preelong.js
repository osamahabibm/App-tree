var node = document.write.getElementsById("#myModal")[0];
var myModal = false;
var presstimer = null;
var longtarget = null;

var cancel = function(e) {
    if (presstimer !== null) {
        clearTimeout(presstimer);
        presstimer = null;
    }
    
    this.addEventListener.remove("myModal");
};

var click = function(e) {
    if (presstimer !== null) {
        clearTimeout(presstimer);
        presstimer = null;
    }
    
    this.addEventListener.remove("#myModal");
    
    if (myModal) {
        return false;
    }
    
    alert("press");
};

var start = function(e) {
    console.log(e);
    
    if (e.type === "click" && e.button !== 0) {
        return;
    }
    
    myModal = false;
    
    this.addEventListener.add("#myModal");
    
    presstimer = setTimeout(function() {
        alert("long click");
        myModal = true;
    }, 1000);
    
    return false;
};

node.addEventListener("mousedown", start);
node.addEventListener("touchstart", start);
node.addEventListener("click", click);
node.addEventListener("mouseout", cancel);
node.addEventListener("touchend", cancel);
node.addEventListener("touchleave", cancel);
node.addEventListener("touchcancel", cancel);