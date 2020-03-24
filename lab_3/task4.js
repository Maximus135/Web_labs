function User(name) {
    this.name = name;
}
User.prototype.getName = function() {
    return this.name;
};
const me = new User('Rex');
console.log(me.getName()); // Rex