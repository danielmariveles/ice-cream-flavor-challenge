$(document).ready(function() {

    let flavorContainer = document.querySelector('.ice-cream-list'); 
    let item = '';

    iceCreamFlavors.forEach(function(taste) {
        item += '<li class="ice-cream-flavor">'+ taste + '</li>';
    }); 
    
    flavorContainer.innerHTML = item;

    console.log('Solution 3 activated!');
});