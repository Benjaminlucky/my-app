import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>

      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <div className="experience__details">
                <BsPatchCheckFill  className='experience__details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className="text-ligh">
                    Experienced
                  </small>
                </div>
            </div>
            <div className="experience__details">
                <BsPatchCheckFill  className='experience__details-icon'/>
                <div>
                  <h4>CSS</h4>
                  <small className="text-ligh">
                    Intermediate
                  </small>
                </div>
            </div>
            <div className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-ligh">
                    Experienced
                  </small>
                </div>
            </div>
            <div className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-ligh">
                    Experienced
                  </small>
                </div>
            </div>
            <div className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Tailwind</h4>
                  <small className="text-ligh">
                    Experienced
                  </small>
                </div>
            </div>
            <div className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>React</h4>
                  <small className="text-ligh">
                    Experienced
                  </small>
                </div>
            </div>
          </div>
        </div>

        {/* END OF FRONTEND DEVELOPMENT */}

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <div className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Node JS</h4>
                  <small className="text-ligh">
                    Experienced
                  </small>
                </div>
            </div>
            <div className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>MongoDB</h4>
                  <small className="text-ligh">
                    Intermediate
                  </small>
                </div>
            </div>
            <div className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>PHP</h4>
                  <small className="text-ligh">
                    Intermediate
                  </small>
                </div>
            </div>
            <div className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>MySQL</h4>
                  <small className="text-ligh">
                    Basic
                  </small>
                </div>
            </div>
            <div className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Python</h4>
                  <small className="text-ligh">
                    Experienced
                  </small>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience