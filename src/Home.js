import Header from './components/Header';
import Skills from './components/Skills';
import Credentials from './components/Credentials';
import Footer from './components/Footer';
import RecentWork from './components/RecentWork';
import FunWorks from './components/FunWorks';

function Home({data}) {

  const resumeData=data;

  return (
      <div className="lg:w-1/2 md:w-3/4 sm:w-100 p-4 m-auto overflow-x-hidden wrapper">
        <div className="mt-10">
          <Header author={resumeData.main} />
          <Credentials credentials={resumeData.main.credentials}/>
          <RecentWork projects={resumeData.projects} />
          <FunWorks projects={resumeData.funProjects} />
          <Skills skills={resumeData.tech} />
          <Footer />
        </div>
    </div>
    
  );
}


export default Home;
