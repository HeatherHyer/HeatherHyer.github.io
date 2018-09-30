#include<stdio.h>
#include<pthread.h>

void * thread_func(void *p) {
	int *n = (int *)p;
	printf("Child thread was called with %d\n", *n);
	return NULL;
}

main() {
  pthread_t thandle;
  int num = 42;

  pthread_create(&thandle, NULL, thread_func, &num);

  pthread_join(thandle, NULL); //does the same thing as wait

  return 0;
}
