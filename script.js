var setCookie = function (n, val) {
    var exdays = 30;
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = n + "=" + val + "; " + expires;
};

var getCookie = function (n) {
    var name = n + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};

document.onclick = function (e) {
    if (e.target.className == 'btn') {
        var favColor = e.target.style.backgroundColor;
        setCookie('color', favColor);
        document.body.style.backgroundColor = favColor;
        console.log(favColor);
    }
    if (favColor == "Black") {
        document.body.style.color = "white";
    }
};

window.onload = function () {
    var favColor = document.body.style.backgroundColor;
    var color = getCookie('color');
    if (color === '') {
        document.body.style.backgroundColor = favColor;
    } else {
      document.body.style.backgroundColor = color;
    }

    if (favColor == "Black") {
        document.body.style.color = "white";
    }
};

var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}


