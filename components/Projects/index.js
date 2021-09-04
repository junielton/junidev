import projetos from '../../projects.json'

export function Projects() {

	return (

		<section id="projects" className="container mx-auto my-10 flex flex-wrap justify-center md:justify-between">

			{projetos.map(projeto => (
				<div key={projeto.id}
					className="w-full md:w-1/2 lg:w-1/3 py-2 ">

					<div className="relative shadow-sm hover:shadow-2xl	transition duration-500 mx-5 h-full">

						<img className="rounded-t-lg"
							src={projeto.img}
							alt={projeto.name} />

						<div className="py-6 px-8 rounded-b-lg bg-white ">
							<h1 className="text-gray-700 font-bold text-2xl mb-3">
								{projeto.name}
							</h1>

							<p style={{ minHeight: '200px' }}
								className="text-gray-700 tracking-wide text-sm mb-12">
								{projeto.description}
							</p>

							<div className="absolute bottom-5 right-5">
								<a target="_blank" href={projeto.url}
									className="mt-6 py-2 px-4 bg-gray-700 
									transition duration-300 
									hover:bg-gray-600 text-white font-bold rounded-lg shadow-xl">
									see website
								</a>

							</div>
						</div>
					</div>
				</div>
			))}

		</section>
	)
}