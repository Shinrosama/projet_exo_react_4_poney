import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import './About.scss'


const About = () => {

    const infos = {
        author: "Poney Man",
        published: "01/01/2021",
        address: "12 rue du canasson, cheval-sur-mer",
      };



    return(

        <>
            <Header/>
                <div className="back">
                    <p>{infos.author} </p>
                    <p>{infos.published} </p>
                    <p>{infos.address} </p>
                </div>

            <Footer/>
        
        </>

    )
}

export default About;