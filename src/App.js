import './App.css';
import Header from './components/Header';
import Item from './components/Item';

// import Accessories from './assets/Desktop-Accessoreis.jpg';
import ModelS from './assets/Desktop-ModelS.jpeg';
// import Model3 from './assets/Desktop-Model3.jpeg';
import ModelX from './assets/Desktop-ModelY.jpeg';
import ModelY from './assets/Desktop-ModelY.jpeg';
import SolarPanels from './assets/Desktop-SolarPanels.jpeg';
import SolarRoof from './assets/Desktop-SolarRoof.jpeg';



function App() {
  return (
    <>
    <div className="App">
      <Header />
      <div className="app__itemsContainer">
        <Item
          title="Lowest Cost Solar Panels in America"
          desc="Money-Back Guarantee"
          descLink=""
          backgroundImg={SolarPanels}
          leftBtnTxt="ORDER NOW"
          leftBtnLint=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model S"
          desc="$69,420"
          descLink=""
          backgroundImg={ModelS}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLint=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model X"
          desc="Money-Back Guarantee"
          descLink=""
          backgroundImg={ModelX}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLint=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model Y"
          desc="Money-Back Guarantee"
          descLink=""
          backgroundImg={ModelY}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLint=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
          <Item
          title="Solar for New Roofs"
          desc="Money-Back Guarantee"
          descLink=""
          backgroundImg={SolarRoof}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLint=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
      </div>
      </div>
      </>
  );
}

export default App;
