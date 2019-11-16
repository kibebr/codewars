#include <sys/types.h>

ssize_t find_short(const char *s){
	ssize_t shortest = 0, curr = 0;

	do{
		if(*s != ' ')
			++curr;
		else{
			if(curr == 1) 
				return curr; // if the length of the word is 1... then just return 1. can't be bigger than that
			else if(curr <= shortest || shortest == 0)
				shortest = curr;			

			curr = 0;
		}
	}while((s += sizeof(char)) && (*s != '\0'));

	return shortest;
}
