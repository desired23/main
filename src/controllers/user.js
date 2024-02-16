import User from '../models/user.js'
export const getAll = (req, res) => {
    User.get_all(function (data) {
        res.send({ data })
    })
}
export const getById = (req, res) => {
    User.get_byId(req.params.id, function (data) {
        res.send(data)
    })
}
export const signup = (req, res) => {
    User.signup(req.body, function (data) {
        res.send({ data })
    })
}
export const signin = (req, res) => {
    User.signin(req.body, function (data) {
        res.send({ data })
    })
}
export const update = (req, res) => {
    User.update(req.params.id, req.body, function (data) {
        res.send(data)
    })
}
export const remove = (req, res) => {
    User.delete(req.params.id, function (data) {
        res.send(data)
    })
}