import { useEffect, useState } from "react"
import { Img, Title } from "../birthdayWish/birthdayWish.styled"

const Home = () => {
  const [isBirthday, setIsBirthday] = useState<boolean>(false)
  const [days, setDays] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)
  const [hours, setHours] = useState<number>(0)
  const [seconds, setSeconds] = useState<number>(0)
  const [hasValue, setHasValue] = useState<boolean>(false)
  let interval : any
  useEffect(() => {
    const now = new Date(new Date().toLocaleString('en-US', {timeZone: 'Canada/Mountain'}))
    const birthday = new Date(new Date('2023-02-27T00:00:00').toLocaleString('en-US', { timeZone: 'Canada/Mountain'}))
    setIsBirthday(now >= birthday)

    interval = setInterval(() => {
      const now = new Date(new Date().toLocaleString('en-US', {timeZone: 'Canada/Mountain'}))
      const distance = birthday.getTime() - now.getTime()
      if (now <= birthday) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / (1000))
        setDays(days)
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)
        setHasValue(true)
      } else {
        setHasValue(false)
      }
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])
  return isBirthday ? 
    (
      <div className="min-h-screen flex justify-center bg-slate-800">
        <div className="max-w-screen-2xl w-full">
          <Title
            fontSize="40px"
            fontSizeLg="70px"
            className="text-center rounded-md text-rose-100 mt-12"
          >Happy Birthday Langlang</Title>

        </div>
      </div>
    ) :
    (
      <div className="min-h-screen flex justify-center">
        <div className="max-w-screen-2xl w-full flex items-center justify-center">
          { 
            hasValue ? 
            <div className="flex items-center flex-col">
              <div className="flex items-center">
                <div>
                  <div>Days</div>
                  <div>{days}</div>
                </div>
                <div>
                  <div>Hours</div>
                  <div>{hours}</div>
                </div>
                <div>
                  <div>Minutes</div>
                  <div>{minutes}</div>
                </div>
                <div>
                  <div>Seconds</div>
                  <div>{seconds}</div>
                </div>
              </div>
              <Img
                className="w-2/4 max-w-60"
                src="/src/assets/3.png"
              />
            </div> : 
            <div className="animate-spin">LOADING</div>
          }
        </div>
      </div>
    )
}

export default Home