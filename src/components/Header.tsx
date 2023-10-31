import Link from 'next/link'
import React from 'react'

const Header = () => {
	return (
		<header className='bg-gray-900 text-white py-6 flex gap-x-6 justify-center '>
			<Link className='hover:underline' href='/'>Home</Link>
			<Link className='hover:underline' href={'/blog'}>Blog</Link>
			<Link className='hover:underline' href={'/about'}>About</Link>
		</header>
	)
}

export { Header }
