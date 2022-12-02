import React from 'react'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import './Plans.css'
const Plans = () => {
  return (
    <>
        <div className="plans-container">
            <div className="blur plan-blur-1"></div>
            <div className="blur plan-blur-2"></div>
            <div className="programs-header">
                <span className='stroke-text'>Ready To start</span>
                <span>Your Journey</span>
                <span className='stroke-text'>Now Withus</span>
            </div>

            {/* plans card */}
            <div className="plans" id='Plans'>
                {plansData.map((plan , i)=> {
                    return <div className="plan" id={i}>
                                {plan.icon}
                                <span>{plan.name}</span>
                                <span>${plan.price}</span>

                                <div className="features">
                                    {plan.features.map((features , i) => {
                                        return <div className="feature">
                                            <img src={whiteTick} alt="" />
                                            <span key={i}>{features}</span>
                                        </div>
                                    })}
                                </div>
                        
                                <div className="">
                                    <span>See More Benifits &#8594;</span>
                                </div>
                                <button className="btn">Join Now</button>

                            </div>
                })}
            </div>


        </div>
    </>
  )
}

export default Plans