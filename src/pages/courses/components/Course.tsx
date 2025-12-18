import { Icon } from "@components/Icon";
import { Link } from "react-router";

type CourseList = {
    course: string;
    conductor: string;
    year: string;
    students?: string;
}

export const Course = ({course, conductor, year, students}: CourseList) => {
    return(
        <div className="flex justify-end items-center relative w-full hover:scale-95 transition-all duration-150 ease-in-out">
            <Link to='/profile' className="shadow-md inset-shadow-sm border border-gray-200 rounded-md flex items-center gap-2 p-2 w-full">
                <div className="bg-(--primary) flex justify-center items-center rounded-md px-2.5 py-4 max-w-15 overflow-hidden">
                    <h2 className="text-lg font-bold">
                        {course}
                    </h2>
                </div>

                <div>
                    <h2 className="text-lg font-bold">{conductor}</h2> 
                    <p className="text-sm">Ano: {year}</p>
                    <p className="text-sm">Alunos: {students ? students : 0}</p>
                </div>
            </Link>

            <div className="absolute shadow-md inset-shadow-sm border border-gray-200 rounded-sm cursor-default p-1.5 mr-4 hover:scale-95 transition-all duration-150 ease-in-out">
                <Icon className="size-6" url="/img/delete-icon.png" />
            </div>
        </div>
    );
}