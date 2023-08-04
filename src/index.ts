import { User } from "./models/User";

const user = new User({ id: 2 });

setTimeout(() => {console.log(user)}, 4000);
