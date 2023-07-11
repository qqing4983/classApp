import React from 'react'
import {notFound} from 'next/navigation'
 const fetchTodo=async (todoId)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`,{
        next:{
            revalidate:60
        }
    })
    const todos = await res.json();
    return todos;
 };
async function TodoPage({
    params: {todoId}}) {
        console.log(todoId,'todoId')
        const todo=await fetchTodo(todoId);
        if(!todo.id) return notFound()
    return (
        <div className='p-10 bg-yellow-200 border-2 m-2 shadow-lg'>
            <p>
                #{todo.id}:{todo.title}
            </p>
            <p>completed:{
                todo.completed?'Yes':'No'
                }</p>
            <p className='border-t border-black mt-5 text-right'>
                By User:{todo.userId}
            </p>
        </div>
    )
}
export default TodoPage

export async function generateStaticParams(){
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/")
    const todos= await res.json();
    const ycc=todos.splice(0,10)
    return ycc.map((todo)=>({
        todoId:todo.id.toString(),
    }))
}             