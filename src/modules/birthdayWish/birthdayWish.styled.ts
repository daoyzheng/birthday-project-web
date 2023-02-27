import styled, { keyframes } from "styled-components";


const colorShift = keyframes`
  0% {
    background-position: 0 50%;
  } 
  50% {
    background-position: 100% 100%;
  } 
  100% {
    background-position: 0 50%;
  } 
`
export const Page = styled.div`
  background: linear-gradient(120deg, rgba(255,255,128,1) 0%, rgba(255,162,218,1) 40%, rgba(182,244,255,1) 100%);
  background-size: 300% 300%;
  animation: ${colorShift} 15s infinite;
`

interface ImgProps {
  width?: string
  height?: string
}
export const Img = styled.img<ImgProps>`
  width: ${props => `${props.width}`};
  height: ${props => `${props.height}`};
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