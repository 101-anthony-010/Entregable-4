import React from 'react'

const Header = ({setIsShowForm}) => {
    const handleClickShowModal = () => {
        setIsShowForm((isShowForm) => !isShowForm)
    }

    return (
    <header className='flex justify-between items-center mb-4 p-2'>
        <h1 className='sm:text-4xl font-bold text-2xl'>Usuario</h1>
        <button className='bg-purple-600 p-2 text-white rounded-sm' onClick={handleClickShowModal}>+ Crear nuevo usuario</button>
    </header>
  )
}

export default Header
