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