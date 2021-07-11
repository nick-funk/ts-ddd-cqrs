import jwt from "jsonwebtoken";

import { Queries } from "../queries";

const JWT_SIGNING_KEY = process.env.JWT_SIGNING_KEY ? process.env.JWT_SIGNING_KEY : "secret";

export interface LoginUserResult {
    success: boolean;
    token?: string;
}

export default class LoginUser {
    private queries: Queries;

    constructor(queries: Queries) {
        this.queries = queries;
    }

    public execute(user: string, pass: string): LoginUserResult {
        try {
            const foundUser = this.queries.lookUpUserByName.query(user);

            // This is just doing a text comparison, should really
            // be hashed and salted in real world scenarios
            if (foundUser && foundUser.password === pass) {
                const token = jwt.sign(
                    { user }, 
                    JWT_SIGNING_KEY, 
                    { expiresIn: "24h", algorithm: "HS256" }
                );
                
                return {
                    success: true,
                    token
                };
            } else {
                return {
                    success: false
                }
            }
        } catch (err) {
            return {
                success: false
            };
        }
    }
}