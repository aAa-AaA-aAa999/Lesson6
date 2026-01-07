const path = require("node:path")
const fs = require("node:fs/promises")
const http = require("node:http")
const PORT = 3000

const server = http.createServer(async (request, response)=>{
    response.setHeader("Content-Type", "text/html; charset=utf8")

    //Главная страница сайта
    if(request.url==='/'){
        response.statusCode = 200
        response.end(`
            <!DOCTYPE html>
            <html lang="ru">
            <body>
                <h1>Главная страница</h1>
                <a href="/contact">Контакты</a>
            </body>
            </html>
            `)
    }

    //Страница контактов
    else if (request.url==='/contact'){
        response.statusCode = 200
        response.end(`
            <!DOCTYPE html>
            <html lang="ru">
            <body>
                <h1>Ann</h1>
                <div>
                <a href="https://github.com/aAa-AaA-aAa999" target="_blank">
                My github
                </a>

                </div>
                <div>
                <a href="/">Назад</a>
                </div>
            </body>
            </html>
            `)
    }

    //Страница с json
    else if (request.url==='/api/info'){
        response.statusCode = 200
        response.setHeader("Content-Type", "application/json")
        response.end(JSON.stringify({
            "serverName": "MyPC",
            "version": "1.0.0",
            "status": "working"
        }))
    }

    //Страница не найдена
    else {
            response.statusCode = 404
            const imgPath = path.join(__dirname, 'rosi.png') 
            const img = await fs.readFile(imgPath) 
            response.setHeader("Content-Type", "image/png")
            response.end(img) 
        }
})

server.listen(PORT)
console.log("Серв был запущ")