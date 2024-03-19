import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			{/* NAVIGATION BAR+ */}
			<nav className='relative containe mx-auto p-8'>
				<div className='flex items-center justify-between'>
					<img src='src/img/logo.svg'></img>
					<div className='hidden md:flex space-x-8 text-xl  text-navyBlue'>
						<a href='#' className='hover:text-lightblue'>
							Page 1
						</a>
						<a href='#' className='hover:text-lightblue'>
							Page 2
						</a>
						<a href='#' className='hover:text-lightblue'>
							Page 3
						</a>
						<a href='#' className='hover:text-lightblue'>
							Page 4
						</a>
					</div>
					<button class='hidden md:block bg-lightblue hover:bg-navyBlue text-white font-bold py-2 px-4 rounded-md'>
						CLICKKK
					</button>
				</div>
			</nav>
		</>
	);
}

export default App;
