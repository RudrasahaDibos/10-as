import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import dibos from '../../Image/dibos.jpg'

const About = () => {
    return (
        <div>
        <CardGroup>
        <Card>
        <Card.Title className='p-5' > </Card.Title>
        <Card.Img className='w-25 mx-auto' variant="top" src={dibos} />
      <Card.Body>
    
     <Card.Text>
                                     Rudra saha Dibos
     
     </Card.Text>
   </Card.Body>
 </Card>
 <Card>
    
    <Card.Body>
      <Card.Title> My GOAL</Card.Title>
      <Card.Text>
      আমি ৩-৫ মাস
      ওয়েব ডেভেলপমেন্ট কোর্সে অনেক পরিশ্রম করব ! আমি এই কোর্সের পড়া খুব ভালোভাবে শিখতে চাই ! 
      আমি এই কোর্সের ফাইনাল ১ম বর্ষে অনেক সময় দিতে চাই!
      </Card.Text>
    </Card.Body>
  </Card>
        </CardGroup>
     
        </div>
    );
};

export default About;