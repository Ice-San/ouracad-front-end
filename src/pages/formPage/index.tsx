export const FormPage = () => {
    return (
        <div className="bg-[url(/img/background-books.png)] bg-no-repeat bg-cover bg-center w-full h-auto">
            <div className="bg-[#FFB175]/61 backdrop-blur-[3px] flex flex-col items-center gap-[30px] pt-[30px] pb-[30px] w-full h-full">
                <h1 className="text-white text-center text-4xl font-bold">Inquérito da razão do abandono escolar</h1>

                <form className="bg-[#FCCD92] rounded-sm flex flex-col items-center gap-2.5 pt-2.5 pb-2.5 w-[80%] ">
                    <div className="flex flex-col gap-2.5 w-[95%]">
                        <label className="text-white text-2xl font-bold self-start" htmlFor="name"><span className="text-red-600">*</span>Nome</label>
                        <input className="bg-white rounded-sm border-none px-2 py-2 text-1xl w-full" id="name"/>
                    </div>
                
                    <div className="flex flex-col gap-2.5 w-[95%]">
                        <label className="text-white text-2xl font-bold self-start" htmlFor="name"><span className="text-red-600">*</span>Nº de aluno:</label>
                        <input className="bg-white rounded-sm border-none px-2 py-2 text-1xl w-full" id="name"/>
                    </div>

                    <div className="flex flex-col gap-2.5 w-[95%]">
                        <label className="text-white text-2xl font-bold self-start" htmlFor="name"><span className="text-red-600">*</span>Curso</label>
                        <select className="bg-white rounded-sm border-none px-2 py-2 text-1xl w-full" name="course" id="cs">
                            <option value="">TPSI (Tecnologias e Programação de Sistemas de Informação)</option>
                        </select>
                    </div >

                    <div className="flex flex-col gap-0.5 w-[95%]">
                        <label className="text-white text-2xl font-bold self-start" htmlFor="name"><span className="text-red-600">*</span>Tipo(s) de motivo:</label>
                        <p className="text-white text-sm italic font-bold cursor-default">(Pode escolher até 2 motivos)</p>

                        <div className="flex gap-1 w-full">
                            <input className="w-8" type="checkbox" id="mp"/>
                            <label className="text-white text-sm self-start" htmlFor="mp">Motivos pessoais</label>
                        </div>
                        <div className="flex gap-1 w-full">
                            <input className="w-8" type="checkbox" id="me"/>
                            <label className="text-white text-sm self-start" htmlFor="me">Motivos económicos</label>
                        </div>
                        <div className="flex gap-1 w-full">
                            <input className="w-8" type="checkbox" id="md"/>
                            <label className="text-white text-sm self-start" htmlFor="md">Motivos de doença</label>
                        </div>

                        <div className="flex gap-1 w-full">
                            <input className="w-8" type="checkbox" id="mf"/>
                            <label className="text-white text-sm self-start" htmlFor="mf">Motivos familiares</label>
                        </div>
                        <div className="flex gap-1 w-full">
                            <input className="w-8" type="checkbox" id="o"/>
                            <label className="text-white text-sm self-start" htmlFor="o">Outro</label>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2.5 w-[95%]">
                        <label className="text-white text-2xl font-bold self-start" htmlFor="ta">Motivo mais detalhado (opcional)</label>
                        <textarea className="resize-none bg-white rounded-sm border-none px-2 py-2 text-1xl w-full h-[30vh]" name="" id="ta"></textarea>
                    </div>

                    <button
                        className="bg-[#FFA556] rounded-sm text-white font-bold mt-2 px-8 py-2 cursor-pointer  hover:scale-95 transition-all duration-150 ease-in-out"
                        type="submit"
                    >
                        Submeter
                    </button>
                        
                </form>
            </div>
        </div>
    );
}