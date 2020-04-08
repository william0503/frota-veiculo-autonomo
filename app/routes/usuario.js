var api = require('../api/usuario')
module.exports  = function(app) {
    
    app.route('/usuarios')
        .post(api.add)
        .get(api.list)

    app.route('/v1/usuarios/:usuarioId')
        .delete(api.remove)
        .get(api.find)
        .put(api.update)
}