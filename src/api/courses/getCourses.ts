import { Cookies } from "react-cookie";

const { VITE_API_KEY } = import.meta.env;

export const getCourses = async () => {
    const cookies = new Cookies();
    const token = cookies.get("token");

    try {
        const response = await fetch(`${VITE_API_KEY}/courses/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        const { status, data } = await response.json();

        if(status !== 200) {
            console.error("Failed to get courses...");
            return { status, data: [] };
        }
        
        return { status, data };
    } catch (err) {
        console.error("Something went wrong: ", err);
        return { status: 404 };
    }
}