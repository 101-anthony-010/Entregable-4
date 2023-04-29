const DeleteCard = ({cancelDelete, handleCancelDelete}) =>{
  return (
    <section className={`absolute top-0 left-0 right-0 bottom-0 bg-black/40 flex justify-center items-center ${cancelDelete ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className="bg-white p-6 rounded-md">
            <h2 className="text-2xl font-bold p-2">Eliminar Usuario</h2>
            <p className="text-center">Desea eliminar el usuario?</p>
            <div className="flex justify-between mt-3">
                <div onClick={() => handleCancelDelete()} className="cursor-pointer bg-purple-600 text-white py-2 px-5 rounded-sm m-auto">Aceptar</div>
            </div>
        </div>
    </section>
  )
}

export default DeleteCard
