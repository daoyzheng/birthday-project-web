import { useEffect, useState } from "react"
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

const Home = () => {
  const [isBirthday, setIsBirthday] = useState<boolean>(false)
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
  return !isBirthday ? 
    (
      <div className="min-h-screen flex lg:items-stretch items-center lg:justify-center flex-col lg:flex-row lg:py-16 pt-14">
        <Frame>
          <Canvas>
            <Meteor/>
            <Star/>
          </Canvas>
        </Frame>
        <MusicPlayer/>
        <Container 
          className="lg:w-3/5 lg:mx-5 z-10 max-h-80vh lg:h-auto h-100 bg-white/20 shadow-xl w-6/7 rounded-lg backdrop-blur-sm overflow-auto scroll-smooth relative lg:-left-44"
        >
          <div className="max-w-screen-2xl w-full">
            <Title
              fontSize="40px"
              fontSizeLg="60px"
              fontSizeXl="90px"
              className="text-center rounded-md mt-8 text-white/80"
            >Happy Birthday Langlang</Title>
          </div>
          <BirthdayCake/>
        </Container>
        {
          windowSize.width >= 1024 &&
          <Messages 
            className="absolute bottom-0 right-0 z-10 lg:mr-6"
            isMinimizable
          />
        }
        {
          windowSize.width < 1024 &&
          <Messages/>
        }
      </div>
    ) :
    (
      <Countdown/>
    )
}

export default Home