import { useEffect } from "react"
import { MeteorWrapper } from "./home.styled"

const Meteor = () => {
  useEffect(() => {
    const meteor = document.querySelectorAll('.meteor')
    for (let i = 0; i < meteor.length; i++) {
      const element = meteor[i] as HTMLElement
      if (i % 2 === 0) {
        element.style.right = Math.random() * 600 + 'px'
      } else {
        element.style.left = Math.random() * 600 + 'px'
      }
    }
  }, [])
  return (
    <MeteorWrapper>
      {
        Array.from(Array(100)).map((_, index) => (
          <div className={`meteor meteor-${index}`} key={index}></div>
        ))
      }
    </MeteorWrapper>
  )
}

export default Meteor