var request = new XMLHttpRequest();

request.withCredentials = true;
request.setRequestHeader('Access-Control-Allow-Origin', "*");
request.setRequestHeader("Content-Type", "application/json");
request.setRequestHeader("Access-Control-Allow-Headers", "accept, content-type");
request.setRequestHeader('Authorization', 'Bearer 1toYMIMOGgxs3tEn3w3M2jIuhKgVNWCs');
request.open('GET', 'https://sagah.blackboard.com/learn/api/public/v1/users/', true);
request.onload = function() {
	
	var data = JSON.parse(this.response);
	 if (request.status >= 200 && request.status < 400) {
    data.forEach(users => {
  	const h1 = document.createElement('h1');
  	h1.textContent = results.userName;

     console.log(results.userName);
    });
  } else {
    console.log('error');
  }
}

request.send();
