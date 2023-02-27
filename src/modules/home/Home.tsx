import { useEffect, useState } from "react"
import { Img, Title } from "../birthdayWish/birthdayWish.styled"
import Countdown from "./Countdown"

const Home = () => {
  const [isBirthday, setIsBirthday] = useState<boolean>(false)
  useEffect(() => {
    const now = new Date(new Date().toLocaleString('en-US', {timeZone: 'Canada/Mountain'}))
    const birthday = new Date(new Date('2023-03-11T00:00:00').toLocaleString('en-US', { timeZone: 'Canada/Mountain'}))
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