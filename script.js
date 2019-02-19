const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://sagah.blackboard.com/learn/api/public/v1/users/");
xhr.setRequestHeader("authorization", "Bearer 1jcMIC5N83hQJEIvgJfwnGJcNdIfe1wvS");
xhr.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (xhr.status >= 200 && xhr.status < 400) {
    data.forEach(results => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = results.userName;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

xhr.send();
