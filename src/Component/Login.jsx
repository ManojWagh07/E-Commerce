import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import { PasswordField } from './LoingPass';


function Login() {

  return (
    <MDBContainer fluid className="p-2 my-2 h-custom">
      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="./Image/BG/Online Login.png" class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='5'>
        <div className="d-flex align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3">Sign in with </p>
          <div className='Wrapper'>

          <a href="https://www.facebook.com/" target="blank">
            <Button variant="primary" size="small">
              <FacebookIcon/>
            </Button>{' '}
          </a>
          <a href="https://twitter.com/i/flow/login?redirect_after_login=%2F" target="blank">
            <Button variant="primary" size="small">
              <TwitterIcon/>
            </Button>{' '}
          </a>
          <a href="https://admin.google.com/ac/accountchooser?pli=1" target="blank">
            <Button variant="primary" size="small">
              <GoogleIcon/>
            </Button>{' '}
          </a>
          </div>
        </div>

          <div className="divider d-flex align-items-center my-4">
            <br /><br /><br />
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          <MDBInput wrapperClass='mb-4' placeholder='Enter  Email' id='formControlLg' type='email' size="lg"/>
          <PasswordField/>
          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <Button variant="primary" size="small">Login</Button>{' '}
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <Link to='/Register'>Register</Link></p>
          </div>

        </MDBCol>

      </MDBRow>

      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-1 px-2 px-xl-5 bg-dark">

        <div className="text-white mb-2 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>

        <div>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='facebook-f' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='twitter' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='google' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='linkedin-in' size="md"/>
          </MDBBtn>

        </div>

      </div>
      
    </MDBContainer>

    
  );
}

export default Login;