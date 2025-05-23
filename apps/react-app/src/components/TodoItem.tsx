import type { Todo } from '../App';

interface Props {
  readonly todo: Todo;
  readonly onToggle: (id: number) => void;
  readonly onDelete: (id: number) => void;
  readonly onEdit: (id: number, text: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: Props) {
  return (
    <li className='flex items-center h-10 px-4 bg-white border-b border-gray-100 last:border-b-0 mt-2'>
      <input
        type="checkbox"
        className='w-5 h-5 mr-3 custom-checkbox'
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span className={`flex-grow text-center ${todo.completed ? 'line-through text-gray-400' : 'text-sky-900'}`}>
        {todo.text}
      </span>
      <button
        className='text-gray-400 hover:text-blue-500 px-1.5 mr-7 hover:cursor-pointer'
        onClick={() => {
          const newText = prompt("Edit todo:", todo.text);
          if (newText !== null) {
            onEdit(todo.id, newText);
          }
        }}
      >
        ✏️
      </button>
      <button className='text-gray-400 hover:text-red-500 px-1.5 hover:cursor-pointer' onClick={() => onDelete(todo.id)}>❌</button>
    </li>
  );
}
