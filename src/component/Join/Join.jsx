import React, { useRef } from 'react'
import './Join.css';
import emailJs from '@emailjs/browser'

const Join = () => {

  const form = useRef();

  const sendEmail = (e)=> {
    e.preventDefault();
    emailJs.sendForm( 'service_58wy5fi' , 'template_sm3twua' , form.current, '_CzzDLxkX0zG5JpGG')
    .then((result)=> {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    }); 
  }

  // emailjs.sendForm('contact_service', 'contact_form', this)
  //                   .then(function() {
  //                       console.log('SUCCESS!');
  //                   }, function(error) {
  //                       console.log('FAILED...', error);
  //                   });

  return (
    <>
      <div className="Join" id='join-us'>
        <div className="left-j">
          <hr />
          <div className="">
            <span className='stroke-text'>Ready to</span>
            <span >Level up</span>
          </div>
          <div className="">
            <span>Your Body</span>
            <span className='stroke-text'>With Us?</span>
          </div>
        </div>
        <div className="right-j">
          <from ref={form} onSubmit={sendEmail} className="email-contaier">
              <input type="email" name='user_email' placeholder='Enter Your Email' />
              <button onSubmit={sendEmail} className="btn btn-j">Join Now</button>
          </from>
        </div>
      </div>
    </>
  )
}

export default Join