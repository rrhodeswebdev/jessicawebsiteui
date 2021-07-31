import React from 'react';
import Link from 'next/link';

export default function Button({
	children,
	href,
	outlineVariant,
}: {
	children: React.ReactNode;
	href: string;
	outlineVariant?: boolean;
}) {
	return (
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
	);
}
