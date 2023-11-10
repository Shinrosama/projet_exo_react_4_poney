
import './Home.scss'
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";


const Home = () =>{

    const poneys = [
        {
          id: 1,
          name: "Poney 1",
          color: "red",
          age: 2,
          isMagic: true,
          img : "https://www.classequine.com/wp-content/uploads/2021/03/Pottok.jpg"
        },
        {
          id: 2,
          name: "Poney 2",
          color: "blue",
          age: 3,
          isMagic: false,
          img : "https://www.weblife.fr/wp-content/uploads/2012/11/poney.jpg"
        }, 
        {
          id: 3,
          name: "Poney 3",
          color: "green",
          age: 4,
          isMagic: true,
          img :"https://thumbs.dreamstime.com/b/poney-d-%C3%AEles-shetland-17344050.jpg"
        },
        {
          id: 4,
          name: "Poney 4",
          color: "yellow",
          age: 5,
          isMagic: false,
          img :"https://www.poney-club-de-grellery.fr/ressources/images/d280d4bd54d1.jpg"
        },
        {
          id: 5,
          name: "Poney 5",
          color: "purple",
          age: 6,
          isMagic: true,
          img :"https://i.pinimg.com/564x/b9/b0/18/b9b018c646368180e5ea6a1984d6408a.jpg"
        },
        {
          id: 6,
          name: "Poney 6",
          color: "pink",
          age: 7,
          isMagic: false,
          img :"https://i.pinimg.com/736x/87/71/8a/87718a5905e54000819195b9aa63f371.jpg"
        },
        {
          id: 7,
          name: "Poney 7",
          color: "black",
          age: 8,
          isMagic: true,
          img :"https://cdn.pixabay.com/photo/2019/03/29/21/35/shetland-pony-4090113_1280.jpg"
        },
        {
          id: 8,
          name: "Poney 8",
          color: "white",
          age: 9,
          isMagic: false,
          img :"https://www.schleich-s.com/media/catalog/product/1/3/13871_main_v18_tp_2.jpg"
        },
        {
          id: 9,
          name: "Poney 9",
          color: "brown",
          age: 10,
          isMagic: true,
          img :"https://chateaudechantilly.fr/app/uploads/2021/03/Ramoucho.jpg"
        },
        {
          id: 10,
          name: "Poney 10",
          color: "grey",
          age: 11,
          isMagic: false,
          img :"https://www.poney-club-de-grellery.fr/ressources/images/0ad83800cffd.jpg"
        },
      ];

    const infos = {
        author: "Poney Man",
        published: "01/01/2021",
        address: "12 rue du canasson, cheval-sur-mer",
      };


      //je cherche a récupérer les poneys Magiques

      const poneysIsMagic = poneys.filter ((poneymag) =>
      {return (poneymag.isMagic ===true)})

      // puis je cherche a ne récupérer que les 5 derniers poneys magiques

      const lastFivesPoneysIsMagic = poneysIsMagic.slice (-5)

    return(
        <>
            <Header/>
                <main className="container">
                    <h2>My Poney home</h2>
                    
                    {lastFivesPoneysIsMagic.map((myponey) =>{
                        return(
                            <article className='articles'>
                                <div className='img'>
                                    <img className='poneyimg1' src={myponey.img} alt="poney" />
                                </div>
                                <h2>{myponey.name}</h2>
                            </article>
                        )
                    })}

                </main>

            <Footer/>
        </>
    )
}

export default Home;