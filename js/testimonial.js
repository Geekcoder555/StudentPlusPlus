var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send();
};

getJSON('https://studentplusplus.com/testimony.json', function(err, data) {
var count=-1;
  if (err != null) {
    alert('Something went wrong: ' + err);
  } else {
     /*alert('Your Json result is:  ' + data);*/
     
    //demo.innerText =JSON.stringify(data);
    for (x in data) {
    var t = '';
    var str1 = JSON.stringify(data[x].isContributor);
    var str2 = "true";
    if(str1.localeCompare(str2) == 0){ t = '(Contributor)'}
    count++;
    //document.getElementById("locations").innerHTML += JSON.stringify(x) + "<br>";
    if(count>0) {
    text = ' <div class="item" id="abc"> <blockquote> <div class="row"> <div class="col-sm-8 col-sm-offset-2"> <p id="person_message">' + data[x].message +  '</p> <small id="person">' + x +   t   + '</small></div></div></blockquote></div>';
    }
    else
    {
     text='<div class="item active"><blockquote><div class="row"><div class="col-sm-8 col-sm-offset-2"><p id="person_message">' + data[x].message +   '</p><small id="person">' + x +   t   +  '</small></div></div></blockquote></div>' 
    }   
    document.getElementById('dmain').innerHTML += text;
    
}
  }
});