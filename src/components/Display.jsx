import { useCalc } from '../context/calcContext';

const Display = () => {
	const { value, dispatch } = useCalc();

	return (
		<div>
			<input
				type="text"
				className=" px-4 py-7 rounded-md  bg-slate-900 text-slate-100 font-semibold w-full focus:outline-none  caret-zinc-200"
				value={value}
				onChange={(e) => {
					dispatch({
						type: 'type',
						payload: e.target.value.charAt(e.target.value.length - 1),
					});
				}}
			/>
		</div>
	);
};

export default Display;
