import React from 'react'

function TodoList() {
  const todoList = [
    {
      title: 'Three Js',
      desc: 'Learn Three Js',
      done : true,
    },
    {
      title: 'Perfect Agency',
      desc: 'Complete Perfect Agency Website',
      done : false,
    },
  ]
  return (
    <div>
      {
        todoList.map((list, index) => {
          return (
            <div key={index} className='' >
            <h1 className='text-lg font-bold'>
              {list.title}
            </h1>
            <div>
              {list.desc}
            </div>
            <div>
            Status : {list.done === true ? 'true' : 'false'}
            </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default TodoList
