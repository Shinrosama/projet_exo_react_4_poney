import Footer from "../component/footer/Footer"
import Header from "../component/header/Header"
import './Contact.scss'


const Contact = () => {


    return(

        <>
            <Header/>
                <div className="conte">
                    <form action="/ma-page-de-traitement" method="post" className="table">
                        <ul>
                            <li>
                            <label for="name">Nom&nbsp;:</label>
                            <input type="text" id="name" name="user_name" />
                            </li>
                            <li>
                            <label for="mail">E-mail&nbsp;:</label>
                            <input type="email" id="mail" name="user_mail" />
                            </li>
                            <li>
                            <label for="msg">Message&nbsp;:</label>
                            <textarea id="msg" name="user_message"></textarea>
                            </li>
                        </ul>
                    </form>
                </div>

            <Footer/>
        
        </>


    )
}

export default Contact