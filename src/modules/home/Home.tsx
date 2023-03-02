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
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('America/Edmonton')

const Home = () => {
  const [isBirthday, setIsBirthday] = useState<boolean>(false)
  useEffect(() => {
    const birthday = dayjs.tz('2023-03-11T00:00:00', 'America/Edmonton').utc()
    const now = dayjs().tz('America/Edmonton').utc();
    setIsBirthday(now >= birthday)
  }, [])
  return !isBirthday ? 
    (
      <div className="min-h-screen flex justify-center py-20">
        <Frame>
          <Canvas>
            <Meteor/>
            <Star/>
          </Canvas>
        </Frame>
        <Container className="bg-white/20 lg:w-3/4 w-full mx-5 shadow rounded-md backdrop-blur-sm z-10 max-h-80vh overflow-auto scroll-smooth">
          <div className="max-w-screen-2xl w-full">
            <Title
              fontSize="40px"
              fontSizeLg="90px"
              className="text-center rounded-md mt-8 text-white/80"
            >Happy Birthday Langlang</Title>
          </div>
          <BirthdayCake/>
          <div className="h-min-screen">HELLO</div>
          <div className="h-96">HELLO</div>
          <div className="h-96">HELLO</div>
          <div className="h-96">HELLO</div>
          <div className="h-96">HELLO</div>
          <div className="h-96">HELLO</div>
        </Container>
        <Messages/>
      </div>
    ) :
    (
      <Countdown/>
    )
}

export default Home