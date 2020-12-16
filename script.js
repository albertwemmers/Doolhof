let e = 0;

function borderboxes() {
    for (f = 1; f <= 9; f++) {
        e = Math.floor(Math.random() * 9 + 1)
        document.getElementById('box' + e).style.borderTopColor = 'cyan';
        e = Math.floor(Math.random() * 9 + 1)
        document.getElementById('box' + e).style.borderLeftColor = 'cyan';
        e = Math.floor(Math.random() * 9 + 1)
        document.getElementById('box' + e).style.borderRightColor = 'cyan';
        e = Math.floor(Math.random() * 9 + 1)
        document.getElementById('box' + e).style.borderBottomColor = 'cyan';
    }
}

borderboxes();