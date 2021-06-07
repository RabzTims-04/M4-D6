import {Tab, Tabs} from 'react-bootstrap'
import SingleBook from './SingleBook'
import FilterBooklist from './FilterBookList';
import fantasybooks from '../data/fantasy.json'
import historybooks from '../data/history.json'
import horrorbooks from '../data/horror.json'
import romancebooks from '../data/romance.json'
import scifibooks from '../data/scifi.json'


const BookList =(props)=>(
    <Tabs className="justify-content-center" defaultActiveKey="fantasy" id="uncontrolled-tab-example">
             
        <Tab eventKey="fantasy" title="fantasy">
               <FilterBooklist book={fantasybooks}/>
               <hr/>
                <SingleBook name={props['fantasy']}/>
        </Tab>
        <Tab eventKey="history" title="history">
                 <FilterBooklist book={historybooks}/>
                 <hr/>
                <SingleBook name={props['history']}/>
        </Tab>
        <Tab eventKey="horror" title="horror" >
                <FilterBooklist book={horrorbooks}/>
                <hr/>
                <SingleBook name={props['horror']}/>
        </Tab>
        <Tab eventKey="romance" title="romance">
                <FilterBooklist book={romancebooks}/>
                <hr/>
                <SingleBook name={props['romance']}/>
        </Tab>
        <Tab eventKey="scifi" title="scifi" >
                <FilterBooklist book={scifibooks}/>
                <hr/>
                <SingleBook name={props['scifi']}/>
        </Tab>
</Tabs>

)
export default BookList