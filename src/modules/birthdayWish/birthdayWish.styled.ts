import styled from "styled-components";

export const Page = styled.div`
  background-color: #fbe4db;
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

export const Title = styled.div`
  font-family: cookieMonster;
  font-size: 50px;
  margin-top: 100px;

  @media (min-width: 1024px) {
    font-size: 70px;
  }
`