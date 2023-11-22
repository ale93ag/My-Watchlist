function AddCardSeries({ onSubmit, newSerie, handleInputChange }) {
    return (
      <form onSubmit={onSubmit} className='bg-zinc-900 p-3 rounded-2xl mt-20'>
        <div className='mb-3'>
          <label htmlFor='title' className='block text-sm font-medium text-gray-700'>
            Title
          </label>
          <input
            type='text'
            name='title'
            id='title'
            placeholder='Title'
            value={newSerie.title}
            onChange={handleInputChange}
            className='mt-1 p-2 border rounded-md w-full'
          />
        </div>
  
        <div className='mb-3'>
          <label htmlFor='imgUrl' className='block text-sm font-medium text-gray-700'>
            Image URL
          </label>
          <input
            type='text'
            name='imgUrl'
            placeholder='Image URL'
            value={newSerie.imgUrl}
            onChange={handleInputChange}
            className='mt-1 p-2 border rounded-md w-full'
          />
        </div>
  
        <div className='mb-3'>
          <label htmlFor='description' className='block text-sm font-medium text-gray-700'>
            Description
          </label>
          <input
            type='textarea'
            name='description'
            placeholder='Description'
            value={newSerie.description}
            onChange={handleInputChange}
            className='mt-1 p-2 border rounded-md w-full'
          />
        </div>
  
        <div className='mb-3'>
          <label htmlFor='isVisited' className='block text-sm font-medium text-gray-700'>
            Watched
          </label>
          <input type='checkbox' name='isVisited' checked={newSerie.isVisited} onChange={handleInputChange} />
        </div>
  
        <button className='bg-zinc-950' type='submit'>
          Aggiungi
        </button>
      </form>
    );
  }
  export default AddCardSeries