import React from 'react';

interface InputProps {
	labelText?: string;
	type: string;
	name: string;
	value?: string;
	className?: string;
	required?: boolean;
	onChange: (event) => void;
}

const Input = ({
	labelText,
	type,
	name,
	value,
	className,
	required,
	onChange,
}: InputProps) => {
	return (
		<div>
			<input
				type={type}
				name={name}
				value={value}
				className={className}
				onChange={onChange}
				required
			/>
			{labelText && <label>{labelText}</label>}
		</div>
	);
};

export default Input;
