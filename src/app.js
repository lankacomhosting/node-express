// src/app.js
import express from "express";
import cors from "cors";
import morgan from "morgan";

import * as middleware from "./utils/middleware.js";
import helloRoute from "./routes/helloRouter.js";

const app = express();

// parse json request body
app.use(express.json());

// enable cors
app.use(cors());

// request logger middleware
app.use(morgan("tiny"));

// Serve colorful HTML on root route
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Welcome to Node Express</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #6b73ff 0%, #000dff 100%);
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        h1 {
          font-size: 3rem;
          margin-bottom: 0.5rem;
          text-shadow: 2px 2px 8px rgba(0,0,0,0.4);
        }
        p {
          font-size: 1.25rem;
          margin-top: 0;
          font-weight: 300;
          color: #d0e8ff;
          text-align: center;
          max-width: 600px;
          text-shadow: 1px 1px 4px rgba(0,0,0,0.3);
        }
        a {
          margin-top: 2rem;
          padding: 0.75rem 1.5rem;
          font-weight: bold;
          color: #000dff;
          background: #d0e8ff;
          border-radius: 8px;
          text-decoration: none;
          box-shadow: 0 4px 10px rgba(0, 13, 255, 0.3);
          transition: background 0.3s ease, color 0.3s ease;
        }
        a:hover {
          background: #000dff;
          color: white;
          box-shadow: 0 6px 15px rgba(208, 232, 255, 0.7);
        }
      </style>
    </head>
    <body>
      <h1>Welcome to Node Express!</h1>
      <p>This is a simple colorful app running on your Express server.</p>
      <a href="/hello">Go to Hello Route</a>
    </body>
    </html>
  `);
});

app.use("/hello", helloRoute);

// custom middleware
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

export default app;

