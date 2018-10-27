#include<stdio.h>
#include<stdlib.h>
#include<pthread.h>

int lock = 0;

//this program prevents a race condition

void start_crit(int thid) {
	while(lock);
	lock = 1;
}

void end_crit(int thid) {
	lock = 0;
}

void * inc_func(void *p) {
	int thid = 0;
	char * pi = (int *)p;
	int i;
	for(i = 0; i < 1000000; i++) {
		//critical section
		start_crit(thid);
		*pi = *pi + 1;
		end_crit(thid);
	}
	return NULL;
}

void * dec_func(void *p) {
	int thid = 1;
	char * pi = (int *)p;
	int i;
	for(i = 0; i < 1000000; i++) {
		//critical section
		start_crit(thid);
		*pi = *pi - 1;
		end_crit(thid);
	}
	return NULL;
}

main() {
  pthread_t th1, th2;

	int i = 0;

  pthread_create(&th1, NULL, inc_func, &i);
	pthread_create(&th2, NULL, dec_func, &i);

  pthread_join(th1, NULL); //does the same thing as wait
	pthread_join(th2, NULL); //does the same thing as wait

	printf("The i variable is %d\n", i);

  return 0;
}
