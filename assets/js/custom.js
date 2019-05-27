/*global jQuery */
/* Contents
// ------------------------------------------------>
1.	HEADER MENU
2.  PROPERTY FORM
3.  HEADER STICKY
4.  COUNTER
5.  FEATURED SLIDER
6.  AGENTS SLIDER
7.  AGENTS SLIDER
8.  SCROLL TO TOP
9.  HEADER SMOOTH SCROLL
10. FAQ ACCORDION
11. COMEING SOON
12. ANIMACTION
*/

(function($) {

"use strict"; 
/*************HEADER MENU******************/

$("#mobile-menu").on("click", function(e) {
$(".mobile-menu").slideToggle("slow");
});

$(".hat").on("click", function(e) {
$(".menu-out").toggle();

});
/*************PROPERTY FORM*******************/

$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.on("click", function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.on("click", function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).on("click", function(e) { 
        $styledSelect.removeClass('active');
        $list.hide();
    });

});

/*************PROPERTY TAB*******************/
  // Cache selectors
  var tabs = $('.tablist__tab'),
      tabPanels = $('.tablist__panel');
  
  tabs.on('click', function() {
  
    // Cache selectors
    var thisTab = $(this),
        thisTabPanelId = thisTab.attr('aria-controls'),
        thisTabPanel = $('#' + thisTabPanelId);

    // De-select all the tabs
    tabs.attr('aria-selected', 'false').removeClass('is-active');

    // Select this tab
    thisTab.attr('aria-selected', 'true').addClass('is-active');

    // Hide all the tab panels
    tabPanels.attr('aria-hidden', 'true').addClass('is-hidden');

    // Show this tab panel
    thisTabPanel.attr('aria-hidden', 'false').removeClass('is-hidden');

  });
  
  // Add enter key to the basic click event
  tabs.on('keydown', function(e) {
    
    var thisTab = $(this);
    
    if(e.which == 13) {
      thisTab.click();
    }
    
  });

/*************HEADER STICKY*******************/
$(window).on("scroll", function() {
    if ($(this).scrollTop() > 50){  
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});
/*************SEARCH POPUP*******************/
$(function() {
  $('a[href="#search"]').on("click", function(event) {
    event.preventDefault();
    $("#search").addClass("open");
    $('#search > form > input[type="search"]').focus();
  });

  $("#search, #search button.close").on("click keyup", function(event) {
    if (
      event.target == this ||
      event.target.className == "close" ||
      event.keyCode == 27
    ) {
      $(this).removeClass("open");
    }
  });

  $("form").submit(function(event) {
    event.preventDefault();
    return false;
  });
});

/*************COUNTER*******************/

var a = 0;
$(window).on("scroll", function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }
});

/*************FEATURED SLIDER*******************/

var owl = $('#slider');
	owl.owlCarousel({
	loop:true,
	margin: 10,
	autoplayTimeout:5000,
	smartSpeed:450,
	dots:false,
	nav: true,
	navText: ['<div class="left_arrow">','<div class="right_arrow">'],
	responsive: {
	  0: {
		items: 1
	  },
	  600: {
		items: 2
	  },
	  992: {
		items: 3
	  },
	  1025: {
		items: 4
	  }
	}
})

/*************AGENTS SLIDER*******************/

var owl = $('#slider1');
	owl.owlCarousel({
	loop:true,
	margin: 10,
	autoplayTimeout:5000,
	smartSpeed:450,
	dots:false,
	nav: true,
	navText: ['<div class="left_arrow">','<div class="right_arrow">'],
	responsive: {
	  0: {
		items: 1
	  },
	  600: {
		items: 2
	  },
	  992: {
		items: 3
	  },
	  1025: {
		items: 4
	  }
	}
})


/*************AGENTS SLIDER*******************/

var owl = $('#slider2');
	owl.owlCarousel({
	loop:true,
	margin: 10,
	autoplayTimeout:5000,
	smartSpeed:450,
	dots:false,
	nav: true,
	navText: ['<div class="left_arrow">','<div class="right_arrow">'],
	responsive: {
	  0: {
		items: 1
	  },
	  600: {
		items: 2
	  },
	  992: {
		items: 3
	  },
	  1025: {
		items: 4
	  }
	}
})

/*************SERVICES SLIDER*******************/

var owl = $('#slider3');
	owl.owlCarousel({
	loop:true,
	margin: 10,
	autoplayTimeout:5000,
	smartSpeed:450,
	dots:true,
	nav: false,
	navText: ['<div class="left_arrow">','<div class="right_arrow">'],
	responsive: {
	  0: {
		items: 1
	  },
	  600: {
		items: 1
	  },
	  992: {
		items: 2
	  },
	  1025: {
		items: 1
	  }
	}
})

/*************SCROLL TO TOP*******************/
$('.scrollToTop').on("click", function(e){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    
    $("img.lazy").lazyload({
        effect : "fadeIn"
    });

    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 15) {
            $('.wrap_header').addClass('top_fix');
        }
        else {
            $('.wrap_header').removeClass('top_fix');
        }

        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    
$('#carousel').on('click', '.item.active', function(){
  alert('This would show lightbox');
})

		
 })(jQuery); // End of use strict   
 
 
 