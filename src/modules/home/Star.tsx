import { StarWrapper } from "./home.styled"

const Star = () => {
  return (
    <StarWrapper>
      {
        Array.from(Array(300)).map((_, index) => (
          <div className={`star star-${index}`} key={index}></div>
        ))
      }

    </StarWrapper>
  )
}

export default Star