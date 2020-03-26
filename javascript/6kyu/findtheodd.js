function findOdd(array){
	let dict = {};
	
	array.forEach(number => {
		if(!dict[number])
			dict[number] = 1;
		else
			dict[number] += 1;
	});

	for(var key in dict){
		if( (dict[key] % 2) == 1)
			return parseInt(key); 
	}

	return "no odd number";
}
