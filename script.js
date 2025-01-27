'use strict'

// スクロールイベント
const skillCon = document.querySelectorAll('.skillCon');

const exercises01 = document.querySelector('.exercises01');
const exercises02 = document.querySelector('.exercises02');
const portfolio01 = document.querySelector('.portfolio01');
const portfolio02 = document.querySelector('.portfolio02');

window.addEventListener("scroll", function () {
    if(window.scrollY >= 400) {
        for(let k = 0; k < skillCon.length; k++){
            skillCon[k].style.display ='block';
        }
    }
    if(window.scrollY >= 800) {
        exercises01.style.display ='block';
    }
    if(window.scrollY >= 850) {
        exercises02.style.display ='block';
    }
    if(window.scrollY >= 900) {
        portfolio01.style.display ='block';
    }
    if(window.scrollY >= 950) {
        portfolio02.style.display ='block';
    }
});

// ローディング画面
const loding = document.querySelector('.js-loding');
const body = document.querySelector('.bodySec') //ボディにoverflow:hidden;を設定するための設定

loding.addEventListener('click', function() {
    loding.style.display = 'block';
    body.style.overflow = 'visible'
    loding.classList.add('js-lodingOut');
});

// トップ/////////////////////////////////////////////////////////////////////////////

const topGirl = document.querySelector('.topGirl'); 
const topGirl02 = document.querySelector('.topGirl02');
const topGirlSkill = document.querySelector('.topGirlSkill');
const topGirlGame = document.querySelector('.topGirlGame');

const top01 = document.querySelector('.top');
const onOff = document.querySelector('.onOff');
const topDor = document.querySelector('.topDor');
const topSkill = document.querySelector('.topSkill');
const topTv = document.querySelector('.topTv');
const topTel = document.querySelector('.topTel');
const topTvCon = document.querySelector('.topTvCon');
const topLight = document.querySelector('.topLight');

const popAddress = document.querySelector('.popAddress');
const popGallery = document.querySelector('.popGallery');
const popSkill = document.querySelector('.popSkill');
const bikkuri = document.querySelector('.bikkuri');

let i = Math.floor(Math.random() * 4)
topSwitch();

topDor.addEventListener('mouseover', function() {
    i = 0;
    topSwitch()
});

topSkill.addEventListener('mouseover', function() {
    i = 1;
    topSwitch()
});
popSkill.addEventListener('mouseover', function() {
    i = 1;
    topSwitch()
});


topTv.addEventListener('mouseover', function() {
    i = 2;
    topSwitch()
});
popGallery.addEventListener('mouseover', function() {
    i = 2;
    topSwitch()
});


topTel.addEventListener('mouseover', function() {
    i = 3;
    topSwitch()
});
popAddress.addEventListener('mouseover', function() {
    i = 3;
    topSwitch()
});

function topNoneSet() {
    topGirlSkill.style.display = 'none';
    topGirl.style.display = 'none';
    topGirl02.style.display = 'none';
    topGirlGame.style.display = 'none';
    topTvCon.style.display = 'block';
} 

function topSwitch() {
    switch(i) {
        case i = 0:
            topNoneSet();
            topGirl02.src="images/topGirl02.png";
            topGirl02.style.display = 'block';
        break;
        case i = 1:
            topNoneSet();
            topGirlSkill.style.display = 'block';
        break;
        case i = 2:
            topNoneSet();
            topGirlGame.style.display = 'block';
            topTvCon.style.display = 'none';
        break;
        case i = 3:
            topNoneSet();
            topGirl.style.display = 'block';
        break;
}};

topGirl02.addEventListener('click', function() {
    topGirl02.src="images/topGirl03.png";
});

topLight.addEventListener('click', function() {
    onOff.style.display = 'block';
    top01.style.overflow = 'hidden';
    bikkuri.style.display = 'block';
    switch( i ) {
        case i = 0:
            bikkuri.classList.add("bikkuri00");
        break
        case i = 1:
            bikkuri.classList.add("bikkuri01");
        break
        case i = 2:
            bikkuri.classList.add("bikkuri02");
        break
        case i = 3:
            bikkuri.classList.add("bikkuri03");
        break
    }
})

onOff.addEventListener('click', function() {
    onOff.style.display = 'none';
    top01.style.overflow = 'auto';
    bikkuri.style.display = 'none';
    bikkuri.classList.remove("bikkuri00");
    bikkuri.classList.remove("bikkuri01");
    bikkuri.classList.remove("bikkuri02");
    bikkuri.classList.remove("bikkuri03");
});

