
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

setInterval(banner_slide, 6000);

let i=1;

function banner_slide(){

    if(i%2==0)
    {
        document.getElementById('bimg_1').style.display='none';
        document.getElementById('bimg_2').style.display='block';
        document.getElementById('bimg_2').style.transition='all 0.5s ease-in';
        document.getElementById('bimg_1').style.transition='all 0.5s ease-in';
        document.getElementById('banner_heading').style.color='black';
        document.getElementById('banner_para').style.color='black';
        document.getElementById('banner_link').style.color='black';
        document.getElementById('banner_link').style.border='1px solid black';


        
        i++;
    }

    else{
        document.getElementById('bimg_1').style.display='block';
        document.getElementById('bimg_2').style.display='none';
        document.getElementById('bimg_2').style.transition='all 0.5s ease-in';
        document.getElementById('bimg_1').style.transition='all 0.5s ease-in';
        document.getElementById('banner_heading').style.color='white';
        document.getElementById('banner_para').style.color='white';
        document.getElementById('banner_link').style.color='white';
        document.getElementById('banner_link').style.border='1px solid white';

        i++;
    }
}
