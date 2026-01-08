import { Cookies } from "react-cookie";

const { VITE_API_KEY } = import.meta.env;

export const deleteCourse = async (courseName: string, year: number) => {
    const cookies = new Cookies();
    const token = cookies.get("token");

    try {
        const response = await fetch(`${VITE_API_KEY}/courses/`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({courseName, year})
        })
        const { status } = await response.json();

        if(status !== 200) {
            console.error("Failed to get course...");
            return { status };
        }
        
        return { status };
    } catch (err) {
        console.error("Something went wrong: ", err);
        return { status: 404 };
    }
}