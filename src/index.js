import ReactDOM from 'react-dom'
import Header from './Header';
import Main from './Main';

function App () {
    return (
        <div class="container">
           <Header />
           <Main />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));