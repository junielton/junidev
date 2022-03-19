import Head from 'next/head'
import { Projects } from '../components/Projects'
const brand = "<juniSantos/>"


export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2
		 text-white bg-gray-700">
			<Head>
				<meta name="description"
					content="My personal webpage, introducing myself and promoting a little of what I do in the world of web development, website creation, systems, and programming in general.">
				</meta>
				<title>juniDev - Yep another developer page</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className="flex w-full md:w-3/5 flex-wrap justify-center md:justify-between items-center my-2">
				<span className="text-2xl font-black">
					{brand}
				</span>
				<nav className="my-2">
					<a className="py-2 px-4 mx-3" href="#about">
						About
					</a>
					<a className="py-2 px-4 mx-3" href="#projects">
						Projects
					</a>
					<a className="py-2 px-4 mx-3" href="#contact">
						Contact
					</a>
				</nav>
			</header>

			<main className="container flex flex-col flex-1 px-4 text-center md:text-left my-10 ">

			</main>


			<footer className="flex items-center justify-center w-full h-24">
				<h2 id="contact" className="text-center text-2xl font-black mt-5">
					That's all for now :)
				</h2>
			</footer>
		</div>
	)
}
