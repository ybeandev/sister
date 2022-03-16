$(function(){

    // 윈도우 리사이즈시 초기화 작업
    // -----------------------------------------------
    function resizeInit(){
        $('.gnb, nav li, .dimmed, .div-search, .search-trigger').removeClass('active');
        scrollAble();
    }

    $(window).on('resize', function(){
        // 공통 초기화 함수
        resizeInit()
        
        if($(window).width()>=768){
            // pc
            
        }else{
            // mobile
            
        }
    })

    // body 영역 스크롤 컨트롤 ====================================
    function scrollDisable(){
        $('body').addClass('scrollDisable').on('scroll touchmove mousewheel', function(e){
            e.preventDefault();
        });
    }
    function scrollAble(){
        $('body').removeClass('scrollDisable').off('scroll touchmove mousewheel');
    }
    // END body 영역 스크롤 컨트롤

    // Trigger 컨트롤 ===========================================


    // main Menu control
    // -----------------------------------------------
    $('nav').bind('keyup mouseover', function(){
        // 태블릿 세로버전 이상인 경우 컨트롤
        if($(window).width()>=768){
            $('.gnb').addClass('active');
        }
    })

    $('nav').bind('mouseleave', function(){
        // 태블릿 세로버전 이상인 경우 컨트롤
        if($(window).width()>=768){
            $('.gnb').removeClass('active');
        }
    })


    // mobile menu/search 기능 컨트롤 ------------------------
    // 검색버튼 컨트롤
    $(document).on('click', '.search-trigger', function(e){
        
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.div-search').removeClass('active');
            if($(window).width()<768){ 
                $('.dimmed').removeClass('active');
                scrollAble();
            }
        }else{
            $(this).parent().siblings().find('a').removeClass('active');
            $(this).addClass('active');
            $('nav').removeClass('active');
            $('.div-search').addClass('active');
            if($(window).width()<768){ 
                $('.dimmed').addClass('active');
                scrollDisable();
            }
        }
    })
    
    // menu버튼 컨트롤
    if($(window).width()<768){ 

        $(document).on('click', '.menu-trigger', function(e){
            if($(this).hasClass('active')){
                $(this).removeClass('active');  
                $('.dimmed, nav').removeClass('active');
                scrollAble();        
            }else{
                $(this).parent().siblings().find('a').removeClass('active');
                $(this).addClass('active');  
                $('.div-search').removeClass('active');
                $('.dimmed, nav').addClass('active');
                scrollDisable();        
            }
        })

        // menu 아코디언 기능
        $(document).on('click', '.mobile-menu > li', function(e){
            e.preventDefault();
            $(this).siblings().removeClass('active');
            $(this).addClass('active');

        })
    }

    // menu/search 영역외 클릭시 초기화
    $(document).on('click', '.dimmed', function(e){
        // 버튼 초기화
        $('.menu-trigger, .search-trigger').removeClass('active')
        // menu/search/dimmed 영역 초기화
        $('.dimmed, nav, .div-search').removeClass('active');
    })


    // END mobile menu/search 기능 컨트롤


})