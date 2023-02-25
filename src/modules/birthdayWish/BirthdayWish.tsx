import { Circle, Img, Page } from "./birthdayWish.styled"

const BirthdayWish = () => {
  return (
    <Page className="min-h-screen min-w-screen lg:grid lg:grid-cols-5">
      <div className="lg:col-span-3 flex lg:bg-red-600/20 flex-col xl:flex-row m-5 rounded-lg">
        <Img src="/src/assets/test.gif" width={400} height={300}/>
      </div>
      <div className="lg:col-span-2 flex items-center justify-center relative min-h-screen">
        <div className="absolute top-5 left-24">
          <Circle 
            borderRadius="42% 58% 45% 55% / 34% 35% 65% 66% "
            className="w-16 h-16 bg-red-600/20 relative top-0 left-10 shadow-lg"/>
          <Img 
            className="rotate-6 relative -top-14 left-10"
            src="/src/assets/bunny1.png" 
            width={60} 
            height={70}
          />
        </div>
        <div className="absolute top-10 right-3">
          <Img 
            className="relative top-0 right-0 -rotate-6"
            src="/src/assets/drink2.png" 
            width={70} 
            height={100} 
          />
          <Circle 
            borderRadius="68% 32% 65% 35% / 34% 35% 65% 66% "
            className="w-16 h-16 bg-red-600/20 absolute top-0 right-0 shadow-lg"/>
        </div>
        <div className="absolute top-10 left-0">
          <Img 
            className="relative -rotate-12"
            src="/src/assets/sponge-bob.png" 
            width={120} 
            height={120}
          />
          <Circle 
            borderRadius="42% 58% 45% 55% / 67% 35% 65% 33% "
            className="w-20 h-20 bg-red-600/20 relative -top-10 left-6 shadow-lg"/>

        </div>
        <div className="absolute bottom-10 left-2">
          <Img 
            className="relative rotate-12"
            src="/src/assets/bubble-tea.png" 
            width={100} 
            height={150}
          />
          <Circle 
            borderRadius="62% 38% 34% 66% / 39% 47% 53% 61% "
            className="w-20 h-20 bg-red-600/20 relative bottom-20 shadow-lg"/>
        </div>
        {/* <Img 
          className="absolute bottom-10 right-2 rotate-12"
          src="/src/assets/bunny.png" 
          width={200} 
          height={200}
        /> */}
        <Circle 
          borderRadius="100%"
          className="w-20 h-20 bg-red-600/20 absolute bottom-15 right-2 shadow-lg"/>
        <div className="h-96 min-h-content w-4/5 bg-white/20 backdrop-blur-md rounded shadow-2xl shadow-red-200/90">
          message
        </div>
      </div>
    </Page>
  )
}

export default BirthdayWish