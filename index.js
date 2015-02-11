(function parseWindowLocationQuery(){
  var d=decodeURIComponent,
  q=window.location.query=window.location.query||{},
  pairs=window.location.search.substr(1).split('&'),
  i;
  while(i=pairs.pop()) {
    var keyValue=i.match(/([^=]*)=?(.*)/)
    if(keyValue) q[d(keyValue[1]).toLowerCase()]=d(keyValue[2]);
  }
})();