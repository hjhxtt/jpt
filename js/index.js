
$('.m_header button').on('click',function(){
          $(this).toggleClass('active');
        })

$('.section1 img,.section2 .video_box,.section2 .sec2_right img,.sec2_icon,.sec3_main,.news_box,.sec4_bot_main .zuhe,.sec4_bot_more,.sec5_left,.sec5_right').css('opacity','0');
$('.inner_banner img').addClass('animated fadeInLeft slower')


var screenw = $(window).width();

$('#fullpage').fullpage({
        /*配置参数*/

        verticalCentered: true,
        navigation: true,
        controlArrows:screenw>768?true:false,
        fixedElements:".header,.m-nav,.obj_nav",
        afterSlideLoad: function(anchorLink,index,slideIndex,direction){
        },
        afterLoad: function(anchorLink, index,slideIndex){
            if(index==1){
                $('.section1 img').addClass('animated fadeInRight slower').css('opacity','1');
            }
            if(index==2){
                //加背景动画
                $('.section2 .video_box').addClass('animated fadeInLeft slower').css('opacity','1');
                $('.section2 .sec2_right img').addClass('animated fadeInRight slower').css('opacity','1');



                $('.sec2_icon').eq(0).addClass('animated fadeInUp slow').css('opacity','1');
                setTimeout(function(){
                    $('.sec2_icon').eq(1).addClass('animated fadeInUp slow').css('opacity','1');
                },300)

                setTimeout(function(){
                    $('.sec2_icon').eq(2).addClass('animated fadeInUp slow').css('opacity','1');
                },600)


            }
            if(index==3){
            //加背景动画



            $('.sec3_main').addClass('animated zoomIn slower').css('opacity','1');
            }


            if(index==4){
                //加背景动画


                $('.news_box').eq(0).addClass('animated fadeInUp slow').css('opacity','1');
                setTimeout(function(){
                    $('.news_box').eq(1).addClass('animated fadeInUp slow').css('opacity','1');
                },300)

                setTimeout(function(){
                    $('.news_box').eq(2).addClass('animated fadeInUp slow').css('opacity','1');
                },600)


                $('.sec4_bot_main .zuhe').addClass('animated fadeInLeft slow').css('opacity','1');
                $('.sec4_bot_more').addClass('animated fadeInRight slow').css('opacity','1');


            }
            if(index==5){


                $('.sec5_left').addClass('animated fadeInLeft slow').css('opacity','1');
                $('.sec5_right').addClass('animated fadeInRight slow').css('opacity','1');

                $('.footer.index_footer').addClass('animated fadeInUp slow').css('opacity','1');

            }
        },
        onLeave: function(index, nextIndex, direction){

            if(index==1){


                setTimeout(function(){
                    $('.section1 img').removeClass('animated fadeInRight slower').css('opacity','0');
                },500)

            }
            if(index==2){
                //加背景动画
                setTimeout(function(){
                    $('.section2 .video_box').removeClass('animated fadeInLeft slower').css('opacity','0');
                $('.section2 .sec2_right img').removeClass('animated fadeInRight slower').css('opacity','0');
                $('.sec2_icon').removeClass('animated fadeInUp slow').css('opacity','0');
                },500)


            }
            if(index==3){
            //加背景动画

            setTimeout(function(){
                $('.sec3_main').removeClass('animated zoomIn slower').css('opacity','0');
            },500)


            }


            if(index==4){
                //加背景动画


                setTimeout(function(){
                    $('.news_box').removeClass('animated fadeInUp slow').css('opacity','0');


                    $('.sec4_bot_main .zuhe').removeClass('animated fadeInLeft slow').css('opacity','0');
                    $('.sec4_bot_more').removeClass('animated fadeInRight slow').css('opacity','0');
                },500)


            }
            if(index==5){

                setTimeout(function(){
                    $('.sec5_left').removeClass('animated fadeInLeft slow').css('opacity','0');
                $('.sec5_right').removeClass('animated fadeInRight slow').css('opacity','0');

                $('.footer.index_footer').removeClass('animated fadeInUp slow').css('opacity','0');
                },500)



            }


        },
    });


    var mySwiper1 = new Swiper('#swiper1', {
    autoplay: 3000,//可选选项，自动滑动
    speed:300,
    pagination : '.swiper-pagination',
    paginationClickable :true,
    slidesPerView: 4,
    slidesPerColumn: 2,
    spaceBetween : 80,

})




    // 百度地图API功能
    // var map = new BMap.Map("allmap",{mapType:BMAP_NORMAL_MAP});
    // var point = new BMap.Point(115.468426,28.069779);
    // map.centerAndZoom(point, 15);
    // var marker = new BMap.Marker(point);  // 创建标注

    // var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
    // var top_left_navigation = new BMap.NavigationControl();

    //     map.addControl(top_left_control);// 左上角，添加比例尺
    //     map.addControl(top_left_navigation);// 左上角，添加地图缩放
    //     map.enableScrollWheelZoom();//启用地图滚轮放大缩小




    //     var data_info = [[115.468426,28.069779,"地址：江西金品堂医药股份有限公司"],
    //                 ];
    //     var opts = {
    //                 width : 250,     // 信息窗口宽度
    //                 height: 50,     // 信息窗口高度
    //                 title : "公司地址" , // 信息窗口标题
    //                 enableMessage:true//设置允许信息窗发送短息
    //                };
    //     for(var i=0;i<data_info.length;i++){
    //         var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]));  // 创建标注
    //         marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    //         var content = data_info[i][2];
    //         map.addOverlay(marker);               // 将标注添加到地图中
    //         addClickHandler(content,marker);
    //     }

    //     function addClickHandler(content,marker){
    //         marker.addEventListener("mouseover",function(e){
    //             openInfo(content,e)}
    //         );
    //     }
    //     function openInfo(content,e){
    //         var p = e.target;
    //         var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
    //         var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象
    //         map.openInfoWindow(infoWindow,point); //开启信息窗口
    //     }