const http = require("http")

const server = http.createServer((req, res) => 
{
    res.setHeader("Content-type", "text/html")
    if(req.url == "/" && req.method == "GET")
    {
        res.write("<html>")
        res.write("<head><title>Greeting page</title></head>")
        res.write("<body>")
        res.write("<h1>Hello world!</h1>")
        res.write("<form action=\"/create-user\" method=\"POST\">")
        res.write("<input type=\"text\" name=\"username\">")
        res.write("<button type=\"submit\" name=\"submit\">Submit</button>")
        res.write("</form>")
        res.write("</body>")
        res.write("</html>")
    }
    else if(req.url == "/users" || req.url == "/users/"  && req.method == "GET")
    {
        res.write("<html>")
        res.write("<head><title>Dummy users page</title></head>")
        res.write("<body>")
        res.write("<ul>")
        res.write("<li>User 1</li>")
        res.write("<li>User 2</li>")
        res.write("<li>User 3</li>")
        res.write("<li>User 4</li>")
        res.write("</ul>")
        res.write("</body>")
        res.write("</html>")
    }
    else if(req.url == "/create-user" || req.url == "/create-user/"  && req.method == "POST")
    {
        const body = []
        req.on("data", (chunk) => 
        {
            body.push(chunk)
        })
        req.on("end", () => 
        {
            const parsedBody = Buffer.concat(body).toString()
            const data = parsedBody.split("&")
            const username = data[0].split("=")[1]
            console.log(username)
        })
    }
    return res.end()
})

server.listen(3000)