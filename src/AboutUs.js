import { Paper, Typography } from '@mui/material';

export default function AboutUs () {
  return (
    <div className="about-us">
      <h1 className='title'>About Us</h1>

      <Paper className='paragraph' elevation={1}>
        <p>Welcome to our online store dedicated to providing the highest 
          quality boxing gear for fighters of all levels! We are passionate 
          about the sport of boxing and believe that everyone should have access 
          to the best equipment to help them achieve their goals and reach their 
          full potential.</p>
      </Paper>

      <Paper 
        className='paragraph'
        elevation={1}>
        <p className='text'>Our team is made up of boxing enthusiasts and experts who have a 
          deep understanding of the sport and its unique requirements. We have 
          carefully curated a selection of products that we believe offer the 
          best combination of quality, durability, and affordability. From 
          gloves and hand wraps to punching bags and training equipment, we 
          have everything you need to get started or take your training to the 
          next level.</p>
        <img
          className='image' 
          src={require('./styles/assets/first-paragraph.jpg')} 
          alt='training session' />
      </Paper>

      <Paper 
        className='paragraph'
        elevation={1}>
        <img
          className='image' 
          src={require('./styles/assets/second-paragraph.jpg')} 
          alt='Sewing machine close-up' />
        <p className='text'>We take great pride in the quality of our products 
        and the level of service we provide to our customers. We understand 
        that buying boxing gear can be overwhelming, especially for those who 
        are new to the sport. That's why we are committed to providing 
        personalized advice and guidance to help you choose the products that 
        best meet your needs.</p>
      </Paper>

      <Paper 
        className='paragraph'
        elevation={1}>
        <p className='text'>At our online store, you can expect fast and 
        reliable shipping, competitive pricing, and a hassle-free shopping 
        experience. We are always looking for ways to improve our service and 
        welcome feedback from our customers.</p>
        <img
          className='image' 
          src={require('./styles/assets/third-paragraph.jpg')} 
          alt='Sewing machine close-up' />
      </Paper>

      <Paper className='paragraph' elevation={1}>
        <p>Thank you for choosing us as your source for boxing gear. 
          We look forward to helping you achieve your goals and supporting 
          you on your boxing journey!</p>
      </Paper>
    </div>
  )
}