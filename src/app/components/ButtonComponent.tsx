/** @format */
'use client';

import React from 'react';
import { useSwampStore } from '../core/store';

export default function ButtonComponent({ text = 'Enter' }: { text?: string }) {
	const { setPage } = useSwampStore();

	return (
		<div className='absolute flex direction-row justify-center items-center bottom-8 w-screen'>
			<button
				onClick={() => {
					setPage('home');
				}}
				className='no-underline uppercase text-center text-white cursor-pointer'>
				{text}
			</button>
		</div>
	);
}
