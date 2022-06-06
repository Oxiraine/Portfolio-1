import { useNavigate } from 'react-router-dom'
import ArrowLeft from '../assets/arrow-left.svg'


function MakerScrollBar() {

  const navigate = useNavigate()
  return (
    <>
    <div className='bar-container'>
       <div className="scroll-top-line"></div>
       <button className='scroll-arrow1' onClick={() => navigate('/portfolio/content/coffee')}>
         <img src={ArrowLeft} className='arrow-left' alt='ArrowLeft' />
         <p className='goToFylo'>Insure</p>
         <p className='prev'>Previous Project</p>
         </button>
         <div className="scroll-middle-line"></div>
         <button className='scroll-arrow2' onClick={() => navigate('/portfolio/content/coffee')}>
         </button>
       <div className="scroll-bottom-line"></div>
      </div>
    </>
  )
}

export default MakerScrollBar