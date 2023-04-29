import axios from 'axios'
import { useEffect, useState } from 'react'
import UserList from './components/UserList'
import Modal from './components/Modal'
import Header from './components/Header'
import { useForm } from 'react-hook-form'

const BASE_URL = "https://users-crud.academlo.tech"
const DEFAULT_VALUES = {
  first_name : "",
  last_name : "",
  email : "",
  password : "",
  birthday : ""
}
function App() {

  const [isShowForm, setIsShowForm] = useState(false)
  const [users, setUsers] = useState([])
  const [idUserToEdit, setIdUserToEdit] = useState()
  const {register, handleSubmit, reset, formState: { errors }} = useForm()
  
  const submit = (data) => {
    console.log(data)
    if (idUserToEdit){
      editUser(data)
    } else {
      createUser(data)
    }
  }

  const createUser = (data) => {
    const URL = BASE_URL + '/users/'
    axios.post(URL, data)
      .then(() => {
        getAllUsers()
        reset(DEFAULT_VALUES);
        setIsShowForm(!isShowForm);
      })
      .catch((err) => console.log(err))
  }

  const deleteUser = (id) => {
    const URL = BASE_URL + `/users/${id}` 
    axios.delete(URL)
      .then(() => getAllUsers())
      .catch((err) => console.log(err))
  }

  const editUser = (data) => {
    const URL = BASE_URL + `/users/${idUserToEdit}/` 
    axios.patch(URL, data)
      .then(() => {
        getAllUsers()
        reset(DEFAULT_VALUES)
        setIsShowForm(!isShowForm)
        setIdUserToEdit()
      })
      .catch((err) => console.log(err))
      .finally(() => setIdUserToEdit())
  }

  const getAllUsers = () => {
    const URL = BASE_URL + '/users/'
    axios.get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
  }

  const handleClickToEdit = (data) => {
    setIsShowForm((isShowForm) => !isShowForm)
    reset(data)
    setIdUserToEdit(data.id)
  }

  useEffect(() => {
    getAllUsers()
  }, [])
  return (
    <main className='p-2 text-purple-950'>
      <Header setIsShowForm={setIsShowForm}></Header>
      <UserList 
        users={users} 
        deleteUser={deleteUser} 
        handleClickToEdit={handleClickToEdit}  
      />      
      <Modal 
        submit={submit} 
        register={register} 
        handleSubmit={handleSubmit} 
        isShowForm={isShowForm} 
        setIsShowForm={setIsShowForm}
        reset={reset}
        idUserToEdit={idUserToEdit}
        setIdUserToEdit={setIdUserToEdit}
      />
    </main>
  )
}

export default App
