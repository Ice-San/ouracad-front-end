import { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ToastContainer } from "react-toastify";

import { Icon } from "@components/Icon";

import { validation } from "@api/auth/validation";

ChartJS.register(ArcElement, Tooltip, Legend);

const statsData = {
        labels: ['Deistiram', 'Motivos Pessoais', 'Motivos de Doença', 'Motivos Familiares', 'Outros'],
        datasets: [
            {
            label: 'votos',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
            },
        ],
    };

export const StatsPage = () => {
    const [cookies] = useCookies(['token']);
    const navegate = useNavigate();

    useEffect(() => {
        (async () => {
            const auth = await validation(cookies?.token as string);
            if(!auth) navegate("/");
        })();
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

            <div className="flex flex-col items-center p-5 w-full h-[87.5vh]">
                <h1 className="text-3xl font-bold cursor-default mb-9">Respostas ao abandono escolar</h1>
                
                <div className="flex justify-center items-center w-100 h-100 md:w-130 md:h-130">
                    <Doughnut data={statsData} />
                </div>
            </div>

            <ToastContainer />
        </>
    );
}