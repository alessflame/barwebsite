import React from 'react'
import Section from './components/Section'
import imageSection from "../images/happiness-group.jpg";
import imageSection2 from "../images/gropu-work-drinks.jpg";


const title=`Il posto giusto per trovare Relax, divertimento, festeggiare i tuoi successi`;

const title2= `Puoi sfruttare le nostre aree di 'Co-Working' per lavorare 
davanti una bibita e conoscere nuove persone 
'creative' proprio come te`;

function Home() {
  return (
    <div className='home'>
    <Section img={imageSection} reverse={false} title="Relax" text={title} />
    <Section img={imageSection2} reverse={true} title="Co-Working" text={title2}/>
    </div>

  )
}

export default Home