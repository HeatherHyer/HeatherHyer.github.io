#include<stdio.h>
#include<unistd.h> //needed to run fork
#include<sys/types.h> //needed to run fork

#define FD_READ 0
#define FD_WRITE 1

int main() {
  pid_t p;
  int fp[2];
  printf("Start\n");
  pipe(fp);
  p = fork(); //p for the parent is the process id, and p for the child is 0

  if (p < 0) {
    perror("Creating process");
    return -1;
  }
  if (p == 0) { //child process
    close(fp[FD_WRITE]);
    dup2(fp[FD_READ], 0);
    close(fp[FD_READ]);
    execlp("sort", "sort", "-n", NULL);
    //execlp("busybox", "sort", "-n", NULL); //another sorting option
    perror("Cannot exec");
    return -1;
  } else { //parent process
    close(fp[FD_READ]);
    FILE *fout = fdopen(fp[FD_WRITE], "r");
    printf("Parent here\n");
    fprintf(fout, "103\n71\n19\n25\n42");
    //write(fp[FD_WRITE], "103\n71\n19\n25\n42", 15); //another sorting option
    close(fp[FD_WRITE]);
    int ret;
    wait(&ret);
    printf("Child returned %d\n", WEXITSTATUS(ret));
  }

  printf("Hello %d\n", p);

  return 0;
}
