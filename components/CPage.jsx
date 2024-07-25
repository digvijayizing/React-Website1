import React   from 'react'
import { MDBCarousel, MDBCarouselItem} from 'mdb-react-ui-kit';
import './Cp.css';
import c1 from "../image/c1.jpg"
import c2 from "../image/c2.jpg"
import c3 from "../image/c3.jpg"

export default function CPage() {
  return (
  <>
  <div className='Cp'>
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src={c1} className='d-block w-100' alt='...' />
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src={c2} className='d-block w-100' alt='...' />
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src={c3} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
</div></>  );
}
