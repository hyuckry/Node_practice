const mysql = require('mysql2');

const connection = mysql.createConnection({ 
})

function fetchFromAPI(callback) {

}

connection.connect((err) => {
    if (err) throw err;
    console.time('mysql');
    console.log('Successfully connected to mysql');

    fetchFromAPI((err, data) => {
        if (err) throw err;
        insertMySQL(connection.data.bpi, (err, results, fields) => {
            if (err) throw err;
            console.log('Successfully inserted ${results.affectedRows} documents into mysql');

            connection.query('SELECT * FROM Category ORDER BY CateId DESC LIMIT 0,1', (err, results, fields) => {
                if (err) throw err;
                console.log('MySQL: CateId is ${results[0].CateId} ');
                connection.end();
            })
        })
    })
    connection.end();
})

function insertCategory(connection, data, callback) {
    const values = [];
    const sql = 'INSERT INTO Category (CateName,CateDesc) VALUES ?';

    Object.keys(data).forEach((key) => {
        values.push([key, data[key]]);
    });
    connection.query(sql, [values], callback);
}