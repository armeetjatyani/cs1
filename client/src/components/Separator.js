export const Separator = ({ type }) => {
	return type == "y" ? <p>horiz separator</p> : <hr className="border-neutral-300 dark:border-neutral-700" />;
};
