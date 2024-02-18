import React from 'react';
import './index.css'

const SkillsMarquee = () => {
    const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Tailwind CSS", "Git", "Bootstrap"]

    return(
        <div className="overflow-hidden mt-12 w-full md:w-3/4 mx-auto">
            <div className='text-white skills-marquee whitespace-nowrap'>
                {skills.map((skill, index) => (
                    <span key={index} className='mx-4 text-2xl font-medium'>{skill}</span>
                ))}
            </div>
        </div>
    )
}

export default SkillsMarquee;