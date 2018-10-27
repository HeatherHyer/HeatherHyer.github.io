#include<stdio.h>

voic fcfs(int count, int *submit, int *run) {
  int clock = 0, jobNext = 0, readyAdd = 0, readyGet = 0;
  int remain[count], ready[count];
  int ta_total = 0, wait_total = 0, resp_total = 0;

  while(readyAdd != readyGet || count != jobNext) { //will only run till there are no jobs remaining and the ready q is empty
    //adjust clock
    if (clock < submit[jobNext]) {
      clock = submit[jobNext];
    }

    //add jobs to ready q that have arrived before current clock
    while (jobNext < count && clock >= submit[jobNext]) {
      ready[readyAdd] = jobNext;
      remain[jobNext] = run[jobNext]; //set the remaining time for the job
      readyAdd++;
      jobNext++;;
    }
    //get the index for the current job
    int jobCurr = ready[readyGet];

    //calculate next event (terminate or interrupt)
    int clockNext = clock + remain[jobCurr];

    //stats
    if (remain[jobCurr] == run[jobCurr]) { //calculate response time
      resp_total += clock - submit[jobCurr];
    }

    //adjust remaining time
    remain[jobCurr] -= clockNext - clock;

    //more stats
    if (0 == remain[jobCurr]) { //when the job is terminated
      ta_total += clockNext - submit[jobCurr]; //calculate turnaround time
      wait_total += clockNext - submit[jobCurr] - run[jobCurr];//calculate wait time
    }

    //set clock to new increment
    clock = clockNext;

    //move to the next element in the ready q
    readyGet++;
  }
  printf("Resp: %.2f, TA: %.2f, Wait: %.2f\n", (float) resp_total / count, (float) ta_total / count, (float) wait_total / count);
}

int main(int argc, char *argv[]) {
  int submit[100], run[100], count = 0;
  while (2 == fscanf(stdin, "%d %d", &submit[count], &run[count])) {
    count++;
  }
  fcfs(count, submit, run);
  return 0;
}
