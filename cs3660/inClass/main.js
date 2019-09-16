$( "#leftSelect" ).change(function() {
  var color = $('#leftSelect').children("option:selected").val();
  $("#left").css("background-color", color);
});

$( "#rightSelect" ).change(function() {
  var color = $('#rightSelect').children("option:selected").val();
  $("#right").css("background-color", color);
});

var rightOrder = true;

$('button').click(function() {
  let first = $("#left").detach();
  let second = $("#right").detach();
  let content1 = $("#content1");
  let content2 = $("#content2");

  if (rightOrder) {
    first.appendTo(content2);
    second.appendTo(content1);
    rightOrder = false;
  }
  else {
    first.appendTo(content1);
    second.appendTo(content2);
    rightOrder = true;
  }
});
