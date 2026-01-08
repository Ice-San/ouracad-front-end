import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useCookies } from 'react-cookie';
import { toast, ToastContainer } from 'react-toastify';

import { authSignIn } from '@api/auth/signin';
import { useEffect } from 'react';

type SignInForm = {
    email: string;
    password: string;
}

export const SignInPage = () => {
    const { register, handleSubmit } = useForm<SignInForm>();
    const navegate = useNavigate();

    const [cookies, setCookie] = useCookies(['token']);

    const onSubmit = async (dataForm: SignInForm) => {
        const { status, token } = await authSignIn(dataForm);

        if(status !== 200) {
            toast.error('Authentication was a failed...', {
                position: "bottom-right",
                pauseOnHover: false,
                draggable: 'touch'
            });
            return;
        }

        if(!token) {
            toast.warning('User not exist!', {
                position: "bottom-right",
                pauseOnHover: false,
                draggable: 'touch'
            });
            return;
        }

        toast.success('Your Login was a success!', {
            position: "bottom-right",
            pauseOnHover: false,
            draggable: 'touch'
        });     

        setCookie('token', token);
        navegate("/dashboard");
    }

    const onError = (err: any) => {
        Object.values(err).map((err: any) => {
            toast.warning(err.message, {
                position: "bottom-right",
                pauseOnHover: false,
                draggable: 'touch'
            });
            return;
        });
    }

    useEffect(() => {
        const token = cookies?.token;

        if(token) {
            navegate('/dashboard');
        }
    }, []);

    return (
        <div className="w-full h-dvh">
            <div className="bg-[url(/img/background-login.png)] bg-center bg-cover bg-no-repeat w-full h-full">
                <div className="bg-(--bg-blue) backdrop-blur-sm flex justify-center items-center w-full h-full">
                    <div className="bg-white shadow-md inset-shadow-md rounded-md flex flex-col gap-3 m-5 p-5 w-100">
                        <div>
                            <h1 className="text-xl font-bold">Login to your account</h1>
                            <p>Enter your email below to login to your account.</p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit, onError)} className="flex flex-col gap-1.5">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="email">Email</label>
                                <input
                                    {...register('email', { 
                                        required: "You need to put an email!", 
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i, 
                                            message: "The email isn't valid!"
                                        },
                                        maxLength: {
                                            value: 100, 
                                            message: "Email can only have an maximum of 100 characters!"
                                        } 
                                    })}
                                    className="rounded-sm border-2 border-gray-600 px-1 py-0.5 w-full focus:ring-2 focus:ring-gray-400 transition-all duration-150 ease-in-out" 
                                    id='email' 
                                    type="email" 
                                    placeholder="john@example.com" 
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="password">Password</label>
                                <input
                                    {...register('password', { 
                                        required: "You need to put an password!", 
                                        maxLength: {
                                            value: 100, 
                                            message: "Password can only have an maximum of 100 characters!"
                                        } 
                                    })}
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

            <ToastContainer />
        </div>
    );
}