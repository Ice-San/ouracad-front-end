import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router";

import { Icon } from "@components/Icon";

import { validation } from "@api/auth/validation";

export const DashboardPage = () => {
    const [cookies] = useCookies(['token']);
    const navegate = useNavigate();

    useEffect(() => {
        (async () => {
            const auth = await validation(cookies?.token as string);
            if(!auth) navegate("/");
        })();
    }, []);

    return (
        <div className="flex justify-center items-center w-full h-dvh">
            <div style={{ backgroundImage: `url("/img/background-login.png")` }} className="bg-no-repeat bg-center bg-cover w-full h-dvh">
                <div className="bg-(--bg-blue) backdrop-blur-xs w-full h-dvh">
                    <div className="p-10 w-full">
                        <Link to="/" className="text-4xl font-bold cursor-pointer inline-block hover:scale-90 transition-transform ease-in-out duration-150">
                            OurAcad
                        </Link>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-x-15 gap-y-0 px-5 w-full h-155">
                        <Link to="/users" className="relative flex justify-end items-end w-3xs h-55 cursor-pointer hover:scale-95 transition-transform ease-in-out duration-150">
                            <Icon className="absolute w-full h-37 mb-16" url="./users.png" />

                            <div className="bg-white rounded-xl flex justify-center items-end w-full h-30">
                                <p className="text-2xl font-bold mb-5">Utilizadores</p>
                            </div>
                        </Link>

                        <Link to="/courses" className="relative flex justify-end items-end w-3xs h-55 cursor-pointer hover:scale-95 transition-all ease-in-out duration-150">
                            <Icon className="absolute w-full h-37 mb-16" url="./courses.png" />

                            <div className="bg-white rounded-xl flex justify-center items-end w-full h-30">
                                <p className="text-2xl font-bold mb-5">Cursos</p>
                            </div>
                        </Link>

                        <Link to="/stats" className="relative flex justify-end items-end w-3xs h-55 cursor-pointer hover:scale-95 transition-all ease-in-out duration-150">
                            <Icon className="absolute w-full h-34 mb-16" url="./stats.png" />

                            <div className="bg-white rounded-xl flex justify-center items-end w-full h-30">
                                <p className="text-2xl font-bold mb-5">Estatisticas</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}