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
*/
var SPREADSHEET_ID_AND_TAB = "1WGbf-SLn5niMfVdhYIncAqkF1JQAHdY-HSTfWFa3O5s/Sheet";


$(document).ready(function () {
  
  $.getJSON("https://opensheet.elk.sh/" + SPREADSHEET_ID_AND_TAB, function (data) {
    
    
    data.forEach(function (row, index) {
      
      console.log(row);
      
      if(index == 0) return;
      
      let div = $(`<tr> 
        <td class="tool">` + row.tool +`</td>
        <td>` +  row.description + `</td>
        <td><images src="img/` + row.filename + `.jpg"></td>
        </tr>`)
      .appendTo("#content table"); // # refers to div id
  
    });
  });  
});
  