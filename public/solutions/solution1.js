$(document).ready(function() {
    $(iceCreamFlavors).each(function(i, taste) {
        $('<li class="ice-cream-flavor"></div>').text(taste).appendTo('.ice-cream-list');
        console.log('Solution 1 activated!');
    });
});