const mySql = require('mysql');

class MySQL {
    constructor(cfg) {
        this.connection = mySql.createConnection(cfg || this.#mySQLConfig);
        this.connection.connect((err) => {
            if (err) console.log(err);
            console.log('mySQl Connection Extablished');
        });
    }
    getBooks = (req, res) => this.#dbrequest(req,res, this.#getQuery);
    postBook = (req, res) => this.#dbrequest(req, res, this.#postQuery, {message: 'accept'});
    updateBook = (req, res) => this.#dbrequest(req, res, this.#putQuery, {message: 'done'});
    #dbrequest = (req, res, query, message) => {
        try {
            this.connection.query(query(req), (err, result) => {
                if (err) return res.status(400).json({ message: 'something wrong' });
                return res.status(200).json(message || result);
            });
        } catch (e) {
            console.log(e);
            return res.status(400).json({ message: 'something wrong' });
        }
    }
    #getQuery = (req) => {
        let query = 'SELECT * FROM books ';
        if (req.query.group) query += `GROUP BY ${req.query.group} `;
        if (req.query.sort) query += `ORDER BY ${req.query.sort} `;
        if (req.query.limit && req.query.offset) query += `LIMIT ${req.query.limit} OFFSET ${req.query.offset}`;
        return query;
    }
    #postQuery = (req) => {
        return `INSERT INTO books (title, date, author, description, image)
         VALUES ('${req.body.title}', '${req.body.date}', '${req.body.author}', '${req.body.description}', 
         '${req.body.image}');`;
    }
    #putQuery = (req) => {
        return   `UPDATE books SET ${req.body.changeParam} = '${req.body.newData}' WHERE (ID = ${req.query.tableID})`;
    }
    #mySQLConfig = {
        host: 'localhost',
        user: 'root',
        port: 3306,
        password: 'root',
        database: 'node_hw_db',
        insecureAuth: true,
        options: { trustedConnection: true }
    }
}

module.exports = MySQL;