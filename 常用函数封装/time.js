var date = new Date();
function getTime() {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    return strTime;
}
//获得当前日期
function getDate() {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var strDate = year + '-' + month + '-' + day;
    return strDate;
}