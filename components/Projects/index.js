import projetos from '../../projects.json'

export function Projects() {

	return (

		<section id="projects" className="w-full md:w-3/5 mx-auto my-10 flex flex-wrap justify-center md:justify-between">
			{projetos.map(projeto => (

				<div key={projeto.id} className="w-full md:w-1/2 lg:w-1/3 py-2 ">
					<div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg mx-5 h-full ">

						<img className="rounded-t-lg" src={projeto.img} alt="" />

						<div className="py-6 px-8 rounded-lg bg-white ">
							<h1 className="text-indigo-700 font-bold text-2xl mb-3  ">{projeto.name}</h1>

							<p style={{ minHeight: '200px' }} className="text-indigo-700 tracking-wide text-sm mb-12">{projeto.description}</p>

							<div className="absolute bottom-5 right-5">
								<a target="_blank" href={projeto.url} className="mt-6 py-2 px-4 bg-indigo-700 hover:bg-indigo-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">see website</a>

							</div>
						</div>
					</div>
				</div>
			))}

		</section>
	)
}