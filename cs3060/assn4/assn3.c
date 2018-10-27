//Heather Hyer
//CS 3060-601 Fall 2018
//Assignment 3

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

#define MAX_BUFFER_SIZE (3);

struct shared_num {
	int num[MAX_BUFFER_SIZE];
	sem_t items;
	sem_t empty;
}

void * child_func(void *p) {
	struct shared_num * psn = (struct shared_num *)p;
	int read_next = 0;
	int sum = 0;
	for(;;) {
		sem_wait(&(psn->items));
			if(psn->num[read_next] < 0) break;
			sum += psn->num[read_next];
			read_next++;
			if(read_next >= 3) read_next = 0;
		sem_post(&(psn->empty));
	}

	return sum;
}

main(int argc, char *argv[]) {
	FILE *file = stdin;

	if (argc > 1) {
		file = fopen(argv[1], "r");
	}

	if (file == NULL) {
		printf("Unable to open the file %s\n", argv[1]);
		perror("Trying to open file");
		return -1;
	}

	while (fscanf(file, "%d %d %d", &num1, &num2, &num3) == 3) {
		dprintf(fp[FD_WRITE], "(%d * %d) / %d\n", num1, num2, num3);
	}

  pthread_t child;

	sem_init(&(psn->items), 0, 0);
	sem_init(&(psn->empty), 0, MAX_BUFFER_SIZE);

  pthread_create(&child, NULL, child_func, psn);

  pthread_join(child, NULL);

  return 0;
}
