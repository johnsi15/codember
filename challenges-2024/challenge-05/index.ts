const nodos = [
  13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
  44, 45, 46, 47, 48, 49, 50, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 155, 156, 157,
  158, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 195, 196,
]

function primeNumbers(nodos: number[]) {
  const isPrime = (num: number) => {
    if (num <= 1) return false
    if (num <= 3) return true // 2 y 3 son primos
    if (num % 2 === 0 || num % 3 === 0) return false

    for (let i = 5; i * i < num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false
    }

    return true
  }

  nodos.forEach((nodo, index) => {
    if (isPrime(nodo)) {
      console.log(`El nodo ${nodo} es primo`)
    }
  })

  console.log({ nodos })
}

primeNumbers(nodos)
