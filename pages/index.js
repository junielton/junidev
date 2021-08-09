import Head from 'next/head'
import { Projects } from '../components/Swiper/Projects'
const brand = "<juniDev/>"


export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2 text-indigo-700">
			<Head>
				<meta name="description"
					content="This is an example of a meta description.
        			This will often show up in search results.">
				</meta>
				<title>Create Next App</title>
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

			<main className="flex flex-col flex-1 px-4 text-center md:text-left my-10 ">

				<section id="about" className="flex flex-wrap justify-between items-center w-full md:w-3/5 mx-auto">
					<div className="w-full md:w-1/2">
						<h1 className="text-2xl font-black mb-5">Hi there! My name is Junielton Quirino and i'm a full stack web developer from Brazil.</h1>
						<h2 className="text-1xl mb-5">Currently i work with PHP and JavaScript, in some projects using Laravel, WordPress, react, nextJs and node.</h2>
						<p className="text-sm font-bold">Below you can see some of the projects i've worked on.</p>
					</div>
					<div className="w-full mx-auto md:w-1/2">
						<img className="w-full" src="img/juni-dev.gif" alt="developer" />
					</div>
				</section>

				<h2 className="text-center text-2xl font-black mt-5">
					Here are some projects i've worked on.
				</h2>

				<Projects />
			</main>

			<h2 id="contact" className="text-center text-2xl font-black mt-5">
				You can find me on
			</h2>

			<footer className="flex items-center justify-center w-full h-24">

				<section className="flex flex-wrap justify-center">
					<a className="m-2" href="https://github.com/junielton">
						<img src="img/github.svg" alt="Github" />
					</a>
					<a className="m-2" href="https://www.linkedin.com/in/junielton/">
						<img src="img/linkedin.svg" alt="linkedIn" />
					</a>
					<a className="m-2" href="https://twitter.com/NielQS">
						<img src="img/twitter.svg" alt="Twitter" />
					</a>
					<a className="m-2" href="https://www.instagram.com/nielqs/">
						<img src="img/instagram.svg" alt="Instagram" />
					</a>
				</section>
			</footer>
		</div>
	)
}
