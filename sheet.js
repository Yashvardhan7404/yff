
function arrow_left() {
    document.getElementById('food_pro').scrollBy({
        left: -120, // Adjust the scroll distance as needed
        behavior: 'smooth'
    });
}

function arrow_right(){
    document.getElementById('food_pro').scrollBy({
        left:120, // Adjust the scroll distance as needed
        behavior: 'smooth'
    });
}
// menu_page

function menu_scroll_left(){
    document.getElementById('main_menu_scroll').scrollBy({
left:-225, behavior:'smooth'
    });
}
function menu_scroll_right(){
    document.getElementById('main_menu_scroll').scrollBy({
left:225, behavior:'smooth'
    });
}

function burger_scroll_left(){
    document.getElementById('b_scroll').scrollBy({
left:-100, behavior:'smooth'
    });
}
function burger_scroll_right(){
    document.getElementById('b_scroll').scrollBy({
left:100, behavior:'smooth'
    });
}

function pizza_scroll_left(){
    document.getElementById('p_scroll').scrollBy({
left:-100, behavior:'smooth'
    });
}
function pizza_scroll_right(){
    document.getElementById('p_scroll').scrollBy({
left:100, behavior:'smooth'
    });
}

function noodles_scroll_left(){
    document.getElementById('n_scroll').scrollBy({
left:-100, behavior:'smooth'
    });
}
function noodles_scroll_right(){
    document.getElementById('n_scroll').scrollBy({
left:100, behavior:'smooth'
    });
}

