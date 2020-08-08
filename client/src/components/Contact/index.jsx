import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Showcard from './Showcard';

export default function index() {
  return (

    // help links: https://react-bootstrap.github.io/components/carousel/ and https://www.bing.com/videos/search?q=react+bootstrap+4+carousel&&view=detail&mid=4BD6AFF2E7BAF7D71F034BD6AFF2E7BAF7D71F03&rvsmid=51B7383175620746E60751B7383175620746E607&FORM=VDQVAP

    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <h2>About Contributors</h2>
            <p>Summary</p>
          </div>
          <div className="col-md-8">
            <div className="row">
              <Showcard
                img="./images/Daniel.png"
                title="Changyeon Daniel Hong"
                text="I am awesome!"
                linkedin="https://linkedin.com/in/changyeon-hong-centraltexas/"
                github="https://github.com"
              />
              <Showcard
                img="./images/Diane.png"
                title="Diane Candler"
                text="Full Stack Developer, Experienced Product Manager plus
                 Marketing, Interior Decorator - talented @ restoring historic properties, Active Volunteer, mom, energetic

                  "
                linkedin="https://linkedin.com/in/diane-candler-centraltexas"
                github="https://dianecandler.github.io/"
              />
              <Showcard
                img="./images/Conner.png"
                title="Conner McBride"
                text="I am awesome!"
                linkedin="https://linkedin.com"
                github="https://github.com"
              />
              <Showcard
                img="./images/Joshua.png"
                title="Joshua Martinez"
                text="I am awesome!"
                linkedin="https://linkedin.com"
                github="https://github.com"
              />
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-12">
            <h3 className="text-center pb-4 text-left">Sharing insight into the development:</h3>

            <h6>Four students from The University of Texas at Austin came together for 2.5 weeks to design and deliver this application and deliver features required for Project 2 cirriculum.  Here are a few examples of the work we put into creating this full stack program.</h6>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  // src="holder.js/800x400?text=First slide&bg=373940"
                  src="./images/LoginDrawIO.png"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  // src="holder.js/800x400?text=Second slide&bg=282c34"
                  src="./images/ProfilePageDiagram.png"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>This is the second slide.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./images/code-cave-erd.png"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

          </div>
        </div>
      </div>

    </div>


  )
}
