import Header from './components/Header';
import Skills from './components/Skills';
import Credentials from './components/Credentials';
import Footer from './components/Footer';
import RecentWork from './components/RecentWork';
import FunWorks from './components/FunWorks';

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

import Animations from './utils/Animations';



function Home({data}) {

  const resumeData=data;
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  const animations = Animations();

  return <ReactLenis root>
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
    </ReactLenis>
}


export default Home;
