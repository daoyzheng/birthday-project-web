import styled, { keyframes } from "styled-components";

const flipTop = keyframes`
  100% {
    transform: rotateX(90deg);
    -webkit-transform: rotateX(90deg);
  }
`
const flipBottom = keyframes`
  100% {
    transform: rotateX(0deg);
    -webkit-transform: rotateX(0deg);
  }
`


export const FlipCardWrapper = styled.div`
  @media (min-width: 1024px) {
    font-size: 3rem;
  }
  .flip-card {
    display: inline-flex;
    flex-direction: column;
    font-size: 4.5rem;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .2);
    position: relative;
    color: rgba(255, 99, 138, 0.7);
  }

  .top, 
  .bottom,
  .flip-card .bottom-flip,
  .flip-card .top-flip {
    height: .75em;
    line-height: 1;
    padding: .25em;
    overflow: hidden;
    backdrop-filter: blur(50px);
    opacity: 0.9;
  }
  .top,
  .flip-card .top-flip {
    background-color: #f7f7f7;
    border-top-right-radius: .1em;
    border-top-left-radius: .1em;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }
  .bottom,
  .flip-card .bottom-flip {
    background-color: white;
    display: flex;
    align-items: flex-end;
    border-bottom-right-radius: .1em;
    border-bottom-left-radius: .1em;
  }


  .flip-card .top-flip {
    position: absolute;
    transform-origin: bottom;
    -webkit-transform-origin: bottom;
    animation: ${flipTop} 250ms ease-in;
  }

  .flip-card .bottom-flip {
    position: absolute;
    bottom: 0;
    transform-origin: top;
    -webkit-transform-origin: top;
    transform: rotateX(90deg);
    -webkit-transform: rotateX(90deg);
    animation: ${flipBottom} 250ms ease-out 250ms;
  }
`