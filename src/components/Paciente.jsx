const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () =>{
    const respuesta = confirm('Deseas eliminar este paciente?')

    if(respuesta){
      eliminarPaciente(id)
    }
  }

  return (
    <div className="m-3 mt-0 bg-white shadow-md px-8 py-10 rounded-lg md:flex justify-between">
      <div>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Mascota: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>
      </div>

      <div className="flex flex-col gap-5 justify-center">
        <button 
          type="button"
          className="py-2 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md "
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>

        <button 
          type="button"
          className="py-2 px-5 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md "
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
