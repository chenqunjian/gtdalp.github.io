window.tpl = function (arr, title) {
    console.log(arr)
    var html = '';
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        html += '<li>';
        var dataF = arr[i];
        var cls = ' data-true="1"';
        var flg = dataF[5];
        html += '<p class="title">' + (i + 1) + '.' + dataF[0] + '</p>';
        html += '<p class="selected">\
            <span' + (flg == '标准答案：A' ? cls : '') + '>A、 ' + dataF[1] + '</span>\
            <span' + (flg == '标准答案：B' ? cls : '') + '>B、 ' + dataF[2] + '</span>\
            <span' + (flg == '标准答案：C' ? cls : '') + '>C、 ' + dataF[3] + '</span>\
            <span' + (flg == '标准答案：D' ? cls : '') + '>D、 ' + dataF[4] + '</span>\
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