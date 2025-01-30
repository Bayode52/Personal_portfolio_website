import { useEffect, useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import './Projects.css';

export default function Projects(){

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projects.json').then((res) => res.json()).then((data) => setProjects(data));
    }, []);

    return(
        <section className="projects">
            <h2>Featured Projects</h2>
            <div className="project-grid">
                {projects.map((project) =>(
                    <div key={project.id} className="project-card">
                        <img 
                        src={project.image}
                        alt={project.title}
                        loading="50%"
                        />
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noreferrer"><FiGithub /> Code</a>
                                <a href={project.demo} target="_blank" rel="noreferrer"><FiExternalLink /> Demo</a>
                            </div>
                        </div>
                    </div>
                    
                ))}
            </div>
        </section>
    )
}