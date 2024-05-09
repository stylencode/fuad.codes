import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function ProjectStack({projectStack}) {

 const ps = projectStack;

  return (
    <div className="container mt-20">
         <Stack direction="row" spacing={1}>
                {projectStack.map((sk) => (
                    <Chip label={sk.name} />
                ))}
        </Stack>
    </div>
  );
}

export default ProjectStack;