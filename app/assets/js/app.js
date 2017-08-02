$(document).ready(function() {

  getTasks();

});
var apiKey = '6LbeBBCgh5azm84Rz5dQejCJv0h4iiRT';

function getTasks() {
  $.get('https://api.mlab.com/api/1/databases/foostudios/collections/artwork?apiKey=' + apiKey,
function(data){
  console.log(data);
});
}
