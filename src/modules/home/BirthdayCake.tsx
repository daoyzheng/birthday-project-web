import { useEffect, useState } from "react"
import { ACESFilmicToneMapping, AmbientLight, Box3, PerspectiveCamera, PointLight, Scene, sRGBEncoding, Vector3, WebGLRenderer } from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
const BirthdayCake = () => {
  const [isGrabbing, setIsGrabbing] = useState<boolean>(false)
  useEffect(() => {
    const container = document.getElementById("birthday-cake")
    if (container) {
      const scene = new Scene()
      const camera = new PerspectiveCamera( 75, container.clientWidth / container.clientHeight, 0.1, 1000 )
      const renderer = new WebGLRenderer({ 
        antialias: true,
        alpha: true 
      })

      renderer.setSize( container.clientWidth, container.clientHeight )
      container.appendChild(renderer.domElement)
      renderer.setPixelRatio(window.devicePixelRatio)

      const loader = new GLTFLoader()
      loader.load(
        '/cake.glb',
        gltf => {
          const boundingBox = new Box3().setFromObject(gltf.scene)
          const center = boundingBox.getCenter(new Vector3())
          gltf.scene.position.sub(center)
          const obj = gltf.scene 
          obj.name = 'birthday cake'
          obj.receiveShadow = true
          obj.castShadow = true
          scene.add(obj)
        },
        undefined
      )

      const ambientLight = new AmbientLight()
      scene.add(ambientLight)
      const pointLight = new PointLight()
      pointLight.position.set(10, 10, 10)
      scene.add(pointLight)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.update()

      renderer.toneMapping = ACESFilmicToneMapping
      renderer.outputEncoding = sRGBEncoding

      camera.position.z = 3
      camera.position.y = 1
      function animate () {
        requestAnimationFrame(animate)
        controls.update()
        renderer.render(scene, camera)
      }
      animate()
      return () => {
        if (container) {
          container.removeChild(renderer.domElement)
        }
        renderer.dispose()
      }
    }
  }, [])
  return (
    <div className="lg:w-1/3 w-full h-5/6 flex justify-center">
      <div 
        id="birthday-cake" 
        className={`w-full h-full ${isGrabbing ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseDown={() => setIsGrabbing(true)}
        onMouseUp={() => setIsGrabbing(false)}
      />
    </div>
  )
}

export default BirthdayCake