console.log(i)
// ギャラリー

const galleryGirl = document.querySelector('.galleryGirl');
const arrowR = document.querySelector('.arrowR');
const arrowL = document.querySelector('.arrowL');
const myGallery = document.querySelector('.myGallery');
const winSizeTab = window.matchMedia('(max-width:768px)');
const winSizeSp = window.matchMedia('(max-width:375px)');

let j = 1;

arrowR.addEventListener('click', function() {
    if(j === 4){
        j = 1;
        myGallery.style.transform = 'translateX(0px)';
    } else {
        j++;
    if(winSizeSp.matches) {
        switch(j) {
            case 1:
                myGallery.style.transform = 'translateX(0px)';
                galleryGirl.classList.remove("galleryGirl02");
                break;
            case 2:
                myGallery.style.transform = 'translateX(-340px)';
                galleryGirl.classList.remove("galleryGirl02");
                break;
            case 3:
                myGallery.style.transform = 'translateX(-680px)';
                galleryGirl.classList.remove("galleryGirl02");
                break;
            case 4:
                myGallery.style.transform = 'translateX(-1020px)';
                galleryGirl.classList.remove("galleryGirl02");
                break;
        }
    } else if(winSizeTab.matches) {
        switch(j) {
            case 1:
                myGallery.style.transform = 'translateX(0px)';
                galleryGirl.classList.remove("galleryGirl02");
                arrowR.classList.remove("arrowR02");
                break;
            case 2:
                myGallery.style.transform = 'translateX(-670px)';
                galleryGirl.classList.add("galleryGirl02");
                arrowR.classList.add("arrowR02");
                break;
            case 3:
                j = 1;
                myGallery.style.transform = 'translateX(0px)';
                galleryGirl.classList.remove("galleryGirl02");
                arrowR.classList.remove("arrowR02");
                break;
        }
    } else {
        switch(j) {
            case 1:
                myGallery.style.transform = 'translateX(0px)';
                galleryGirl.classList.remove("galleryGirl02");
                arrowR.classList.remove("arrowR02");
                break;
            case 2:
                myGallery.style.transform = 'translateX(-340px)';
                galleryGirl.classList.add("galleryGirl02");
                arrowR.classList.add("arrowR02");
                break;                
            case 3:
                j = 1;
                myGallery.style.transform = 'translateX(0px)';
                galleryGirl.classList.remove("galleryGirl02");
                arrowR.classList.remove("arrowR02");
                break;
        }
    }
}
});

arrowL.addEventListener('click', function() {
    if(j === 1){
        j = 4;
        myGallery.style.transform = 'translateX(-1020px)';
    } else {
        j--;
    if(winSizeSp.matches) {
        switch(j) {
            case 1:
                myGallery.style.transform = 'translateX(0px)';
                galleryGirl.classList.add("galleryGirl02");
                break;
            case 2:
                myGallery.style.transform = 'translateX(-340px)';
                galleryGirl.classList.add("galleryGirl02");
                break;
            case 3:
                myGallery.style.transform = 'translateX(-680px)';
                galleryGirl.classList.add("galleryGirl02");
                break;
            case 4:
                myGallery.style.transform = 'translateX(-1020px)';
                galleryGirl.classList.add("galleryGirl02");
                break;
        }
    } else if(winSizeTab.matches) {
        switch(j) {
            case 1:
                myGallery.style.transform = 'translateX(0px)';
                galleryGirl.classList.remove("galleryGirl02");
                arrowR.classList.remove("arrowR02");
                break;
            case 2:
                myGallery.style.transform = 'translateX(-670px)';
                galleryGirl.classList.add("galleryGirl02");
                arrowR.classList.add("arrowR02");
                break;
            case 3:
                j = 1;
                myGallery.style.transform = 'translateX(0px)';
                galleryGirl.classList.remove("galleryGirl02");
                arrowR.classList.remove("arrowR02");
                break;
        }
    } else {
        switch(j) {
            case 1:
                myGallery.style.transform = 'translateX(0px)';
                galleryGirl.classList.remove("galleryGirl02");
                arrowR.classList.remove("arrowR02");
                break;
            case 2:
                myGallery.style.transform = 'translateX(-340px)';
                galleryGirl.classList.add("galleryGirl02");
                arrowR.classList.add("arrowR02");
                break;                
            case 3:
                j = 1;
                myGallery.style.transform = 'translateX(0px)';
                galleryGirl.classList.remove("galleryGirl02");
                arrowR.classList.remove("arrowR02");
                break;
        }
    }
}
});