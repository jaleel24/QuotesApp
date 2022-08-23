import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';
const NewQuote = ()=>{
    const {sendRequest, status} = useHttp(addQuote);
   const history = useHistory();

   useEffect(()=>{
    if(status ==='completed'){
        history.push('/quotes');
    }
   },[status,history])

    const  addQuoteHandler =(quoteData)=>{
        console.log(quoteData);
        sendRequest(quoteData);
        //! we are using the useHistory hook given by react-router-dom which will help
        //! us pragmatically navigate to the list of quotes when we hit the add quote button
        //! in other words once we submit a new quote
        // history.push('/quotes');
    }

    return <QuoteForm isLoading={status ==='pending'} onAddQuote={addQuoteHandler}/>

}
export default NewQuote;