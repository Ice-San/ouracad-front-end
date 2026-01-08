import { Link, useNavigate } from "react-router";
import { useCookies } from 'react-cookie';
import { toast, ToastContainer } from 'react-toastify';

import { useEffect, useState } from 'react';

import { Icon } from "@components/Icon";
import { List } from "./components/List";
import { AddUser } from "./components/AddUser";

import { UsersList } from "types/usersTypes";
import { usersBackendType } from "types/usersBackendType";

import { formatDate } from "@utils/formatDate";

import { getUsers } from "@api/users/getUser";

export const UsersPage = () => {
    const [users, setUsers] = useState<UsersList[]>([]);
    const navegate = useNavigate();

    const [cookies] = useCookies(['token']);

    useEffect(() => {
        const token = cookies?.token;

        if(!token) {
            navegate('/');
        }
    }, []);

    useEffect(() => {
        (async () => {
            const { status, data } = await getUsers();

            if(status !== 200) {
                toast.error('Failed to Get Users...', {
                    position: "bottom-right",
                    pauseOnHover: false,
                    draggable: 'touch'
                });
                return;
            }

            const usersData = data.map((user: usersBackendType) => ({
                username: user.first_name + " " + user.last_name,
                email: user.email,
                role: user.role,
                joined: formatDate(user.created_at)
            }));

            setUsers([...usersData.reverse()]);
        })()
    }, []);

    return (
        <>
            <div className="bg-(--primary) flex items-center pl-5 w-full h-25">
                <Link to='/dashboard' className="flex items-center justify-center hover:[&>h1]:-translate-x-1">
                    <Icon className="size-15 brightness-0 invert" url="/img/ouracad-logo.png" />
                    <h1 className="text-white text-3xl font-bold mb-0.5 transition-all duration-150 ease-in-out">
                        OurAcad
                    </h1>
                </Link>
            </div>

            <div className="p-5 flex justify-center gap-5 w-full h-[87.5vh] max-[832px]:flex-col">
                <div className="shadow-md inset-shadow-sm border border-gray-200 rounded-lg p-2.5 flex flex-col gap-2 min-w-85 max-[832px]:w-full">
                    <h2 className="text-xl cursor-default font-bold">Create User</h2>
                    
                    <AddUser setUsers={setUsers} />
                </div>

                <div className="shadow-md inset-shadow-sm border border-gray-200 rounded-lg p-2.5 flex flex-col gap-2 w-110 max-[832px]:w-full">
                    <h2 className="text-xl font-bold cursor-default">
                        User List
                    </h2>

                    <div className="flex items-center gap-1.5 rounded-sm border-2 border-gray-600 px-1 py-0.5 w-full focus-within:ring-2 focus-within:ring-gray-400 transition-all duration-150 ease-in-out">
                        <Icon className="size-4" url="/img/search-icon.png" />
                        <input 
                            className="w-full"
                            type="text" 
                            placeholder="Pesquisar aluno pelo nome ou email" 
                        />
                    </div>

                    <div className="flex flex-col gap-2 pr-0.5 overflow-auto max-[832px]:max-h-55">
                        {users.map((user => (
                            <List key={user.email} {...user} setUser={setUsers} />
                        )))}
                    </div>
                </div>
            </div>

            <ToastContainer />
        </>
    );
}