function User(name) {
    this.name = name;
    this.getName = () => {
        return this.name;
    };
}
const me = new User('Rex');
console.log(me.getName()); // Rex