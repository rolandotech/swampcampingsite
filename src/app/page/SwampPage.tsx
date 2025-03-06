/** @format */
'use client';

import { CameraControls, Environment, Text3D } from '@react-three/drei';
import { Swamp } from '../components/Swamp';
import { degToRad } from 'three/src/math/MathUtils.js';
import useSwampPageHandler from './useSwampPageHandler';

function SwampPage() {
	const { data, handler } = useSwampPageHandler();
	const {
		camControls,
		meshFitCameraHome,
		meshFitCameraStore,
		textRef,
		campRef,
	} = data;
	const { backBtnHandler } = handler;

	return (
		<>
			<CameraControls
				ref={camControls}
				enabled={true}
				azimuthRotateSpeed={0}
				polarRotateSpeed={0}
				truckSpeed={0}
				dollySpeed={1}
			/>
			<mesh
				ref={meshFitCameraStore}
				position-z={2}
				visible={false}>
				<boxGeometry args={[7.5, 2, 2]} />
				<meshBasicMaterial
					color='orange'
					transparent
					opacity={0.5}
				/>
			</mesh>
			<Text3D
				ref={textRef}
				font='fonts/Poppins/Poppins_Black_Regular.json'
				position-x={-1.2}
				position-y={0.1}
				position-z={7.5}
				rotation-y={degToRad(30)}
				rotation-x={degToRad(9)}
				scale={0.2}
				lineHeight={0.6}>
				SWAMP{'\n'}CAMPING
				<meshBasicMaterial
					color={'white'}
					reflectivity={1}
					shadowSide={1}
					opacity={1}
				/>
			</Text3D>
			<group
				ref={campRef}
				rotation-y={degToRad(10)}
				rotation-x={degToRad(20)}
				position-x={3}>
				<Swamp backBtnHandler={backBtnHandler} />
				<mesh
					ref={meshFitCameraHome}
					position-z={0.6}
					position-x={0.1}
					position-y={0.5}
					rotation-y={0.2}
					visible={false}>
					<boxGeometry args={[0.8, 1, 2]} />
					<meshBasicMaterial
						color='red'
						transparent
						opacity={0.5}
					/>
				</mesh>
			</group>
			<Environment preset='sunset' />
		</>
	);
}

export default SwampPage;
