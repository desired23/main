import Chapter from '../models/chapter.js'
// export const getAll = (req, res) => {
//     Chapter.get_all(function (data) {
//         res.send({ data })
//     })
// }
export const getById = (req, res) => {
    Chapter.get_byId(req.params.id, function (data) {
        res.send(data)
    })
}
export const create = (req, res) => {
    Chapter.add(req.body, function (data) {
        res.send({ data })
    })
}
export const update = (req, res) => {
    Chapter.update(req.params.id, req.body, function (data) {
        res.send(data)
    })
}
export const remove = (req, res) => {
    Chapter.delete(function (data) {
        res.send(data)
    })
}