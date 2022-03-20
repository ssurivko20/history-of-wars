function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Animating background of page

redcur = 6;
blackcur = 8;
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
    'width': '30vw',
    'height': '30vw',
    'border-radius': '50%',
    'background-color': 'rgb(20, 20, 20)',
    'position': 'absolute',
    'transform': 'translate(-50%, -50%)',
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