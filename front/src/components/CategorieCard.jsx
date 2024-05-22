import { Link } from 'react-router-dom'

export default function CategorieCard({title, desc, imagesCard}) {
  return (
    <div className='border border-black bg-white w-3/4 pb-5 mx-auto mb-10 rounded-md shadow-md'>
        <p className='font-bold text-center mt-2'>{title}</p>
        <p className='ml-2 my-5'>{desc}</p>
        <div className=''>
          {imagesCard}
        </div>
    </div>
  )
}
