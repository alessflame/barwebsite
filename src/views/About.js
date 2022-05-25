import React from 'react'
import AvatarCard from './components/AvatarCard'
import BoxCard from './components/BoxCard'
import avatar1 from "../images/avatar-man1.jpg";
import avatar2 from "../images/avatar-woman.jpg";
import avatar3 from "../images/avatar-man2.jpg";
import photo1 from "../images/girls-drink.jpg";
import photo2 from "../images/group-work.jpg";
import photo3 from "../images/drinks-group.jpg";

import Row from './components/Row';
import ListElements from './components/ListElements';
import Section from './components/Section';

const cards=
[
 <AvatarCard img={avatar1} name="Marco" text="Amo questo locale! Posso lavorare qui ogni pomeriggio." />,
  <AvatarCard img={avatar2} name="Giulia" text="Vengo qua ogni sera solo per divertirmi un po'!" />,
  <AvatarCard img={avatar3} name="Roberto" text="Top! Posso rilassarmi e trovare persone da cui
   prendere ispirazione!" />
]

const row=[
  <Row text="Ispirare le persone" />,
  <Row text="Divertimento e Relax" />,
  <Row text="Unire produttività e benessere della persona" />
]




function About() {
  return (

   
    <div> 
  
    <BoxCard cards={cards} background="#BFCDD9"/>

    <Section img={photo1} title="RELAX" text="Marta e Virginia, clienti abituali da quasi 3 anni."/>
    <Section  img={photo2} reverse={true} title="FOCUS" text="I ragazzi della 'SCHOOL-ADW' si riuniscono da noi 
    la domenica mattina per studiare in leggerezza."/>
    <Section  img={photo3} title="BENESSERE" text="Marco ha deciso di festeggiare con noi lo scorso Sabato 
    per brindare alla nascita della sua nuova attività."/>

    <ListElements title="i nostri obiettivi:" elements={row} />
    
    </div>
  )
}

export default About