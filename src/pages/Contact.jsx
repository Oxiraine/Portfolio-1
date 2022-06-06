import { useState } from 'react'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import HomeFooter from '../components/HomeFooter';
function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  // eslint-disable-next-line
  const {name, email, message} = formData

  const onChange = (e) =>{
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = (e) =>{
      e.preventDefault()
    try {
      alert('Your message has been sent successfully!')
      setFormData({
        name: '',
        email: '',
        message: 'How can i help?'
      })
    } catch (error) {
      alert(`Your message could not be sent!: ${e.message}`)
    }
  }

  return (
    <>
      <div className="contact-top-line"></div>
      <h1 className="contact-page-header">Get in touch</h1>
      <p className="contact-page-desc">
        I’d love to hear about what you’re working on and how I could help. I’m
        currently looking for a new role and am open to a wide range of
        opportunities. My preference would be to find a position in a company in
        London. But I’m also happy to hear about opportunites that don’t fit
        that description. I’m a hard-working and positive person who will always
        approach each task with a sense of purpose and attention to detail.
        Please do feel free to check out my online profiles below and get in
        touch using the form.
      </p>
      <a href="https://github.com/Oxiraine" className="github-link">
        <FaGithub />
      </a>
      <a href="https://twitter.com/Iamrychard" className="twitter-link">
        <FaTwitter />
      </a>
      <a
        href="https://www.linkedin.com/in/sola-ojo-a3a9311a3/"
        className="linkedin-link"
      >
        <FaLinkedin />
      </a>
      <div className="contact-bottom-line"></div>
      <h2 className='contact-header'>Contact Me</h2>
      <form onSubmit={onSubmit}>
      <div className="form-group">
        <h3 className='input-header'>Name</h3>
        <input type="text" className='name-input' id='name' required onChange={onChange} value={name} placeholder="Jane Appleseed"/>
        <h3 className='input-header'>Email</h3>
        <input type="email" className='email-input' id='email' required onChange={onChange} value={email} placeholder='email@example.com'/>
        <h3 className='input-header'>Message</h3>
        <textarea name="message" onChange={onChange} id="message" required cols="21" rows="7" value={message} placeholder='How can i help?'></textarea>
        <button  type='submit' className='send-btn'>send message</button>
      </div>
      </form>
      <div className='contact-footer'>
      <HomeFooter />
      </div>
    </>
  );
}

export default Contact;
