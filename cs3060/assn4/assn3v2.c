#include<stdio.h>
#include<pthread.h>

struct data_t {
	int num;
};

void * thread_func(void *p) {
	struct data_t *pd = (struct data_t *)p;
	printf("Child thread was called with %d\n", pd->num);
	int result = malloc(sizeof(int));
	*result = pd->num * 3;
	return &result;
}

main() {
  pthread_t thandle;
	struct data_t d;
	d.num = 42;

  pthread_create(&thandle, NULL, thread_func, &d);

	void *retptr;

  pthread_join(thandle, &retptr); //does the same thing as wait

	printf("result from child is %d\n", *(int *)retptr)

	free(retprt);

  return 0;
}
