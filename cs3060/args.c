#include<stdio.h>

int main(int argc, char *argv[]) {
  FILE *fp = stdin;

  //printf("Program started with %d options\n", argc);
  //printf("The first argument is ''%s'\n", argv[0]);
  if (argc > 1) {
    //printf("The second argument is ''%s'\n", argv[1]);
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
  //Same as lines 32-34
  /*
  for (;;) {
    int count = fscanf(fp, "%d %d %d", &num1, $num2, $num3);
    printf("Read %d numbers %d, %d, and %d\n", ccount, num1, num2, num3);
    if (count != 3) break;
  }
  */

  while (fscanf(fp, "%d %d %d", &num1, $num2, $num3) == 3) {
    printf("Read %d numbers %d, %d, and %d\n", ccount, num1, num2, num3);
  }


  return 0;
}
