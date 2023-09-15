export const IconButton = ({ children, onClick }) => {
	return (
		<button
			className="p-1 duration-200 rounded-sm hover bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 active:translate-y-[2px]"
			onClick={onClick}
		>
			{children}
		</button>
	);
};
