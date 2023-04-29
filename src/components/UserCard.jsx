const UserCard = ({user, deleteUser, handleClickToEdit}) => {
  return (
    <article className='border p-2 rounded-md'>
        <h2 className='font-bold text-2xl border-b-[1px] pb-2'>{`${user.first_name} ${user.last_name}`}</h2>
        <div>
            <span className='text-gray-400 text-xs'>CORREO</span>
            <p>{user.email}</p>
        </div>
        <div className='border-b-[1px] pb-2'>
            <span className='text-gray-400 text-xs'>CUMPLEAÑOS</span>
            <p className='flex justify-start items-center gap-2'><box-icon name='gift'></box-icon>{user.birthday}</p>
        </div>
        <div className='flex gap-3 justify-end pt-2'>
            <span onClick={() => deleteUser(user.id)} className='bg-red-500/80 pt-1 px-1 rounded-sm cursor-pointer'><box-icon name='trash' animation='tada-hover' color='white'></box-icon></span>
            <span onClick={() => handleClickToEdit(user)} className='border px-1 pt-1 rounded-sm cursor-pointer'><box-icon name='pencil' animation='tada-hover' color='gray'></box-icon></span>
        </div>
    </article>
  )
}

export default UserCard
