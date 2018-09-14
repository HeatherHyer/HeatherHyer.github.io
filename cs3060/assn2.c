#include<stdio.h>
#include<unistd.h> //needed to run fork
#include<sys/types.h> //needed to run fork

int main() {
  pid_t p;
  char *opts[4] = {"ls", "-l", "-a", NULL};
  printf("Start\n");
  p = fork(); //p for the parent is the process id, and p for the child is 0

  if (p < 0) {
    perror("Creating process");
    return -1;
  }
  if (p == 0) {
    printf("Child here\n");
    execv("/bin/ls", opts);
    perror("Cannot exec");
    return 2;
  } else {
    printf("Parent here\n");
    int ret;
    wait(&ret);
    printf("Child returned %d\n", WEXITSTATUS(ret));
  }

  printf("Hello %d\n", p);

  return 0;
}
