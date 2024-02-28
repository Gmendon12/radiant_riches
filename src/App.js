import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import Contents2 from './Components/Content2/Contents2';
import Signup from './Components/Signup/Signup';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <div id='body-contents'> 
      <Navbar/>

      <div id='contents-one'>
        <Content
        builder = "builder 1"
        image = '/images/best_choice.png'
        num = {1}
        best = "Best Choice"
        para = "WixPro 72 Inch Responsive Website Builder"
        paraText="- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for professional Websites and Online Stores(Black/Blue)"
        highlightsText='[What You Get]: Recieve the WixPro website builder suite, acess to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.'
        rating = '9.8'
        review='Exceptional'
        stars = '/images/five_star.png'
        />
         <Content
        builder = "builder 2"
        image = '/images/best_value.png'
        num = {2}
        best = "Best Value"
        para = "SiteCraft 68-Inch Ultimate Web Design Studio"
        paraText="- Advanced Site Creation Toolkit, Intuituve Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)"
        highlightsText='[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.'
        rating = '9.5'
        review='Excellent'
        stars = '/images/4.5_star.png'
        />
         <Content
        builder = "builder 3"
        num={3}
        para = "WixPro 72 Inch Responsive Website Builder"
        paraText=" - Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for professional Websites and Online Stores(Black/Blue)"
        highlightsText='[What You Get]: Recieve the WixPro website builder suite, acess to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.'
        rating = '9.3'
        review='Exceptional'
        stars='/images/4.5_star.png'
        />
        <Content 
        builder = "CDK"
        num={4}
        para = 'CDK Responsive Builder'
        paraText=' : An extensive library of widgets and apps, and details step-by-step guides'
        rating = {9.1}
        review = "Very Good"
        stars='/images/4_start.png'
        specs1='Building Responsive'
        specsRating1={9.9}
        specs2='Cool'
        specsRating2={8.9}
        specs3='Docs'
        specsRating3={8.9}
        />
      </div>
      <div id='related-deals-heading'>Related deals you might like for</div>

      <div id='content2-container'>
        <Contents2 
        cost = {39.96}
        originalCost={49.96}
        />
           <Contents2 
        cost = {39.96}
        originalCost={49.96}
        />
           <Contents2 
        cost = {39.96}
        originalCost={49.96}
        />
      </div>
      <Signup />
      </div>
      <Footer/>
    </>
  );
}


export default App;
