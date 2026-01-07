import { Link } from "react-router";
import { ToastContainer } from "react-toastify";

import { Icon } from "@components/Icon";

import { getInitials } from "@utils/getInitials";

export const ProfilePage = () => {
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

            <div className="w-full">
                <div className="p-5 flex justify-center gap-5 w-full h-full max-[832px]:flex-col">
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex flex-col justify-center items-center gap-2 shadow-md inset-shadow-sm border border-gray-200 rounded-lg p-2.5 min-w-50 h-50 max-[832px]:w-full">
                            <div className="bg-gray-300 flex justify-center items-center rounded-full min-w-25 min-h-25">
                                <h2 className="text-lg">
                                    {getInitials("John Doe")}
                                </h2>
                            </div>

                            <div className="flex flex-col justify-center items-center *:cursor-default">
                                <h2 className="text-xl font-bold">John Doe</h2>
                                <p className="text-gray-500 text-md">Joined: 10/12/2025</p>
                            </div>
                        </div>

                        <button form="update-user" className="bg-(--primary) flex justify-center items-center rounded-sm py-1 w-full cursor-pointer hover:scale-95 ease-in-out duration-150">
                            Save Changes
                        </button>
                    </div>

                    <div className="shadow-md inset-shadow-sm border border-gray-200 rounded-lg p-2.5 w-110 max-[832px]:w-full">
                        <form id="update-user" className="flex flex-col gap-2 ">
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
                                <label htmlFor="subject">Curso</label>
                                <select
                                    className="rounded-sm border-2 border-gray-600 px-1 py-0.5 w-full focus:ring-2 focus:ring-gray-400 transition-all duration-150 ease-in-out" 
                                    id="subject"
                                >
                                    <option value="tpsi">TPSI</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="role">Tipo</label>
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
                                <label htmlFor="status">Status</label>
                                <select
                                    className="rounded-sm border-2 border-gray-600 px-1 py-0.5 w-full focus:ring-2 focus:ring-gray-400 transition-all duration-150 ease-in-out" 
                                    id="status"
                                >
                                    <option value="active">Ativo</option>
                                    <option value="inactive">Inativo</option>
                                </select>
                            </div>
                        </form>

                        <div className="bg-gray-300 rounded-full my-3.5 w-full h-1"></div>

                        <form className="flex flex-col gap-2">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="current-password">Current Password</label>
                                <input
                                    className="rounded-sm border-2 border-gray-600 px-1 py-0.5 w-full focus:ring-2 focus:ring-gray-400 transition-all duration-150 ease-in-out"
                                    type="text" 
                                    id="current-password"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="new-password">New Password</label>
                                <input
                                    className="rounded-sm border-2 border-gray-600 px-1 py-0.5 w-full focus:ring-2 focus:ring-gray-400 transition-all duration-150 ease-in-out"
                                    type="text" 
                                    id="new-password"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="confirm-password">Confirm Password</label>
                                <input
                                    className="rounded-sm border-2 border-gray-600 px-1 py-0.5 w-full focus:ring-2 focus:ring-gray-400 transition-all duration-150 ease-in-out"
                                    type="text" 
                                    id="confirm-password"
                                />
                            </div>

                            <button type="submit" className="bg-gray-700 text-white flex justify-center items-center rounded-sm py-1 w-full cursor-pointer hover:scale-95 ease-in-out duration-150">
                                Save Password
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </>
    );
}