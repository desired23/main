import db from "../connect/database.js"
const User = (user) => {
    this.id = user.id
    this.username = user.username
    this.password = user.password
    this.role = user.role
    this.name = user.name
}

User.get_all = (result) => {
    db.query('SELECT * FROM user', function (err, user) {
        if (err) {
            result(null)
        } else {
            result(user);
        }
    })
}

User.get_byId = (id, result) => {
    db.query('SELECT * FROM user WHERE id = ?', id, function (err, user) {
        console.log(user[0]);
        if (err || user.length === 0) {
            result(null)
        } else {
            result(user[0]);
        }
    })
}

User.signup = (user, result) => {
    db.query('SELECT * FROM user WHERE username = ?', user.username, function (error, rows, fields) {
        if (error) {
            result({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
        } else {
            if (rows.length === 0) {
                // Tên người dùng chưa tồn tại, thêm người dùng mới
                db.query('INSERT INTO user SET ?', user, function (err, newUser) {
                    if (err) {
                        result({ error: 'Lỗi khi thêm người dùng mới' });
                    } else {
                        result({ id: newUser.insertId, ...user });
                    }
                });
            } else {
                // Tên người dùng đã tồn tại
                result({ error: 'Tài khoản đã tồn tại' });
            }
        }
    });
}

User.signin = (user, result) => {
    db.query('SELECT * FROM user WHERE username = ? && password =?', [user.username, user.password], function (error, rows, fields) {
        if (error) {
            result({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
        } else {
            if (rows.length != 0) {
                // Tên người dùng chưa tồn tại, thêm người dùng mới
                result(rows);
            } else {
                // Tên người dùng đã tồn tại
                result({ error: 'Tên đăng nhập hoặc mật khẩu không chính xác' });
            }
        }
    });
}

User.update = (id, newUser, result) => {
    console.log(newUser);
    db.query(`UPDATE user SET username=?, password=?, name=? WHERE id=${id}`,
        [newUser.username, newUser.password, newUser.name],
        function (err, comic) {
            if (err) {
                result(null)
            } else {
                result(newUser);
            }
        })
}

User.delete = (id, result) => {
    db.query('DELETE FROM user WHERE id = ?', id, function (err, user) {
        if (err) {
            result(null)
        } else {
            result("Xóa tài khoản thành công");
        }
    })
}
export default User