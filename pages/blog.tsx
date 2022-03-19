import React from "react";
import { useTheme } from '../context/ThemeContextProvider';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Blog() {
	const { theme } = useTheme()
	return (
		<>
			<Header />
			<div className="flex flex-col items-center justify-center py-2" style={theme}>
				<section className="body-font overflow-hidden">
					<div className="container px-5 py-24 mx-auto">
						<div className="-my-8">
							<div className="py-8 flex flex-wrap md:flex-nowrap">
								<div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
									<span className="font-semibold title-font">CATEGORY</span>
									<span className="mt-1  text-sm">12 Jun 2019</span>
								</div>
								<div className="md:flex-grow">
									<h2 className="text-2xl font-medium  title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
									<p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
									<a className="text-indigo-500 inline-flex items-center mt-4">Learn More
										<svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
											<path d="M5 12h14"></path>
											<path d="M12 5l7 7-7 7"></path>
										</svg>
									</a>
								</div>
							</div>

							<div className="py-8 flex flex-wrap md:flex-nowrap">

								<div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
									<span className="font-semibold title-font">CATEGORY</span>
									<span className="mt-1  text-sm">12 Jun 2019</span>
								</div>
								<div className="md:flex-grow">
									<h2 className="text-2xl font-medium  title-font mb-2">Meditation bushwick direct trade taxidermy shaman</h2>
									<p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
									<a className="text-indigo-500 inline-flex items-center mt-4">Learn More
										<svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
											<path d="M5 12h14"></path>
											<path d="M12 5l7 7-7 7"></path>
										</svg>
									</a>
								</div>
							</div>
							<div className="py-8 flex flex-wrap md:flex-nowrap">
								<div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
									<span className="font-semibold title-font">CATEGORY</span>
									<span className="text-sm ">12 Jun 2019</span>
								</div>
								<div className="md:flex-grow">
									<h2 className="text-2xl font-medium  title-font mb-2">Woke master cleanse drinking vinegar salvia</h2>
									<p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
									<a className="text-indigo-500 inline-flex items-center mt-4">Learn More
										<svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
											<path d="M5 12h14"></path>
											<path d="M12 5l7 7-7 7"></path>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</>
	)
}