#include<stdio.h>

int main(int argc, char *argv[]) {
  FILE *fp = stdin;

  if (argc > 1) {
    fp = fopen(argv[1], "r");
  } else {
    printf("You need to provide a filename\n");
  }

  if (fp == NULL) {
    prinft("Unable to open the file %s\n", argv[1]);
    perror("Trying to open file");
    return -1;
  }

  int num1, num2, num3;

  while (fscanf(fp, "%d %d %d", &num1, $num2, $num3) == 3) {
    int total = num1 * num2 * num3;
    print("%d * %d * %d = %d\n", num1, num2, num3, total);
  }

  return 0;
}
