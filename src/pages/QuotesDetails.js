import { Fragment, useEffect } from "react";
import { useParams, Route, Link ,useRouteMatch} from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighLightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
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
  const {quotesId}=param;
  const match =useRouteMatch()
  const {sendRequest, status, data:loadedQuote, error} = useHttp(getSingleQuote, true);

  console.log(match);
  useEffect(()=>{
    sendRequest(quotesId);
  },[sendRequest,quotesId])
  //const quote = loadedQuote.find((quotes) => quotes.id === param.quotesId);

  if(status === 'pending'){
    return(
      <div className="center">
        <LoadingSpinner />
      </div>
    );
  }
  if(error){
      return <p className="centered">
        {error}
      </p>
  }

  if (!loadedQuote.text) {
    return <NoQuotesFound />;
  }
  return (
    <Fragment>
      {/* <h1> Quotes Details page with id : {param.quotesId}</h1> */}
      <HighLightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
{/* 
      <Route path={`/quotes/${param.quotesId}/comments`}> */}
        <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};
export default QuotesDetails;
