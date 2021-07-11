import { UserRepository } from "../data/userRepository";
import LookUpUserByName from "./lookUpUserByName";

export interface Queries {
    lookUpUserByName: LookUpUserByName;
}

const createQueries = (users: UserRepository): Queries => {
    const lookUpUserByName = new LookUpUserByName(users);

    return {
        lookUpUserByName,
    };
}

export default createQueries;