import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = ()=>{
   const history = useHistory();

    const  addQuoteHandler =(quoteData)=>{
        console.log(quoteData);
        //! we are using the useHistory hook given by react-router-dom which will help
        //! us pragmatically navigate to the list of quotes when we hit the add quote button
        //! in other words once we submit a new quote
        history.push('/quotes');
    }

    return <QuoteForm onAddQuote={addQuoteHandler}/>

}
export default NewQuote;