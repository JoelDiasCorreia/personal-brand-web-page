const express = require("express");
const fs = require("fs");
const path = require("path");
const React = require("react");
const bodyparser = require('body-parser');
const mailer = require('./services/mailer');
const ReactDOMServer = require("react-dom/server");
import App from '../client/App';
import { StaticRouter } from "react-router-dom/server";
import {ContactFormBody} from "./models/contactFormBody";

const server = express();

server.listen( process.env.PORT || 80 , () => {
    console.log(`Server running on http://localhost:${process.env.PORT || 80 }`);
})
server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'));
server.use('/', express.static(path.join(__dirname, 'static')));

const manifest = fs.readFileSync(
    path.join(__dirname, 'static/manifest.json'),
    'utf-8'
)
const assets = JSON.parse(manifest);
server.use(bodyparser.json());

server.get('/robots.txt', (req:any, res:any) => {
    res.sendFile(path.join(__dirname, 'static/assets/robots.txt'));
})

server.get('/sitemap.xml', (req:any, res:any) => {
    res.sendFile(path.join(__dirname, 'static/assets/sitemap.xml'));
})


server.get('/google41a619dd2c562c55.html', (req:any, res:any) => {
    res.sendFile(path.join(__dirname, 'static/assets/google41a619dd2c562c55.html'));
})


server.get('/*', (req:any, res:any) => {
    const component = ReactDOMServer.renderToString(
        <StaticRouter location={req.url}>
            <App ></App>
        </StaticRouter>
    );
    res.render('client', { assets, component });
})

server.post('/contacto', async (req: any, res: any) => {
    try {
        const success = await mailer.sendContactFormEmail(req.body as ContactFormBody);
        res.status(200).send({success: success});
    }catch (e) {
        res.status(504).send(e)
    }
})
