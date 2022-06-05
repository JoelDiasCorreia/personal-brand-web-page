const express = require("express");
const fs = require("fs");
const path = require("path");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
import App from '../client/App';
import { StaticRouter } from "react-router-dom/server";

const server = express();

server.listen( process.env.PORT || 80, () => {
    console.log(`Server running on http://localhost:3000`);
})
server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'));
server.use('/', express.static(path.join(__dirname, 'static')));

const manifest = fs.readFileSync(
    path.join(__dirname, 'static/manifest.json'),
    'utf-8'
)
const assets = JSON.parse(manifest);

server.get('/*', (req:any, res:any) => {
    const component = ReactDOMServer.renderToString(
        <StaticRouter location={req.url}>
            <App ></App>
        </StaticRouter>
    );
    res.render('client', { assets, component });
})
