import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Skill from './Skill';

function ProjectStack({projectStack}) {

 const ps = projectStack;

  return (
    <div className="container pt-4 pb-4">
       <div className='skill-list'>
                {projectStack.map((skill) => (
                   <Skill skill={skill} />
                ))}
      </div>
    </div>
  );
}

export default ProjectStack;