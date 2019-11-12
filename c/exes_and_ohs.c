#include <stdbool.h>
#include <stdio.h>

bool xo(const char*);

int main(void){
	if(xo("xxxooo"))
		printf("same\n");
}

bool xo (const char* str)
{
	unsigned int exes = 0, ohs = 0;

	while(*str != '\0'){
		if(*str == 'x' || *str == 'X')
			++exes;
		else // assumes other characters are 'o's
			++ohs;
			
		str += sizeof(char);
	}

	if(exes == ohs)
		return true;
	else
		return false;
}
