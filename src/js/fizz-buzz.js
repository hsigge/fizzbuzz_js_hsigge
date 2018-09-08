function FizzBuzz() {
    this.check = (number) => {
        if (number % 5 === 0) {
            return 'Buzz';
        }
        if (number % 3 === 0) {
            return 'Fizz';
        } else {
            return number
        }
    }
}