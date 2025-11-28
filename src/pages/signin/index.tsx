export const SignInPage = () => {
    return (
        <div className="w-full h-dvh">
            <div className="bg-[url(/img/background-login.png)] bg-center bg-cover bg-no-repeat w-full h-full">
                <div className="bg-(--bg-blue) backdrop-blur-sm flex justify-center items-center w-full h-full">
                    <div className="bg-white shadow-md inset-shadow-md rounded-md flex flex-col gap-3 m-5 p-5 w-100">
                        <div>
                            <h1 className="text-xl font-bold">Login to your account</h1>
                            <p>Enter your email below to login to your account.</p>
                        </div>

                        <form className="flex flex-col gap-1.5">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="email">Email</label>
                                <input
                                    className="rounded-sm border-2 border-gray-600 px-1 py-0.5 w-full focus:ring-2 focus:ring-gray-400 transition-all duration-150 ease-in-out" 
                                    id='email' 
                                    type="email" 
                                    placeholder="john@example.com" 
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="password">Password</label>
                                <input
                                    className="rounded-sm border-2 border-gray-600 px-1 py-0.5 w-full focus:ring-2 focus:ring-gray-400 transition-all duration-150 ease-in-out"  
                                    id='password' 
                                    type="password" 
                                    placeholder="****" 
                                />
                            </div>

                            <button
                                className="bg-(--primary) rounded-sm text-white font-bold mt-2 p-2 cursor-pointer w-full hover:scale-95 transition-all duration-150 ease-in-out"
                                type="submit"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}