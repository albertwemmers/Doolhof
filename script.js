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
    for (f = 1; f <= 2; f++) {
        e = Math.floor(Math.random() * 9 + 1)
        document.getElementById('box' + e).style.boxShadow = '1px 0px 0px 0px';
        e = Math.floor(Math.random() * 9 + 1)
        document.getElementById('box' + e).style.boxShadow = '0px 1px 0px 0px';
        e = Math.floor(Math.random() * 9 + 1)
        document.getElementById('box' + e).style.boxShadow = '-1px 0px 0px 0px';
        e = Math.floor(Math.random() * 9 + 1)
        document.getElementById('box' + e).style.boxShadow = '0px -1px 0px 0px';
    }
}

borderboxes();