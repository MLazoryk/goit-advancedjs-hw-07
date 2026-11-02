class Key {
  private signature: number;

  constructor() {
    // Генеруємо випадкове число як підпис
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  // Абстрактний метод, який мають реалізувати нащадки
  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log('Person entered the house.');
    } else {
      console.log('The door is closed. Person cannot enter.');
    }
  }
}

class MyHouse extends House {
  openDoor(key: Key): void {
    // Перевіряємо, чи збігається підпис ключа
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('The door is now open.');
    } else {
      console.log('Wrong key! The door remains closed.');
    }
  }
}

// Тестування сценарію
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey()); // The door is now open.
house.comeIn(person); // Person entered the house.