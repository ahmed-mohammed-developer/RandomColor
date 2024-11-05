import './App.css'; // استيراد ملفات CSS للتنسيق
import RandomColor from './component/RandomColor/RandomColor';
import 'bootstrap/dist/css/bootstrap.min.css'; // استيراد ملفات CSS الخاصة بـ Bootstrap

function App() {
  return (
    <div className="App">
      <RandomColor />
    </div>
  );
}

export default App; // تصدير المكون App للاستخدام في ملفات أخرى
