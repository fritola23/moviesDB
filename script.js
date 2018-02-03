var load = $('#loading');
var tit = $('#film');
load.hide();
tit.hide();

$('#titulo').keypress(function(event){
	if(event.keyCode == 13){
	  $('#pesquisar').click();
	}
  });


$("#pesquisar").click(function(){

	load.show();

	var titulo = $("#titulo").val();
	console.log(titulo);

	if(titulo != ''){

		$.ajax({
	url: "http://omdbapi.com/?t="+titulo+"&apikey=a9eecd66",	
	method: 'GET'
	}).done(function(data) {
	$('#filme').html(data.Title);
	$('#poster').attr('src', data.Poster);
	load.hide();
	tit.show();
});

	}else{
		alert('Digite um filme!');
	}
});





