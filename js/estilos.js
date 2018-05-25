document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

$(".button-collapse").sideNav();

$(document).ready(function(){
    $('.sidenav').sidenav();
  });
        
		document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, options);
  });
  
  $(".button-collapse").sideNav();