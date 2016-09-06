$(document).ready(function(){
	$('#theButton').click(function(){
		var listEntry = String(document.getElementById('listItem').value);
	run(listEntry);
	
	});
	$('#thing').on('click','.singleItem', function(){
	$(this).parent().remove();
	document.getElementById("itemValue").innerHTML = Number(document.getElementById("itemValue").innerHTML) - 1;
	});
});

function run(listEntry){
	var result = listEntry;

	var item = "<p> <input type='checkbox' class='singleItem'>" + result + "</p>";
	$('ul').append(item);
	document.getElementById("itemValue").innerHTML = Number(document.getElementById("itemValue").innerHTML) + 1;
}