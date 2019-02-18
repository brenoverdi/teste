var request = new XMLHttpRequest();
request.open('GET', 'https://sagah.blackboard.com/learn/api/public/v1/users/', true);
request.withCredentials = true;
request.setRequestHeader('Access-Control-Allow-Origin', "*");
request.setRequestHeader("Content-Type", "application/json");
request.setRequestHeader("Access-Control-Allow-Headers", "accept, content-type");
request.setRequestHeader('Authorization', 'Bearer pi510xyyLv7uZ4tB0ogZplwnxYyZpvSz');
request.onload = function() {
	
	var data = JSON.parse(this.response);
	 if (request.status >= 200 && request.status < 400) {
    data.forEach(users => {
      console.log(userName.title);
    });
  } else {
    console.log('error');
  }
}

request.send();