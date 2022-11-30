import React from 'react'
import './Reason.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import tick from '../../assets/tick.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'

const Reasons = () => {
  return (
    <>
        <div className="Reasons" id='reasons'>
            <div className="left-r">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>
            <div className="right-r">
                <span>some Reasons</span>

                <div className="">
                    <span className='stroke-text'>Why </span>
                    <span>Choose us?</span>
                </div>

                <div className='detail-r'>
                    <div>
                        <img src={tick} alt="" />
                        <span>Over 140+ Expert Caches</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>Train Smarter and faster than before</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>1 Month Free Program for New menber</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>Reliable Partners</span>
                    </div>
                </div>

                {/* Our Partners */}
                <span className="partners">Our Partners</span>

                <div className="partners">
                    <img src={nb} alt="" />
                    <img src={adidas} alt="" />
                    <img src={nike} alt="" />
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Reasons