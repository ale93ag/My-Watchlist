/*function Card(props){
    const title = props.title
    const description = props.description\u2705
    const imgUrl = props.imgUrl
Posso usare o il metodo sopra o quello sotto, non cambia niente
*/
// Card component
import React, { useState } from 'react';

function Card({ title, imgUrl, description, isVisited, onDelete }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='relative w-52 h-56 rounded-3xl p-2 mb-10'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imgUrl} alt={title} />
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 flex flex-col bg-gray-800 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: '#ffffff' }}
      >
        <h2 className='text-red-700 font-bold text-2xl'>{title}</h2>
        <p className='text-white overflow-auto max-h-36'>{description}</p>
        {isVisited && <span>✅ Vista </span>}
        {!isVisited && <span>❌ Non vista</span>}
      </div>

      <button
        onClick={onDelete}
        className='absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full'
      >
        x
      </button>
    </div>
  );
}

export default Card;



  
  
//c'è la possibilità di usare la props description anziche i children, dipende da come voglio fare
/*
Vanno bene entrambi i modi di rendering
function Card({title, imgUrl, description, children, isVisited}) {
    return(
        <div className="w-52 h-56 rounded-3xl p-2 ">
            <img src={imgUrl}
            alt=""/>
            <div className="flex flex-col bg-gray-800">
                <h2 className="text-red-700 font-bold text-2xl">{title}</h2>
                <p className="text-white"> {children}</p>
            </div>
           Ternary operetor {isVisited ? <span>✅ Vista </span> : <span>❌ NOn vista</span>}
        </div>
    )
};
*/ 