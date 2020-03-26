function getCount(str) {
	let vowelsCount = 0;

  	for(let char of str){
    	if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u')
    		vowelsCount++;
  	}

	return vowelsCount;
}