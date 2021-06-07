import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import fantasybooks from './data/fantasy.json'
import historybooks from './data/history.json'
import horrorbooks from './data/horror.json'
import romancebooks from './data/romance.json'
import scifibooks from './data/scifi.json'
import BookList from './components/BookList'
import MyNav from './components/MyNav';
import Welcome from './components/Welcome'

function App() {
  return (
    <div>
      <MyNav brand='Rabz BookCorner' />
      <Welcome />
      <BookList fantasy={fantasybooks} history={historybooks} horror={horrorbooks} romance={romancebooks} scifi={scifibooks}/>           
    </div>
  );
}

export default App;
