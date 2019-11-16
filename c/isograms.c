// DOESN'T USE CACHE

#include <stdbool.h>
#include <stdio.h>
#include <ctype.h>

bool isIsogram(char *);

int main(void){
	printf("%i\n", isIsogram("Dermatoglyphics"));

	return 1;
}	

bool isIsogram(char *str) {
	for(char *first = &str[0]; *str != '\0'; str += sizeof(char)){
		char *backwards = str;
		while(backwards != first){
			backwards -= sizeof(char);
			if(tolower(*backwards) == tolower(*str))
				return false;	
		}
	}
	return true;
}
