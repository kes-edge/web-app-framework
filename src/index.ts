import { User } from "./models/User";
console.log("hi")


const user = new User({ id: 1 });

user.fetch();
console.log("hi")