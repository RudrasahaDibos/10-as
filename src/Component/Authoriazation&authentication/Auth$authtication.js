import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Auth$authtication = () => {
    return (
        <div>
              <CardGroup>
  <Card>
   
    <Card.Body>
      <Card.Title>authorization </Card.Title>
      <Card.Text>
      1.প্রমাণীকরণ ব্যবহারকারী কে তা যাচাই করে। <br />
      2.পাসওয়ার্ড, ওয়ান-টাইম পিন, বায়োমেট্রিক তথ্য এবং ব্যবহারকারীর দ্বারা প্রদত্ত বা প্রদত্ত অন্যান্য তথ্যের মাধ্যমে প্রমাণীকরণ কাজ করে। <br />
      3.প্রমাণীকরণ একটি ভাল পরিচয় এবং অ্যাক্সেস ব্যবস্থাপনা প্রক্রিয়ার প্রথম ধাপ। <br />
      
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    
    <Card.Body>
      <Card.Title>authentication</Card.Title>
      <Card.Text>
         1.
           অনুমোদন নির্ধারণ করে কোন ব্যবহারকারী কোন রিসোর্স অ্যাক্সেস করতে পারে।
           <br />
           2.
অনুমোদন সেই সেটিংসের মাধ্যমে কাজ করে যা সংস্থার দ্বারা বাস্তবায়িত এবং রক্ষণাবেক্ষণ করা হয়।
<br />
3.অনুমোদন সর্বদা প্রমাণীকরণের পরে সঞ্চালিত হয় ।
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
        </div>
    );
};

export default Auth$authtication;