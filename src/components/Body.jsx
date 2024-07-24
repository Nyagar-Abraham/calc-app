import Button from './Button';

const Body = () => {
	return (
		<div className="py-5 px-3 rounded-md  mt-8  grid grid-cols-4 gap-x-2 gap-y-3 bg-slate-900">
			<Button>7</Button>
			<Button>8</Button>
			<Button>9</Button>
			<Button color="sky">Del</Button>
			<Button>4</Button>
			<Button>5</Button>
			<Button>6</Button>
			<Button>+</Button>
			<Button>1</Button>
			<Button>2</Button>
			<Button>3</Button>
			<Button>-</Button>
			<Button>.</Button>
			<Button>0</Button>
			<Button>/</Button>
			<Button>*</Button>
			<Button color="sky" span="two">
				Reset
			</Button>
			<Button color="rose" span="two">
				=
			</Button>
		</div>
	);
};

export default Body;
