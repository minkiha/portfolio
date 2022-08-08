import type { NextPage } from 'next'
import Image from 'next/image'
import dexter from '../public/dexter.png'

const Home: NextPage = () => {
  return (
    <div>
      <Image src={dexter}/>
       
    </div>
  )
}

export default Home
