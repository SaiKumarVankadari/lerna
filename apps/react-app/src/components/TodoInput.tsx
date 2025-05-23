import React from 'react';

const TodoInput = ({ onAdd }: { onAdd: (text: string) => void }) => {
  const [input, setInput] = React.useState('');

  const handleAdd = () => {
    if (input.trim()) {
      onAdd(input);
      setInput('');
    }
  };

  return (
    <div className='flex items-center bg-white rounded-md mb-3 w-150 h-20'>
      <input
        type="text"
        placeholder="what needs to be done?"
        value={input}
        className='flex-grow h-[38px] px-3 outline-none rounded-l-md text-center'
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
      />
      <button
        className='bg-sky-900 text-white h-18 w-20 flex items-center justify-center rounded-md hover:bg-sky-950 mr-3 hover:cursor-pointer'
        onClick={handleAdd}>
        <span className='text-xl font-bold'>Add</span>
      </button>
    </div>
  );
};

export default TodoInput;
