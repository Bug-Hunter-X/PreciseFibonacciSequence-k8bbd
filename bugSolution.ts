function printFibonacci(n: number): void {
  let a = 0, b = 1, temp;
  for (let i = 0; i < n; i++) {
    console.log(a);
    temp = a + b;
    a = b;
    b = temp;
  }
}

printFibonacci(10); //This will print correct Fibonacci Sequence for 10 numbers