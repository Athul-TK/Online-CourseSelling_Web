import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Course() {
    return (
        <>
            <section style={{ width: "100%", overflow: "hidden", height: "200vh", backgroundImage: "url('https://cbeditz.com/public/cbeditz/preview/plan-grey-powerpoint-background-images-4-11610970803buhvdlaevj.jpg')", backgroundSize: "cover", }}>
                <h1 className='text-center text-info mt-3 '>OUR COURSE</h1>
                <div className="row">
                    <Card style={{ width: '18rem', padding: "2px", marginTop: "60px", marginLeft: "30px" }}>
                        <Card.Img variant="top" src="https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=1920&h=1080&ar=1.91%3A1p" />
                        <Card.Body>
                            <Card.Title>
                                <h6 style={{ color: "gray" }}>7 Months </h6>
                                <h3>MEARN Stack Web Development </h3>

                            </Card.Title>
                            <Card.Text>
                                The MERN stack is a popular, open-source collection of JavaScript-based technologies used for building robust, scalable, and dynamic full-stack web applications
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card style={{ width: '18rem', padding: "2px", marginTop: "60px", marginLeft: "30px" }}>
                        <Card.Img variant="top" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg" />
                        <Card.Body>
                            <Card.Title><h6 style={{ color: "gray" }}>6 Months </h6>
                                <h3>PYTHON DATA SCIENCE ML - AI - & Power BI </h3></Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card style={{ width: '18rem', padding: "2px", marginTop: "60px", marginLeft: "30px" }}>
                        <Card.Img variant="top" src="https://www.marketresearchintellect.com/images/blogs/artificial-intelligence-software-market-booms-shaping-the-future-of-ict.webp" />
                        <Card.Body>
                            <Card.Title><h6 style={{ color: "gray" }}>7 Months </h6>
                                <h3>Robotics with AI & IoT Training </h3></Card.Title>
                            <Card.Text>
                                Robotics with AI & IoT training teaches you to build smart, connected, autonomous systems by merging mechanical engineering with Artificial Intelligence
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card style={{ width: '18rem', padding: "2px", marginTop: "60px", marginLeft: "30px" }}>
                        <Card.Img variant="top" src="https://i0.wp.com/magnitia.com/blog/wp-content/uploads/2023/04/Software-Tester.jpg?resize=1024%2C576&ssl=1" />
                        <Card.Body>
                            <Card.Title><h6 style={{ color: "gray" }}>5 Months </h6>
                                <h3>Software Testing Training </h3></Card.Title>
                            <Card.Text style={{ textJustify: "initial" }}>
                                Software testing training teaches the process of verifying and validating a software application to ensure it is free of bugs, meets technical requirements, and satisfies user needs efficiently
                            </Card.Text>
                        </Card.Body>

                    </Card>

                </div>
                <div className="row">
                    <Card style={{ width: '18rem', padding: "2px", marginTop: "60px", marginLeft: "30px" }}>
                        <Card.Img variant="top" src="https://itdeskindia.com/wp-content/uploads/2024/03/android.png" />
                        <Card.Body>
                            <Card.Title>
                                <h6 style={{ color: "gray" }}>7 Months </h6>
                                <h3>Flutter Training </h3>

                            </Card.Title>
                            <Card.Text>
                                Flutter training focuses on teaching the skills to build high-performance, cross-platform applications for mobile, web, and desktop using Google's Flutter UI toolkit and the Dart programming language
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card style={{ width: '18rem', padding: "2px", marginTop: "60px", marginLeft: "30px" }}>
                        <Card.Img variant="top" src="https://cambridgeinfotech.io/wp-content/uploads/2023/12/Java-Full-Stack.png.webp" />
                        <Card.Body>
                            <Card.Title><h6 style={{ color: "gray" }}>6 Months </h6>
                                <h3>PYTHON DATA SCIENCE ML - AI - & Power BI </h3></Card.Title>
                            <Card.Text>
                                Java Spring Full Stack Development involves using the Java programming language and the comprehensive Spring framework to build and manage every part of a complete web application
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card style={{ width: '18rem', padding: "2px", marginTop: "60px", marginLeft: "30px" }}>
                        <Card.Img variant="top" src="https://s44783.pcdn.co/in/wp-content/uploads/sites/3/2024/04/cyber-security-tech-1024x580.png" />
                        <Card.Body>
                            <Card.Title><h6 style={{ color: "gray" }}>7 Months </h6>
                                <h3>Cybersecurity </h3></Card.Title>
                            <Card.Text>
                                Cybersecurity is the practice of protecting systems, networks, programs, and data from digital attacks, aiming to ensure the confidentiality, integrity, and availability
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card style={{ width: '18rem', padding: "2px", marginTop: "60px", marginLeft: "30px" }}>
                        <Card.Img variant="top" src="https://cdn.prod.website-files.com/643d2eea03135260bdaca209/6585cea39ae01230757b9f31_QuantumCloud.webp" />
                        <Card.Body>
                            <Card.Title><h6 style={{ color: "gray" }}>5 Months </h6>
                                <h3> Cloud Computing</h3></Card.Title>
                            <Card.Text style={{ textJustify: "initial" }}>
                                Cloud computing delivers on-demand computing services—like servers, storage, databases, software, AI—over the internet, allowing users to access resources
                                </Card.Text>
                        </Card.Body>

                    </Card>

                </div>
            </section>
        </>
    )
}

export default Course