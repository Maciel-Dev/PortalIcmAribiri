function SubForm(){
  var resposta = "";
  var lines = document.querySelector("#respostaFormulário").innerHTML;
  for(var i = 0; i < lines.length; i++)
  {
    resposta = resposta + `\n`;
  }
  fetch("https://api.apispreadsheets.com/data/1l9Dh561by71Ppr7/", {
	method: "POST",
	body: JSON.stringify({"data": {"cpf":document.querySelector("#cpfForm").value,"name":document.querySelector("#nameForm").value,"answer":resposta}}),
}).then(res =>{
	if (res.status === 201){
		// SUCCESS
    alert("OKAY");
	}
	else{
		// ERROR
	}
})
}