var color = $(".content").find(".color");
color.hide();
$(".chosen-select").chosen({disable_search_threshold: 10});
$("button[name='add1']").on("click",function() {
  if ($("[value ='4']").length == 0) {
    var yellow = $("select option").filter("[value='2']");
    yellow.after("<option value='4'>Pink</option>");
  } 
});
$("button[name='remove1']").on("click",function() {
  $("select option").filter("[value='4']").remove();
});
$("button[name='add']").on("click",function() {
  if ($("[value ='Pink']").length == 0) {
    var yellow = $("select option").filter("[value='Yellow']");
    yellow.after("<option value='Pink'>Pink</option>");
    $(".chosen-select").trigger("chosen:updated");
  } 
});
$("button[name='remove']").on("click",function() {
  $("select.chosen-select").find("option").filter("[value='Pink']").remove();
  $(".chosen-select").trigger("chosen:updated");
});
$("select").on("change", function() {
	var ovalue = $(this).val();
	var showcolor = $(".color[name="+ ovalue +"]");
	showcolor.fadeIn("slow");
	showcolor.siblings().fadeOut();
});
$("select.chosen-select").on("change", function() {
  var ovalue = $(this).val();
  var showcolor = $(".color[name="+ ovalue +"]");
  showcolor.fadeIn("slow");
  showcolor.siblings().fadeOut();
  $(".chosen-select").trigger("chosen:updated");
});