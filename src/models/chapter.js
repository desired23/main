import db from "../connect/database.js"
const Chapter = (chapter) => {
    this.id = chapter.id
    this.chap = chapter.chap
    this.image = chapter.image
    this.comic_id = chapter.comic_id
}

// Chapter.get_all = (result) => {
//     db.query('SELECT * FROM comic', function (err, comic) {
//         if (err) {
//             result(null)
//         } else {
//             result(comic);
//         }
//     })
// }

Chapter.get_byId = (id, result) => {
    db.query('SELECT * FROM chapter WHERE id = ?', id, function (err, chapter) {
        console.log(chapter[0]);
        if (err || chapter.length === 0) {
            result(null)
        } else {
            result(chapter[0]);
        }
    })
}

Chapter.add = (newChapter, result) => {
    db.query('INSERT INTO chapter SET ?', newChapter, function (err, chapter) {
        if (err) {
            result(null)
        } else {
            result({ id: comic.insertId, ...newChapter });
        }
    })
}

Chapter.update = (id, newChapter, result) => {
    console.log(newChapter);
    db.query(`UPDATE chapter SET chap=?, image=?, comic_id=? WHERE id=${id}`,
        [newChapter.chap, newChapter.image, newChapter.comic_id],
        function (err, chapter) {
            if (err) {
                result(null)
            } else {
                result(newChapter);
            }
        })
}

Chapter.delete = (id, result) => {
    db.query('DELETE FROM chapter WHERE id = ?', id, function (err, chapter) {
        if (err) {
            result(null)
        } else {
            result("Xóa dữ liệu thành công");
        }
    })
}
export default Chapter