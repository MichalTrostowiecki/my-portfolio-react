import { Button, Modal } from 'flowbite-react';
import PropTypes from 'prop-types'



const ReadMore = ({ project, openModal, setOpenModal }) => {
  
	const techonologies = () => {
		const technologies = project.technologies[0].split(',');
		return technologies.map((tech, index) => {
			return <li className='m-1 flex-wrap text-sky-400/100' key={index}>{tech.trim()}</li>
		})
	}
  

  return (
	<>
		<Modal className='bg-black' dismissible show={openModal} onClose={() => setOpenModal(false)}>
			<Modal.Header>{project.name}</Modal.Header>
			<Modal.Body className='bg-black'>
				<img src={project.screenshot}></img>
				<div className="space-y-6">
					<div className="mt-2 text-base leading-relaxed text-white/65 dark:white">
					<h2 className='text-white  text-lg mb-1 underline decoration-sky-500 underline-offset-4'>
						Description:</h2>
						{project.description}
					</div>
					<h2 className='text-white text-lg underline underline-offset-4 decoration-sky-500'>
						Technologies:
					</h2>
					<ul className="flex text-base leading-relaxed">
						{techonologies()}
					</ul>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<a href={project.github} target='_blank' rel='noopener noreferrer'>
					<Button>GitHub</Button>
				</a>
				<a href={project.demo} target='_blank' rel='noopener noreferrer'>
					<Button color="gray">
						Demo
					</Button>
				</a>
			</Modal.Footer>
		</Modal>
	</>
  );
}

ReadMore.propTypes = {
	project: PropTypes.shape({
		name: PropTypes.string.isRequired,
		screenshot: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		github: PropTypes.string.isRequired,
		demo: PropTypes.string.isRequired,
		technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
	}).isRequired,
	openModal: PropTypes.bool.isRequired,
	setOpenModal: PropTypes.func.isRequired,
};

export default ReadMore;