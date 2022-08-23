function SubForm(){
  fetch("https://api.apispreadsheets.com/data/1l9Dh561by71Ppr7/", {
	method: "POST",
	body: JSON.stringify({"data": {"cpf":document.querySelector("#cpfForm").value,"name":document.querySelector("#nameForm").value,"answer":document.querySelector("#respostaFormulário").value}}),
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