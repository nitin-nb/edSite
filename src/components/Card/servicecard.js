import React from 'react';
import './servicecard.css'


export default function ServiceCard() {
    const hrStyle = {
        backgroundColor: "#000", // Specify the desired color here
        height: "3px", // Adjust the height of the hr element as needed
        border: "none",
        margin: "5px 0", // Adjust the margin as needed
      };
    return (
        <section className="hero-section" style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
            <div>
                <h2 className='additionalText1'>OUR <span className='herotext2'>S</span>ERVICES</h2>
                <hr style={hrStyle}/>
            </div>
            <div className="card-grid">
                <a className="card1" href="/htd">
                    <div
                        className="card__background"
                        style={{
                            backgroundImage:
                                "url(https://pacific.co.in/wp-content/uploads/2020/03/Key-consideration-when-choosing-RPO-.jpg)",
                        }}
                    ></div>
                    <div className="card__content">
                        
                        <h3 className="card__heading">Hire,Train & Deploy</h3>
                        <p className="card__category">Acquiring and developing talent. It enables organizations to build capable teams and enhance their skills through training.</p>
                    </div>
                </a>
                <a className="card1" href="/lateral">
                    <div
                        className="card__background"
                        style={{
                            backgroundImage:
                                "url(https://whatfix.com/blog/wp-content/uploads/2022/11/instructional-design-software-1.png)",
                        }}
                    ></div>
                    <div className="card__content">
                        
                        <h3 className="card__heading">Lateral Training</h3>
                        <p className="card__category">Providing training and development opportunities to individuals who are already employed within an organization.</p>
                    </div>
                </a>
                <a className="card1" href="/mca">
                    <div
                        className="card__background"
                        style={{
                            backgroundImage:
                                "url(https://www.iimtindia.net/Blog/wp-content/uploads/2021/06/best-mca-college-in-delhi-ncr1.jpg)",
                        }}
                    ></div>
                    <div className="card__content">
                        
                        <h3 className="card__heading">MCA Program</h3>
                        <p className="card__category">Master of Computer Applications program is a postgraduate degree program that focuses on advanced concepts and skills in computer science.</p>
                    </div>
                </a>
                <a className="card1" href="/it">
                    <div
                        className="card__background"
                        style={{
                            backgroundImage:
                                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULl4qSMZw27u6rMpcwH1QuF3xJuC5En7ZDA&usqp=CAU)",
                        }}
                    ></div>
                    <div className="card__content">
                        <h3 className="card__heading">Institute Training</h3>
                        <p className="card__category">Training provided for educational institutions to enhance the skills and knowledge of individuals within a specific context.</p>
                    </div>
                </a>
            </div>
        </section>
    );
}