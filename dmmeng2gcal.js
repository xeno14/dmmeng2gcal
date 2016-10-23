// Parse date string to date objects
var parseDate = function(text) {
  var splited = text.split(')');
  var date_text = splited[0].split('(')[0].replace('年', '/').replace('月', '/').replace('日', '');

  var times = splited[1].split(' - ');

  var dates = [];

  // time sanitization
  // if hours exceeds 24, shift 1 day later
  times.forEach(function(t) {
    var shift = 0;
    var hours = parseInt(t.split(':')[0]);
    var mins = parseInt(t.split(':')[1]);
    if (hours >= 24) {
      shift = 1;
      hours -= 24;
    }

    var date = new Date(
      date_text + ' ' + hours + ':' + mins);
    date.setDate(date.getDate() + shift)
    dates.push(date);
  });
  return dates;
}

// Date object to string for google calendar
var dateToString = function(date) {
  return date.getFullYear() +
    ('00' + date.getMonth()).substr(-2) +
    ('00' + date.getDate()).substr(-2) +
    'T' +
    ('00' + date.getHours()).substr(-2) +
    ('00' + date.getMinutes()).substr(-2) +
    '00';
};

var elem = document.getElementsByClassName('l_time')[0];
var dates = parseDate(elem.textContent);
var teacher_name = document.getElementsByClassName('en_name')[0].textContent;

var dates_text = dates.map(dateToString).join('/');

var title = '【DMM英会話】' + teacher_name;
var detail = 'http://eikaiwa.dmm.com/book/book_list/';

var href = 'http://www.google.com/calendar/event?action=TEMPLATE&text=' + title + '&dates=' + dates_text + '&details=' + detail;

window.open(href);
