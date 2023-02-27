import { useEffect, useRef, useState } from "react"
import { Img, Page, ScrollDown, Title } from "./birthdayWish.styled"
import * as THREE from 'three'
import { ACESFilmicToneMapping, AmbientLight, AnimationMixer, PointLight, sRGBEncoding } from "three"
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

interface IWindowDimensions {
  width: number
  height: number
}

const BirthdayWish = () => {
  const [windowDimensions, setWindowDimensions] = useState<IWindowDimensions>(getWindowDiemensions())
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDiemensions())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  function getWindowDiemensions( ) {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height
    }
  }
  // useEffect(() => {
  //   const container = document.getElementById("birthday-cake")
  //   const clock = new THREE.Clock()
  //   if (container) {
  //     const scene = new THREE.Scene();
  //     const camera = new THREE.PerspectiveCamera( 75, container.clientWidth / container.clientHeight, 0.1, 1000 );
  //     const renderer = new THREE.WebGLRenderer({ 
  //       antialias: true,
  //       alpha: true 
  //     })


  //     renderer.setSize( container.clientWidth, container.clientHeight );
  //     container.appendChild(renderer.domElement)
  //     renderer.setPixelRatio(window.devicePixelRatio)

  //     const loader = new GLTFLoader()
  //     loader.load(
  //       '/src/assets/3d/test.glb',
  //       gltf => {
  //         const obj = gltf.scene 
  //         obj.name = 'birthday cake'
  //         obj.position.y = 0
  //         obj.position.x = 0
  //         obj.receiveShadow = false
  //         obj.castShadow = false
  //         scene.add(obj)
  //         // obj.traverse(function (child) {
  //         //   if(child.isMesh)
  //         // })
  //       },
  //       undefined
  //     )

  //     // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  //     // const material = new THREE.MeshStandardMaterial({ color: 'lime'});
  //     // const cube = new THREE.Mesh( geometry, material );
  //     // scene.add( cube );

  //     const ambientLight = new AmbientLight(0xcccccc, 1)
  //     // const ambientLight = new AmbientLight()
  //     scene.add(ambientLight)
  //     const pointLight = new PointLight()
  //     pointLight.position.set(10, 10, 10)
  //     scene.add(pointLight)

  //     renderer.toneMapping = ACESFilmicToneMapping
  //     renderer.outputEncoding = sRGBEncoding

  //     camera.position.z = 5;
  //     function animate () {
  //       requestAnimationFrame(animate)
  //       // model.rotation.y += 0.01 //eslint-disable-line
  //       // cube.rotation.x += 0.01;
  //       // cube.rotation.y += 0.01;
  //       renderer.render(scene, camera)
  //     }
  //     animate()
  //     return () => {
  //       if (container)
  //         container.removeChild(renderer.domElement)
  //       // renderer.forceContextLoss()
  //       renderer.dispose()
  //       // cube.geometry.dispose()
  //       // cube.material.dispose()
  //     }
  //   }
  // }, [])

  return (
    <Page className="min-h-screen flex items-center justify-center lg:h-screen">
      <div className="lg:grid lg:grid-cols-7 max-w-screen-2xl w-full bg-white/20 backgdrop-blur-lg shadow-md rounded h-3/4 mx-4 my-10">
        <div className="lg:col-span-4 bg-white/30 backdrop-blur-lg shadow-sm rounded-sm min-h-screen lg:min-h-full w-full">
          <Title 
            fontSize="40px"
            fontSizeLg="70px"
            className="text-center rounded-md text-red-500/40 pt-3"
          >Langlang's Birthday</Title>
          {/* <div>{windowDimensions.width}</div>
          <div>{windowDimensions.height}</div> */}
          {/* {550, 800} {380, 480}; {550, 800} {500, 750} */}
          <div className="relative lg:right-10">
            <Img
              className="absolute right-10 top-5 z-10 w-2/4 max-w-20"
              src="/src/assets/1.png"
            />
            <Img
              className="absolute right-8 top-5 w-2/4 max-w-20"
              src="/src/assets/splash2.png"
            />
          </div>
          <div className="relative top-36 lg:left-20 bg-red-300">
            <Img
              className="absolute left-0 top-0 z-10 w-2/3 max-w-24"
              src="/src/assets/2.png"
            />
            <Img
              className="absolute left-0 top-0 w-2/3 max-w-26"
              src="/src/assets/splash1.png"
            />
          </div>
          {/* <div id="birthday-cake" className="h-96 min-w-full"></div> */}
          {/* <div className="absolute top-20 -left-10">
            <Circle 
              borderRadius="42% 58% 45% 55% / 34% 35% 65% 66% "
              className="w-16 h-16 bg-red-600/20 relative top-0 left-10 shadow-lg"/>
            <Img 
              className="rotate-6 relative -top-14 left-10 -scale-x-100"
              src="/src/assets/bunny1.png" 
              width={60} 
              height={70}
            />
          </div>
          <div className="absolute top-8 left-10">
            <Img 
              className="relative left-2"
              src="/src/assets/sponge-bob.png" 
              width={70} 
              height={70}
            />
            <Circle 
              borderRadius="42% 58% 45% 55% / 67% 35% 65% 33% "
              className="w-10 h-10 bg-red-600/20 relative -top-8 left-6 shadow-lg"/>
          </div>
          <div className="absolute top-16 right-4">
            <Img 
              className="relative top-0 right-0 rotate-6"
              src="/src/assets/drink2.png" 
              width={70} 
              height={100} 
            />
            <Circle 
              borderRadius="68% 32% 65% 35% / 34% 35% 65% 66% "
              className="w-16 h-16 bg-red-600/20 absolute top-0 right-0 shadow-lg"/>
          </div>
          <div className="absolute bottom-0 left-2">
            <Img 
              className="relative rotate-12"
              src="/src/assets/bubble-tea.png" 
              width={100} 
              height={150}
            />
            <Circle 
              borderRadius="62% 38% 34% 66% / 39% 47% 53% 61% "
              className="w-20 h-20 bg-red-600/20 relative bottom-20 shadow-lg"/>
          </div>
          <Img 
            className="absolute bottom-10 right-2 rotate-12"
            src="/src/assets/bunny.png" 
            width={170} 
            height={170}
          /> */}
          <div className="absolute bottom-10 w-full lg:hidden">
            <div className="text-center animate-bounce">Scroll Down</div>
            <ScrollDown/>
          </div>
        </div>
        <div className="lg:col-span-3 flex flex-col items-center justify-center relative py-10 mx-4 lg:mx-2 min-h-screen lg:min-h-0">
          <div className="backdrop-blur-md bg-white/30 rounded shadow-sm lg:p-6 p-4 w-full lg:max-w-lg max-w-sm">
            <Title 
              fontSize="30px"
              fontSizeLg="50px"
              className="font-semibold mb-10 text-center text-red-500/40"
            >Write a birthday wish</Title>
            <div className="text-xl">
              <form>
                <input
                  className="focus:outline-none bg-white/20 rounded-md h-12 px-2 text-slate-500 w-full mb-4"
                  placeholder="Name"
                />
                <textarea 
                  rows={10}
                  placeholder="Happy birthday🎂🍰"
                  className="p-2 focus:outline-none bg-white/20 w-full max-h-36 min-h-36 rounded-lg resize-none text-slate-500"
                />
                <div className="flex justify-end w-full mt-4">
                  <button 
                    className="transition-colors	bg-rose-300/20 hover:bg-rose-300/30 hover:border-none focus:outline-none">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> 
    </Page>
  )
}

export default BirthdayWish