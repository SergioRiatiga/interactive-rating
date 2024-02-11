import {useLocation, useParams} from 'react-router-dom'

const ThanksCard = () => {
  const location = useLocation()
  const {rating} = useParams()
  return (
    <div className='bg-gradient-to-t from-neutral-800 to-neutral-600 text-white px-6 py-10 rounded-2xl max-w-[410px] flex flex-col justify-center items-center m-8'>
      <header>
        <img
          src='../../images/illustration-thank-you.svg'
          alt='phone image'
        />
      </header>
      <section className=' my-8 bg-white bg-opacity-10 rounded-2xl py-1 px-6 text-orange-500 font-light'>
        You selected {rating} out of 5
      </section>
      <footer className='flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-semibold mb-4'>Thank you!</h1>
        <span className='text-neutral-400 text-center'>
          We appreciate you taking the time to give a rating. If you
          ever need more support, don't hesilate to get intouch!
        </span>
      </footer>
    </div>
  )
}

export default ThanksCard
