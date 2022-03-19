// initialize aos library for anmitaing
AOS.init({ debounceDelay: 50 });

// function for generating random whole numbers
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Animating background of page

redcur = 12;
blackcur = 6;
var backgrad = document.getElementsByClassName("backgrad")[0];
var span;
var randtop;
var randleft;
var positionList = new Array();

for (var i = 0; i < blackcur; i++) {
    span = document.createElement('span');
    span.setAttribute("id", "blackcur" + i);
    span.setAttribute('class', 'cblack');
    backgrad.appendChild(span);
}
for (var i = 0; i < redcur; i++) {
    span = document.createElement('span');
    span.setAttribute("id", "redcur" + i);
    span.setAttribute('class', 'cred');
    backgrad.appendChild(span);
}

$('.cblack').css({
    'width': '50vw',
    'height': '50vw',
    'border-radius': '50%',
    'background-color': 'black',
    'position': 'absolute',
    'transform': 'translate(-50%, -50%)',
    'transition': '.5s',
    'filter': 'blur(20px)'
});

for (var i = 0; i < blackcur; i++) {
    span.setAttribute("id", "blackcur" + i);
    randleft = getRandomInt(101);
    randtop = getRandomInt(101);
    $('#' + 'blackcur' + i).css({
        'top': randtop + '%',
        'left': randleft + '%'
    })
    positionList.push(randtop);
    positionList.push(randleft);
}

$('.cred').css({
    'width': '2vw',
    'height': '2vw',
    'border-radius': '50%',
    'background-color': 'rgb(255, 56, 56)',
    'position': 'absolute',
    'transform': 'translate(-50%, -50%)',
    'transition': '.5s',
    'box-shadow': '0 0 1vw rgb(255, 0, 0), 0 0 2vw rgb(255, 0,0), 0 0 2vw rgb(255, 0, 0), 0 0 2vw rgb(255, 0, 0)',
    'filter': 'blur(20px)'
});

for (var i = 0; i < redcur; i++) {
    span.setAttribute("id", "redcur" + i);
    randleft = getRandomInt(101);
    randtop = getRandomInt(101);
    $('#' + 'redcur' + i).css({
        'top': randtop + '%',
        'left': randleft + '%'
    })
    positionList.push(randtop);
    positionList.push(randleft);
}

function moveCircles() {
    for (var i = 0; i < redcur; i += 1) {
        $('#' + 'redcur' + i).css({
            'top': positionList[i] + getRandomInt(5) + '%',
            'left': positionList[i + 1] + getRandomInt(5) + '%'
        })
    }
}

// function for slideshowing of header images on home page
function setBackgroundImage() {
    var imgSources = ["images/head-back-ancient.jpg", "images/head-back-medie.jpg",
        "images/head-back-18th.jpg", "images/head-back-20th.jpg"
    ];

    var quotes = ['"Only the dead have seen the end of war."<br>&#9866; Plato', '"God created war so that Americans would learn geography."<br>&#9866; Mark Twain',
        '"War is what happens when language fails."<br>&#9866; Margaret Atwood', '"I know not with what weapons World War III will be fought,<br> but World War IV will be fought with sticks and stones."<br>&#9866; Albert Einstein',
        '"The greatest victory is that which requires no battle."<br>&#9866; Sun Tzu'
    ];
    var qlen = quotes.length;
    document.getElementById("quote").innerHTML = quotes[getRandomInt(qlen)];

    var len = imgSources.length;
    var randint = getRandomInt(len);
    var image = new Image();
    image.src = imgSources[randint];
    $("#header-image").css("background-image", "url('" + image.src + "')");
    if (randint == 0) {
        document.getElementById("heading").style.fontFamily = 'greek';
        document.getElementById("heading").innerHTML = 'HISTORY OF WARS';
    } else if (randint == 1) {
        document.getElementById("heading").style.fontFamily = 'mediavel';
        document.getElementById("heading").innerHTML = 'History of wars';
    } else if (randint == 2) {
        document.getElementById("heading").style.fontFamily = 'enlight';
        document.getElementById("heading").innerHTML = 'History of wars';
    } else if (randint == 3) {
        document.getElementById("heading").style.fontFamily = 'modern';
        document.getElementById("heading").innerHTML = 'HISTORY OF WARS';
    }
}

// Setting image and time interval
setBackgroundImage();
var timeid2 = setInterval(function() { setBackgroundImage(); }, 10000);