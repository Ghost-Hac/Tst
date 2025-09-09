
    // Selecting the iframe element
    var iframe = document.getElementById("myIframe");
    
    // Adjusting the iframe height onload event
   // iframe.onload = function(){
       // iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    }
    

/* ===== INLINE JAVASCRIPT ===== */


    // Selecting the iframe element
    var iframe = document.getElementById("iFrame1");
    
    // Adjusting the iframe height onload event
   // iframe.onload = function(){
       // iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    }
    

/* ===== INLINE JAVASCRIPT ===== */


            $(document).ready(function() {
              var owl = $('.owl-carousel');
              owl.owlCarousel({
				
                items: 3,
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 6000,
                autoplayHoverPause: true,
				 responsive: {
                  0: {
                    items: 1,
                    nav: true,
					dots:false
                  },
                  600: {
                    items: 1,
                    nav: false,
					dots:false
                  },
                  1000: {
                    items: 3,
                    nav: true,
                    loop: true,
                    margin: 20,
					dots:false
                  }
                }
              });
             
            })
          

/* ===== INLINE JAVASCRIPT ===== */


       $(document).ready(function(){
            $('#myModal').modal('show');
        }); 
		
		
		
		
		
		$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('header').addClass('fixed-header');
        $('header div').addClass('visible-title');
    }
    else {
        $('header').removeClass('fixed-header');
        $('header div').removeClass('visible-title');
    }
});
		
			$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('header').removeClass('position-relative');
       
    }
    else {
        $('header').addClass('position-relative');
        
    }
});
    

/* ===== INLINE JAVASCRIPT ===== */


var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/614041a625797d7a89fed572/1ffhg0tci';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
