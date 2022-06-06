import { useNavigate } from 'react-router-dom'
import ArrowLeft from '../assets/arrow-left.svg'
import ArrowRight from '../assets/arrow-right.svg'

function InsureScrollBar() {

  const navigate = useNavigate()
  return (
    <>
    <div className='bar-container'>
       <div className="scroll-top-line"></div>
       <button className='scroll-arrow1' onClick={() => navigate('/portfolio/content/form')}>
         <img src={ArrowLeft} className='arrow-left' alt='ArrowLeft' />
         <p className='goToFylo'>Bookmark</p>
         <p className='prev'>Previous Project</p>
         </button>
         <div className="scroll-middle-line"></div>
         <button className='scroll-arrow2' onClick={() => navigate('/portfolio/content/maker')}>
         <img src={ArrowRight} className='arrow-right' alt='ArrowRight' />
         <p className='goToNext'>Fylo</p>
         <p className='next'>Next Project</p>
         </button>
       <div className="scroll-bottom-line"></div>
      </div>
    </>
  )
}

export default InsureScrollBar