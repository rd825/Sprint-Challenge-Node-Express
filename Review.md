# Review Questions

## What is Node.js? <br>
Node.js is a Javascript runtime environment that enables developers to run JS code outside of a browser. This enables us to do things that were previously only possible through server-side languages like C++, Python, etc. Node.js relies on an async event loop and is single-threaded. Because of this, Node.js rarely encounters blocking behavior (i.e. waiting for a non-JS operation to complete).    
<br><br>

## What is Express? <br>
Express is a lightweight web app framework that sits on top of Node.js. It makes using Node more efficient and extensible (see next answer).
<br><br>

## Mention two parts of Express that you learned about this week. <br>
We learned about Express Middleware (see next answer) and Server-side Routing. 
<br><br>

## What is Middleware? <br>
In Express, middleware is a function that introduces extra functionality to the server (in the order the middlewares are introduced). We learned about three flavors of middleware: built-in, third-party, and custom. Regardless of flavor, middleware has the ability to manipulate the request and response objects. It then calls the next middleware via next().
<br><br>

## What is a Resource? <br>
A web resource is any identifiable thing on the web. They are identified by Uniform Resource Indicators, the most common of which are URLs. In our RESTful APIs, we have a single URL per resource and execute different code based on the URL and HTTP method used.
<br><br>

## What can the API return to help clients know if a request was successful? <br>
HTTP Status Codes, particularly those numbered in the 200s, will let clients know that requests were successful. For basic requests, 200 (OK),201 (Created), and 202 (Accepted) will suffice. Furthermore, the API can return JSON beyond a status code: a message, the requested data, etc. Simply put, we use res.status(2XX).json({y: "z"}) to indicate success.
<br><br>

## How can we partition our application into sub-applications? <br>
Luis says it's important to separate our concerns to write clearer code; to do this, we might break up files by type, feature, or some hybrid of those. The way we break apart files is by using exports and imports. We use module.exports for the former and require() for the latter. 
<br><br>

## What is express.json() and why do we need it? <br>
Express.json() is a middleware for Express. We need to tell the server to use it with server.use(). It's necessary to enable Express to parse JSON payloads, which would not be possible otherwise. Since we're concerned with JSON-centric APIs at this point, it's absolutely essential.
<br><br>