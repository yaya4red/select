var color = $(".color");
color.hide();
$("button[name='add']").on("click",function() {
	var yellow = $("select option").filter("[value='2']");
	yellow.after("<option value='4'>Pink</option>");
});
$("button[name='remove']").on("click",function() {
	$("select option").filter("[value='4']").remove();
});
$("select").on("change", function() {
	var ovalue = $(this).val();
	var showcolor = $(".color[name="+ ovalue +"]");
	showcolor.fadeIn("slow");
	showcolor.siblings().fadeOut();
});