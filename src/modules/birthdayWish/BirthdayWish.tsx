import { Img, Page } from "./birthdayWish.styled"

const BirthdayWish = () => {
  return (
    <Page className="min-h-screen min-w-screen md:grid md:grid-cols-3">
      <div className="col-span-2 flex bg-red-200 flex-col xl:flex-row">
        <Img src="/src/assets/cake.png" width={200} height={200} />
        <Img src="/src/assets/bunny.png" width={200} height={200}/>
        <Img src="/src/assets/test.gif" width={400} height={300}/>
      </div>
      <div className="flex items-center justify-center">
        message
      </div>
    </Page>
  )
}

export default BirthdayWish