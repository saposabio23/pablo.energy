/* This music thing uses an API called 'Open Sheet' to get Google Sheets as JSON. Unlike the 'Inspiration' page that uses the 'papaparse' library to turn CSV into JSON, this API does it for us. 

Learn more at https://github.com/benborgers/opensheet
*/

/*
  The API's format is https://opensheet.elk.sh/spreadsheet_id/tab_name.
  
  
  To get your spreadsheet ID, hit Share at the top-right and make sure ANYONE WITH THE LINK CAN VIEW. Then, copy the end of your URL in your address bar after docs.google.com/spreadsheets/d/...
  
  e.g.
  https://docs.google.com/spreadsheets/d/1gLyh6gv41vl9H1fBmjFrGfKip9dKkvIu6o8sccTw2lY/edit#gid=1875797309
  copy
  "1gLyh6gv41vl9H1fBmjFrGfKip9dKkvIu6o8sccTw2lY" is your spreadsheet ID.
  
  We're using the 'Cloud' tab, so this is what we write...
*/https://docs.google.com/spreadsheets/d/1RfXl7_9w-Sz1luLR-E_XNnl5DG4kEL4grT9gPMiO1tI/edit?usp=sharing

var SPREADSHEET_ID_AND_TAB = "1RfXl7_9w-Sz1luLR-E_XNnl5DG4kEL4grT9gPMiO1tI/1";


$(document).ready(function () {

  $.getJSON("https://opensheet.elk.sh/" + SPREADSHEET_ID_AND_TAB, function (data) {


    data.forEach(function (row, index) {

      console.log(data.row);

      if (index == 0) return;

      let miniBlock = $(
        `<div class="miniBlock" id="` + row.list + `"> 
        <h3>` + row.artist + `</h3>
        <h4>` + row.song + `</h4>`)
        .appendTo("#blocks"); // # refers to div id

      let song = $(
        `<div class="songs" id="` + row.list + `"> 
      <h2>` + row.artist + `</h2>
      <h1>` + row.song + `</h1>
      <p>` + row.lyrics + `</p>`)
        .appendTo(".songContent"); // # refers to div id

    });
  });
});