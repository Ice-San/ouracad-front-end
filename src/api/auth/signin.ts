const { VITE_API_KEY } = import.meta.env;

type SignIn = {
    status: number;
    token?: string;
}

export const authSignIn = async ({ 
    email, 
    password 
}: { 
    email: string; 
    password: string 
}): Promise<SignIn> => {
    try {
        const response = await fetch(`${VITE_API_KEY}/auth/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        });
        const { status, data } = await response.json();
        const { token } = data;

        if(status !== 200) {
            console.error("Authentication was a failed...");
        }

        if(!data.token) {
            console.warn("User not exist!");
        }

        return {status, token};
    } catch (err) {
        console.error("Something went wrong: ", err);
        return { status: 404 };
    }
}