import RoleService from '../services/RoleService';

const roleServices = new RoleService();

class RoleController {
    async create(req, res) {
        try {
            return res
                .status(200)
                .json(await roleServices.createRole(req.body));
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    async get(req, res) {
        try {
            return res
                .status(200)
                .json(await roleServices.getRole(req.body, req.user));
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    async delete(req, res) {
        try {
            return res
                .status(200)
                .json(await roleServices.deleteRole(req.body, req.user));
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    async update(req, res) {
        try {
            return res
                .status(200)
                .json(await roleServices.updateRole(req.body));
        } catch (error) {
            return res.status(404).json(error);
        }
    }
}

export default RoleController;
