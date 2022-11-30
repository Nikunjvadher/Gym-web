import React , { useState } from 'react'
import './Testimonial.css'
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'

const Testimonial = () => {
    const [selected , setSelected ] = useState(0)
    const tlength = testimonialsData.length;

    const prevBtn = () => {
        selected === 0 ? setSelected(tlength - 1) : setSelected((prev) => prev - 1)
    }
    const nextBtn = () => {
        selected === tlength - 1 ? setSelected(0) : setSelected((prev) => prev + 1)
    }
    return (
        <>
            <div className="Testimonials">
                <div className="left-t">
                    <span>Testimonials</span>
                    <span className='stroke-text'>What They </span>
                    <span>say about us</span>

                    <span>
                        {testimonialsData[selected].review}
                    </span>
                    <span>
                        <span style={{color: 'var(--orange)'}}>
                            {testimonialsData[selected].name}
                        </span>{" "}
                        - {testimonialsData[selected].status}
                    </span>
                </div>
                <div className="right-t">
                    <div></div>
                    <div></div>
                    <img src={testimonialsData[selected].image} alt="" />

                    <div className="arrows">
                        <img src={leftArrow}  onClick={prevBtn} alt="" />
                        <img src={rightArrow} onClick={nextBtn} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial