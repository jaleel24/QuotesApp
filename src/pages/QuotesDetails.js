import { Fragment } from "react";
import { useParams, Route, Link ,useRouteMatch} from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighLightedQuote from "../components/quotes/HighlightedQuote";
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
  const match =useRouteMatch()

  console.log(match);
  const quote = DUMMY_QUOTES.find((quotes) => quotes.id === param.quotesId);

  if (!quote) {
    return <NoQuotesFound />;
  }
  return (
    <Fragment>
      {/* <h1> Quotes Details page with id : {param.quotesId}</h1> */}
      <HighLightedQuote text={quote.text} author={quote.author} />
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
