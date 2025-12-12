import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { createUser } from '@api/users/create';

import { UsersList } from 'types/usersTypes';

type CreateUserForm = {
    username: string;
    email: string;
    password: string;
    role: string;
    subject: string;
};

type AddUserTypes = {
    setUsers: Dispatch<SetStateAction<UsersList[]>>;
}

export const AddUser = ({ setUsers }: AddUserTypes) => {
    const { register, handleSubmit } = useForm<CreateUserForm>();

    const onSubmit = async (dataForm: CreateUserForm) => {
        const { status, exists } = await createUser(dataForm);

        if(exists) {
            toast.error('User already exists!', {
                position: "bottom-right",
                pauseOnHover: false,
                draggable: 'touch'
            });
            return;
        }

        if(status !== 200) {
            toast.error('Failed to Create a User...', {
                position: "bottom-right",
                pauseOnHover: false,
                draggable: 'touch'
            });
            return;
        }

        toast.success(`${dataForm.username} was created!`, {
            position: "bottom-right",
            pauseOnHover: false,
            draggable: 'touch'
        });

        const { username, email, role } = dataForm;
        const newUser = {
            username,
            email,
            role,
            joined: new Date().toLocaleDateString()
        }
        setUsers(prev => {
            const prevUsers = [...prev];
            prevUsers.splice(prev.length - 1, 0, newUser);
            return prevUsers;
        });
    };

    const onError = (err: any) => {
        Object.values(err).map((err: any) => {
            toast.warning(err.message, {
                position: "bottom-right",
                pauseOnHover: false,
                draggable: 'touch'
            });
            return;
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)} className="flex flex-col gap-1.5 w-full h-full">
            <div className="flex flex-col gap-1">
                <label htmlFor="username">Nome</label>
                <input 
                    {...register('username', {
                        required: "You need to put an username",
                        maxLength: {
                            value: 150,
                            message: "Username can only have an max of 150 characters!"
                        }
                    })}
                    className="rounded-sm border-2 border-gray-600 px-1 py-0.5 w-full focus:ring-2 focus:ring-gray-400 transition-all duration-150 ease-in-out"
                    type="text" 
                    id="username" 
                    placeholder="John Doe" 
                />
            </div>

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
                    type="email" 
                    id="email" 
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
                    type="password" 
                    id="password" 
                />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="role">Cargo</label>
                <select
                    {...register('role')}
                    className="rounded-sm border-2 border-gray-600 px-1 py-0.5 w-full focus:ring-2 focus:ring-gray-400 transition-all duration-150 ease-in-out" 
                    id="role"
                >
                    <option value="docente">Docente</option>
                    <option value="regente">Regente</option>
                    <option value="admin">Admin</option>
                </select>
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="subject">Curso</label>
                <select
                    {...register('subject')}
                    className="rounded-sm border-2 border-gray-600 px-1 py-0.5 w-full focus:ring-2 focus:ring-gray-400 transition-all duration-150 ease-in-out" 
                    id="subject"
                >
                    <option value="tpsi">TPSI</option>
                </select>
            </div>

            <button
                className="bg-(--primary) rounded-sm text-white font-bold p-1.5 mt-2 cursor-pointer hover:scale-95 transition-all duration-150 ease-in-out" 
                type="submit"
            >
                Create
            </button>
        </form>
    );
}