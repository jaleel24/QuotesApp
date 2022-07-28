import QuoteList from '../components/quotes/QuoteList'
const DUMMY_QUOTES = [
    {
        id:'q1',
        author:'Jaleel',
        text:'Never put your guards down so quickly'
    },
    {
        id:'q2',
        author:'Sana',
        text:'Love for all hatred for none'
    },
];
const AllQuotes = ()=>{

    return <QuoteList quotes={DUMMY_QUOTES}/>

}
export default AllQuotes;