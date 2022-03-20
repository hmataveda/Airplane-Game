var player = {
    right: 600,
    bottom: 10,

}

var enemies = [{
        top: 10,
        right: 300,
    },
    {
        top: 30,
        right: 500
    },
    {
        top: 10,
        right: 700
    },
    {
        top: 40,
        right: 900
    }

]
var missiles = [];

function drawPlayer() {
    document.querySelector('.player').style.right = player.right + "px";
    document.querySelector('.player').style.bottom = player.bottom + "px";
}

function drawEnimies(i) {
    document.querySelectorAll('.enemy')[i].style.right = enemies[i]['right'] + "px";
    document.querySelectorAll('.enemy')[i].style.top = enemies[i]['top'] + "px";
}

function drawMissiles() {
    var content = '';
    for (var i = 0; i < missiles.length; i++) {
        content += `<div class = "missile" style = "right:${missiles[i].right}px ; bottom: ${missiles[i].bottom}px"></div>`;
    }
    document.querySelector('#missiles').innerHTML = content;
}

document.onkeydown = function(e) {
    console.log(e);
    if (e.code == "ArrowLeft" && player.right < 1190) {
        player.right += 10;
    }
    if (e.code == "ArrowRight" && player.right > 0) {
        player.right -= 10;
    }
    if (e.code == "ArrowDown" && player.bottom > 10) {
        player.bottom -= 10;
    }
    if (e.code == "ArrowUp" && player.bottom < 150) {
        player.bottom += 10;
    }
    if (e.code == "Space") {
        missiles.push({
            right: player.right + 23,
            bottom: player.bottom + 65
        })
        drawMissiles();
    }

    drawPlayer();
}

function freeMove() {
    for (var i = 0; i < enemies.length; i++) {
        if (enemies[i]['top'] > 500) {
            enemies[i]['top'] = 0;
        }
        enemies[i]['top'] += 2;
        drawEnimies(i);
    }
    for (var i = 0; i < missiles.length; i++) {
        missiles[i]['bottom'] += 2;
    }

}

var timer = setInterval(function() {
    freeMove();
    drawMissiles();
}, 10);