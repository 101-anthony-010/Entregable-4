const Modal = ({isShowForm, setIsShowForm, handleSubmit, register, submit, reset, idUserToEdit, setIdUserToEdit, errors}) => {
    const handleClickCloseModal = () => {
        setIsShowForm((isShowForm) => !isShowForm)
        reset({
            first_name : "",
            last_name : "",
            email : "",
            password : "",
            birthday : ""
          });
          setIdUserToEdit()
    }

  return (
    <section className={`absolute top-0 left-0 bottom-0 right-0 bg-black/40 flex justify-center items-center transition-opacity ${isShowForm ? "opacity-100 visible" : "opacity-0 invisible"}`} >
      <form onSubmit={handleSubmit(submit)} className="rounded-md relative bg-white p-4 grid gap-4 w-[300px]">
        <h2 className="font-bold text-2xl">{idUserToEdit ? 'Editar Usuario' : 'Nuevo Usuario'}</h2>
        <div className="grid gap-1">
            <label className="text-xs font-semibold" htmlFor="first_name">Nombre</label>
            <input className="border rounded-sm bg-gray-100 p-1" id='first_name' required {...register("first_name",{
                minLength: {
                value: 2,
                message: "Debe ingresar minimo de 2 caracteres"
              }
            })} type="text" />
            <span className="text-red-500 text-xs">{errors.first_name && errors.first_name.message}</span>
        </div>
        <div className="grid gap-1">
            <label className="text-xs font-semibold" htmlFor="last_name">Apellido</label>
            <input className="border rounded-sm bg-gray-100 p-1" id='last_name' required {...register("last_name",{
                minLength: {
                value: 2,
                message: "Debe ingresar minimo de 2 caracteres"
              }
            })} type="text" />
            <span className="text-red-500 text-xs">{errors.last_name && errors.last_name.message}</span>
        </div>
        <div className="grid gap-1">
            <label className="text-xs font-semibold" htmlFor="email">Correo</label>
            <input className="border rounded-sm bg-gray-100 p-1" id='email' required {...register("email",{ 
              pattern: {
                value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                message: "El correo ingresado no tiene un formato valido"
              }
            }
            )} type="text" />
            <span className="text-red-500 text-xs">{errors.email && errors.email.message}</span>
        </div>
        <div className="grid gap-1">
            <label className="text-xs font-semibold" htmlFor="password">Contraseña</label>
            <input className="border rounded-sm bg-gray-100 p-1" id='password' required {...register("password",{
                minLength: {
                value: 6,
                message: "muy facil"
                }
              })} type="password" />
            <span className="text-red-500 text-xs">{errors.password && errors.password.message}</span>
        </div>
        <div className="grid gap-1">
            <label className="text-xs font-semibold" htmlFor="birthday">Cumpleaños</label>
            <input className="border rounded-sm bg-gray-100 p-1" id='birthday' required {...register("birthday")} type="date" />
        </div>
        <div className="absolute top-0 right-0 p-2 cursor-pointer hover:text-red-600" onClick={handleClickCloseModal}>
            <box-icon name='x'></box-icon>
        </div>
        <button className="bg-purple-600 p-2 text-white">{idUserToEdit ? 'Guardar Cambios' : 'Agregar nuevo usuario'}</button>
      </form>
    </section>
  )
}

export default Modal
