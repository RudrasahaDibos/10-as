import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const Service = ({ service }) => {
  console.log()
  const { id, name, image, review, prize } = service;
  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
      
  }
  return (
    <div>

      <CardGroup>
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {review}.....
            </Card.Text>
            <Card.Text>
              prize:${prize}
            </Card.Text>
          </Card.Body>
          <ButtonGroup>
            <Button onClick={() => navigateToServiceDetail(id)} >Read more</Button>
          </ButtonGroup>

        </Card>
      </CardGroup>

    </div>
  );
};

export default Service;