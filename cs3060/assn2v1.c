#include<stdio.h>
#include<unistd.h> //needed to run fork
#include<sys/types.h> //needed to run fork

int main() {
  pid_t p;
  int fp[2];
  char *opts[4] = {"ls", "-l", "-a", NULL};
  printf("Start\n");
  pipe(fp);
  p = fork(); //p for the parent is the process id, and p for the child is 0

  if (p < 0) {
    perror("Creating process");
    return -1;
  }
  if (p == 0) { //child process
    close(fp[1]);
    FILE *fin = fdopen(fp[0], "r");
    printf("Child here\n");
    char msg[50]; //repeating what the parent said
    read(fp[0], msg, 13); //repeating what the parent said
    close(fp[0]);
    printf("The parent said \"%s\"\n", msg); //repeating what the parent said
    //execv("/bin/ls", opts);
    //perror("Cannot exec");
    //return -1;
  } else { //parent process
    close(fp[0]);
    printf("Parent here\n");
    write(fp[1], "Hello, child", 13); //repeating what the parent said
    close(fp[1]);
    int ret;
    wait(&ret);
    printf("Child returned %d\n", WEXITSTATUS(ret));
  }

  printf("Hello %d\n", p);

  return 0;
}
