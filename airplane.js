var player = {
    right: 600,
    top: 470,
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
    document.querySelector('.player').style.top = player.top + "px";
}

function drawEnimies(i) {
    document.querySelectorAll('.enemy')[i].style.right = enemies[i]['right'] + "px";
    document.querySelectorAll('.enemy')[i].style.top = enemies[i]['top'] + "px";
}

function drawMissiles() {
    var content = '';
    for (var i = 0; i < missiles.length; i++) {
        content += `<div class = "missile" style = "right:${missiles[i].right}px ; top: ${missiles[i].top}px"></div>`;
    }
    document.querySelector('#missiles').innerHTML = content;
}

document.onkeydown = function(e) {
    if (e.code == "ArrowLeft" && player.right < 1190) {
        player.right += 10;
    }
    if (e.code == "ArrowRight" && player.right > 0) {
        player.right -= 10;
    }
    if (e.code == "ArrowDown" && player.top < 470) {
        player.top += 10;
    }
    if (e.code == "ArrowUp" && player.top > 300) {
        player.top -= 10;
    }
    if (e.code == "Space") {
        missiles.push({
            right: player.right + 20,
            top: player.top
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
        missiles[i]['top'] -= 2;
    }

}

function collision() {
    for (i = 0; i < enemies.length; i++) {
        if (enemies[i]['top'] == player['top'] && enemies[i]['right'] == player['right']) {
            console.log('colide', player['right'] + "" + player['top']);
        }
    }

}

var timer = setInterval(function() {
    freeMove();
    drawMissiles();
    collision()
}, 10);