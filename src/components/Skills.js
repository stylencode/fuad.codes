import Skill from './Skill';

function Skills({skills}) {

  return (
    <section id="skills" className="mb-4 lg:w-1/2 md:w-3/4 sm:w-100 p-4 m-auto overflow-x-hidden">
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