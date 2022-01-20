import { addNewUser, getAllUsers, updateUser, deleteUser, getUserById } from "../controllers/controller"

const routes = (app) => {

    app.route('/users')
        .get(getAllUsers)
        .post(addNewUser)
    
    app.route('/user/:userID')
        .get(getUserById)
        .put(updateUser)
        .delete(deleteUser)
}

export default routes;