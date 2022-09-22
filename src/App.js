import './App.css';
import Nav from './components/Nav'
import TravelCard from './components/TravelCard'
import data from './data'

function App() {

  const travelData = data.map(item=>{
    return(
      <TravelCard
          key={item.id}
          item={item}/>
    )
  })

  return (
    <div className="App">
      <Nav/>
      <section>
        {travelData}
      </section>

    </div>
  );
}

export default App;
