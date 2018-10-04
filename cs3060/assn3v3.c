#include<stdio.h>
#include<pthread.h>

void * inc_func(void *p) {
	char * pi = (int *)p;
	int i;
	for(i = 0; i < 1000; i++) {
		*pi++;
	}
	return NULL;
}

void * dec_func(void *p) {
	char * pi = (int *)p;
	int i;
	for(i = 0; i < 1000; i++) {
		*pi--;
	}
	return NULL;
}

main() {
  pthread_t th1, th2;

	char x = 'x';
	char y = 'y';

  pthread_create(&th1, NULL, thread_func, &d);
	pthread_create(&th2, NULL, thread_func, &d);

  pthread_join(th1, NULL); //does the same thing as wait
	pthread_join(th2, NULL); //does the same thing as wait

  return 0;
}
