import {Route, Switch, Redirect} from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuotesDetails from './pages/QuotesDetails';
import Layout from './components/layout/Layout';
function App() {
  return (
   <Layout>
     <Switch>
      <Route path="/" exact><Redirect to="/quotes" /></Route>
      <Route path="/quotes" exact ><AllQuotes /></Route>
      <Route path="/quotes/:quotesId"><QuotesDetails /></Route>
      {/* <Route path="/quotes/:quotesId/comments"><Comments /></Route> */}
      <Route path="/newQuote"><NewQuote /></Route>
      
    </Switch>
    
   </Layout>
  );
}

export default App;
