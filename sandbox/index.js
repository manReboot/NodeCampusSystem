
const listener = (req,res) =>{

    console.log(req.method,req.url,req.headers)
    res.setHeader('Content-type','text/html')
    const method = req.method

    if(req.url==='/')
    {
        genForm(req,res);
    }
 
    if(req.url =='/message' && method == 'POST')
    { genDisplay(res,req)}

}

const genForm = (req,res) => {
    res.write('<html>');
    res.write('<head><title>Enter New Message</title><head>');
    res.write('<body><H1>This new form </H1><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
}


const genDisplay = (res, req) => {

    console.log('genDisplay')
    var txt=null  
    const body = []

    req.on('data',(chunk)=>{
                console.log(chunk)
        body.push(chunk)

    })

    req.on('end',()=>{
      const parsedBdy  = Buffer.concat(body).toString()

        console.log(parsedBdy)
        txt = parsedBdy.split('=')[1]
        console.log(txt)

    res.setHeader('Content-Type','text/xml')
    res.write('<html>')
    res.write('<head><h1>Entered Message</h1></head><br/>')
    res.write('<body>'+ txt +'</body>')
    res.write("</html>")
    return res.end();

    })


}


module.exports = listener