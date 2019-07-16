$(document).on('ready', function() {
  $(".regular").slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: false,
    prevArrow:"<div class='prev-img'></div>",
    nextArrow:"<div class='next-img'></div>",
    responsive: [
    {
      breakpoint: 1024,
      settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: false,
      centerMode: true
    }
    },
    {
      breakpoint: 767,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1,centerMode: true, centerPadding: '29%'
    }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]

  });

  $(window).resize(function(){
    if ($(window).width() >= 980){ 

      // when you hover a toggle show its dropdown menu
      $(".navbar .nav-dropdown-link").hover(function () { 
        $('.nav-dropdown-link').toggleClass("show");
        $(".dropdown-menu").toggleClass("show"); 
      });

      // hide the menu when the mouse leaves the dropdown
      $( ".navbar .dropdown-menu" ).mouseleave(function() {
        $(this).removeClass("show");  
      });

      // do something here
    } 
  });  

  $(".navbar-toggler").click(function(){
    $(".dual-nav").toggle();
  });
  
  $(".megamenu").hover(function(){ 
  $('.shop-link').addClass('link-active');
  }, function(){
 $('.shop-link').removeClass('link-active');
});   
});



function wcqib_refresh_quantity_increments() {
  jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function(a, b) {
    var c = jQuery(b);
    c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
  })
}
function myFunction(x) {
  x.classList.toggle("change");
} 
String.prototype.getDecimals || (String.prototype.getDecimals = function() {
  var a = this,
      b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
}), jQuery(document).ready(function() {
  wcqib_refresh_quantity_increments()
}), jQuery(document).on("updated_wc_div", function() {
  wcqib_refresh_quantity_increments()
}), jQuery(document).on("click", ".plus, .minus", function() {
  var a = jQuery(this).closest(".quantity").find(".qty"),
      b = parseFloat(a.val()),
      c = parseFloat(a.attr("max")),
      d = parseFloat(a.attr("min")),
      e = a.attr("step");
  b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
});