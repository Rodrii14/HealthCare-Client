import React from 'react';
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import CardsSuggest from './CardsSuggest';

const Suggestion = ({ videoArray, _link, _setLink, _Page }) => {

  const suggestions = videoArray.map((v) => {
    return (
      <CardsSuggest key={v._id} video={v} setLink={_setLink} />
    );
  });

  return (
    <div className='flex flex-col items-center w-full h-auto p-8'>
      <div className='p-8 flex flex-row justify-center items-center gap-8'>
        <FiChevronLeft color='white' size={46} className='hover:scale-[1.5] duration-300 ease-in-out transition-all' onClick={
          () => _Page(1)
        } />
        <h1 className='text-3xl font-poppins font-bold text-white'>Rutinas Sugeridas </h1>
        <FiChevronRight color='white' size={46} className='hover:scale-[1.5] duration-300 ease-in-out transition-all' onClick={
          () => _Page(2)
        } />
      </div>
      <div className='flex-grow'>
        <section className='w-full flex flex-row flex-wrap gap-8 justify-center items-center'>
          {suggestions};
        </section>
      </div>
    </div>
  );
};

export default Suggestion;
