// // // // const mysql = require('mysql');

// // // // const conection = mysql.createConnection({
// // // //     host:'localhost',
// // // //     user:'admin',
// // // //     password:'admin',
// // // //     database:'pedidos'
// // // // })

// // // // conection.connect((err) =>{
// // // //     if(err) throw err
// // // //     console.log('la conexión funciona');
// // // // })



// // // // const insertar = "INSERT INTO pedido (id, direccion, precio) VALUES (1, 'Av. Great Master', 500)"
// // // // conection.query(insertar, (err, rows)=>{
// // // //     if(err) throw err
// // // // })
// // // // conection.query('select * from pedido', (err, rows)=>{
// // // //     if(err) throw err
// // // //     console.log('Los datos son: ')
// // // //     console.log(rows);
// // // // })

// // // // conection.end();

