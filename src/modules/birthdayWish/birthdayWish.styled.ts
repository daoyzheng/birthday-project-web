import styled, { keyframes } from "styled-components";

export const Page = styled.div`
  /* background-color: #fbe4db; */
  background-color: white;
  
`

interface ImgProps {
  width: number
  height: number
}
export const Img = styled.img<ImgProps>`
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
`

interface ICircleProps {
  borderRadius: string
}
export const Circle = styled.div<ICircleProps>`
  border-radius: ${props => props.borderRadius};
`

interface ITitleProps {
  marginTop?: string
  fontSize: string
  fontSizeLg: string
}
export const Title = styled.div<ITitleProps>`
  font-family: cookieMonster;
  font-size: ${props => props.fontSize};
  margin-top: ${props => props.marginTop};

  @media (min-width: 1024px) {
    font-size: ${props => props.fontSizeLg};
  }
`

const scrollDown = keyframes`
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    top: 90%;
  }
`
export const ScrollDown = styled.div`
  height: 50px;
  width: 30px;
  position: relative;
  left: 50%;
  transform: translateX(-15px);
  ::before,::after {
    content: '';
    position: absolute;
    top: 10%;
    left: 50%;
    border: 2px solid white;
    height: 10px;
    width: 10px;
    transform: translate(-50%,-100%) rotate(45deg);
    border-top: transparent;
    border-left: transparent;
    animation: ${scrollDown} 1s infinite;
  }
  ::after {
    top: 30%;
    animation-delay: .3s
  }
`