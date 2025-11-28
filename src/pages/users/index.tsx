import { Link } from "react-router";

import { Icon } from "@components/Icon";
import { List } from "./components/List";

export const UsersPage = () => {
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

                    <form className="flex flex-col gap-1.5 w-full h-full">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="username">Nome</label>
                            <input 
                                className="rounded-sm border-2 border-gray-600 px-1 py-0.5 w-full focus:ring-2 focus:ring-gray-400 transition-all duration-150 ease-in-out"
                                type="text" 
                                id="username" 
                                placeholder="John Doe" 
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="password">Password</label>
                            <input 
                                className="rounded-sm border-2 border-gray-600 px-1 py-0.5 w-full focus:ring-2 focus:ring-gray-400 transition-all duration-150 ease-in-out"
                                type="password" 
                                id="password" 
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="role">Cargo</label>
                            <select
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
                        <List username="John Doe" email="jd@example.com" role="regente" joined="10/02/2025" />
                        <List username="Henrique Lopes" email="hp@example.com" role="admin" joined="10/02/2025" />
                        <List username="João Nunes" email="jp@example.com" role="docente" joined="10/02/2025" />
                    </div>
                </div>
            </div>
        </>
    );
}