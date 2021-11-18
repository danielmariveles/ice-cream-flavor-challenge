$(document).ready(function() {
    $(iceCreamFlavors).each(function(i, taste) {
        var parent = $('.ice-cream-list');
        var child = $('<li>');

        child.appendTo(parent).text(taste).addClass('ice-cream-flavor');
    });

    console.log('Solution 2 activated!');
});