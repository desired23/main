import Comic from '../models/comic.js'
export const getAll = (req, res) => {
    Comic.get_all(function (data) {
        res.send({ data })
    })
}
export const getById = (req, res) => {
    Comic.get_byId(req.params.id, function (data) {
        res.send(data)
    })
}
export const create = (req, res) => {
    Comic.add(req.body, function (data) {
        res.send({ data })
    })
}
export const update = (req, res) => {
    Comic.update(req.params.id, req.body, function (data) {
        res.send(data)
    })
}
export const remove = (req, res) => {
    Comic.delete(function (data) {
        res.send(data)
    })
}