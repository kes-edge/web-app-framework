import { uniqueNamesGenerator, Config, adjectives, colors, animals } from "unique-names-generator";
import { UserProps } from "../models/User";

// Configuration for random username generation
const customConfig: Config = {
    dictionaries: [adjectives, colors],
    separator: '-',
    length: 2,
};

// Function for generating a random number
function GetRandom(max){
    return Math.floor(Math.random() * Math.floor(max))
  }

// Function for creating random user data
export const generateUsername = (): UserProps => {
    const generatedUser = {
        name: uniqueNamesGenerator(customConfig),
        age: GetRandom(100)
    }
    
    return generatedUser;
}
