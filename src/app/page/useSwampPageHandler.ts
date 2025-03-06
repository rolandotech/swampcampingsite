'use client';
import { useCallback, useEffect, useRef } from 'react';
import { CameraControls } from '@react-three/drei';
import * as THREE from 'three';
import { useSwampStore } from '../core/store';
import { degToRad } from 'three/src/math/MathUtils.js';

export default function useSwampPageHandler() {
    const camControls = useRef<CameraControls | null>(null);
    const meshFitCameraHome = useRef<THREE.Mesh | null>(null);
    const meshFitCameraStore = useRef<THREE.Mesh | null>(null);
    const textRef = useRef<THREE.Mesh | null>(null);
    const campRef = useRef<THREE.Mesh | null>(null);
    const { page, setPage } = useSwampStore();

    const fitCamera = useCallback(() => {
        if (page === 'intro') {
            if (
                meshFitCameraStore.current &&
                camControls.current
            ) {
                camControls.current.smoothTime = 0.8;
                camControls.current.fitToBox(meshFitCameraStore.current, true);
            }
        } else {
            if (
                camControls.current &&
                meshFitCameraHome.current &&
                textRef.current &&
                campRef.current
            ) {
                camControls.current.smoothTime = 0.8;
                camControls.current.fitToBox(meshFitCameraHome.current, true);
                camControls.current.rotate(-Math.PI / 4, 0, true);
                camControls.current.dolly(2)
                textRef.current.visible = false;
                campRef.current.rotation.x = degToRad(0);
                campRef.current.rotation.y = degToRad(20);
            }
        }
    },[meshFitCameraStore, camControls, campRef, textRef, page]);

    const backBtnHandler = () => {
        if (
            camControls.current &&
            meshFitCameraHome.current &&
            textRef.current &&
            campRef.current
        ) {
            textRef.current.visible = true;
            campRef.current.rotation.x = degToRad(20);
            campRef.current.rotation.y = degToRad(10);
            camControls.current.dolly(0, true);
            setPage('intro')
        }
        
    }

    useEffect(() => {
        fitCamera();
        window.addEventListener('resize', fitCamera);
        return () => window.removeEventListener('resize', fitCamera);
    }, [page, fitCamera]);

  return {
    data: {
        camControls,
        meshFitCameraHome,
        meshFitCameraStore,
        textRef,
        campRef,
        page
    },
    handler: {
        backBtnHandler,
    }
  }
}
