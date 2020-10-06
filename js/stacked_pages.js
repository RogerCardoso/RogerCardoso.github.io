$(document).ready(function(){
 var lastScrollTop = 0;
 var selector = ".fspage";
 $(window).scroll(function() {
 
 var curr = $('.active:not(".wait")');
 var next, prev;
 
 if (curr.length !== 0) {
   next = curr.next();
   prev = curr.prev();
 }
 
 var st = $(this).scrollTop();
 if (st > lastScrollTop){
 
   // downscroll code
   if (typeof next!="undefined" && atBottom(curr[0])) {
     changeActivePageDown(curr,next);
   }
   else {
     curr.removeClass("fixed");
   }
 
 }
 else {
 
   // upscroll code
   if (curr.index()===0){
     // already at top of first page
     return;
   }
 
   if (typeof curr != "undefined" && typeof prev != "undefined") { 
     if (atTop(curr[0])) {
       changeActivePageUp(curr,prev,next);
      }
 
   }
   else {
 
      var last = $(selector).last();
      if (atTop(last[0])) {
         last.prev().addClass("wait").addClass("active");
         last.removeClass("prev").addClass("fixed");
         last.prev().removeClass("prev").removeClass("wait");
      }
   }
 }//end lastScrollTop changed
 
 lastScrollTop = st;
 return;
 });
});


function changeActivePageDown(curr,next) {
  curr.removeClass("active").addClass("prev");
  next.addClass("active").addClass("wait").removeClass("fixed");
  next.next().addClass("fixed");
  next.removeClass("wait");
}
function changeActivePageUp(curr,prev,next) {
  prev.addClass("active").addClass("wait").removeClass("prev");
  next.removeClass("fixed");
  curr.removeClass("active").addClass("fixed");
  prev.removeClass("wait");
}

function atBottom(ele) {
 if (ele.getBoundingClientRect().bottom <= 0) {
   return true;
 }
 return false;
}

function atTop(ele) {
 if (ele.getBoundingClientRect().top >= 0) {
   return true;
 }
 return false;
}