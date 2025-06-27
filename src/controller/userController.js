
 class UserController {
     obtenerUsuarios(req, res) {
    res.send("Listado de usuarios");
  }
}   

export default new UserController();