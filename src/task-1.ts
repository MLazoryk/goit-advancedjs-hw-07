class Student {
  constructor(
    public name: string,
    public age: number,
    public grade: string
  ) {}
}

const student = new Student("John Doe", 20, "A");
console.log(student);