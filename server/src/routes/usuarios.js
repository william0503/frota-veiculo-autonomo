var api = require('../Controllers/UsuariosController')
module.exports  = function(app) {
    
    app.route('/usuarios')
        .post(api.add)
        .get(api.list)

    app.route('/usuarios/:usuarioId')
        .delete(api.remove)
        .get(api.find)
        .put(api.update)
}