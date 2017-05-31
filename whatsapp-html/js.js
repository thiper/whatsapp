// FUNÇÃO PARA O WHATSAPP		
		
  var data = new Date();
  var dias = new Array( 'domingo','segunda','terca','quarta','quinta','sexta','sabado' );
  var frase = "";
  var link1 = "";
  var link2 = "";
  var hora      = data.getHours();
  var dia       = data.getDate();
  var diasemana = data.getDay();
  var mes       = data.getMonth();
  var ano       = data.getYear();
  var saudacao  =("Oi");
  var txt_API_1 = "https://api.whatsapp.com/send?text=";
  var txt_API_2 = "&phone=556792385008";
  
  
  //saudação Bom Dia, Boa Tarde Boa Noite de acordo com a hora
	if (hora < 12)
    saudacao = ("Bom dia, ");
	else if(hora >=12 && hora < 18)
    saudacao = ("Boa Tarde, ");
	else if(hora >= 18 && hora < 24)
    saudacao = ("Boa Noite, ");
  
  // Mensagens da semana
  
  var domingo = saudacao+"Hoje é DOMINGÃO, É um prazer ter você aqui, fique a vontade para perguntar e tirar suas dúvidas";
  var segunda = saudacao+"Hoje é SEGUNDA-FEIRA, que tal iniciar a semana em uma passe de mágica";
  var terca = saudacao+"Naveguei no site http://www.thiper.com.br - gostaria de receber + informações...";
  var quarta = saudacao+"Clientes que fazem contato na QUARTA, recebem Super Descontos! Envie-nos esta Mensagem!";
  var quinta = saudacao+"Você ganhou um SUPER DESCONTO, na contratação ou indicação de nossos serviços! Somente para hoje - QUINTA!";
  var sexta = saudacao+"Uhull é SEXTA-FEIRA, seja muito bem-vindo(a), fique a vontade para perguntar e tirar suas dúvidas!";
  var sabado = saudacao+"Hoje é Sábado, é um prazer falar com você! Envie esta mensagem e conheça nossos serviços! :)";
  var frase_dia ="";
    
    
 if(diasemana == 0){frase_dia = domingo;}
 if(diasemana == 1){frase_dia = segunda;}
 if(diasemana == 2){frase_dia = terca;}
 if(diasemana == 3){frase_dia = quarta;}
 if(diasemana == 4){frase_dia = quinta;}
 if(diasemana == 5){frase_dia = sexta;}
 if(diasemana == 6){frase_dia = sabado;}
 

 var link1 = "http://google.com.br";
 var link2 = "http://bing.com.br";
 var link3 = "http://yahoo.com.br";
 var link4 = "http://thiper.com.br";
 var link5 = "http://globo.com";



 var frase_dia = txt_API_1+frase_dia+txt_API_2

 var contador = localStorage.getItem("minhakey");
 
 //alert("Ultimo LINK ABERTO = "+window.localStorage.getItem("minhakey"));
  
 if(localStorage.getItem("minhakey") == null){ 
 contador = 0;
 }
 

 
 
 // Gravar contador localmente
 function clique(){
	 if(contador == contador++){
	 window.localStorage.setItem("minhakey", contador);
	 contador = window.localStorage.getItem("minhakey");
	 //alert("Aqui seria para abrir link nº = "+window.localStorage.getItem("minhakey"));
	 
	 abrir_site();	 
	 		
	 
	}
	
	
	
 } // Fim Gravar localmente	
 
 function abrir_site(){
	 
	 if(contador == 1){
		window.location.href = frase_dia;
		
		 
	 
	 
	 }
	 
	 if(contador == 2){
		 window.location.href = txt_API_1+"Vejo que não é a primeira vez que esta aqui! Envie esta mensagem e faça contato hoje mesmo!"+txt_API_2
		
	 
	 
	 }
	 
	 if(contador >= 3){
		 window.location.href = txt_API_1+txt_API_2;
		 
	 
	 }
 
 }
 
//window.localStorage.removeItem("minhakey"); //limpar a key   
