#include<stdio.h>
#include<stdlib.h>
#include<pthread.h>

//condition variables - not suggested you use this on the project

//bounded buffer example

#define MAX_BUFFER_SIZE (20);

//dynamic mutex (always works - static sometimes throws an error)
struct shared_num {
	int count;
	int num[MAX_BUFFER_SIZE];
	pthread_mutex_t mutex
	pthread_cond_t cvar;
}

void * prod_func(void *p) {
	struct shared_num * psn = (struct shared_num *)p;
	int write_next = 0;
	while(1 == scanf("%d", &num)) {
		pthread_mutex_lock(&(psn->mutex));
		while(psn->count >=20) { //spin lock with a condition variable
			pthread_cond_wait(&(psn->cvar), &(psn->mutex));
		}
		pthread_mutex_unlock(&(psn->mutex));
		psn->num[write_next] = num; //add a value
		write_next++;
		if(write_next >= 20) write_next = 0; //error checking
		pthread_mutex_lock(&(psn->mutex)); //start critical section
		psn->count++;
		pthread_cond_signal(&(psn->cvar));
		pthread_mutex_unlock(&(psn->mutex)); //end critical section
	}
	while(psn->count >= 20);
	psn->num[write_next] = -1; //"there-are-no-more-values" indicator
	pthread_mutex_lock(&(psn->mutex)); //start critical section
	psn->count++;
	pthread_cond_signal(&(psn->cvar));
	pthread_mutex_unlock(&(psn->mutex)); //end critical section
	return NULL;
}

void * cons_func(void *p) {
	struct shared_num * psn = (struct shared_num *)p;
	int read_next = 0;
	int sum = 0;
	for(;;) {
		pthread_mutex_lock(&(psn->mutex));
		while(psn->count <= 20) {
			pthread_cond_wait(&(psn->cvar), &(psn->mutex))
		}
		while(psn->count <= 0);
		if(psn->num[read_next] < 0) break; //check for "there-are-no-more-values" indicator
		sum += psn->num[read_next]; //get sum of all values processed
		read_next++;
		if(read_next >= 20) read_next = 0; //error checking
		pthread_mutex_lock(&(psn->mutex)); //start critical section
		psn->count--;
		pthread_cond_signal(&(psn->cvar));
		pthread_mutex_unlock(&(psn->mutex)); //end critical section
	}
	printf("The sum is %d\n", sum);
	return NULL;
}

main() {
  pthread_t th1, th2;

	struct shared_num * psn = malloc(sizeof(struct shared_num));
	psn->num = 0;
	pthread_mutex_init(&(psn->mutex), NULL); //initializer for dynamic mutex
	pthread_cond_init((&psn->cvar), NULL); //?? check

  pthread_create(&th1, NULL, prod_func, &psn);
	pthread_create(&th2, NULL, cons_func, &psn);

  pthread_join(th1, NULL); //does the same thing as wait
	pthread_join(th2, NULL); //does the same thing as wait

  return 0;
}
