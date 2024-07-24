import { useCalc } from '../context/calcContext';

/* eslint-disable react/prop-types */
const Button = ({ children, span, color }) => {
	const { dispatch } = useCalc();
	return (
		<button
			onClick={() => {
				if (children === 'Del') {
					dispatch({ type: 'delete' });
					return;
				}
				if (children === 'Reset') {
					dispatch({ type: 'reset' });
					return;
				}
				if (children === '=') {
					dispatch({ type: 'eval' });
					return;
				}
				dispatch({ type: 'type', payload: children });
			}}
			className={`px-3 font-semibold py-1 rounded-md bg-zinc-200 hover:bg-zinc-100 text-zinc-900 ${
				span === 'two' && 'col-span-2'
			}
        ${color === 'sky' && 'bg-sky-600 hover:!bg-sky-500 text-sky-50'}
        ${color === 'rose' && 'bg-rose-600 hover:!bg-rose-500 text-rose-50'}

      `}
		>
			{children}
		</button>
	);
};

export default Button;
