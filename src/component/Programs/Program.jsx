import React from 'react'
import './Program.css';
import { programsData } from '../../data/programsData'
import rightArrow from '../../assets/rightArrow.png'

const Program = () => {
    return (
        <>
            <div className="programs" id="Programs">

                <div className="programs-header">
                    <span className='stroke-text'>Explore our</span>
                    <span>Programs </span>
                    <span className='stroke-text'>to Shape You</span>
                </div>

                <div className="programs-categories">
                    {programsData.map((program) => {
                        return (
                        <div className="category">
                            {program.image}
                            <span>{program.heading}</span>
                            <span>{program.details}</span>
                            <div className="join-now">
                                <span>Join Now</span>
                                <img src={rightArrow} alt="" />
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Program