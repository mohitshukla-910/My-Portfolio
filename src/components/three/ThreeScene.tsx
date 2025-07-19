'use client'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'

interface ThreeSceneProps {
  className?: string
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ className }) => {
  return (
    <div className={className}>
      <Suspense fallback={<div className="w-full h-full bg-[#0a192f]" />}>
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
              color="#4fc3dc"
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
        </Canvas>
      </Suspense>
    </div>
  )
}

export default ThreeScene 