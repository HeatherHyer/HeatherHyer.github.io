#include<stdio.h>
#include<stdlib.h>
#include<pthread.h>

pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER; //static mutex

//this one runs faster than the spin lock

void * inc_func(void *p) {
	int thid = 0;
	char * pi = (int *)p;
	int i;
	for(i = 0; i < 1000000; i++) {
		pthread_mutex_lock(&mutex); //start critical section
		*pi = *pi + 1;
		pthread_mutex_unlock(&mutex); //end critical section
	}
	return NULL;
}

void * dec_func(void *p) {
	int thid = 1;
	char * pi = (int *)p;
	int i;
	for(i = 0; i < 1000000; i++) {
		pthread_mutex_lock(&mutex); //start critical section
		*pi = *pi - 1;
		pthread_mutex_unlock(&mutex); //end critical section
	}
	return NULL;
}

main() {
  pthread_t th1, th2, th3, th4;

	int i = 0;

  pthread_create(&th1, NULL, inc_func, &i);
	pthread_create(&th2, NULL, dec_func, &i);
	pthread_create(&th3, NULL, inc_func, &i);
	pthread_create(&th4, NULL, dec_func, &i);

  pthread_join(th1, NULL); //does the same thing as wait
	pthread_join(th2, NULL); //does the same thing as wait
	pthread_join(th3, NULL); //does the same thing as wait
	pthread_join(th4, NULL); //does the same thing as wait

	printf("The i variable is %d\n", i);

  return 0;
}
