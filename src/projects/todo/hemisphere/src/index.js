import React from "react";
import ReactDOM from "react-dom/client";
import HemisphereDisplay from "./HemisphereDisplay"
// const App = ()=>{
//
// // this navigator.geolocation.grtCurentPosition function gets the coordinates
//   // navigator.geolocation.getCurrentPosition(
//   //   (position) => console.log(position),
//   //   (error) => console.log(error)
//   //   // (position) and (error) are call backs
//   // );
//
//   return(
//     <div>
//     latitude:
//     </div>
//   );
// }

class App extends React.Component {
  state = { latitude: null, errorMessage:'' }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState ({ latitude: position.coords.latitude })
      },
      (error) => {
        this.setState({ errorMessage: error.message })
      }
    );
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
  }

  render(){
      if(this.state.errorMessage && !this.state.latitude){
        return(<div>{ this.state.errorMessage }</div>)
      }
      else if ( !this.state.errorMessage && this.state.latitude) {
        return(<div> <HemisphereDisplay latitude={ this.state.latitude } /> </div>)
      }
      else {
        return(<div>Loading...</div>)
      }

  }
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <App />
)
