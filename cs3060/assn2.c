#include<stdio.h>
#include<unistd.h> //needed to run fork
#include<sys/types.h> //needed to run fork

int main() {
  pid_t p;
  printf("Start\n");
  p = fork(); //p for the parent is the process id, and p for the child is 0
  if (p < 0) {
    perror("Creating process");
    return -1;
  }
  if (p == 0) {
    printf("Child here\n");
  } else {
    printf("Parent here\n");
  }

  printf("Hello %d\n", p);
  
  return 0;
}
