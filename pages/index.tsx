import React, { useState } from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContextProvider';

export default function Home() {
	const { theme } = useTheme()

	return (
		<>
			<Header />
			<div className="flex flex-col items-center justify-center min-h-screen py-2" style={theme}>

				<main className="container flex flex-col flex-1 px-4 text-center md:text-left my-10 ">

					<section id="about" className="flex flex-wrap justify-between items-center mx-auto">
						<div className="w-full md:w-1/2">
							<h1 className="text-2xl lg:text-4xl font-black mb-5">Hi there! My name is Junielton Quirino and I'm a full stack web developer from Brazil.</h1>
							<h2 className="text-1xl mb-5">
								Currently I work with PHP and JavaScript, in some projects using Laravel, WordPress, react, nextJs and node.
							</h2>

							<h2 id="contact" className=" text-2xl font-medium mt-5">
								You can find me on
							</h2>

							<div className="flex items-center justify-center md:justify-start w-full ">
								<section className="flex flex-wrap justify-center">
									<a rel="noopener" target="_blank" className="m-2" href="https://github.com/junielton">
										<FiGithub className='w-7 h-7' />
									</a>
									<a rel="noopener" target="_blank" className="m-2" href="https://www.linkedin.com/in/junielton/">
										<FiLinkedin className='w-7 h-7' />
									</a>
									<a rel="noopener" target="_blank" className="m-2" href="https://twitter.com/NielQS">
										<FiTwitter className='w-7 h-7' />
									</a>
									<a rel="noopener" target="_blank" className="m-2" href="https://www.instagram.com/nielqs/">
										<FiInstagram className='w-7 h-7' />
									</a>
								</section>
							</div>
						</div>

						<div className="w-full mx-auto md:w-1/2">
							<img width="574px" height="574px" className="w-full" src="img/developer.svg" alt="developer" />
						</div>
					</section>
				</main>

			</div>
			<Footer />
		</>
	)
}
