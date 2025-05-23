import type { Todo } from '../App';
import TodoItem from './TodoItem';

interface Props {
  readonly todos: Todo[];
  readonly onToggle: (id: number) => void;
  readonly onDelete: (id: number) => void;
  readonly onEdit: (id: number, text: string) => void;
}

export default function TodoList({ todos, onToggle, onDelete, onEdit }: Props) {
  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className='bg-white rounded-md shadow-sm w-150'>
      <ul className='w-150 align-center p-4'>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </ul>
      {/* {todos.length > 0 && ( */}
        <div className='flex justify-between items-center px-3 py-1.5 bg-gray-50 text-sm text-gray-600 rounded-b-md mt-2 h-auto'>

        {/* Progress-filled task text */}
        <div className="relative w-fit border border-gray-300 rounded-md overflow-hidden text-xs">
          {/* Background fill */}
          <div 
            className="absolute top-0 left-0 h-10 bg-green-500 z-0 transition-all duration-300" 
            style={{ width: `${(completedCount / todos.length) * 100 || 0}%` }}
          />
          {/* Text content (foreground) */}
          <span className="relative z-10 px-2 py-1 whitespace-nowrap text-center h-10 flex items-center justify-center text-gray-600">
            {completedCount} of {todos.length} tasks done
          </span>
        </div>
      
        {/* Remove checked button */}
        <button 
          className='text-white hover:text-gray-300 border border-sky-900 hover:border-sky-950 h-10 px-3 rounded-md bg-sky-900 hover:bg-sky-950
          hover:cursor-pointer'
          onClick={() => todos.filter(t => t.completed).forEach(t => onDelete(t.id))}
        >
          Remove checked
        </button>
      </div>
      
      {/* )} */}
    </div>
  );
}
