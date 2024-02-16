import db from "../connect/database.js"
const Comic = (comic) => {
    this.id = comic.id
    this.name = comic.name
    this.auth = comic.auth
    this.image = comic.image
    this.category = comic.category
    this.chapter = comic.chapter
    this.status = comic.status
    this.description = comic.description
}

Comic.get_all = (result) => {
    db.query('SELECT * FROM comic', function (err, comic) {
        if (err) {
            result(null)
        } else {
            result(comic);
        }
    })
}

Comic.get_byId = (id, result) => {
    // db.query('SELECT * FROM comic WHERE id = ?', id, function (err, comic) {
    //     console.log(comic[0]);
    //     if (err || comic.length === 0) {
    //         result(null)
    //     } else {
    //         result(comic[0]);
    //     }
    // })
    db.query('SELECT * FROM comic WHERE id = ?', id, function (err, comic) {
        if (err || comic.length === 0) {
            result(null);
        } else {
            const comicInfo = comic[0];

            // Lấy tất cả các chapter của comic thông qua khóa ngoại comic_id
            db.query('SELECT * FROM chapter WHERE comic_id = ?', id, function (err, chapters) {
                if (err) {
                    result(null);
                } else {
                    // Thêm danh sách các chapter vào thông tin của comic
                    comicInfo.chapters = chapters;

                    result(comicInfo);
                }
            });
        }
    });
}

Comic.add = (newComic, result) => {
    db.query('INSERT INTO comic SET ?', newComic, function (err, comic) {
        if (err) {
            result(null)
        } else {
            result({ id: comic.insertId, ...newComic });
        }
    })
}

Comic.update = (id, newComic, result) => {
    console.log(newComic);
    db.query(`UPDATE comic SET name=?, auth=?, image=?, category=?, chapter=?, status=?, description=? WHERE id=${id}`,
        [newComic.name, newComic.auth, newComic.image, newComic.category, newComic.chapter, newComic.status, newComic.description],
        function (err, comic) {
            if (err) {
                result(null)
            } else {
                result(newComic);
            }
        })
}

Comic.delete = (id, result) => {
    db.query('DELETE FROM comic WHERE id = ?', id, function (err, comic) {
        if (err) {
            result(null)
        } else {
            result("Xóa dữ liệu thành công");
        }
    })
}
export default Comic