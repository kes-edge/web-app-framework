import { User } from './models/User';

const user = new User({ name: 'Kieran', age: 29 });

console.log(user.get('name'));
console.log(user.get('age'));

user.set({ name: 'Kevin', age: 51 });
console.log(user.get('name'));
console.log(user.get('age'));