import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import {Toolbar} from "./components/Toolbar/Toolbar";
import {Home} from "./pages/Home/Home";
import {Services} from "./pages/Services/Services";
import {Contact} from "./components/Contact/Contact";
import {Footer} from "./components/Footer/Footer";
import {About} from "./components/About/About";
import { LanguageContext } from "./contexts/language";
import { Stars } from "./components/Stars/Stars";
export default function App() {
    const [isLanguage, setLanguage] = React.useState('ES');
    const css = `
        body{
            background: #2D2E32;
            color: #FEFEFE;
            font-family: monospace;
            margin: 0px;
        }
        #root{
            overflow-x: hidden;
        }
        .app{
            margin: 0px;
        }
        p{
            font-size: 20px;
            line-height: 30px;
            font-family: system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji';
        }
        #stars-container{
            color: blue;
        }
    `;

    const switchLanguage = () => {
        setLanguage(isLanguage === 'EN' ? 'ES' : 'EN');
      };
    
    return (

        <div className={'app'}>
            <style>
                {css}
            </style>
            <Toolbar/>
            {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
  
        <LanguageContext.Provider value={
                {
                    lang: isLanguage,
                    switchLang: switchLanguage,
                }
            }>
                
            <Routes>
                    <Route path="/" element={<Layout />}>
                        
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="services" element={<Services />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="*" element={<Home />} />
                    </Route>
                </Routes>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Footer></Footer>
            <Toolbar />
        </LanguageContext.Provider>
  
        </div>
    );
}

function Layout() {
    return (
        <div>
            {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}




            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
            <Outlet />
        </div>
    );
}
