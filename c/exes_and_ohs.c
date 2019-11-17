#include <stdbool.h>

bool xo (const char* str)
{
    unsigned int exes = 0, ohs = 0;
    do{
        if(*str == 'x' || *str == 'X')
	    ++exes;
        else
            ++ohs;
	}while((str += sizeof(char)) && (*str != '\0'));

    if(exes == ohs) 
        return true;
    else
	return false;
}
