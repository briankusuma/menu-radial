import React from 'react';
import fotos1 from '../image/../sass/image/fotos1.jpg';
import fotos2 from '../image/../sass/image/fotos2.jpg';
import fotos3 from '../image/../sass/image/fotos3.png';
import fotos4 from '../image/../sass/image/fotos4.jpg';
import fotos5 from '../image/../sass/image/fotos5.jpg';
import Venue from '../image/../sass/image/Venue.svg';
import Checklist from '../image/../sass/image/checklist.svg';
import Budget from '../image/../sass/image/Budged.svg';
import FAQ from '../image/../sass/image/Faq.svg';
import {
  Card, CardImg, CardText, CardDeck ,CardBody,
  CardTitle
} from 'reactstrap';


export default function Fotos () {
  return (
    <div>
    
    <div>
    <CardDeck className="cdeck">
    <Card className="card">
      <CardImg src={Venue} alt="Venue" />
      <CardBody className="cbody">
        <CardTitle className="ctitle">Venues</CardTitle>
        <CardText className="ctext">Search by location, 
        type & capacity to find your perfect wedding venue</CardText>
      </CardBody>
    </Card>
    <Card className="card">
      <CardImg src={Checklist} alt="Checklist" />
      <CardBody className="cbody">
        <CardTitle className="ctitle">Checklist</CardTitle>
        <CardText className="ctext"> Personalise your wedding checklist so that you don’t miss a thing!</CardText>
      </CardBody>
    </Card>
    <Card className="card">
      <CardImg src={Budget} alt="Budget" />
      <CardBody className="cbody">
        <CardTitle className="ctitle">Budget</CardTitle>
        <CardText className="ctext">Plan and track your budget with our free wedding budget tracker</CardText>
      </CardBody>
    </Card>
    <Card className="card">
      <CardImg src={FAQ} alt="FAQ" />
      <CardBody className="cbody">
        <CardTitle className="ctitle">FAQ</CardTitle>
        <CardText className="ctext"> Find everything you need to create the perfect wedding</CardText>
      </CardBody>
    </Card>

    </CardDeck>

  </div>






    <div className="fotos">
        <img src= {fotos1} alt="fotos1" className="fotos1"/>
        <img src= {fotos2} alt="fotos2" className="fotos2"/>
        <img src= {fotos3} alt="fotos3" className="fotos3"/>
        <img src= {fotos4} alt="fotos4" className="fotos4"/>
        <img src= {fotos5} alt="fotos5" className="fotos5"/>
        
        <svg className="box3">
          <rect></rect>
        </svg>
        <svg className="box1">
          <rect></rect>
        </svg>
        <svg className="box2">
          <rect></rect>
        </svg>
    </div>

    </div>
  );
};
