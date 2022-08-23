import QuoteList from '../components/quotes/QuoteList';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';
import { useEffect } from 'react';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import LoadingSpinner from '../components/UI/LoadingSpinner';
// // const DUMMY_QUOTES = [
// //     {
// //         id:'q1',
// //         author:'Jaleel',
// //         text:'Never put your guards down so quickly'
// //     },
// //     {
// //         id:'q2',
// //         author:'Sana',
// //         text:'Love for all hatred for none'
// //     },
// ];
const AllQuotes = ()=>{
   const {sendRequest,status, data:loadedQuotes,error} = useHttp(getAllQuotes,true);


   useEffect( ()=>{
    sendRequest();
   },[sendRequest]);

   if(status === 'pending'){
    return (
        <div className='centered'>
            <LoadingSpinner />
        </div>
    );
   }
   if(status ==='error'){
    return(
        <div className='centered-focus'>
            {error}
        </div>
    )
   }
   if(status === 'completed' && (!loadedQuotes || loadedQuotes.length ===0)){
    return <NoQuotesFound />
   }

    return <QuoteList quotes={loadedQuotes}/>
  
}
export default AllQuotes;