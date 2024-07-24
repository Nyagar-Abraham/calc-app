import { CalcProvider } from '../context/calcContext';
import Body from './Body';
import Display from './Display';

function App() {
	return (
		<main className="w-11/12 sm:max-w-[450px] mx-auto mt-[40px]  ">
			<h1 className="font-semibold text-xl mb-2">calc</h1>
			<CalcProvider>
				<Display />
				<Body />
			</CalcProvider>
		</main>
	);
}

export default App;
