import { Cookies } from "react-cookie";

type CreateUserType = {
    status: number;
    exists: boolean
}

const { VITE_API_KEY } = import.meta.env;

export const createUser = async ({
    username,
    email,
    password,
    role,
    subject
} : {
    username: string;
    email: string;
    password: string;
    role: string;
    subject: string;
}): Promise<CreateUserType> => {
    const cookies = new Cookies();
    const token = cookies.get("token");

    try {
        const response = await fetch(`${VITE_API_KEY}/users/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({username, email, password, role, course: subject})
        });
        const { status, exists } = await response.json();

        if(status !== 200) {
            console.error("Failed to create a user...");
        }

        if(exists) {
            console.error("User already Exists!");
        }
        
        return { status, exists };
    } catch (err) {
        console.error("Something went wrong: ", err);
        return { status: 404, exists: false };
    }
}