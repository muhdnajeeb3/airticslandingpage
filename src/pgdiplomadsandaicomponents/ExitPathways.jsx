import React from 'react'
import { Container } from 'react-bootstrap'
import tick from '../images/check.png'
function ExitPathways() {
  return (
    <Container fluid className='bg-[#172570] bg-exitpathway bg-no-repeat bg-cover ' id='exitpathway'>
        <div className='max-w-[1200px] m-auto py-[4rem]'>

        <h2 className="text-[#40C3D5] font-[Raleway] text-3xl md:text-7xl font-[900]">EXIT PATHWAYS</h2>
        <p className='font-[Raleway] text-base text-white my-7'>Upon completion of the program, learners can</p>
        <ul className='list-none text-white p-0'>
        <li className='flex gap-3 items-center pb-3'><img src={tick} alt="" className='max-w-5'/><span>Pursue specialized studies in data science, machine learning, or artificial intelligence.</span></li>
        <li className='flex gap-3 items-center pb-3'><img src={tick} alt="" className='max-w-5'/><span>Apply for roles like data analyst, business analyst, or data scientist across various industries</span></li>
        <li className='flex gap-3 items-center pb-3'><img src={tick} alt="" className='max-w-5'/><span>Work as an independent data consultan</span></li>
        <li className='flex gap-3 items-center pb-3'><img src={tick} alt="" className='max-w-5'/><span>Apply data-driven decision-making skills in their current positions.</span></li>
        <li className='flex gap-3 items-center pb-3'><img src={tick} alt="" className='max-w-5'/><span>Explore research-oriented roles in academic or industrial settings</span></li>
        <li className='flex gap-3 items-center pb-3'><img src={tick} alt="" className='max-w-5'/><span>Consider entrepreneurial pursuits, leveraging data for business strategy and growth</span></li>
        </ul>
        </div>
        
    </Container>
  )
}

export default ExitPathways