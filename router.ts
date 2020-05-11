export function Router(app) {
    app.get('/', async (req, rep) => {
        rep.render('index')
    })
}