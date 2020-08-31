import { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { GeometryUtils } from 'three/examples/jsm/utils/GeometryUtils'
import { Vector3 } from 'three'
import { OrbitControls, StandardEffects, Box, Line } from 'drei'
import styles from './styles.module.scss'

// const MyBox = (props) => {
//   const mesh = useRef()

//   const [hovered, setHover] = useState(false)
//   const [active, setActive] = useState(false)

//   useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

//   return (
//     <Box
//       args={[1, 1, 1]}
//       {...props}
//       ref={mesh}
//       scale={active ? [6, 6, 6] : [5, 5, 5]}
//       onClick={() => setActive(!active)}
//       onPointerOver={() => setHover(true)}
//       onPointerOut={() => setHover(false)}
//     >
//       <meshStandardMaterial
//         attach="material"
//         color={hovered ? '#2b6c76' : '#720b23'}
//       />
//     </Box>
//   )
// }

const Background = () => {
  const points = GeometryUtils.hilbert3D(new Vector3(0), 5).map(p => [p.x, p.y, p.z])
  // const points = GeometryUtils.hilbert3D(new Vector3(0), 5)
  const colors = new Array(points.length).fill().map(() => [Math.random(), Math.random(), Math.random()])

  return (
    <div className={styles.background}>
      <Canvas invalidateFrameloop camera={{ position: [0, 0, 17], far: 50 }}>
        <ambientLight intensity={2} />
        <pointLight position={[40, 40, 40]} />
        <Line points={points} color="red" position={[5, 0, 0]} />
        {/* <Line points={points} color="white" vertexColors={colors} linewidth={5} position={[-5, 0, 0]} /> */}
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default Background