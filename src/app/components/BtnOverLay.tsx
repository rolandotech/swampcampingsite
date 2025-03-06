/** @format */
'use client';

import { Html } from '@react-three/drei';
import React from 'react';

export default function BtnOverLay(props: { text: string } & any) {
	const { text = 'Back', onClick } = props;
	return (
		<Html
			transform
			distanceFactor={1.2}
			center
			{...props}>
			<button
				className='text-white'
				onClick={onClick}>
				{text}
			</button>
		</Html>
	);
}
