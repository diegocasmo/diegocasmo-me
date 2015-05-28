// Open markdown links in new window
$(document.links).filter(function() {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');