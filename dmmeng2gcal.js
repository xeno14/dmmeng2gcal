var elem = document.getElementsByClassName('l_time')[0];
var text = elem.textContent;

var splited;

splited  = text.split('年');
var year = splited[0];
text = splited[1];

splited = text.split('月');
var month = splited[0];
text = splited[1];

splited = text.split('日');
var day = splited[0];
text = splited[1];

splited = text.split(')')[1].split(' - ');
var t0 = splited[0].replace(':', '') + '00';
var t1 = splited[1].replace(':', '') + '00';

var day0 = year + month + day;
var day1 = year + month + day;
var dates = day0 + 'T' + t0 + '/' + day1 + 'T' + t1;

var teacher_name = document.getElementsByClassName('en_name')[0].textContent;

var title = '【DMM英会話】' + teacher_name;
var detail = 'http://eikaiwa.dmm.com/book/book_list/';

var href = 'http://www.google.com/calendar/event?action=TEMPLATE&text=' + title + '&dates=' + dates + '&details=' + detail;

window.open(href);
