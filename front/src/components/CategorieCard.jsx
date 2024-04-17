import { Link } from 'react-router-dom'

export default function CategorieCard({title, desc, direction}) {
  return (
    <div className='border border-black bg-white w-3/4 pb-5 mx-auto mb-10'>
        <p className='font-bold text-center text-lg mt-2'>{title}</p>
        <p className='ml-2 my-5'>{desc}</p>
        <Link to={direction} className='ml-2 bg-blue-200 p-2 rounded-md border border-black text-center hover:bg-blue-300'>Voir le projet</Link>
    </div>
  )
}
