window.tpl = function (arr, title, o) {

    var html = '';
    var len = arr.length;
    var l = len/7;

    for (var i = 0; i < 50; i++) {
        html += '<li>';
        var n = 7*i;
        var t = arr[n];
        var answ = arr[n+1];
        var flg = arr[n+6]
        var cls = (o && o.show) ? ' class="active" ' : '';
        var datatrue = ' data-true="1"' + cls;


        html += '<p class="title">' + t + '</p><p class="answ">' + answ + '</p>';
        html += '<p class="selected">\
            <span' + (flg == '答案：A' ? datatrue : '') + '>' + arr[n+2] + '</span>\
            <span' + (flg == '答案：B' ? datatrue : '') + '>' + arr[n+3] + '</span>\
            <span' + (flg == '答案：C' ? datatrue : '') + '>' + arr[n+4] + '</span>\
            <span' + (flg == '答案：D' ? datatrue : '') + '>' + arr[n+5] + '</span>\
        </p>';
        html += '</li>';
    }

    document.title = title;
    $('body').append('<h3 class="title-h3">' + title + '</h3><ul class="radio-ul"></ul>');
    $('.radio-ul').html(html);
    $('.radio-ul>li>p>span').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
}



var creatHtml3 = function (arr, eee) {
    var html = '';
    var len = arr.length;
    var l = len/7;

    for (var i = 0; i < l; i++) {
        var n = 7*i;
        var t = arr[n];
        var flg = arr[n+6]
        var datatrue = ' data-true="1"';
        html +='<li>\
            <p class="title">' + arr[n+0] + '</p>\
            <p class="selected">\
                <span' + (flg == '答案：A' ? datatrue : '') + '>' + arr[n+1] + '</span>\
                <span' + (flg == '答案：B' ? datatrue : '') + '>' + arr[n+2] + '</span>\
                <span' + (flg == '答案：C' ? datatrue : '') + '>' + arr[n+3] + '</span>\
                <span' + (flg == '答案：D' ? datatrue : '') + '>' + arr[n+4] + '</span>\
                <span' + (flg == '答案：E' ? datatrue : '') + '>' + arr[n+5] + '</span>\
            </p>\
        </li>';
    }
    console.log(html);
}

var creatHtml2 = function (arr) {
    var html = '';
    var len = arr.length;
    var l = len/6;

    for (var i = 0; i < l; i++) {
        var n = 6*i;
        var t = arr[n];
        var flg = arr[n+5]
        var datatrue = ' data-true="1"';
        html +='<li>\
            <p class="title">' + arr[n+0] + '</p>\
            <p class="selected">\
                <span' + (flg == '答案：A' ? datatrue : '') + '>' + arr[n+1] + '</span>\
                <span' + (flg == '答案：B' ? datatrue : '') + '>' + arr[n+2] + '</span>\
                <span' + (flg == '答案：C' ? datatrue : '') + '>' + arr[n+3] + '</span>\
                <span' + (flg == '答案：D' ? datatrue : '') + '>' + arr[n+4] + '</span>\
            </p>\
        </li>';
    }
    console.log(html);
}


var creatHtml1 = function (arr) {
    var html = '';
    var len = arr.length;
    var l = len/4;

    for (var i = 0; i < l; i++) {
        var n = 4*i;
        var t = arr[n];
        var flg = arr[n+3]
        var datatrue = ' data-true="1"';
        html +='<li>\
            <p class="title">' + arr[n+0] + '</p>\
            <p class="selected">\
                <span' + (flg == '答案：A' ? datatrue : '') + '>' + arr[n+1] + '</span>\
                <span' + (flg == '答案：B' ? datatrue : '') + '>' + arr[n+2] + '</span>\
            </p>\
        </li>';
    }
    console.log(html);
}