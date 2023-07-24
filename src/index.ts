import { User } from './models/User';

const user = new User({ name: 'Kieran', age: 29 });

console.log(user.get('name'));
console.log(user.get('age'));

user.set({ age: 20});
console.log(user.get('name'));
console.log(user.get('age'));

user.on('change', () => {
    console.log('Change #1');
});

user.on('change', () => {
    console.log('Change #2');
});

user.on('save', () => {
    console.log('Changes Saved');
});

console.log(user);

user.trigger('change');
user.trigger('save');