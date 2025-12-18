export const AddCourse = () => {
    return(
        <form className="flex flex-col gap-1.5 w-full h-full">
            <div className="flex flex-col gap-1">
                <label htmlFor="coursename">Nome</label>
                <input 
                    className="rounded-sm border-2 border-gray-600 px-1 py-0.5 w-full focus:ring-2 focus:ring-gray-400 transition-all duration-150 ease-in-out"
                    type="text" 
                    id="coursename" 
                    placeholder="TPSI" 
                />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="coordinator">Nome</label>
                <input 
                    className="rounded-sm border-2 border-gray-600 px-1 py-0.5 w-full focus:ring-2 focus:ring-gray-400 transition-all duration-150 ease-in-out"
                    type="text" 
                    id="coordinator" 
                    placeholder="Joaquim Antunes" 
                />
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