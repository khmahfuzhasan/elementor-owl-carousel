jQuery(document).ready(function(){
    jQuery('.owl-carousel.aviation-news').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        responsiveClass:true,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="35" height="35" x="0" y="0" viewBox="0 0 64 64" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M59 30.995H7.465L19.661 19.14c.932-.906-.45-2.347-1.395-1.434L4.303 31.28c-.408.371-.375 1.041 0 1.434l13.963 13.58c.94.902 2.33-.512 1.395-1.434L7.46 32.995H59c1.278-.012 1.344-1.976 0-2z" fill="#2782bc" opacity="1" data-original="#000000" class=""></path></g></svg>','<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="auto" x="0" y="0" viewBox="0 0 512.009 512.009" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M508.625 247.801 392.262 131.437c-4.18-4.881-11.526-5.45-16.407-1.269-4.881 4.18-5.45 11.526-1.269 16.407.39.455.814.88 1.269 1.269l96.465 96.582H11.636C5.21 244.426 0 249.636 0 256.063s5.21 11.636 11.636 11.636H472.32l-96.465 96.465c-4.881 4.18-5.45 11.526-1.269 16.407s11.526 5.45 16.407 1.269c.455-.39.88-.814 1.269-1.269l116.364-116.364c4.511-4.537 4.511-11.867-.001-16.406z" fill="#2782bc" opacity="1" data-original="#000000" class=""></path></g></svg>'],
        
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3.5
            },
            1000:{
                items:4.5
                
            }
        }
    })
    
});


jQuery(document).ready(function(){
    jQuery('.owl-carousel.aviation-sports').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        responsiveClass:true,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="35" height="auto" x="0" y="0" viewBox="0 0 50 50" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="m11.12 35.88-10-10a1.25 1.25 0 0 1 0-1.77l10-10a1.25 1.25 0 0 1 1.77 0c.49.49.49 1.28 0 1.77l-7.87 7.87H48a1.25 1.25 0 0 1 0 2.5H5.02l7.87 7.87c.49.49.49 1.28 0 1.77-.49.48-1.29.48-1.77-.01z" fill="#ffffff" opacity="1" data-original="#000000" class=""></path></g></svg>','<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="33.5" height="auto" x="0" y="0" viewBox="0 0 512.009 512.009" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M508.625 247.801 392.262 131.437c-4.18-4.881-11.526-5.45-16.407-1.269-4.881 4.18-5.45 11.526-1.269 16.407.39.455.814.88 1.269 1.269l96.465 96.582H11.636C5.21 244.426 0 249.636 0 256.063s5.21 11.636 11.636 11.636H472.32l-96.465 96.465c-4.881 4.18-5.45 11.526-1.269 16.407s11.526 5.45 16.407 1.269c.455-.39.88-.814 1.269-1.269l116.364-116.364c4.511-4.537 4.511-11.867-.001-16.406z" fill="#ffffff" opacity="1" data-original="#000000"></path></g></svg>'],
        
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3.5
            },
            1000:{
                items:4.5
                
            }
        }
    })
    
});
