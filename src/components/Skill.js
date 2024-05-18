import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';

function Skill({skill}) {

    const s = skill;

  return (
        <div className='skill-item'>
            {s.name} 
            <i class={s.class}></i>
        </div>
  );
}

export default Skill;