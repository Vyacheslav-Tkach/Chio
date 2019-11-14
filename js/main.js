$(function () {





$(document).ready(function () {
    var navPos, winPos, navHeight;
    function refreshVar() {
      navPos = $('.header__top').offset().top;
      navHeight = $('.header__top').outerHeight(true);
    }
    refreshVar();
    $(window).resize(refreshVar);
    $('<div class="clone-nav"></div>').insertBefore('.header__top').css('height', navHeight).hide();
    $(window).scroll(function () {
      winPos = $(window).scrollTop();
      if (winPos >= navPos) {
        $('.header__top').addClass('fixed shadow');
        $('.clone-nav').show();
      } else {
        $('.header__top').removeClass('fixed shadow');
        $('.clone-nav').hide();
      }
    });
  });

  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 1) {
        $('.header__top__inner').addClass('slow_padding');
      } else {
        $('.header__top__inner').removeClass('slow_padding');
        $('.header__top').removeClass('shadow')
      }
    });
  });





 








  
});


function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function(){
    if (!document.getElementsByClassName) {
        // IE8 support
        var getElementsByClassName = function(node, classname) {
            var a = [];
            var re = new RegExp('(^| )'+classname+'( |$)');
            var els = node.getElementsByTagName("*");
            for(var i=0,j=els.length; i<j; i++)
                if(re.test(els[i].className))a.push(els[i]);
            return a;
        }
        var videos = getElementsByClassName(document.body,"youtube");
    } else {
        var videos = document.getElementsByClassName("youtube");
    }

    var nb_videos = videos.length;
    for (var i=0; i<nb_videos; i++) {
        // Based on the YouTube ID, we can easily find the thumbnail image
        videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)';

        // Overlay the Play icon to make it look like a video player
        var play = document.createElement("div");
        play.setAttribute("class","play");
        videos[i].appendChild(play);

        videos[i].onclick = function() {
            // Create an iFrame with autoplay set to true
            var iframe = document.createElement("iframe");
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
            iframe.setAttribute("src",iframe_url);
            iframe.setAttribute("frameborder",'0');

            // The height and width of the iFrame should be the same as parent
            iframe.style.width  = this.style.width;
            iframe.style.height = this.style.height;

            // Replace the YouTube thumbnail with YouTube Player
            this.parentNode.replaceChild(iframe, this);
        }
    }
});

