import styled, { keyframes } from "styled-components"

type INotification = {
  show: boolean
}

export const Notification = styled.div<INotification>`
  position: absolute;
  top: ${props => props.show ? '15px' : '-50px'};
  transition: top 0.7s
`