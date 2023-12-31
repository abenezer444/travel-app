import TopContent from './components/TopContent';
import Card from './components/Card';
import Data from './components/Data.js';
import './App.css';


const contents = Data.map(content => {
  return (<Card title={content.title} location={content.location} mapUrl={content.googleMapsUrl} startDate={content.startDate} endDate={content.endDate} description={content.description} imageUrl={content.imageUrl}/>)
})
console.log(contents);
function App() {
  return (
    <div className='app'>
      <TopContent />
      {contents}
    </div>
  );
}

export default App;
        // title: "Mount Fuji",
        // location: "Japan",
        // googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        // startDate: "12 Jan, 2021",
        // endDate: "24 Jan, 2021",
        // description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        // imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
