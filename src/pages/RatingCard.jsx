import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const RatingCard = () => {
  const ratingArray = [1, 2, 3, 4, 5]
  const navigate = useNavigate()
  const [rating, setRating] = useState(null)
  const handleRatingClick = (e) => {
    const num = e.target.innerText
    setRating(num)
  }
  const handleSubmit = () => {
    rating !== null && navigate(`/thanks/${rating}`)
  }
  return (
    <div className='bg-gradient-to-t from-neutral-800 to-neutral-600 text-white p-8 rounded-2xl max-w-[410px] m-8'>
      <header>
        <div className='bg-white w-12 aspect-square rounded-full flex justify-center items-center bg-opacity-10'>
          <img src='../../images/icon-star.svg' alt='star' />
        </div>
      </header>
      <section className='py-8'>
        <h1 className='text-2xl font-semibold mb-4'>
          How did we do?
        </h1>
        <span className='text-neutral-400'>
          Please let us know how we did with your support request. All
          feedback is appreciated to help us improve our offering!
        </span>
      </section>
      <footer>
        <div className='flex justify-around text-xl mb-8'>
          {ratingArray.map((num) => (
            <button
              key={num}
              onClick={handleRatingClick}
              className='bg-white w-14 aspect-square rounded-full flex justify-center items-center bg-opacity-10 text-neutral-400 cursor-pointer hover:text-white hover:bg-orange-500 duration-200 active:scale-95 focus:bg-neutral-500 focus:text-white'
            >
              {num}
            </button>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className='bg-orange-500 w-full py-3 font-semibold rounded-3xl hover:bg-white hover:text-orange-500 duration-200 active:scale-95'
        >
          SUBMIT
        </button>
      </footer>
    </div>
  )
}

export default RatingCard
