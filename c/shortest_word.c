#include <stdio.h>
#include <sys/types.h>
#include <string.h>

ssize_t find_short(const char *s);

int main(void){
	printf("%zi\n", find_short("bitcoin take over the world maybe who knows perhaps"));
	printf("%zi\n", find_short("lets talk about C the best language"));

}

ssize_t find_short(const char *s){
	ssize_t shortest = 0, curr = 0;

	while(1){
		if(*s != '\0' && *s != ' ')
			++curr;
		else{
			if(curr == 1) return curr;
			else if(curr <= shortest || shortest == 0)
				shortest = curr;			
			if(*s == '\0')
				break;
			curr = 0;
		}
		
		s += sizeof(char);
	}

	return shortest;
}
