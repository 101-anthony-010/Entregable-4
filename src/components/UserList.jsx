import UserCard from './UserCard'

const UserList = ({users, deleteUser, handleClickToEdit}) => {
  return (
    <section className='grid gap-10 auto-rows-auto grid-cols-[repeat(auto-fill,_300px)] justify-center'>
        {
            users?.map((user) => (<UserCard key={user.id} user={user} deleteUser={deleteUser} handleClickToEdit={handleClickToEdit}></UserCard>))
        }
    </section>
  )
}

export default UserList
