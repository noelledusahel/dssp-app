import Hero from '../Hero/Hero';
import Section from '../Section/Section';
import Apiary from '../../img/apiary.png'
import Soil from '../../img/Soil.png'
import Learning from '../../img/Learning.png'
import biochar from '../../img/biochar.png'
import beeFrame from '../../img/bee-frame.png'
import davisStreet from '../../img/davis-street.png'



function LandingPage() {
    const soil = {
        icon: Soil,
        header: "Healing Soil in Place",
        text: 
        "At the foundation of our work is          modelling a replicable and sustainable soil remediation. We are committed to healing soil in place, applying inputs that are widely accessible such as wood chips, biochar and compost, and open knowledge sharing. Join us for a workshop, or volunteer with the project.",
        button : {text: "Event Page", link: <a href="https://www.w3schools.com">Visit W3Schools</a>},
        image: biochar
    }
    const apiary = {
        icon: Apiary,
        header: "DSSP Farm and Beekeeping Cooperative",
        text: 
        " The DSSP is a place to cultivate food sovereignty. We encourage anyone curious about growing food, building healthy soil, and exploring cooperative economies to reach out and get involved",
        button : {text: "Contact Us", link: <a href="https://www.w3schools.com">Visit W3Schools</a>},
        image: beeFrame
    }
    const learning = {
        icon: Learning,
        header: "Sugar Hill Learning Garden",
        text: 
       " Sugar Hill Learning Garden begins with documenting the stories of our elders, of current and former residents & business owners of N Davis Street and the community once known as Sugar Hill. We are collaborating with artists, storytellers and historians to build a space that honors the neighborhood's history and provides context to its present and future. Walk the land with us and learn how to get involved in the Sugar Hill Learning Garden.",
        button : {text: "Events Page", link: <a href="https://www.w3schools.com">Visit W3Schools</a>},
        image: davisStreet
    }
  return (
    <div className="landingPage">
      <Hero/>
      <Section
        sectionName={soil}
        order="right"/>
      <Section
        sectionName={apiary}
        order="left"/>
      <Section
        sectionName={learning}
        order="right"/>
    </div>
  );
}

export default LandingPage;
