import 'bootstrap/dist/css/bootstrap.min.css'
import AdvancedItemList from './components/AdvancedItemList';
import QuestionBank from './components/QuestionBank';
import EnhancedQuestionBank from './components/EnhancedQuestionBank';

function App() {
  return (
    <div className="App">
      <h2>Ex4</h2>
      <AdvancedItemList/>
      <h2>Ex5</h2>
      <QuestionBank/>
      <h2>Ex6</h2>
      <EnhancedQuestionBank/>
    </div>
  );
}

export default App;
