import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import {Toolbar} from "./components/Toolbar/Toolbar";
import {Home} from "./components/Home/Home";
export default function App() {
    const css = `
        body{
            background: #2D2E32;
            color: #FEFEFE;
            font-family: monospace;
        }
        .app{
            margin: 0px;
        }
    `
    return (

        <div className={'app'}>
            <style>
                {css}
            </style>
            <Toolbar/>
            {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="portfolio" element={<Dashboard />} />
                    <Route path="services" element={<Dashboard />} />
                    <Route path="contact" element={<Dashboard />} />
                    {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
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


function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}
