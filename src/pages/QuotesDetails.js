import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighLightedQuote from '../components/quotes/HighlightedQuote';
import NoQuotesFound from "../components/quotes/NoQuotesFound";
const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Jaleel",
    text: "Never put your guards down so quickly",
  },
  {
    id: "q2",
    author: "Sana",
    text: "Love for all hatred for none",
  },
];
const QuotesDetails = (props) => {
  const param = useParams();
  const quote = DUMMY_QUOTES.find( quotes=> quotes.id === param.quotesId)

  if(!quote){
    return <NoQuotesFound />
  }
  return (
    <Fragment>
      <h1> Quotes Details page with id : {param.quotesId}</h1>
      <HighLightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${param.quotesId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};
export default QuotesDetails;
