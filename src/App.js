import logo from './logo.svg';
import './App.css';
import Left from './components/leftcomponent';
import Right from './components/rightcomponent';
import Middle from './components/middlecomponent';
import Nav from './components/nav';
import CharacterControllerDemo from './components/world';
function App() {
  return (
    <>
    <Nav/>
    <div id='maincontainer'>
      <div id='leftcontainer'>
        <Left/>
      </div>
      <div id='middlecontainer'>
        <Middle/>
        {/* <a href='newindex.html'>click</a> */}
        {/* <CharacterControllerDemo /> */}
      </div>
      <div id='rightcontainer'>
        <Right />
      </div>
    </div>
    </>
  );
}

export default App;
