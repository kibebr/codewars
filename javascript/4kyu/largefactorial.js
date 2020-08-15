function alphanumeric(string){
	for(let char of string){
		if(!(char.match(/[a-zA-Z]/)) && !(isNaN(char)))
			return false;
	}

	return true;

}
