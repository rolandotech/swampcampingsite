/** @format */
'use client';
import { Canvas } from '@react-three/fiber';
import SwampPage from './page/SwampPage';
import ButtonComponent from './components/ButtonComponent';
import { useSwampStore } from './core/store';

export default function Home() {
	const { page } = useSwampStore();
	return (
		<div className='mainContainer relative'>
			<Canvas
				shadows
				camera={{ position: [0, 0, 20], fov: 30 }}>
				<color
					attach='background'
					args={['#171720']}
				/>
				<fog
					attach={'fog'}
					args={['#171720', 8, 20]}
				/>
				<SwampPage />
			</Canvas>
			{page === 'intro' && <ButtonComponent />}
		</div>
	);
}
