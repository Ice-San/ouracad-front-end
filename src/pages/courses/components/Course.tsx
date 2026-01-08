import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

import { deleteCourse } from "@api/courses/delete";

import { Icon } from "@components/Icon";

import { CourseType } from "types/CourseType";

type CourseInfoType = {
    course: string;
    conductor: string;
    year: number;
    status?: string;
    created_at?: string;
    setCourses: Dispatch<SetStateAction<CourseType[]>>;
}

export const Course = ({course, conductor, year, setCourses}: CourseInfoType) => {
    const navegate = useNavigate();

    const handleDelete = async () => {
        const { status } = await deleteCourse(course, year);

        if(status !== 200) {
            toast.error('Failed to Delete a Course...', {
                position: "bottom-right",
                pauseOnHover: false,
                draggable: 'touch'
            });
            return;
        }

        setCourses(prev => prev.filter(prevCourse => prevCourse.course != course && prevCourse.year != year));

        toast.success('Course deleted successfuly!', {
            position: "bottom-right",
            pauseOnHover: false,
            draggable: 'touch'
        });
    }

    return(
        <div className="flex justify-end items-center relative w-full hover:scale-95 transition-all duration-150 ease-in-out">
            <div onClick={() => navegate("/course-info", { state: {course, year} })} className="shadow-md inset-shadow-sm border border-gray-200 rounded-md flex items-center gap-2 p-2 w-full">
                <div className="bg-(--primary) flex justify-center items-center rounded-md px-2.5 py-4 max-w-15 overflow-hidden">
                    <h2 className="text-lg font-bold">
                        {course}
                    </h2>
                </div>

                <div>
                    <h2 className="text-lg font-bold">{conductor}</h2> 
                    <p className="text-sm">Ano: {year}</p>
                </div>
            </div>

            <div onClick={handleDelete} className="absolute shadow-md inset-shadow-sm border border-gray-200 rounded-sm cursor-default p-1.5 mr-4 hover:scale-95 transition-all duration-150 ease-in-out">
                <Icon className="size-6" url="/img/delete-icon.png" />
            </div>
        </div>
    );
}