import React from "react";
import Footer from "./components/Footer";
// import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainRoutes from "./MainRoutes";
import Items from "./components/Items"


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      item:[
        {
          id: 1,
          title: "macbook",
          img: "3b9a2b0ec3ad9c544778c16d6947adea.avif",
          desc: "Хороший macbook",
          category: "Nout",
          price: "200.4"
        },
        {
          id: 2,
          title: "iphone",
          img: "None_59a7092b-f2c4-40b9-9000-7987ecc6cd26.jpg",
          desc: "Хороший Iphone",
          category: "Phone",
          price: "199.99"
        },
        {
          id: 3,
          title: "airpods-pro",
          img: "airpods-pro-2022.webp",
          desc: "Хорошиe наушники",
          category: "наушники",
          price: "50.99"
        }
      ]
    }
  }

  render(){
  return (
  <div className="wrapper">
    <Navbar/>
    <MainRoutes/>
    <Items items={this.state.item}/>
    <Footer/>
  </div>
  )
}
}

export default App;
