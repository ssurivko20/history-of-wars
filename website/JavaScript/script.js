// initialize aos library for anmitaing
AOS.init({ debounceDelay: 50 });

// function for slideshowing of header images on home page
function setBackgroundImage() {
    var imgSources = ["images/head-back-ancient.jpg", "images/head-back-medie.jpg",
        "images/head-back-18th.jpg", "images/head-back-20th.jpg"
    ];

    var quotes = ['"Only the dead have seen the end of war."<br> &#8722; Plato', '"God created war so that Americans would learn geography."<br> &#8722; Mark Twain',
        '"War is what happens when language fails."<br> &#8722; Margaret Atwood', '"I know not with what weapons World War III will be fought,<br> but World War IV will be fought with sticks and stones."<br> &#8722; Albert Einstein',
        '"The greatest victory is that which requires no battle."<br> &#8722; Sun Tzu'
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