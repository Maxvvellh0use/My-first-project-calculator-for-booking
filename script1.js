 function isCheck(){
        let log = document.getElementById('login').value;
        let pass = document.getElementById('password').value;
        if (log == 'Maxim' && pass == 'Pavlov'){
            document.getElementById("message").innerHTML = 'Вход разрешен';
			setTimeout(function isCheck(){ window.location.href = 'news.html'; }, 2000);
        }
        else {
            document.getElementById("message").innerHTML = 'Неверный логин или пароль!';
		}
}    

function toChoose(){ 
			let typeofnum1 = document.getElementById('typeofnum1');
			let typeofnum2 = document.getElementById('typeofnum2');
				if (typeofnum1 == "Люкс" || 'Стандарт' || 'Эконом') { 
				typeofnum2.style.display = 'none'; 
				} 
				else if (typeofnum2 == "Люкс" || 'Стандарт' || 'Эконом') { 
				typeofnum1.style.opacity = 'none'; 
				} 
		} 


function toCalc(){
	let type1 = document.getElementById('typeofnum1');
	let typenum1 = type1.options[type1.selectedIndex].getAttribute('data-price');//цена 1 местного номера

	let type2 = document.getElementById('typeofnum2');
	let typenum2 = type2.options[type2.selectedIndex].getAttribute('data-price');//цена 2 местного номера
	
	let date1 = document.getElementById('date1');//дата заселения
	let date2 = document.getElementById('date2');//дата выселения

	let neu = new Date(date2.value);
	let alt = new Date(date1.value);

	let timestart = Math.abs(neu.getTime() - alt.getTime());
	let maxoDays = Math.ceil(timestart/(1000 * 3600 * 24)); //количество дней

	let addserv1 = document.getElementById('addserv1');
	let add1 = addserv1.getAttribute('data-price');//Дополнительное место в номере
	
		addserv1.checked? add1 = add1 * maxoDays : add1 = 0;

	let addserv2 = document.getElementById('addserv2');
	let add2 = addserv2.getAttribute('data-price');//Трансфер
	
		addserv2.checked? add2 = add2 * maxoDays : add2 = 0;

	let addserv3 = document.getElementById('addserv3');
	let add3 = addserv3.getAttribute('data-price');//Обед, ужин
	
		addserv3.checked? add3 = add3 * maxoDays : add3 = 0;

	let addserv4 = document.getElementById('addserv4');
	let add4 = addserv4.getAttribute('data-price');//Аренда конференц-зала
	
		addserv4.checked? add4 = add4 * maxoDays : add4 = 0;

	let addserv5 = document.getElementById('addserv5');
	let add5 = addserv5.getAttribute('data-price');//Интернет
	
		addserv5.checked? add5 = add5 * maxoDays : add5 = 0;

	let addserv6 = document.getElementById('addserv6');
	let add6 = addserv6.getAttribute('data-price');//Прачечная
	
		addserv6.checked? add6 = add6 * maxoDays : add6 = 0;

	let addservS = add1 + add2 + add3 + add4 + add5 + add6;

	let price = 0;

	let typeN1 = document.getElementById('typeofnum1').value;
	
		typeN1 != 'Одноместные номера'? price = (typenum1 * maxoDays) + addservS: price = (typenum2 * maxoDays) + addservS;
	
	return document.getElementById("price").innerHTML = 'Цена вашей поездки составляет ' + price + ' рублей';

}
	