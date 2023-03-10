import React,{useState, useEffect} from 'react'
import Link from 'next/link'
import {getCategories} from '../Services'

const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
        .then((newCategories)=> setCategories(newCategories))
    } , [])

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mt-7 pb-4'>
        <h3 className='text-xl mb-6 font-semibold border-b pb-4'>
            Categories
        </h3>
        {categories.map((category)=>(
            <Link href={`/category/${category.slug}`} key={category.slug}>
                <span className='cursor-pointer block pb-3 mb-3'>
                    {category.name}
                </span>
            </Link>
        ))}
    </div>
  )
}

export default Categories