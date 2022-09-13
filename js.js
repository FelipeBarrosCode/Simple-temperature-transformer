
let tempt = function (value, CelsiusorFahrenheit){
	let valuetr=Number(value)
	if(CelsiusorFahrenheit=='c'){
		let Cel=(valuetr-32) * 5/9
		console.log(Cel)
	}else 
	if(CelsiusorFahrenheit=='f'){
		let Far=valuetr*9/5+32
		console.log(Far)
	}else{}
}
tempt('0','f')



