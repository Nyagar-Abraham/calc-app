/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from 'react';

const CalcContext = createContext();

const initialState = {
	value: '',
	submitted: false,
};

function isValidMathExpression(expression) {
	// Regex to check if the expression contains only valid characters
	const validChars = /^[0-9+\-*/().\s]+$/;
	// Regex to check for invalid sequences like consecutive operators
	const invalidSequences = /[+\-*/]{2,}|[+\-*/]$|^[+\-*/]/;

	return validChars.test(expression) && !invalidSequences.test(expression);
}

function checkExpression(expression) {
	// Remove any leading zeros from numbers to avoid octal literal interpretation
	const sanitizedExpression = expression.replace(/\b0+(\d)/g, '$1');
	console.log(sanitizedExpression);

	if (!isValidMathExpression(sanitizedExpression)) {
		return { success: false, error: 'Invalid mathematical expression' };
	}

	try {
		// Try to evaluate the expression
		const result = eval(sanitizedExpression);
		return { success: true, result: result, error: null };
	} catch (error) {
		// Return the error if it occurs
		return { success: false, error: error.message };
	}
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case 'type':
			if (state.submitted) {
				return { ...state, value: action.payload, submitted: false };
			}
			return { ...state, value: state.value + action.payload };
		case 'delete':
			if (state.submitted) {
				return { ...initialState };
			}
			return { ...state, value: state.value.slice(0, -1) };
		case 'eval':
			const { success, error } = checkExpression(state.value);
			const sanitizedExpression = state.value.replace(/\b0+(\d)/g, '$1');
			if (!success) {
				return { ...state, value: error, submitted: true };
			}

			return { ...state, value: eval(sanitizedExpression), submitted: true };
		case 'reset':
			return { ...initialState };
		default:
			return { ...state };
	}
}

export function CalcProvider({ children }) {
	const [{ error, value }, dispatch] = useReducer(reducer, initialState);

	return (
		<CalcContext.Provider
			value={{
				error,
				value,
				dispatch,
			}}
		>
			{children}
		</CalcContext.Provider>
	);
}

export function useCalc() {
	const context = useContext(CalcContext);

	if (context === undefined) throw new Error('context out of scope');

	return context;
}
