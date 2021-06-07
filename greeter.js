function greeter(person) {
    return 'Hello, ' + person.name + ' (ID: ' + person.id + ')';
}
var user = {
    name: 'Louis',
    id: 222
};
var user2 = {
    name: 'Todd',
    id: 777
};
console.log(greeter(user));
