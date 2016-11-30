(function(){/**
 * Created by Administrator on 2016/11/27.
 */
var oContraint=document.getElementById('contraint');
    var oNav=document.getElementById('nav');
    var aImg = oNav.getElementsByTagName('img');
    var oPrev=document.getElementById('prev');
    var oNext=document.getElementById('next');
    var oContent = document.getElementById('content');
    var aImg1 = oContent.getElementsByTagName('img');
    var oCurrentPage=document.getElementById('b-page')
    var iNow=0;
    var zIndex = 8;
    for(var i=0; i<aImg.length; i++){
        aImg[i].style.zIndex = aImg.length - i;
    };
    oNext.onclick=oPrev.onclick=function(){
        if(this == oNext){
            iNow++;
            if(iNow == aImg1.length){
                iNow = 0;
            }
        }else{
            iNow--;
            if(iNow == -1){
                iNow = aImg1.length - 1;
            }
        }
        changeImg(iNow);
    }
    for(var i=0; i<aImg1.length; i++){
        aImg1[i].className = "small-opacity";
    }
    aImg1[iNow].className = "selected";
    for(var i=0;i<aImg1.length;i++){
        aImg1[i].index=i;
        aImg1[i].onmouseover=function(){
            animate(this,{
                opacity:100
            });
        }
        aImg1[i].onmouseout=function(){
            animate(this,{
                opacity:30
            })
        }
        aImg1[i].onclick=function(){
            if(this.index != iNow){
                changeImg(this.index);
            }
        }
    }
    function changeImg(index){
        iNow=index;
        var oImg = aImg[index];
        console.log(oImg);
        oImg.style.opacity=0;
        oImg.style.filter='alpha(opacity=0)';
        oImg.style.zIndex= zIndex++;
        animate(oImg,{opacity:100});
        oCurrentPage.innerHTML = index + 1;
        for(var i=0;i<aImg1.length;i++){
            aImg1[i].style.opacity = .3;
            aImg1[i].style.filter = "alpha(opacity=30)";
        }
        aImg1[index].style.opacity = 1;
        aImg1[index].style.filter = "alpha(opacity=100)";
        var ileft=0;
        if(index==1||index==0){
            ileft=0;
        }else if(index==aImg1.length-1||index==aImg1.length-2){
            ileft=aImg1.length/2;
        }else{
            ileft=index-1;
        }
        animate(oContent,{
            left: -ileft*aImg1[0].offsetWidth
        })
    }
    oPrev.onmouseover=oNext.onmouseover=function(){
        animate(this,{
            opacity:100
        });
    }
    oPrev.onmouseout=oNext.onmouseout=function() {
        animate(this,{
            opacity:0
        })
    }
    run();
    oContraint.onmouseover = function(){
        clearInterval(timer);
    };
    oContraint.onmouseout = function(){
        run();
    };

    function run(){
        timer = setInterval(function(){
            oNext.onclick();
        }, 1000);
    }
})();/**
 * Created by Administrator on 2016/11/30.
 */
