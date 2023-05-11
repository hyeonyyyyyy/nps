$(function(){

    var nowZoom = 100;
    function zoomOut(){
        nowZoom = nowZoom - 10;
        if(nowZoom <= 70) nowZoom = 70;
        zooms();
    };
    function zoomIn(){
        nowZoom = nowZoom + 10;
        if(nowZoom >= 500) nowZoom = 500;
        zooms();
    };
    function zoomReset(){
        nowZoom = 100;
        zooms();
    };
    function zooms(){
        document.body.style.zoom = nowZoom + '%';
        if(nowZoom==70){
            alert("30% 축소 되었습니다. 더 이상 축소할 수 없습니다.");
        }
        if(nowZoom==500){
            alert("500% 확대 되었습니다. 더 이상 확대할 수 없습니다.");
        }
    };

    var swiper = new Swiper(".firstSwiper", {
        loop:true,
        slidesPerView: 1,
        speed : 1000,
        autoplay : { 
            delay : 3000,
            disableOnInteraction : false,
          },
        pagination: {
          el: ".main_left .swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".main_left .swiper-button-next",
          prevEl: ".main_left .swiper-button-prev",
        },     
    });
    $(".start").on("click",function(){
        swiper.autoplay.start();
        return false;
    });

    $(".stop").on("click",function(){
        swiper.autoplay.stop();
        return false;
    });
    $(".stop").click(function(){
        $(".start").addClass("active");
        $(".stop").addClass("active");
    });
    $(".start").click(function(){
        $(".start").removeClass("active");
        $(".stop").removeClass("active");
    });
    
    var swiper2 = new Swiper(".newsSwiper", {
        loop:true,
        slidesPerGroup:1,
        slidesPerView: 3,
        spaceBetween : 20,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: ".tab_cont .swiper-button-next",
          prevEl: ".tab_cont .swiper-button-prev",
        },
      });

      var $tablink = $(".tabTitle li").click(function(){
        var idx=$tablink.index(this);
        $(".tabTitle li").removeClass("on active")
        $(".tabTitle li").eq(idx).addClass("on active");
        $(".tabCont > div").hide();
        $(".tabCont > div").eq(idx).show();

      })
      $(".tab_title li").click(function(){
        var idx = $(this).index();
        $(".tab_title li").removeClass("on active");
        $(".tab_title li").eq(idx).addClass("on active");
        $(".tab_cont > div").hide();
        $(".tab_cont > div").eq(idx).show();
      });

      var swiper3 = new Swiper(".popupSwiper", {
        loop:true,
        slidesPerView: 1,
        spaceBetween:20,
        speed : 1000,
        autoplay : { 
            delay : 3000,
            disableOnInteraction : false,
          },
        pagination: {
          el: ".ps_left .swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".ps_left .swiper-button-next",
          prevEl: ".ps_left .swiper-button-prev",
        },     
    });

  var tabMenu = $("#tab-menu");

//컨텐츠 내용을 숨겨주세요!
tabMenu.find("ul > li > div").hide();
tabMenu.find("li.active > div").show();

//두번째 버튼 클릭 --> 모든 active 삭제 --> 내가 클릭한 버튼 active 추가
function tabList(e){
  e.preventDefault(); //#의 기능을 차단
  var target = $(this);
  target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find(">div").hide();    
  //버튼을 클릭하면 ~ div를 보여주고
  //부모의 li 태그에 클래스를 추가하고
  //형제의 li 태그에 클래스를 제거하고
  //제거한 자식의 div 태그를 숨겨줌
}

tabMenu.find("ul > li > a").click(tabList).focus(tabList);


$("#top").click(function() {
  $('html, body').animate({
      scrollTop : 0
  }, 300);
  return false;
});



$(".quick_menu .btn_more").on("click",function(){
  var $quick = $(".quick_menu");
  if($quick.hasClass("full")){
      $quick.removeClass("full");
      $(this).text("더보기");
  }else{
      $quick.addClass("full");
      $(this).text("숨기기");
  }
});
});
      
    
