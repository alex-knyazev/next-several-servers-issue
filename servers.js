const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'

const sites = [
    {
        hostname: 'localhost',
        port: 3000,
    },
    {
        hostname: 'localhost',
        port: 3001,
    },
    {
        hostname: 'localhost',
        port: 3002,
    },
    {
        hostname: 'localhost',
        port: 3003,
    }
]

// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname: sites[0].hostname, port: sites[0].port })
const handle = app.getRequestHandler()
app.prepare().then(runDevServers)

function runDevServers() {
    for (const site of sites) {
        createServer(async (req, res) => {
            try {
                const parsedUrl = parse(req.url, true)
                await handle(req, res, parsedUrl)
            } catch (err) {
              console.error('Error occurred handling', req.url, err)
              res.statusCode = 500
              res.end('internal server error')
            }
          }).listen(site.port, (err) => {
            if (err) throw err
            console.log(`> Ready on http://${site.hostname}:${site.port}`)
          })
    }
    
}


  