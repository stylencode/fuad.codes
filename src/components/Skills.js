import Skill from './Skill';

function Skills({skills}) {

  return (
    <section id="skills mb-4">
          <div style={{ paddingBottom: '10px' }}>
            <h2 className="mb-5 skills opacity-0">
              Skills
            </h2>
            <div className='flex skill-list'>
            
              {skills.map((skill) => (
                <Skill skill={skill} />
              ))}
       
            </div>
        </div>

    </section>
  );
}

export default Skills;