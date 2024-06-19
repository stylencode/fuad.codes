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
      <div className="pt-2 wrapper header">
            <Header author={resumeData.main} />
            <Credentials credentials={resumeData.main.credentials}/>
            <div>
              <svg class="waves" xmlns="http://www.w3.org/2000/svg"  viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
              <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              </defs>
                <g class="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                </g>
              </svg>
              </div>
        </div>
        <div className="bg-white pt-10">
            <RecentWork projects={resumeData.projects} />
        
            <FunWorks projects={resumeData.funProjects} />
            <Skills skills={resumeData.tech} />
            <Footer />
        </div>
    </ReactLenis>
}


export default Home;
