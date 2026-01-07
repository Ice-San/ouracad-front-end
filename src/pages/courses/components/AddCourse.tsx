export const AddCourse = () => {
    return(
        <form className="flex flex-col gap-1.5 w-full h-full">
            <div className="flex flex-col gap-1">
                <label htmlFor="course">Curso</label>
                <select
                    className="rounded-sm border-2 border-gray-600 px-1 py-0.5 w-full focus:ring-2 focus:ring-gray-400 transition-all duration-150 ease-in-out" 
                    id="course"
                >
                    <option value="tpsi">TPSI</option>
                    <option value="dpm">DPM</option>
                </select>
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="coordinator">Coordenador do Curso</label>
                <select
                    className="rounded-sm border-2 border-gray-600 px-1 py-0.5 w-full focus:ring-2 focus:ring-gray-400 transition-all duration-150 ease-in-out" 
                    id="course"
                >
                    <option value="tpsi">Joaquim Antunes</option>
                    <option value="dpm">John Doe</option>
                </select>
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