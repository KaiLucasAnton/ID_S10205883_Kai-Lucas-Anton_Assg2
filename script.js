var api = 'https://api.covid19api.com/country/';
var input;
var url = 'https://api.covid19api.com/country/Singapore';
var currentLocation;

//finding current location
fetch('https://ipapi.co/json/')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    currentLocation = data.country_name
  });


document.onclick = function (a) {
    if (a.target.id == 'submit') {
        url = api + input
        fetch(url)
        .then(response => response.json()
        //writing out data into a table in html
        .then(data=>{
            var table = document.getElementById('myTable');
            i = data.length - 1;
            console.log(i);
            console.log(data[i]);
            var row = `<tr>
            <td>${data[i].Country}</td>
            <td>${data[i].Confirmed}</td>
            <td>${data[i].Deaths}</td>
            <td>${data[i].Recovered}</td>
            <td>${data[i].Active}</td>
            </tr>`;
            table.innerHTML += row
        }))
    }
}

//new country button
function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("country").value;
    // Displaying the value
    input = inputVal;
}

function getLocationValue(){
    // Displaying the value
    input = currentLocation;
}

function getGlobalValue(){
    fetch('https://api.covid19api.com/summary')
    .then(response => response.json()
        //writing out data into a table in html
        .then(data=>{
            var table = document.getElementById('myTable');
            i = 0
            console.log(0);
            console.log(data.Global);
            var active = data.Global.TotalConfirmed-data.Global.TotalDeaths-data.Global.TotalRecovered
            var row = `<tr>
            <td>Global</td>
            <td>${data.Global.TotalConfirmed}</td>
            <td>${data.Global.TotalDeaths}</td>
            <td>${data.Global.TotalRecovered}</td>
            <td>NA</td>
            </tr>`;
            table.innerHTML += row
        }))
}

