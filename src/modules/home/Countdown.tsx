import { useEffect, useRef, useState } from "react"
import { FlipCardWrapper } from "./home.styled"

const Countdown = () => {
  const [days, setDays] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)
  const [hours, setHours] = useState<number>(0)
  const [seconds, setSeconds] = useState<number>(0)
  const [hasValue, setHasValue] = useState<boolean>(false)
  let interval : any
  useEffect(() => {
    const birthday = new Date(new Date('2023-03-11T00:00:00').toLocaleString('en-US', { timeZone: 'Canada/Mountain'}))
    const initialize = () => {
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
      }
    }
    initialize()
    interval = setInterval(() => {
      flipAllCards(birthday)
    }, 500)
    return () => {
      clearInterval(interval)
    }
  }, [])
  function flipAllCards (birthday: Date) {
    const now = new Date(new Date().toLocaleString('en-US', {timeZone: 'Canada/Mountain'}))
    const distance = birthday.getTime() - now.getTime()
    if (now <= birthday) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / (1000))
      flipCard(document.querySelector('[data-second-ones]'), seconds % 10)
      flipCard(document.querySelector('[data-second-tens]'), Math.floor(seconds / 10))
      flipCard(document.querySelector('[data-minute-ones]'), minutes % 10)
      flipCard(document.querySelector('[data-minute-tens]'), Math.floor(minutes / 10))
      flipCard(document.querySelector('[data-hour-ones]'), hours % 10)
      flipCard(document.querySelector('[data-hour-tens]'), Math.floor(hours / 10))
      flipCard(document.querySelector('[data-day-ones]'), days % 10)
      flipCard(document.querySelector('[data-day-tens]'), Math.floor(days / 10))
      setHasValue(true)
    }
  }

  function flipCard (flipCard : HTMLDivElement | null, newNumber: number) {
    if (!flipCard) return
    const bottomCard = flipCard.querySelector('.bottom')
    const topCard = flipCard.querySelector('.top')
    if (bottomCard && topCard) {
      const startNumber = parseInt(topCard.textContent || '')
      if (newNumber === startNumber) return
      const topFlip = document.createElement('div')
      topFlip.classList.add('top-flip')
      const bottomFlip = document.createElement('div')
      bottomFlip.classList.add('bottom-flip')


      topCard.textContent = `${startNumber}`
      topFlip.textContent = `${startNumber}`
      bottomCard.textContent = `${startNumber}`
      bottomFlip.textContent = `${newNumber}`

      flipCard.dataset.currentNumber = `${startNumber}`
      flipCard.dataset.nextNumber = `${newNumber}`

      topFlip.addEventListener('animationstart', e => {
        if (topCard)
          topCard.textContent = `${newNumber}`
      })
      topFlip.addEventListener('animationend', () => {
        topFlip.remove()
      })
      bottomFlip.addEventListener('animationend', e => {
        if (bottomCard)
          bottomCard.textContent = `${newNumber}`
        bottomFlip.remove()
      })
      flipCard.append(topFlip, bottomFlip)
    }
  }
  return (
    <div className="min-h-screen flex justify-center">
      <div className="max-w-screen-2xl w-full flex items-center justify-center">
        { 
          hasValue ? 
          <div className="flex items-center flex-col">
            <div className="flex items-center flex-wrap gap-x-6">
              <div className="flex flex-col">
                <div>Days</div>
                <div className="flex gap-x-3">
                  <FlipCardWrapper>
                    <div className="flip-card" data-day-tens>
                      <div className="top">{ Math.floor(days / 10)}</div>
                      <div className="bottom">{ Math.floor(days / 10)} </div>
                    </div>
                  </FlipCardWrapper>
                  <FlipCardWrapper>
                    <div className="flip-card" data-day-ones>
                      <div className="top">{ days % 10 }</div>
                      <div className="bottom">{ days % 10 }</div>
                    </div>
                  </FlipCardWrapper>
                </div>
              </div>
              <div className="flex flex-col">
                <div>Hours</div>
                <div className="flex gap-x-3">
                  <FlipCardWrapper>
                    <div className="flip-card" data-hour-tens>
                      <div className="top">{ Math.floor(hours / 10)}</div>
                      <div className="bottom">{ Math.floor(hours / 10)} </div>
                    </div>
                  </FlipCardWrapper>
                  <FlipCardWrapper>
                    <div className="flip-card" data-hour-ones>
                      <div className="top">{ hours % 10 }</div>
                      <div className="bottom">{ hours % 10 }</div>
                    </div>
                  </FlipCardWrapper>
                </div>
              </div>
              <div className="flex flex-col">
                <div>minutes</div>
                <div className="flex gap-x-3">
                  <FlipCardWrapper>
                    <div className="flip-card" data-minute-tens>
                      <div className="top">{ Math.floor(minutes / 10)}</div>
                      <div className="bottom">{ Math.floor(minutes / 10)} </div>
                    </div>
                  </FlipCardWrapper>
                  <FlipCardWrapper>
                    <div className="flip-card" data-minute-ones>
                      <div className="top">{ minutes % 10}</div>
                      <div className="bottom">{ minutes % 10} </div>
                    </div>
                  </FlipCardWrapper>
                </div>
              </div>
              <div className="flex flex-col">
                <div>seconds</div>
                <div className="flex gap-x-3">
                  <FlipCardWrapper>
                    <div className="flip-card" data-second-tens>
                      <div className="top">{ Math.floor(seconds / 10)}</div>
                      <div className="bottom">{ Math.floor(seconds / 10)} </div>
                    </div>
                  </FlipCardWrapper>
                  <FlipCardWrapper>
                    <div className="flip-card" data-second-ones>
                      <div className="top">{ seconds % 10 }</div>
                      <div className="bottom">{ seconds % 10 }</div>
                    </div>
                  </FlipCardWrapper>
                </div>
              </div>
            </div>
          </div> : 
          <div className="animate-spin">LOADING</div>
        }
      </div>
    </div>
  )
}

export default Countdown