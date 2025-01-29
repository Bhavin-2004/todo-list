import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const TodoTasks = ({text, id, is_Completed, deleteTask, toggle}) => {
  return (
    <div className="flex items-center my-3 gap-2">
        <div onClick={() => {toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img className='w-7' src={is_Completed ? tick : not_tick} alt="tick-icon" />
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${is_Completed ? "line-through" : ""}`}>{text}</p>
        </div>

        <img onClick={() => {deleteTask(id)}} className='w-3.5 cursor-pointer' src={delete_icon} alt="delete-icon" />

    </div>
  )
}

export default TodoTasks