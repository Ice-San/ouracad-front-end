import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import { toast, ToastContainer } from "react-toastify";

import { Icon } from "@components/Icon";
import { AddCourse } from "./components/AddCourse";
import { Course } from "./components/Course";

import { CourseType } from "types/CourseType";

import { validation } from "@api/auth/validation";
import { getCourses } from "@api/courses/getCourses";

export const CoursesPage = () => {
    const [cookies] = useCookies(['token']);
    const navegate = useNavigate();
    const [courses, setCourses] = useState<CourseType[]>();

    useEffect(() => {
        (async () => {
            const auth = await validation(cookies?.token as string);
            if(!auth) navegate("/");
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const courses = await getCourses();
            const { status, data } = courses;

            if(status !== 200) {
                toast.error('Failed to Get Courses...', {
                    position: "bottom-right",
                    pauseOnHover: false,
                    draggable: 'touch'
                });
                return;
            }

            setCourses(data);
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

            <div className="p-5 flex justify-center gap-5 w-full h-[87.5vh] max-[832px]:flex-col">
                <div className="shadow-md inset-shadow-sm border border-gray-200 rounded-lg p-2.5 flex flex-col gap-2 w-110 max-[832px]:w-full">
                    <h2 className="text-xl cursor-default font-bold">Create Course</h2>
                    <AddCourse />
                </div>

                <div className="shadow-md inset-shadow-sm border border-gray-200 rounded-lg p-2.5 flex flex-col gap-2 w-110 max-[832px]:w-full">
                    <h2 className="text-xl font-bold cursor-default">
                        Course List
                    </h2>

                    <div className="flex items-center gap-1.5 rounded-sm border-2 border-gray-600 px-1 py-0.5 w-full focus-within:ring-2 focus-within:ring-gray-400 transition-all duration-150 ease-in-out">
                        <Icon className="size-4" url="/img/search-icon.png" />
                        <input 
                            className="w-full"
                            type="text" 
                            placeholder="Pesquisar pelo nome do curso ou nome do regente" 
                        />
                    </div>

                    <div className="flex flex-col gap-2 pr-0.5 overflow-auto max-[832px]:max-h-55">
                        {courses?.map(({course, conductor, year}, index) => (
                            <Course key={index} course={course} conductor={conductor} year={year} />    
                        ))}
                    </div>
                </div>
            </div>

            <ToastContainer />
        </>
    );
}