$(function(){
	var result = $("#container__result");
	result.hide();


	var container = $("#container");
	var btn_play = $("#container__btn-play");
	var btn_restart = $("#container__btn-restart");
	var seconds = $("#container__seconds");
	var number_1 = $("#container__list-item1");
	var number_2 = $("#container__list-item2");
	var number_3 = $("#container__list-item3");
	var number_4 = $("#container__list-item4");
	var number_5 = $("#container__list-item5");
	var number_6 = $("#container__list-item6");
	var number_7 = $("#container__list-item7");
	var less = $("#container__btn-1");
	var bigger = $("#container__btn-3");
	var equal = $("#container__btn-2");
	var score = $("#container__score");
	var status = $("#container__status-id");


	var status_cp = $("#container__status-coppy");
	var score_cp = $("#container__score-coppy");


	var operation = "";
	var kq1 = 0;
	var kq2 = 0;

	var dashbord = $("#dashbord");
	var back = $("#back");
	var btn_result = $("#container__btn-result");


	back.click(function(){
		dashbord.hide();
	});


	var array =[];
	var obj = {};
	var pos = $("#pos");


	var chon = $(".chon");
	var dapan = $(".dapan");

	function render(){
			if(chon.text() != dapan.text()){
				dapan.attr("style", "background-color: red");			
			}
		var number1 = Math.floor((Math.random() * 10) + 1);
		var number2 = Math.floor((Math.random() * 4) + 1);
		var number3 = Math.floor((Math.random() * 10) + 1);
		var number4 = Math.floor((Math.random() * 10) + 1);
		var number5 = Math.floor((Math.random() * 4) + 1);
		var number6 = Math.floor((Math.random() * 10) + 1);
		var dau = "";
		var dau2 = "";
		switch(number2){
			case 1:
				dau = "+";
				break;
			case 2:
				dau = "-";
				break;
			case 3:
				dau = "x";
				break;
			case 4:
				dau = "÷";
				break;
		}
		number_2.text(dau);
		switch(number5){
			case 1:
				dau2 = "+";
				break;
			case 2:
				dau2 = "-";
				break;
			case 3:
				dau2 = "x";
				break;
			case 4:
				dau2 = "÷";
				break;
		}
		number_5.text(dau2);
		number_1.text(number1);
		number_3.text(number3);
		number_4.text(number4);
		number_6.text(number6);



		//dash bord

		obj.so1 = number1;
		obj.dau1 = dau;
		obj.so2 = number3;

		obj.so3 = number4;
		obj.dau2 = dau2;
		obj.so4 = number6;

	}


	less.click(function(){
		number_7.text("<");
		obj.chon = "<";
		var index = parseInt(status.text());
		status.text(parseInt(status.text()) + 1);
		// lam phep tinh ben trai
		operation = number_2.text();// lay phep tinh ben phai
		switch(operation){
			case "+":
				kq1 = parseInt(number_1.text()) + parseInt(number_3.text());	
				break;
			case "-":
				kq1 = parseInt(number_1.text()) - parseInt(number_3.text());
				break;
			case "x":
				kq1 = parseInt(number_1.text()) * parseInt(number_3.text());
				break;
			case "÷":
				kq1 = parseInt(number_1.text()) / parseInt(number_3.text());
				break;
		}

		//lam phep tinh ben phai
		operation = number_5.text();// lay phep tinh ben phai
		switch(operation){
			case "+":
				kq2 = parseInt(number_4.text()) + parseInt(number_6.text());
				break;
			case "-":
				kq2 = parseInt(number_4.text()) - parseInt(number_6.text());
				break;
			case "x":
				kq2 = parseInt(number_4.text()) * parseInt(number_6.text());
				break;
			case "÷":
				kq2 = parseInt(number_4.text()) / parseInt(number_6.text());
				break;
		}
		if(kq1 < kq2){
			obj.dapan = "<";
			array.push(obj);
			pos.append("<tr><td>"+ array[index].so1 + "</td><td>"+ array[index].dau1 +"</td><td>"+ array[index].so2 +"</td><td>"+ array[index].so3  + "</td><td>" + array[index].dau2  + "</td><td>" +array[index].so4 +" </td><td>"+ array[index].chon +"</td><td>"+array[index].dapan+"</td></tr>");
			score.text(parseInt(score.text()) + 1);
		}
		if(kq1 == kq2){
			obj.dapan = "=";
			array.push(obj);
			pos.append("<tr><td>"+ array[index].so1 + "</td><td>"+ array[index].dau1 +"</td><td>"+ array[index].so2 +"</td><td>"+ array[index].so3  + "</td><td>" + array[index].dau2  + "</td><td>" +array[index].so4 +" </td><td>"+ array[index].chon +"</td><td class='dapan'>"+array[index].dapan+"</td></tr>");
			
		}
		if(kq1 > kq2){
			obj.dapan = ">";
			array.push(obj);
			pos.append("<tr><td>"+ array[index].so1 + "</td><td>"+ array[index].dau1 +"</td><td>"+ array[index].so2 +"</td><td>"+ array[index].so3  + "</td><td>" + array[index].dau2  + "</td><td>" +array[index].so4 +" </td><td>"+ array[index].chon +"</td><td class='dapan'>"+array[index].dapan+"</td></tr>");	
		}
		render();
		number_7.text("...");
	});


	

	bigger.click(function(){
		number_7.text(">");
		obj.chon = ">";
		var index = parseInt(status.text());
		status.text(parseInt(status.text()) + 1);
		// lam phep tinh ben trai
		operation = number_2.text();// lay phep tinh ben phai
		switch(operation){
			case "+":
				kq1 = parseInt(number_1.text()) + parseInt(number_3.text());	
				break;
			case "-":
				kq1 = parseInt(number_1.text()) - parseInt(number_3.text());
				break;
			case "x":
				kq1 = parseInt(number_1.text()) * parseInt(number_3.text());
				break;
			case "÷":
				kq1 = parseInt(number_1.text()) / parseInt(number_3.text());
				break;
		}

		//lam phep tinh ben phai
		operation = number_5.text();// lay phep tinh ben phai
		switch(operation){
			case "+":
				kq2 = parseInt(number_4.text()) + parseInt(number_6.text());
				break;
			case "-":
				kq2 = parseInt(number_4.text()) - parseInt(number_6.text());
				break;
			case "x":
				kq2 = parseInt(number_4.text()) * parseInt(number_6.text());
				break;
			case "÷":
				kq2 = parseInt(number_4.text()) / parseInt(number_6.text());
				break;
		}
		if(kq1 > kq2){
			obj.dapan = ">";
			score.text(parseInt(score.text()) + 1);
			array.push(obj);
			pos.append("<tr><td>"+ array[index].so1 + "</td><td>"+ array[index].dau1 +"</td><td>"+ array[index].so2 +"</td><td>"+ array[index].so3  + "</td><td>" + array[index].dau2  + "</td><td>" +array[index].so4 +" </td><td>"+ array[index].chon +"</td><td>"+array[index].dapan+"</td></tr>");

		}
		if(kq1 == kq2){
			obj.dapan = "=";
			array.push(obj);
				pos.append("<tr><td>"+ array[index].so1 + "</td><td>"+ array[index].dau1 +"</td><td>"+ array[index].so2 +"</td><td>"+ array[index].so3  + "</td><td>" + array[index].dau2  + "</td><td>" +array[index].so4 +" </td><td>"+ array[index].chon +"</td><td class='dapan'>"+array[index].dapan+"</td></tr>");
			
			
		}
		if(kq1 < kq2){
			obj.dapan = "<";
			array.push(obj);
			pos.append("<tr><td>"+ array[index].so1 + "</td><td>"+ array[index].dau1 +"</td><td>"+ array[index].so2 +"</td><td>"+ array[index].so3  + "</td><td>" + array[index].dau2  + "</td><td>" +array[index].so4 +" </td><td>"+ array[index].chon +"</td><td class='dapan'>"+array[index].dapan+"</td></tr>");
			
			
		}
		render();
		number_7.text("...");
	});

	equal.click(function(){
		number_7.text("=");
		obj.chon = "=";
		var index = parseInt(status.text());
		status.text(parseInt(status.text()) + 1);
		// lam phep tinh ben trai
		operation = number_2.text();// lay phep tinh ben phai
		switch(operation){
			case "+":
				kq1 = parseInt(number_1.text()) + parseInt(number_3.text());	
				break;
			case "-":
				kq1 = parseInt(number_1.text()) - parseInt(number_3.text());
				break;
			case "x":
				kq1 = parseInt(number_1.text()) * parseInt(number_3.text());
				break;
			case "÷":
				kq1 = parseInt(number_1.text()) / parseInt(number_3.text());
				break;
		}

		//lam phep tinh ben phai
		operation = number_5.text();// lay phep tinh ben phai
		switch(operation){
			case "+":
				kq2 = parseInt(number_4.text()) + parseInt(number_6.text());
				break;
			case "-":
				kq2 = parseInt(number_4.text()) - parseInt(number_6.text());
				break;
			case "x":
				kq2 = parseInt(number_4.text()) * parseInt(number_6.text());
				break;
			case "÷":
				kq2 = parseInt(number_4.text()) / parseInt(number_6.text());
				break;
		}
		if(kq1 == kq2){
			obj.dapan = "=";
			score.text(parseInt(score.text()) + 1);
			array.push(obj);
			pos.append("<tr><td>"+ array[index].so1 + "</td><td>"+ array[index].dau1 +"</td><td>"+ array[index].so2 +"</td><td>"+ array[index].so3  + "</td><td>" + array[index].dau2  + "</td><td>" +array[index].so4 +" </td><td>"+ array[index].chon +"</td><td>"+array[index].dapan+"</td></tr>");

		}
		if(kq1 < kq2){
			obj.dapan = "<";
			array.push(obj);
			pos.append("<tr><td>"+ array[index].so1 + "</td><td>"+ array[index].dau1 +"</td><td>"+ array[index].so2 +"</td><td>"+ array[index].so3  + "</td><td>" + array[index].dau2  + "</td><td>" +array[index].so4 +" </td><td>"+ array[index].chon +"</td><td class='dapan'>"+array[index].dapan+"</td></tr>");
			
			
		}
		if(kq1 > kq2){
			obj.dapan = ">";
			array.push(obj);
			pos.append("<tr><td>"+ array[index].so1 + "</td><td>"+ array[index].dau1 +"</td><td>"+ array[index].so2 +"</td><td>"+ array[index].so3  + "</td><td>" + array[index].dau2  + "</td><td>" +array[index].so4 +" </td><td>"+ array[index].chon +"</td><td class='dapan'>"+array[index].dapan+"</td></tr>");
			
			
		}
		render();
		number_7.text("...");
	});

	var timeout;
	btn_play.click(function(){
		$("#container__info").show();
		$("#container__status").show();
		btn_play.hide();
		render();
		timeout = setInterval(Time, 1000);
		$("#container__seconds-animate").animate({width: "300px"}, 60000);
	});

	btn_result.click(function(){
		dashbord.show();
	});

	btn_restart.click(function(){
		location.reload();
	});

	function Time(){
		seconds.text(parseInt(seconds.text()) + 1);
		if(parseInt(seconds.text()) == 60){
			status_cp.text(status.text());
			score_cp.text(score.text());
			clearInterval(timeout);
			result.show();
		}
	}
});