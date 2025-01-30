import { skills } from "../../data/skills";
import './About.css';

export default function About(){

    return(
        <section className="about">
            <h2>About Me</h2>
            <div className="about-content">
                <div className="bio">
                    <p>I'm a passionate developer with experience in bulding web applications.
                    I specialize in React, UI UX Designs and Data Analytics with Microsoft EXcel, Power BI, MySQL and python. 
                    </p>
                </div>
                <div className="skills-grid">
                    {skills.map((skill) => (
                        <div key={skill.id} className="skills-card">
                            <skill.icon className="skill-icon" />
                            <h3>{skill.name}</h3>
                        </div>
                    ))}

                </div>

                <a 
                href="/resume.pdf"
                download
                className="btn btn-resume"
                >
                    Download Resume
                </a>
            </div>
        </section>
    )
}