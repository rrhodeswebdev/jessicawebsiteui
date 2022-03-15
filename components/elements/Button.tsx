import React from 'react';
import Link from 'next/link';

interface Props {
	children: React.ReactNode;
	href: string;
	outlineVariant?: boolean;
	external?: boolean;
}

const Button: React.FC<Props> = ({
	children,
	href,
	outlineVariant,
	external,
}) => {
	return (
		<>
			{external ? (
				<a
					target="_blank"
					href={href}
					rel="noreferrer"
					className={`p-4 mb-8 md:mb-0 w-full ${
						outlineVariant
							? 'text-accent border border-accent hover:bg-accent hover:text-white'
							: 'text-white bg-primary hover:bg-accent md:w-52 mx-8'
					} transition-colors text-center uppercase font-light`}
				>
					{children}
				</a>
			) : (
				<Link href={href}>
					<a
						className={`p-4 mb-8 md:mb-0 w-full ${
							outlineVariant
								? 'text-accent border border-accent hover:bg-accent hover:text-white'
								: 'text-white bg-primary hover:bg-accent md:w-52 mx-8'
						} transition-colors text-center uppercase font-light`}
					>
						{children}
					</a>
				</Link>
			)}
		</>
	);
};

export default Button;
