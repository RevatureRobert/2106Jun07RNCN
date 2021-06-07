function greeter(person){
	return 'Hello, ' + person.name + ' (ID: ' + person.id + ')';
}

interface User {
	name: string;
	id: number;
}

const user: User = {
	name: 'Louis',
	id: 222,
};

const user2: User = {
	name: 'Todd',
	id: 777,
}

console.log( greeter(user) );
