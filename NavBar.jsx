import React from 'react'

function NavBar() {

const menu = [
    {id:1, title: 'Home'},
    {id:2, title:'forecast'},
    {id:3, title:'maps'},
]


  return (
    <div className='flex items-center justify-around my-6'>
        {menu.map((list) =>(
            <button key={list.id} className='text-white text-lg font-medium'>{list.title}</button>
        ))}
    </div>
  )
}

export default NavBar