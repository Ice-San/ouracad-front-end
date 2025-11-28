import { Link } from "react-router";

import { Icon } from "@components/Icon";

import { getInitials } from "@utils/getInitials";
import { abbreviate } from "@utils/abbreviate";

type UsersList = {
    username: string;
    email: string;
    role: string;
    joined: string;
}

export const List = ({username, email, role, joined}: UsersList) => {
    return (
        <div className="flex justify-end items-center relative w-full hover:scale-95 transition-all duration-150 ease-in-out">
            <Link to='/profile' className="shadow-md inset-shadow-sm border border-gray-200 rounded-md flex items-center gap-2 p-2 w-full">
                <div className="bg-(--primary) flex justify-center items-center rounded-md p-2.5">
                    <h2 className="text-lg font-bold">
                        {getInitials(username)}
                    </h2>
                </div>

                <div>
                    <div className="flex justify-center items-center gap-3">
                        <h2 className="text-lg font-bold">
                            {abbreviate(username)}
                        </h2>
                        <p
                            className="rounded-sm px-3 data-[role=docente]:bg-(--secondary) data-[role=aluno]:bg-gray-400 data-[role=regente]:bg-(--primary-light) data-[role=admin]:bg-black data-[role=admin]:text-white data-[role=regente]:text-white" 
                            data-role={role}
                        >
                            {role}
                        </p>
                    </div>

                    <p className="text-sm">
                        {email}
                    </p>

                    <p className="text-sm">
                        Joined: {joined}
                    </p>
                </div>
            </Link>

            <div className="absolute shadow-md inset-shadow-sm border border-gray-200 rounded-sm cursor-default p-1.5 mr-4 hover:scale-95 transition-all duration-150 ease-in-out">
                <Icon className="size-6" url="/img/delete-icon.png" />
            </div>
        </div>
    )
}