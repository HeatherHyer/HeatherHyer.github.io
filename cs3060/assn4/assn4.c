//Heather Hyer
//CS 3060-601 Fall 2018
//Assignment 4

/* Promise of Originality
I promise that this source code file has, in its entirety, been
written by myself and by no other person or persons. If at any time an
exact copy of this source code is found to be used by another person in
this term, I understand that both myself and the student that submitted
the copy will receive a zero on this assignment.
*/

#include<stdio.h>
#include<stdlib.h>
#include<pthread.h>
#include<semaphore.h>

#define MAX_BUFFER_SIZE (20);

struct shared_num {
	int num[MAX_BUFFER_SIZE];
	sem_t items;
	sem_t empty;
}

void * prod_func(void *p) {
	struct shared_num * psn = (struct shared_num *)p;
	int write_next = 0;
	int num;
	while(1 == scanf("%d", &num)) {
		sem_wait(&(psn->empty));
			psn->num[write_next] = num; //add a value
			write_next++;
			if(write_next >= 20) write_next = 0; //error checking
		sem_post(&(psn->items));
	}
	sem_wait(&(psn->empty));
		psn->num[write_next] = -1; //"there-are-no-more-values" indicator
	sem_post(&(psn->items));
	return NULL;
}

void * cons_func(void *p) {
	struct shared_num * psn = (struct shared_num *)p;
	int read_next = 0;
	int sum = 0;
	for(;;) {
		sem_wait(&(psn->items));
			if(psn->num[read_next] < 0) break; //check for "there-are-no-more-values" indicator
			sum += psn->num[read_next]; //get sum of all values processed
			read_next++;
			if(read_next >= 20) read_next = 0; //error checking
		sem_post(&(psn->empty));
	}
	printf("The sum is %d\n", sum);
	return NULL;
}

main() {
  pthread_t th1, th2;

	struct shared_num * psn = malloc(sizeof(struct shared_num));

	sem_init(&(psn->items), 0, 0);
	sem_init(&(psn->empty), 0, MAX_BUFFER_SIZE);

  pthread_create(&th1, NULL, prod_func, psn);
	pthread_create(&th2, NULL, cons_func, psn);

  pthread_join(th1, NULL); //does the same thing as wait
	pthread_join(th2, NULL); //does the same thing as wait

  return 0;
}
