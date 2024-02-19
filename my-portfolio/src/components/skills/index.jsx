import SkillsMarquee from "./skillsMarquee"

const Skills = () => {



    return (
        <div className="mb-32">
            <p className="underline decoration-cyan-400 text-center mx-auto p-5 w-3/4 text-3xl font-semibold
                leading-relaxed text-white underline-offset-8">
                Skills
            </p>
            <div>
                {<SkillsMarquee />}
            </div>
        </div>
    )
}

export default Skills