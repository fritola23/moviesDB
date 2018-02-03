var load = $('#loading');
var tit = $('#film');
var plt = $('#plt');
load.hide();
tit.hide();
plt.hide();

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
	$('#plot').html(data.Plot);
	load.hide();
	plt.show();
	tit.show();
});

	}else{
		alert('Digite um filme!');
	}
});





