/** @format */
'use client';

import { Html } from '@react-three/drei';
import React from 'react';

export default function OverLay(props: any) {
	return (
		<Html
			transform
			distanceFactor={1.2}
			center
			{...props}>
			<div
				className='w-md h-50 p-4 rounded-md transition delay-6000'
				style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
				<p className='text-black'>
					Hi!
					<br />
					<br />
					Thank you for visiting my first 3d sample website!
					<br />
					If your interested to work with me? Please click my portfolio link:
					<a
						className='mx-1 underline'
						href='https://jayindex.vercel.app'
						target='_blank'>
						https://jayindex.vercel.app
					</a>
				</p>
			</div>
		</Html>
	);
}
