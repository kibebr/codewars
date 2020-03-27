function countSmileys(arr) {
	let count = 0;

	for(let faces of arr){

    	if(!(faces[0] == ':' || faces[0] == ';')){
      		break;
    	}
      
		if(faces[2]){
			if( (faces[1] == '-' || faces[1] == '~') && (faces[2] == ')' || faces[2] == 'D')){
				++count;
			}
		}
		else{
			if(faces[1] == ')' || faces[1] == 'D'){
				++count;
			}
		}	
	}
	
	return count;
}

console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']))