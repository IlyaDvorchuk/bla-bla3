class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    displayInfo() {
        console.log(`Имя: ${this.name} Вохраст: ${this.age}`)
    }

    sayHi() {
        console.log(`Привет, меня зовут ${this.name}`)
    }
}

module.exports = User