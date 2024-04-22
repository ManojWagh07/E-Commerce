import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
import { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';


function Register() {
  const [value, setValue] = useState()
  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol id='MdbColumn' md='10' lg='6' className='flex-column'>

              <h4 id='singup' className="text-center">Sign up</h4>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput placeholder='Your Name' id='form1' type='text' className='MDBinput'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput className='MDBinput' placeholder='Your Email' id='form2' type='email'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                {/* <MDBIcon fas icon="phone-alt me-3" size='lg'/> */}
                  <PhoneInput className='Phone' placeholder="Enter phone number" value={value} onChange={setValue}/>
              </div>

              <div className="d-flex align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput className='MDBinput' placeholder='Password' id='form4' type='password'/>
                <p className='Atleast'>Passwords must be at least 6 characters.</p>
              </div>
              
              <Button id='register' variant="primary" size="small">Register</Button>{' '}
              
             <div className='mb-4'>
                <p className="small fw-bold mt-2 pt-1 mb-2">Already have an account?<Link to='/Login'>Sign In</Link></p>
             </div>
            
            </MDBCol>

            <MDBCol md='10' lg='5' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default Register;