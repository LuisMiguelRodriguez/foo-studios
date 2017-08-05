$(document).ready(function() {

  getTasks();
  getArtwork();
  getArtworkInProduction();
});
var apiKey = '6LbeBBCgh5azm84Rz5dQejCJv0h4iiRT';

//Shows all collections that are part of foostudiosdemo database
function getTasks() {
  $.get('https://api.mlab.com/api/1/databases/foostudiosdemo/collections?apiKey=' + apiKey,
function(data){
  console.log(data);
});
}

// Shows all documents in artwork collection from the foostudiosdemo database
function getArtwork () {
  $.get('https://api.mlab.com/api/1/databases/foostudiosdemo/collections/artwork?apiKey='+ apiKey, function(data) {
    console.log(data);
  });
}

//Shows art work that is in production
function getArtworkInProduction () {
  $.get('https://api.mlab.com/api/1/databases/foostudiosdemo/collections/artwork?q={"production": true}&apiKey=' + apiKey, function ( data) {
    console.log(data);
  });
}
