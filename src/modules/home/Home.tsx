import { useEffect, useState } from "react"
import { Img, Title } from "../birthdayWish/birthdayWish.styled"
import Countdown from "./Countdown"
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
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
  return isBirthday ? 
    (
      <div className="min-h-screen flex justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="max-w-screen-2xl w-full">
          <Title
            fontSize="40px"
            fontSizeLg="90px"
            className="text-center rounded-md mt-12"
          >Happy Birthday Langlang</Title>

        </div>
      </div>
    ) :
    (
      <Countdown/>
    )
}

export default Home