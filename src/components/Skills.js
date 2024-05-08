import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function Skills({skills}) {

  return (
    <section id="skills mt-20">
      <div className="">
          <div style={{ paddingBottom: '10px' }}>
            <h2 className="mb-5">
              Skills
            </h2>
            <div>
            <Stack direction="row" spacing={1}>
              {skills.map((skill) => (
                <Chip label={skill.name} />
              ))}
            </Stack>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;