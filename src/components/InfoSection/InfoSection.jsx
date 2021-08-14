import React from 'react'
import './infoSection.css'
import { Link } from 'react-router-dom'
import Loading from '../Loading'

import { withProjectConsumer } from '../../context'

function ProjectContainer({context}){

    const {loading, projects} = context
    // console.log(projects[0].slug);
    if (loading) {
        return <Loading />
    }
    return (
        <section className='infoSection'>
            {projects.map((item, index) => (
                <div className="container" key={index}>
                    <div className="columnLeft">
                        <h1>{item.heading}</h1>
                        <p>{item.paragraph1}</p>

                        {/* -- LINK -- */}
                        <p>Check the Project:</p>
                        <Link to={item.slug} className="link">
                        {/* <Link to={projects.slug} className="link"> */}
                            <span className="mask">
                                <div className="link-container">
                                    <span className="link-title1 title">{item.buttonLabel}</span>
                                    <span className="link-title2 title">{item.buttonLabel}</span>
                                </div>
                            </span>
                            <div className="link-icon">
                                <svg className="icon" width="24" height="24" fillRule="evenodd" clipRule="evenodd">
                                    <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                                </svg>
                                <svg className="icon" width="24" height="24" fillRule="evenodd" clipRule="evenodd">
                                    <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                                </svg>
                            </div>
                        </Link>


                        <p>Go to:</p>

                        {/* -- GO TO -- */}
                        <a href={item.link} className="link">
                            <span className="mask">
                                <div className="link-container">
                                    <span className="link-title1 title">{item.heading}</span>
                                    <span className="link-title2 title">{item.heading}</span>
                                </div>
                            </span>
                            <div className="link-icon">
                                <svg className="icon" width="24" height="24" fillRule="evenodd" clipRule="evenodd">
                                    <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                                </svg>
                                <svg className="icon" width="24" height="24" fillRule="evenodd" clipRule="evenodd">
                                    <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                                </svg>
                            </div>
                        </a>

                    </div>
                    <div className="columnRight">
                        <img src={item.image[0]} alt={item.label} />
                    </div>
                </div>
            ))}
        </section>
    )
}

export default withProjectConsumer(ProjectContainer)