$(function () {
    $("#btnAdd").bind("click", function () {
        var div = $("<tr />");
        div.html(GetDynamicTextBox(""));
        $("#TextBoxContainer").append(div);
    });
    $("body").on("click", ".remove", function () {
        $(this).closest("tr").remove();
    });
});
function GetDynamicTextBox(value) {
    return '<td style=" vertical-align: middle;"><input name = "DynamicTextBox" type="text" id="ir" value = "' + value + '" class="form-control" /></td>' +'<td style="text-align:right;"><input name = "DynamicTextBox"  type="radio" value = "' + value + '" /><br><br><br><input name = "DynamicTextBox" type="radio" value = "' + value + '" /><br><br><br><input name = "DynamicTextBox" style="vertical-align: middle;" type="radio" value = "' + value + '" /><br><br><input name = "DynamicTextBox" type="radio" value = "' + value + '" /></td>'+ '<td><input name="" class="form-control"><br><input name="" class="form-control"><br><input name="" class="form-control"><br><input name="" class="form-control"></td>' +  '<td style=" vertical-align: middle;"><center><input name = "DynamicTextBox" type="checkbox" value = "' + value + '" /></center></td>' + '<td style="vertical-align: middle;"><button type="button" class="btn btn-danger remove"><i class="glyphicon glyphicon-remove-sign"></i></button></td>'
 
}