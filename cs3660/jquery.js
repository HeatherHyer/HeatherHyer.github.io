$.each(data, function() {
  data = ['1', '2', '3'];
  numCols = 1;


  if(!(i%numCols)) tRow = $('<tr>');
  tCell = $('<td>').html(data[i]);
  $('#table1').append(tRow.append(tCell));
});
