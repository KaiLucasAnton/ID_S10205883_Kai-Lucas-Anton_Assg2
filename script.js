//finding current location
function jsonpCallback(data) { 
  console.log('Country: ' + data.address.country); 
  var curCountry = data.address.country;
}

//Apify covid-19
var api = 'https://api.covid19api.com/country/';
var input = 'Singapore';
var url = 'https://api.covid19api.com/country/Singapore';
document.onclick = function (a) {
    
    if (a.target.id == 'submit') {
        url = api + input
        fetch(url)
        .then(response => response.json()
        //writing out data into a table in html
        .then(data=>{
            var table = document.getElementById('myTable');
            console.log(data);
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
    input = inputVal;
}