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
    width: 75px;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .2);
    position: relative;
    color: rgba(255, 99, 138, 0.7);
  }

  .top, 
  .bottom,
  .flip-card .bottom-flip,
  .flip-card .top-flip {
    height: .75em;
    width: 75px;
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
const meteor = keyframes`
  0% {
    opacity: 1;
    transform: translate3d(-10px, 0, 0) rotate(120deg);
    -webkit-transform: translate3d(-10px, 0, 0) rotate(120deg);
  }
  30%,
  100% {
    opacity: 0;
    transform: translate3d(-400px, 800px, 0) rotate(120deg);
    -webkit-transform: translate3d(-400px, 800px, 0) rotate(120deg);
  }
`

export const Container = styled.div`
  ::-webkit-scrollbar {
    width: 0.5em;
  }
  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.65);
  }
  @media (min-width: 1024px) {
    ::-webkit-scrollbar {
      width: 0.7em;
    }
  }
`

export const MessageList = styled.div`
  width: 100%;
  min-width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (min-width: 1024px) {
    width: 500px;
    min-width: none;
  }
`

export const Frame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  background: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
`

export const Canvas = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  background-image: url(/src/assets/home-background.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const flick = keyframes`
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
`

export const StarWrapper = styled.div`
.star {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #fff;
}

.star-1 {
  top: 436px;
  left: 158px;
  animation: 2s ${flick} -3s infinite;
}
.star-2 {
 top: 541px;
 left: 1480px;
 animation: 3s ${flick} -1s infinite;
}
.star-3 {
 top: 80px;
 left: 1383px;
 animation: 3s ${flick} -1s infinite;
}
.star-4 {
 top: 514px;
 left: 337px;
 animation: 3s ${flick} -3s infinite;
}
.star-5 {
 top: 482px;
 left: 1362px;
 animation: 1s ${flick} -3s infinite;
}
.star-6 {
 top: 664px;
 left: 1311px;
 animation: 1s ${flick} -2s infinite;
}
.star-7 {
 top: 684px;
 left: 608px;
 animation: 2s ${flick} -2s infinite;
}
.star-8 {
 top: 563px;
 left: 95px;
 animation: 1s ${flick} -1s infinite;
}
.star-9 {
 top: 551px;
 left: 934px;
 animation: 2s ${flick} -3s infinite;
}
.star-10 {
 top: 703px;
 left: 1456px;
 animation: 2s ${flick} -2s infinite;
}
.star-11 {
 top: 71px;
 left: 603px;
 animation: 1s ${flick} -2s infinite;
}
.star-12 {
 top: 128px;
 left: 1399px;
 animation: 1s ${flick} -1s infinite;
}
.star-13 {
 top: 623px;
 left: 969px;
 animation: 3s ${flick} -3s infinite;
}
.star-14 {
 top: 173px;
 left: 649px;
 animation: 2s ${flick} -1s infinite;
}
.star-15 {
 top: 390px;
 left: 692px;
 animation: 1s ${flick} -2s infinite;
}
.star-16 {
 top: 590px;
 left: 852px;
 animation: 3s ${flick} -2s infinite;
}
.star-17 {
 top: 85px;
 left: 1054px;
 animation: 1s ${flick} -1s infinite;
}
.star-18 {
 top: 698px;
 left: 1583px;
 animation: 3s ${flick} -2s infinite;
}
.star-19 {
 top: 545px;
 left: 228px;
 animation: 2s ${flick} -3s infinite;
}
.star-20 {
 top: 700px;
 left: 1358px;
 animation: 2s ${flick} -1s infinite;
}
.star-21 {
 top: 558px;
 left: 1414px;
 animation: 1s ${flick} -3s infinite;
}
.star-22 {
 top: 170px;
 left: 944px;
 animation: 2s ${flick} -3s infinite;
}
.star-23 {
 top: 132px;
 left: 1029px;
 animation: 2s ${flick} -2s infinite;
}
.star-24 {
 top: 286px;
 left: 1685px;
 animation: 1s ${flick} -2s infinite;
}
.star-25 {
 top: 594px;
 left: 1307px;
 animation: 2s ${flick} -1s infinite;
}
.star-26 {
 top: 508px;
 left: 1187px;
 animation: 1s ${flick} -3s infinite;
}
.star-27 {
 top: 510px;
 left: 984px;
 animation: 3s ${flick} -3s infinite;
}
.star-28 {
 top: 565px;
 left: 229px;
 animation: 3s ${flick} -1s infinite;
}
.star-29 {
 top: 356px;
 left: 1158px;
 animation: 3s ${flick} -2s infinite;
}
.star-30 {
 top: 289px;
 left: 1504px;
 animation: 1s ${flick} -3s infinite;
}
.star-31 {
 top: 674px;
 left: 1557px;
 animation: 3s ${flick} -2s infinite;
}
.star-32 {
 top: 380px;
 left: 129px;
 animation: 2s ${flick} -1s infinite;
}
.star-33 {
 top: 241px;
 left: 801px;
 animation: 1s ${flick} -2s infinite;
}
.star-34 {
 top: 196px;
 left: 1218px;
 animation: 3s ${flick} -3s infinite;
}
.star-35 {
 top: 291px;
 left: 301px;
 animation: 2s ${flick} -2s infinite;
}
.star-36 {
 top: 66px;
 left: 1382px;
 animation: 3s ${flick} -2s infinite;
}
.star-37 {
 top: 303px;
 left: 1522px;
 animation: 3s ${flick} -3s infinite;
}
.star-38 {
 top: 450px;
 left: 96px;
 animation: 3s ${flick} -1s infinite;
}
.star-39 {
 top: 244px;
 left: 180px;
 animation: 2s ${flick} -3s infinite;
}
.star-40 {
 top: 438px;
 left: 965px;
 animation: 2s ${flick} -2s infinite;
}
.star-41 {
 top: 630px;
 left: 474px;
 animation: 1s ${flick} -2s infinite;
}
.star-42 {
 top: 155px;
 left: 449px;
 animation: 3s ${flick} -3s infinite;
}
.star-43 {
 top: 121px;
 left: 906px;
 animation: 2s ${flick} -2s infinite;
}
.star-44 {
 top: 180px;
 left: 830px;
 animation: 1s ${flick} -3s infinite;
}
.star-45 {
 top: 237px;
 left: 559px;
 animation: 2s ${flick} -3s infinite;
}
.star-46 {
 top: 131px;
 left: 1524px;
 animation: 3s ${flick} -3s infinite;
}
.star-47 {
 top: 224px;
 left: 104px;
 animation: 1s ${flick} -3s infinite;
}
.star-48 {
 top: 347px;
 left: 1745px;
 animation: 2s ${flick} -3s infinite;
}
.star-49 {
 top: 281px;
 left: 1053px;
 animation: 3s ${flick} -1s infinite;
}
.star-50 {
 top: 450px;
 left: 900px;
 animation: 2s ${flick} -3s infinite;
}
.star-51 {
 top: 570px;
 left: 1270px;
 animation: 3s ${flick} -1s infinite;
}
.star-52 {
 top: 496px;
 left: 1350px;
 animation: 2s ${flick} -2s infinite;
}
.star-53 {
 top: 484px;
 left: 510px;
 animation: 3s ${flick} -3s infinite;
}
.star-54 {
 top: 208px;
 left: 1745px;
 animation: 3s ${flick} -1s infinite;
}
.star-55 {
 top: 71px;
 left: 867px;
 animation: 3s ${flick} -1s infinite;
}
.star-56 {
 top: 656px;
 left: 934px;
 animation: 3s ${flick} -1s infinite;
}
.star-57 {
 top: 201px;
 left: 1031px;
 animation: 3s ${flick} -2s infinite;
}
.star-58 {
 top: 107px;
 left: 1215px;
 animation: 2s ${flick} -2s infinite;
}
.star-59 {
 top: 655px;
 left: 337px;
 animation: 2s ${flick} -2s infinite;
}
.star-60 {
 top: 139px;
 left: 134px;
 animation: 3s ${flick} -3s infinite;
}
.star-61 {
 top: 440px;
 left: 752px;
 animation: 2s ${flick} -1s infinite;
}
.star-62 {
 top: 374px;
 left: 1339px;
 animation: 2s ${flick} -2s infinite;
}
.star-63 {
 top: 691px;
 left: 268px;
 animation: 3s ${flick} -2s infinite;
}
.star-64 {
 top: 405px;
 left: 759px;
 animation: 3s ${flick} -3s infinite;
}
.star-65 {
 top: 295px;
 left: 1466px;
 animation: 1s ${flick} -3s infinite;
}
.star-66 {
 top: 624px;
 left: 1185px;
 animation: 3s ${flick} -3s infinite;
}
.star-67 {
 top: 635px;
 left: 1247px;
 animation: 3s ${flick} -2s infinite;
}
.star-68 {
 top: 262px;
 left: 773px;
 animation: 1s ${flick} -3s infinite;
}
.star-69 {
 top: 655px;
 left: 46px;
 animation: 1s ${flick} -2s infinite;
}
.star-70 {
 top: 538px;
 left: 229px;
 animation: 3s ${flick} -3s infinite;
}
.star-71 {
 top: 136px;
 left: 320px;
 animation: 2s ${flick} -1s infinite;
}
.star-72 {
 top: 67px;
 left: 1602px;
 animation: 3s ${flick} -1s infinite;
}
.star-73 {
 top: 168px;
 left: 943px;
 animation: 1s ${flick} -3s infinite;
}
.star-74 {
 top: 128px;
 left: 681px;
 animation: 1s ${flick} -1s infinite;
}
.star-75 {
 top: 486px;
 left: 964px;
 animation: 3s ${flick} -2s infinite;
}
.star-76 {
 top: 243px;
 left: 1459px;
 animation: 3s ${flick} -2s infinite;
}
.star-77 {
 top: 183px;
 left: 1489px;
 animation: 2s ${flick} -1s infinite;
}
.star-78 {
 top: 125px;
 left: 299px;
 animation: 1s ${flick} -3s infinite;
}
.star-79 {
 top: 631px;
 left: 1140px;
 animation: 1s ${flick} -2s infinite;
}
.star-80 {
 top: 158px;
 left: 794px;
 animation: 3s ${flick} -2s infinite;
}
.star-81 {
 top: 482px;
 left: 1719px;
 animation: 2s ${flick} -1s infinite;
}
.star-82 {
 top: 345px;
 left: 716px;
 animation: 2s ${flick} -2s infinite;
}
.star-83 {
 top: 672px;
 left: 1241px;
 animation: 2s ${flick} -2s infinite;
}
.star-84 {
 top: 69px;
 left: 397px;
 animation: 1s ${flick} -3s infinite;
}
.star-85 {
 top: 415px;
 left: 1050px;
 animation: 2s ${flick} -2s infinite;
}
.star-86 {
 top: 86px;
 left: 82px;
 animation: 2s ${flick} -2s infinite;
}
.star-87 {
 top: 214px;
 left: 898px;
 animation: 1s ${flick} -3s infinite;
}
.star-88 {
 top: 539px;
 left: 1308px;
 animation: 1s ${flick} -1s infinite;
}
.star-89 {
 top: 271px;
 left: 736px;
 animation: 1s ${flick} -1s infinite;
}
.star-90 {
 top: 336px;
 left: 744px;
 animation: 3s ${flick} -2s infinite;
}
.star-91 {
 top: 437px;
 left: 594px;
 animation: 2s ${flick} -1s infinite;
}
.star-92 {
 top: 376px;
 left: 890px;
 animation: 3s ${flick} -3s infinite;
}
.star-93 {
 top: 286px;
 left: 324px;
 animation: 2s ${flick} -2s infinite;
}
.star-94 {
 top: 346px;
 left: 697px;
 animation: 1s ${flick} -1s infinite;
}
.star-95 {
 top: 693px;
 left: 174px;
 animation: 1s ${flick} -3s infinite;
}
.star-96 {
 top: 687px;
 left: 649px;
 animation: 2s ${flick} -3s infinite;
}
.star-97 {
 top: 435px;
 left: 21px;
 animation: 2s ${flick} -1s infinite;
}
.star-98 {
 top: 552px;
 left: 118px;
 animation: 2s ${flick} -2s infinite;
}
.star-99 {
 top: 68px;
 left: 797px;
 animation: 3s ${flick} -2s infinite;
}
.star-100 {
 top: 452px;
 left: 1336px;
 animation: 1s ${flick} -2s infinite;
}
.star-101 {
 top: 280px;
 left: 89px;
 animation: 2s ${flick} -2s infinite;
}
.star-102 {
 top: 177px;
 left: 1364px;
 animation: 2s ${flick} -1s infinite;
}
.star-103 {
 top: 115px;
 left: 382px;
 animation: 2s ${flick} -1s infinite;
}
.star-104 {
 top: 542px;
 left: 258px;
 animation: 3s ${flick} -2s infinite;
}
.star-105 {
 top: 331px;
 left: 289px;
 animation: 2s ${flick} -2s infinite;
}
.star-106 {
 top: 413px;
 left: 1245px;
 animation: 1s ${flick} -1s infinite;
}
.star-107 {
 top: 323px;
 left: 1165px;
 animation: 1s ${flick} -2s infinite;
}
.star-108 {
 top: 127px;
 left: 657px;
 animation: 3s ${flick} -3s infinite;
}
.star-109 {
 top: 90px;
 left: 354px;
 animation: 2s ${flick} -1s infinite;
}
.star-110 {
 top: 237px;
 left: 780px;
 animation: 3s ${flick} -3s infinite;
}
.star-111 {
 top: 714px;
 left: 501px;
 animation: 1s ${flick} -3s infinite;
}
.star-112 {
 top: 76px;
 left: 1320px;
 animation: 3s ${flick} -1s infinite;
}
.star-113 {
 top: 710px;
 left: 1578px;
 animation: 3s ${flick} -2s infinite;
}
.star-114 {
 top: 525px;
 left: 911px;
 animation: 1s ${flick} -3s infinite;
}
.star-115 {
 top: 194px;
 left: 1137px;
 animation: 3s ${flick} -3s infinite;
}
.star-116 {
 top: 456px;
 left: 770px;
 animation: 1s ${flick} -1s infinite;
}
.star-117 {
 top: 185px;
 left: 1730px;
 animation: 2s ${flick} -1s infinite;
}
.star-118 {
 top: 591px;
 left: 11px;
 animation: 3s ${flick} -3s infinite;
}
.star-119 {
 top: 196px;
 left: 616px;
 animation: 1s ${flick} -2s infinite;
}
.star-120 {
 top: 162px;
 left: 1356px;
 animation: 1s ${flick} -3s infinite;
}
.star-121 {
 top: 629px;
 left: 1329px;
 animation: 3s ${flick} -3s infinite;
}
.star-122 {
 top: 173px;
 left: 1471px;
 animation: 3s ${flick} -2s infinite;
}
.star-123 {
 top: 210px;
 left: 587px;
 animation: 1s ${flick} -1s infinite;
}
.star-124 {
 top: 191px;
 left: 1416px;
 animation: 3s ${flick} -3s infinite;
}
.star-125 {
 top: 159px;
 left: 825px;
 animation: 3s ${flick} -2s infinite;
}
.star-126 {
 top: 545px;
 left: 431px;
 animation: 2s ${flick} -3s infinite;
}
.star-127 {
 top: 214px;
 left: 529px;
 animation: 3s ${flick} -1s infinite;
}
.star-128 {
 top: 111px;
 left: 871px;
 animation: 2s ${flick} -1s infinite;
}
.star-129 {
 top: 567px;
 left: 97px;
 animation: 3s ${flick} -3s infinite;
}
.star-130 {
 top: 371px;
 left: 204px;
 animation: 3s ${flick} -2s infinite;
}
.star-131 {
 top: 694px;
 left: 179px;
 animation: 1s ${flick} -1s infinite;
}
.star-132 {
 top: 369px;
 left: 451px;
 animation: 3s ${flick} -1s infinite;
}
.star-133 {
 top: 716px;
 left: 60px;
 animation: 2s ${flick} -2s infinite;
}
.star-134 {
 top: 701px;
 left: 14px;
 animation: 2s ${flick} -3s infinite;
}
.star-135 {
 top: 186px;
 left: 1724px;
 animation: 3s ${flick} -2s infinite;
}
.star-136 {
 top: 442px;
 left: 575px;
 animation: 2s ${flick} -3s infinite;
}
.star-137 {
 top: 429px;
 left: 1515px;
 animation: 2s ${flick} -2s infinite;
}
.star-138 {
 top: 554px;
 left: 285px;
 animation: 2s ${flick} -2s infinite;
}
.star-139 {
 top: 395px;
 left: 359px;
 animation: 3s ${flick} -1s infinite;
}
.star-140 {
 top: 194px;
 left: 1687px;
 animation: 2s ${flick} -1s infinite;
}
.star-141 {
 top: 532px;
 left: 302px;
 animation: 1s ${flick} -2s infinite;
}
.star-142 {
 top: 549px;
 left: 408px;
 animation: 2s ${flick} -1s infinite;
}
.star-143 {
 top: 177px;
 left: 1516px;
 animation: 3s ${flick} -1s infinite;
}
.star-144 {
 top: 619px;
 left: 1036px;
 animation: 3s ${flick} -2s infinite;
}
.star-145 {
 top: 265px;
 left: 1476px;
 animation: 2s ${flick} -2s infinite;
}
.star-146 {
 top: 139px;
 left: 274px;
 animation: 1s ${flick} -1s infinite;
}
.star-147 {
 top: 618px;
 left: 500px;
 animation: 1s ${flick} -1s infinite;
}
.star-148 {
 top: 126px;
 left: 1407px;
 animation: 3s ${flick} -2s infinite;
}
.star-149 {
 top: 305px;
 left: 483px;
 animation: 3s ${flick} -3s infinite;
}
.star-150 {
 top: 583px;
 left: 209px;
 animation: 2s ${flick} -2s infinite;
}
.star-151 {
 top: 454px;
 left: 253px;
 animation: 2s ${flick} -3s infinite;
}
.star-152 {
 top: 488px;
 left: 430px;
 animation: 1s ${flick} -3s infinite;
}
.star-153 {
 top: 585px;
 left: 1175px;
 animation: 1s ${flick} -3s infinite;
}
.star-154 {
 top: 530px;
 left: 1495px;
 animation: 1s ${flick} -2s infinite;
}
.star-155 {
 top: 615px;
 left: 1601px;
 animation: 2s ${flick} -3s infinite;
}
.star-156 {
 top: 156px;
 left: 605px;
 animation: 2s ${flick} -1s infinite;
}
.star-157 {
 top: 167px;
 left: 1679px;
 animation: 1s ${flick} -1s infinite;
}
.star-158 {
 top: 168px;
 left: 1118px;
 animation: 2s ${flick} -1s infinite;
}
.star-159 {
 top: 564px;
 left: 1423px;
 animation: 1s ${flick} -1s infinite;
}
.star-160 {
 top: 558px;
 left: 590px;
 animation: 2s ${flick} -2s infinite;
}
.star-161 {
 top: 541px;
 left: 191px;
 animation: 2s ${flick} -3s infinite;
}
.star-162 {
 top: 305px;
 left: 1763px;
 animation: 1s ${flick} -3s infinite;
}
.star-163 {
 top: 651px;
 left: 704px;
 animation: 3s ${flick} -2s infinite;
}
.star-164 {
 top: 253px;
 left: 287px;
 animation: 2s ${flick} -1s infinite;
}
.star-165 {
 top: 230px;
 left: 1133px;
 animation: 1s ${flick} -1s infinite;
}
.star-166 {
 top: 398px;
 left: 1321px;
 animation: 1s ${flick} -2s infinite;
}
.star-167 {
 top: 210px;
 left: 162px;
 animation: 3s ${flick} -2s infinite;
}
.star-168 {
 top: 501px;
 left: 896px;
 animation: 2s ${flick} -2s infinite;
}
.star-169 {
 top: 660px;
 left: 1333px;
 animation: 2s ${flick} -1s infinite;
}
.star-170 {
 top: 441px;
 left: 45px;
 animation: 3s ${flick} -2s infinite;
}
.star-171 {
 top: 564px;
 left: 1200px;
 animation: 2s ${flick} -2s infinite;
}
.star-172 {
 top: 619px;
 left: 1223px;
 animation: 3s ${flick} -1s infinite;
}
.star-173 {
 top: 504px;
 left: 1223px;
 animation: 1s ${flick} -2s infinite;
}
.star-174 {
 top: 309px;
 left: 1636px;
 animation: 1s ${flick} -2s infinite;
}
.star-175 {
 top: 521px;
 left: 1117px;
 animation: 1s ${flick} -2s infinite;
}
.star-176 {
 top: 601px;
 left: 795px;
 animation: 2s ${flick} -3s infinite;
}
.star-177 {
 top: 502px;
 left: 1430px;
 animation: 2s ${flick} -1s infinite;
}
.star-178 {
 top: 398px;
 left: 783px;
 animation: 1s ${flick} -1s infinite;
}
.star-179 {
 top: 337px;
 left: 470px;
 animation: 3s ${flick} -2s infinite;
}
.star-180 {
 top: 121px;
 left: 126px;
 animation: 1s ${flick} -3s infinite;
}
.star-181 {
 top: 427px;
 left: 122px;
 animation: 2s ${flick} -1s infinite;
}
.star-182 {
 top: 526px;
 left: 1526px;
 animation: 2s ${flick} -3s infinite;
}
.star-183 {
 top: 471px;
 left: 1539px;
 animation: 1s ${flick} -1s infinite;
}
.star-184 {
 top: 292px;
 left: 662px;
 animation: 2s ${flick} -3s infinite;
}
.star-185 {
 top: 356px;
 left: 1624px;
 animation: 2s ${flick} -1s infinite;
}
.star-186 {
 top: 284px;
 left: 1144px;
 animation: 1s ${flick} -2s infinite;
}
.star-187 {
 top: 542px;
 left: 1455px;
 animation: 3s ${flick} -2s infinite;
}
.star-188 {
 top: 629px;
 left: 1665px;
 animation: 3s ${flick} -1s infinite;
}
.star-189 {
 top: 132px;
 left: 1051px;
 animation: 2s ${flick} -2s infinite;
}
.star-190 {
 top: 122px;
 left: 980px;
 animation: 1s ${flick} -2s infinite;
}
.star-191 {
 top: 331px;
 left: 1438px;
 animation: 2s ${flick} -1s infinite;
}
.star-192 {
 top: 163px;
 left: 139px;
 animation: 3s ${flick} -1s infinite;
}
.star-193 {
 top: 394px;
 left: 659px;
 animation: 3s ${flick} -1s infinite;
}
.star-194 {
 top: 465px;
 left: 1161px;
 animation: 1s ${flick} -2s infinite;
}
.star-195 {
 top: 571px;
 left: 32px;
 animation: 3s ${flick} -1s infinite;
}
.star-196 {
 top: 632px;
 left: 792px;
 animation: 1s ${flick} -2s infinite;
}
.star-197 {
 top: 452px;
 left: 115px;
 animation: 1s ${flick} -1s infinite;
}
.star-198 {
 top: 666px;
 left: 1431px;
 animation: 2s ${flick} -1s infinite;
}
.star-199 {
 top: 670px;
 left: 228px;
 animation: 1s ${flick} -1s infinite;
}
.star-200 {
 top: 374px;
 left: 1480px;
 animation: 2s ${flick} -3s infinite;
}
.star-201 {
 top: 448px;
 left: 393px;
 animation: 2s ${flick} -1s infinite;
}
.star-202 {
 top: 663px;
 left: 1089px;
 animation: 2s ${flick} -1s infinite;
}
.star-203 {
 top: 195px;
 left: 6px;
 animation: 3s ${flick} -2s infinite;
}
.star-204 {
 top: 175px;
 left: 1690px;
 animation: 3s ${flick} -3s infinite;
}
.star-205 {
 top: 116px;
 left: 1687px;
 animation: 2s ${flick} -2s infinite;
}
.star-206 {
 top: 75px;
 left: 206px;
 animation: 3s ${flick} -1s infinite;
}
.star-207 {
 top: 586px;
 left: 212px;
 animation: 1s ${flick} -2s infinite;
}
.star-208 {
 top: 221px;
 left: 357px;
 animation: 1s ${flick} -2s infinite;
}
.star-209 {
 top: 213px;
 left: 1546px;
 animation: 2s ${flick} -3s infinite;
}
.star-210 {
 top: 157px;
 left: 975px;
 animation: 2s ${flick} -2s infinite;
}
.star-211 {
 top: 355px;
 left: 202px;
 animation: 3s ${flick} -3s infinite;
}
.star-212 {
 top: 338px;
 left: 1494px;
 animation: 3s ${flick} -2s infinite;
}
.star-213 {
 top: 390px;
 left: 921px;
 animation: 1s ${flick} -3s infinite;
}
.star-214 {
 top: 258px;
 left: 626px;
 animation: 1s ${flick} -1s infinite;
}
.star-215 {
 top: 500px;
 left: 678px;
 animation: 3s ${flick} -2s infinite;
}
.star-216 {
 top: 396px;
 left: 416px;
 animation: 1s ${flick} -3s infinite;
}
.star-217 {
 top: 630px;
 left: 647px;
 animation: 3s ${flick} -1s infinite;
}
.star-218 {
 top: 469px;
 left: 84px;
 animation: 2s ${flick} -3s infinite;
}
.star-219 {
 top: 379px;
 left: 1695px;
 animation: 1s ${flick} -1s infinite;
}
.star-220 {
 top: 180px;
 left: 1625px;
 animation: 1s ${flick} -3s infinite;
}
.star-221 {
 top: 529px;
 left: 550px;
 animation: 2s ${flick} -3s infinite;
}
.star-222 {
 top: 128px;
 left: 1501px;
 animation: 2s ${flick} -2s infinite;
}
.star-223 {
 top: 408px;
 left: 69px;
 animation: 3s ${flick} -3s infinite;
}
.star-224 {
 top: 543px;
 left: 1387px;
 animation: 3s ${flick} -2s infinite;
}
.star-225 {
 top: 573px;
 left: 690px;
 animation: 2s ${flick} -2s infinite;
}
.star-226 {
 top: 701px;
 left: 1489px;
 animation: 2s ${flick} -3s infinite;
}
.star-227 {
 top: 181px;
 left: 1488px;
 animation: 2s ${flick} -2s infinite;
}
.star-228 {
 top: 69px;
 left: 415px;
 animation: 2s ${flick} -3s infinite;
}
.star-229 {
 top: 333px;
 left: 1139px;
 animation: 3s ${flick} -1s infinite;
}
.star-230 {
 top: 505px;
 left: 41px;
 animation: 1s ${flick} -1s infinite;
}
.star-231 {
 top: 160px;
 left: 508px;
 animation: 2s ${flick} -1s infinite;
}
.star-232 {
 top: 166px;
 left: 1621px;
 animation: 1s ${flick} -2s infinite;
}
.star-233 {
 top: 586px;
 left: 1712px;
 animation: 3s ${flick} -2s infinite;
}
.star-234 {
 top: 209px;
 left: 1466px;
 animation: 1s ${flick} -2s infinite;
}
.star-235 {
 top: 561px;
 left: 652px;
 animation: 2s ${flick} -3s infinite;
}
.star-236 {
 top: 274px;
 left: 1218px;
 animation: 2s ${flick} -2s infinite;
}
.star-237 {
 top: 317px;
 left: 78px;
 animation: 2s ${flick} -1s infinite;
}
.star-238 {
 top: 313px;
 left: 768px;
 animation: 3s ${flick} -1s infinite;
}
.star-239 {
 top: 563px;
 left: 1763px;
 animation: 1s ${flick} -2s infinite;
}
.star-240 {
 top: 599px;
 left: 982px;
 animation: 3s ${flick} -1s infinite;
}
.star-241 {
 top: 650px;
 left: 934px;
 animation: 2s ${flick} -2s infinite;
}
.star-242 {
 top: 470px;
 left: 1556px;
 animation: 3s ${flick} -2s infinite;
}
.star-243 {
 top: 425px;
 left: 1616px;
 animation: 3s ${flick} -1s infinite;
}
.star-244 {
 top: 259px;
 left: 391px;
 animation: 1s ${flick} -1s infinite;
}
.star-245 {
 top: 449px;
 left: 242px;
 animation: 1s ${flick} -3s infinite;
}
.star-246 {
 top: 488px;
 left: 1299px;
 animation: 1s ${flick} -3s infinite;
}
.star-247 {
 top: 676px;
 left: 66px;
 animation: 1s ${flick} -3s infinite;
}
.star-248 {
 top: 703px;
 left: 58px;
 animation: 1s ${flick} -1s infinite;
}
.star-249 {
 top: 490px;
 left: 1192px;
 animation: 2s ${flick} -1s infinite;
}
.star-250 {
 top: 385px;
 left: 1406px;
 animation: 2s ${flick} -3s infinite;
}
.star-251 {
 top: 335px;
 left: 1604px;
 animation: 1s ${flick} -3s infinite;
}
.star-252 {
 top: 443px;
 left: 1244px;
 animation: 1s ${flick} -3s infinite;
}
.star-253 {
 top: 359px;
 left: 474px;
 animation: 1s ${flick} -1s infinite;
}
.star-254 {
 top: 614px;
 left: 1485px;
 animation: 1s ${flick} -1s infinite;
}
.star-255 {
 top: 304px;
 left: 677px;
 animation: 3s ${flick} -3s infinite;
}
.star-256 {
 top: 496px;
 left: 580px;
 animation: 1s ${flick} -2s infinite;
}
.star-257 {
 top: 563px;
 left: 450px;
 animation: 1s ${flick} -3s infinite;
}
.star-258 {
 top: 407px;
 left: 1749px;
 animation: 3s ${flick} -1s infinite;
}
.star-259 {
 top: 157px;
 left: 1576px;
 animation: 3s ${flick} -2s infinite;
}
.star-260 {
 top: 420px;
 left: 1519px;
 animation: 2s ${flick} -3s infinite;
}
.star-261 {
 top: 163px;
 left: 59px;
 animation: 2s ${flick} -1s infinite;
}
.star-262 {
 top: 135px;
 left: 1218px;
 animation: 2s ${flick} -2s infinite;
}
.star-263 {
 top: 273px;
 left: 1212px;
 animation: 1s ${flick} -3s infinite;
}
.star-264 {
 top: 457px;
 left: 1655px;
 animation: 3s ${flick} -3s infinite;
}
.star-265 {
 top: 593px;
 left: 1009px;
 animation: 1s ${flick} -2s infinite;
}
.star-266 {
 top: 649px;
 left: 684px;
 animation: 2s ${flick} -2s infinite;
}
.star-267 {
 top: 205px;
 left: 485px;
 animation: 2s ${flick} -2s infinite;
}
.star-268 {
 top: 453px;
 left: 749px;
 animation: 3s ${flick} -1s infinite;
}
.star-269 {
 top: 130px;
 left: 872px;
 animation: 2s ${flick} -1s infinite;
}
.star-270 {
 top: 516px;
 left: 656px;
 animation: 1s ${flick} -2s infinite;
}
.star-271 {
 top: 411px;
 left: 1162px;
 animation: 1s ${flick} -3s infinite;
}
.star-272 {
 top: 166px;
 left: 658px;
 animation: 2s ${flick} -2s infinite;
}
.star-273 {
 top: 563px;
 left: 875px;
 animation: 2s ${flick} -2s infinite;
}
.star-274 {
 top: 575px;
 left: 130px;
 animation: 3s ${flick} -1s infinite;
}
.star-275 {
 top: 417px;
 left: 924px;
 animation: 3s ${flick} -3s infinite;
}
.star-276 {
 top: 306px;
 left: 378px;
 animation: 2s ${flick} -3s infinite;
}
.star-277 {
 top: 630px;
 left: 1295px;
 animation: 1s ${flick} -2s infinite;
}
.star-278 {
 top: 641px;
 left: 1714px;
 animation: 1s ${flick} -3s infinite;
}
.star-279 {
 top: 509px;
 left: 1645px;
 animation: 2s ${flick} -2s infinite;
}
.star-280 {
 top: 485px;
 left: 1780px;
 animation: 1s ${flick} -3s infinite;
}
.star-281 {
 top: 661px;
 left: 1052px;
 animation: 3s ${flick} -2s infinite;
}
.star-282 {
 top: 375px;
 left: 1716px;
 animation: 2s ${flick} -2s infinite;
}
.star-283 {
 top: 669px;
 left: 333px;
 animation: 1s ${flick} -2s infinite;
}
.star-284 {
 top: 169px;
 left: 172px;
 animation: 1s ${flick} -1s infinite;
}
.star-285 {
 top: 587px;
 left: 454px;
 animation: 2s ${flick} -2s infinite;
}
.star-286 {
 top: 411px;
 left: 259px;
 animation: 1s ${flick} -1s infinite;
}
.star-287 {
 top: 327px;
 left: 1233px;
 animation: 3s ${flick} -3s infinite;
}
.star-288 {
 top: 574px;
 left: 118px;
 animation: 3s ${flick} -2s infinite;
}
.star-289 {
 top: 516px;
 left: 1717px;
 animation: 1s ${flick} -2s infinite;
}
.star-290 {
 top: 471px;
 left: 1785px;
 animation: 3s ${flick} -3s infinite;
}
.star-291 {
 top: 242px;
 left: 1258px;
 animation: 2s ${flick} -1s infinite;
}
.star-292 {
 top: 125px;
 left: 1386px;
 animation: 3s ${flick} -1s infinite;
}
.star-293 {
 top: 177px;
 left: 1466px;
 animation: 1s ${flick} -1s infinite;
}
.star-294 {
 top: 406px;
 left: 499px;
 animation: 2s ${flick} -1s infinite;
}
.star-295 {
 top: 148px;
 left: 616px;
 animation: 3s ${flick} -3s infinite;
}
.star-296 {
 top: 455px;
 left: 250px;
 animation: 1s ${flick} -3s infinite;
}
.star-297 {
 top: 373px;
 left: 865px;
 animation: 1s ${flick} -1s infinite;
}
.star-298 {
 top: 157px;
 left: 1594px;
 animation: 3s ${flick} -1s infinite;
}
.star-299 {
 top: 89px;
 left: 1429px;
 animation: 1s ${flick} -2s infinite;
}
.star-300 {
 top: 330px;
 left: 1153px;
 animation: 3s ${flick} -1s infinite;
}

`

export const MeteorWrapper = styled.div`
.meteor {
  position: absolute;
  top: -60px;
  width: 120px;
  height: 2px;
  background: linear-gradient(-45deg, #b3c7f3, rgba(0, 0, 255, 0));
  filter: drop-shadow(0 0 6px #88acf3);
  transform: rotate(0deg);
}
.meteor-1 {
 animation: 34s ${meteor} 16s infinite;
}
.meteor-2 {
 animation: 33s ${meteor} 20s infinite;
}
.meteor-3 {
 animation: 32s ${meteor} 1s infinite;
}
.meteor-4 {
 animation: 30s ${meteor} 1s infinite;
}
.meteor-5 {
 animation: 34s ${meteor} 1s infinite;
}
.meteor-6 {
 animation: 32s ${meteor} 17s infinite;
}
.meteor-7 {
 animation: 30s ${meteor} 2s infinite;
}
.meteor-8 {
 animation: 32s ${meteor} 10s infinite;
}
.meteor-9 {
 animation: 31s ${meteor} 12s infinite;
}
.meteor-10 {
 animation: 30s ${meteor} 16s infinite;
}
.meteor-11 {
 animation: 30s ${meteor} 9s infinite;
}
.meteor-12 {
 animation: 32s ${meteor} 10s infinite;
}
.meteor-13 {
 animation: 31s ${meteor} 19s infinite;
}
.meteor-14 {
 animation: 31s ${meteor} 11s infinite;
}
.meteor-15 {
 animation: 31s ${meteor} 2s infinite;
}
.meteor-16 {
 animation: 34s ${meteor} 1s infinite;
}
.meteor-17 {
 animation: 32s ${meteor} 22s infinite;
}
.meteor-18 {
 animation: 33s ${meteor} 5s infinite;
}
.meteor-19 {
 animation: 31s ${meteor} 1s infinite;
}
.meteor-20 {
 animation: 33s ${meteor} 5s infinite;
}
.meteor-21 {
 animation: 32s ${meteor} 5s infinite;
}
.meteor-22 {
 animation: 34s ${meteor} 11s infinite;
}
.meteor-23 {
 animation: 30s ${meteor} 13s infinite;
}
.meteor-24 {
 animation: 32s ${meteor} 20s infinite;
}
.meteor-25 {
 animation: 31s ${meteor} 21s infinite;
}
.meteor-26 {
 animation: 34s ${meteor} 9s infinite;
}
.meteor-27 {
 animation: 31s ${meteor} 18s infinite;
}
.meteor-28 {
 animation: 33s ${meteor} 16s infinite;
}
.meteor-29 {
 animation: 34s ${meteor} 6s infinite;
}
.meteor-30 {
 animation: 31s ${meteor} 6s infinite;
}
.meteor-31 {
 animation: 34s ${meteor} 6s infinite;
}
.meteor-32 {
 animation: 30s ${meteor} 7s infinite;
}
.meteor-33 {
 animation: 32s ${meteor} 16s infinite;
}
.meteor-34 {
 animation: 34s ${meteor} 9s infinite;
}
.meteor-35 {
 animation: 32s ${meteor} 9s infinite;
}
.meteor-36 {
 animation: 33s ${meteor} 11s infinite;
}
.meteor-37 {
 animation: 32s ${meteor} 6s infinite;
}
.meteor-38 {
 animation: 33s ${meteor} 19s infinite;
}
.meteor-39 {
 animation: 31s ${meteor} 5s infinite;
}
.meteor-40 {
 animation: 32s ${meteor} 5s infinite;
}
.meteor-41 {
 animation: 32s ${meteor} 9s infinite;
}
.meteor-42 {
 animation: 31s ${meteor} 5s infinite;
}
.meteor-43 {
 animation: 31s ${meteor} 23s infinite;
}
.meteor-44 {
 animation: 30s ${meteor} 19s infinite;
}
.meteor-45 {
 animation: 33s ${meteor} 9s infinite;
}
.meteor-46 {
 animation: 34s ${meteor} 8s infinite;
}
.meteor-47 {
 animation: 33s ${meteor} 14s infinite;
}
.meteor-48 {
 animation: 32s ${meteor} 7s infinite;
}
.meteor-49 {
 animation: 33s ${meteor} 23s infinite;
}
.meteor-50 {
 animation: 31s ${meteor} 17s infinite;
}
.meteor-51 {
 animation: 32s ${meteor} 16s infinite;
}
.meteor-52 {
 animation: 33s ${meteor} 13s infinite;
}
.meteor-53 {
 animation: 31s ${meteor} 15s infinite;
}
.meteor-54 {
 animation: 32s ${meteor} 4s infinite;
}
.meteor-55 {
 animation: 31s ${meteor} 8s infinite;
}
.meteor-56 {
 animation: 33s ${meteor} 9s infinite;
}
.meteor-57 {
 animation: 31s ${meteor} 16s infinite;
}
.meteor-58 {
 animation: 32s ${meteor} 12s infinite;
}
.meteor-59 {
 animation: 34s ${meteor} 15s infinite;
}
.meteor-60 {
 animation: 31s ${meteor} 14s infinite;
}
.meteor-61 {
 animation: 34s ${meteor} 10s infinite;
}
.meteor-62 {
 animation: 34s ${meteor} 4s infinite;
}
.meteor-63 {
 animation: 30s ${meteor} 13s infinite;
}
.meteor-64 {
 animation: 31s ${meteor} 20s infinite;
}
.meteor-65 {
 animation: 33s ${meteor} 21s infinite;
}
.meteor-66 {
 animation: 33s ${meteor} 19s infinite;
}
.meteor-67 {
 animation: 30s ${meteor} 15s infinite;
}
.meteor-68 {
 animation: 31s ${meteor} 21s infinite;
}
.meteor-69 {
 animation: 33s ${meteor} 21s infinite;
}
.meteor-70 {
 animation: 33s ${meteor} 5s infinite;
}
.meteor-71 {
 animation: 30s ${meteor} 12s infinite;
}
.meteor-72 {
 animation: 32s ${meteor} 8s infinite;
}
.meteor-73 {
 animation: 30s ${meteor} 11s infinite;
}
.meteor-74 {
 animation: 34s ${meteor} 24s infinite;
}
.meteor-75 {
 animation: 33s ${meteor} 18s infinite;
}
.meteor-76 {
 animation: 31s ${meteor} 5s infinite;
}
.meteor-77 {
 animation: 30s ${meteor} 16s infinite;
}
.meteor-78 {
 animation: 32s ${meteor} 2s infinite;
}
.meteor-79 {
 animation: 33s ${meteor} 6s infinite;
}
.meteor-80 {
 animation: 34s ${meteor} 20s infinite;
}
.meteor-81 {
 animation: 32s ${meteor} 19s infinite;
}
.meteor-82 {
 animation: 32s ${meteor} 13s infinite;
}
.meteor-83 {
 animation: 32s ${meteor} 11s infinite;
}
.meteor-84 {
 animation: 34s ${meteor} 14s infinite;
}
.meteor-85 {
 animation: 30s ${meteor} 18s infinite;
}
.meteor-86 {
 animation: 32s ${meteor} 18s infinite;
}
.meteor-87 {
 animation: 32s ${meteor} 12s infinite;
}
.meteor-88 {
 animation: 31s ${meteor} 19s infinite;
}
.meteor-89 {
 animation: 31s ${meteor} 11s infinite;
}
.meteor-90 {
 animation: 31s ${meteor} 20s infinite;
}
.meteor-91 {
 animation: 30s ${meteor} 8s infinite;
}
.meteor-92 {
 animation: 34s ${meteor} 5s infinite;
}
.meteor-93 {
 animation: 32s ${meteor} 20s infinite;
}
.meteor-94 {
 animation: 30s ${meteor} 19s infinite;
}
.meteor-95 {
 animation: 34s ${meteor} 3s infinite;
}
.meteor-96 {
 animation: 30s ${meteor} 10s infinite;
}
.meteor-97 {
 animation: 31s ${meteor} 16s infinite;
}
.meteor-98 {
 animation: 31s ${meteor} 22s infinite;
}
.meteor-99 {
 animation: 32s ${meteor} 17s infinite;
}
.meteor-100 {
 animation: 31s ${meteor} 24s infinite;
}
`