import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../../context'
import StyledHero from './StyledHero';
import './project.css'

export default class Project extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props.match.params.slug);
        this.state = {
            slug: this.props.match.params.slug,

        };
    }
    static contextType = ProjectContext;

    render() {
        const { getProject } = this.context;
        const project = getProject(this.state.slug);
        if (!project) {
            return (
                <div className="error">

                    <div className='error-container'>
                        <div className="error-text-wrapper">
                            <div className="error-title" data-content="NO PROJECT">
                                NO PROJECT
                            </div>

                            <div className="error-subtitle" data-content="found">
                                found with those characteristics
                            </div>

                            <div className="error-buttons">
                                <Link className="error-button" to='/' >Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        const { heading, paragraph1, paragraph2, image, repo, link } = project
        const [mainImg, ...gallery] = image;
        return (
            <>
                <StyledHero img={mainImg}>
                    <h1>
                        {/* {project.heading} */}
                    </h1>
                </StyledHero>

                <section className="single-project">

                    <div className="project-info">
                        <article className="project-desc">
                            <h2>PROJECT DESCRIPTION:</h2>
                            <p>{paragraph1}</p>
                        </article>

                        <article className="project-link">
                            <h3>Repository: </h3>
                            <a href={repo}> GitHub Repo</a>
                            <br />
                            <br />
                            <h3>Web:</h3>
                            <a href={link}> {heading}</a>
                        </article>


                        <div className="project-charac">
                            <h2>TECHNOLOGY USED:</h2>
                            <ul className='charac-list'>
                                {paragraph2.map((item, index) => {
                                    return <li key={index}>- {item}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                </section>
                <section className='project-img-section'>
                <div className="project-images">
                    {gallery.map((item, index) => {
                        return <img key={index} src={item} alt={heading} />
                    })}
                </div>

                </section>
            </>
        );
    }
}