import { SERVER } from "../config/server";
import axios from "axios";
import { User } from "../Types/Types";

export const LoginService = async (email: string, password: string): Promise<User | null> => {

    const user = {
        email: email,
        password: password
    }

    try {
        const response = await axios.post(`${SERVER}/api/auth`, user, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });

        return response.data;

    } catch (error) {
        console.error("Login error:", error);
        return null
    }

}
