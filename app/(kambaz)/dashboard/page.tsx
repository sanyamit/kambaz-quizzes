import Link from "next/link";
import Image from "next/image";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from "react-bootstrap";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
   <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link href="/courses/1234/home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</CardTitle>
       <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Full Stack Software Developer</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   </Col>

      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link href="/courses/1234/home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/database.jpeg" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS2000 Database Design</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Relational and Non-relational Schemas</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   </Col>

   <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link href="/courses/1234/home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/systems.jpg" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS3000 Systems Programming</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Low-level programming, memory management, and operating system concepts.</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   </Col>

   <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link href="/courses/1234/home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/swe.jpeg" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS4000 Software Engineering</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Team-based development, version control, testing, and design patterns.</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   </Col>

   <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link href="/courses/1234/home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/networks.jpg" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5000 Computer Networks</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Network architectures, protocols, and distributed communication.</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   </Col>

   <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link href="/courses/1234/home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/ai.jpeg" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS6000 Artificial Intelligence</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Search, basic machine learning, and intelligent decision-making</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   </Col>

     <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link href="/courses/1234/home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/webdev.jpg" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS7000 Web Development</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Front-end and back-end development, APIs, and deployment basics.</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   </Col>
      </Row>
      </div></div>
);}
