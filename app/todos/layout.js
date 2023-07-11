import TodoList from './TodoList'
export default function RootLayout({
    children,
  }) {
    return (
    <main className='flex'>
        <div>
            <TodoList/>
        </div>
        <div className='flex-1'>{children} </div>
    </main>
    )
  }