import { RefObject, useEffect, useRef, useState } from "react"
import { Title } from "../birthdayWish/birthdayWish.styled"
import Countdown from "./Countdown"
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import Messages from "./Messages"
import Meteor from "./Meteor"
import Star from "./Star"
import { Canvas, Container, Frame } from "./home.styled"
import BirthdayCake from "./BirthdayCake"
import MusicPlayer from "./MusicPlayer"
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('America/Edmonton')

const SLIDES_COUNT = 5

const Home = () => {
  const [isBirthday, setIsBirthday] = useState<boolean>(false)
  const refsArray :RefObject<HTMLDivElement>[] = []
  const [isInitMusic, setIsInitMusic] = useState<boolean>(false)
  const [isEnter, setIsEnter] = useState<boolean>(false)

  for (let i=0; i<SLIDES_COUNT; i++) {
    refsArray[i] = useRef<HTMLDivElement>(null)
  }
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  useEffect(() => {
    const birthday = dayjs.tz('2023-03-11T00:00:00', 'America/Edmonton').utc()
    const now = dayjs().tz('America/Edmonton').utc();
    setIsBirthday(now >= birthday)
  }, [])

  const navigate = (index: number) => {
    refsArray[index+1].current?.scrollIntoView()
  }
  const handleOnPlay = () => {
    if (!isInitMusic) {
      setIsInitMusic(true)
    }
  }
  return !isBirthday ? 
    (
      <div>
        <Frame>
          <Canvas>
            <Meteor/>
            <Star/>
          </Canvas>
        </Frame>
        <MusicPlayer onPlay={handleOnPlay}/>
        <div className="min-h-screen h-screen flex justify-center items-center">
          <div className="h-5/6 w-5/6 flex overflow-hidden scroll-smooth snap-x snap-mandatory">
            {
              refsArray.map((ref, index) => (
                <div key={index} ref={ref} className="h-full w-full min-w-full snap-center snap-always">
                  {
                    index === 0 && 
                    <div className="w-full h-full backdrop-blur-sm bg-birthday bg-cover bg-center bg-no-repeat shadow-md rounded-lg">
                      <div className="pt-32 h-fit ml-[500px]">
                        <Title
                          fontSize="40px"
                          fontSizeLg="60px"
                          fontSizeXl="120px"
                          className="text-center rounded-md text-rose-700/30"
                        >Happy Birthday</Title>
                        <Title
                          fontSize="40px"
                          fontSizeLg="60px"
                          fontSizeXl="90px"
                          className="text-center rounded-md text-rose-700/30"
                        >Langlang</Title>
                      </div>
                      <div className="flex items-end justify-end h-32 mr-20 mt-24">
                        <div className="flex flex-col justify-center items-center">
                          <div
                            className={`py-2 px-6 w-fit bg-red-400 rounded-md hover:-translate-y-1 
                              duration-300 cursor-pointer hover:shadow-md transition-all 
                              ${isInitMusic ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                            onClick={() => isInitMusic && navigate(index)}
                            onMouseEnter={() => !isInitMusic && setIsEnter(true)}
                            onMouseLeave={() => !isInitMusic && setIsEnter(false)}
                          >Start</div>
                          <div 
                            className={`${isEnter ? 'opacity-100' : 'opacity-0'} 
                            transition-opacity duration-300 mt-3 text-lg`}
                          >Some music for setting the mood?</div>
                        </div>
                      </div>
                      {
                        <div className="flex justify-end mr-20">
                        </div>
                      }
                    </div>
                  }
                  {
                    index === 1 &&
                    <div className="bg-red-300 h-full w-full">
                      hello2
                      <div onClick={() => navigate(index)}>click me</div>
                    </div>
                  }
                  {
                    index === 2 &&
                    <div className="bg-red-300 h-full w-full">
                      hello3
                      <div onClick={() => navigate(index)}>click me</div>
                    </div>
                  }
                </div>
              ))
            }
          </div>
        </div>
      </div>
      // <div className="min-h-screen flex lg:items-stretch items-center lg:justify-center flex-col lg:flex-row lg:pt-6 pt-14">
      //   <Frame>
      //     <Canvas>
      //       <Meteor/>
      //       <Star/>
      //     </Canvas>
      //   </Frame>
      //   <MusicPlayer/>
      //   <BirthdayCake/>
      //   <Container 
      //     className="lg:w-3/5 lg:mx-5 z-10 max-h-95vh lg:h-auto h-100 bg-custom/50 shadow-xl w-6/7 rounded-lg backdrop-blur-sm overflow-auto scroll-smooth relative lg:-left-44"
      //   >
      //     <div className="max-w-screen-2xl w-full">
      //       <Title
      //         fontSize="40px"
      //         fontSizeLg="60px"
      //         fontSizeXl="90px"
      //         className="text-center rounded-md mt-8 text-rose-300/80"
      //       >Happy Birthday Langlang</Title>
      //     </div>
      //   </Container>
      //   {
      //     windowSize.width >= 1024 &&
      //     <Messages 
      //       className="absolute bottom-0 right-0 z-10 lg:mr-6"
      //       isMinimizable
      //     />
      //   }
      //   {
      //     windowSize.width < 1024 &&
      //     <Messages/>
      //   }
      // </div>
    ) :
    (
      <Countdown/>
    )
}

export default Home