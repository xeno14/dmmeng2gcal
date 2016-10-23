# dmmeng2gcal

Bookmark this:
```
javascript:(function(){var c=function(a){a=a.split(")");var c=a[0].split("(")[0].replace("\u5e74","/").replace("\u6708","/").replace("\u65e5",""),d=[];a[1].split(" - ").forEach(function(a){var e=0,b=parseInt(a.split(":")[0]);a=parseInt(a.split(":")[1]);24<=b&&(e=1,b-=24);b=new Date(c+" "+b+":"+a);b.setDate(b.getDate()+e);d.push(b)});return d}(document.getElementsByClassName("l_time")[0].textContent),f=document.getElementsByClassName("en_name")[0].textContent,c=c.map(function(a){return a.getFullYear()+("00"+(a.getMonth()+1)).substr(-2)+("00"+a.getDate()).substr(-2)+"T"+("00"+a.getHours()).substr(-2)+("00"+a.getMinutes()).substr(-2)+"00"}).join("/");window.open("http://www.google.com/calendar/event?action=TEMPLATE&text=\u3010DMM\u82f1\u4f1a\u8a71\u3011"+f+"&dates="+c+"&details=http://eikaiwa.dmm.com/book/book_list/")})();
```
