const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());

app.use(cors({
  origin: '*'
}));

const port = 3000;

app.get('/', (req, res) => {
  res.send('API is working');
})

app.post('/usuario',(req, res) => {
  const body = req.body;
 
  const query = `INSERT INTO usuario(firstName, lastName,direccion,telefono, tarifa) VALUES ('${body.firstName}', '${body.lastName}',
  '${body.direccion}','${body.telefono}','${body.tarifa}');`;
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  res.send('1 record inserted');
})
app.post('/conductor',(req, res) => {
  const body = req.body;
 
  const query = `INSERT INTO conductor(firstName, lastName,direccion,telefono, email,contrasenia,estadoconductor) VALUES ('${body.firstName}',
   '${body.lastName}','${body.direccion}','${body.telefono}','${body.email}','${body.contrasenia}','${body.estadoconductor}');`;
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  res.send('1 record inserted');
})
app.post('/vehiculo',(req, res) => {
  const body = req.body;
 
  const query = `INSERT INTO vehiculo(driverId, modelo, marca, anio, placa,estadovehiculo) VALUES ('${body.driverId}',
   '${body.modelo}','${body.marca}','${body.anio}','${body.placa}','${body.estadovehiculo}');`;
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  res.send('1 record inserted');
})
app.post('/pagos',(req, res) => {
  const body = req.body;
 
  const query = `INSERT INTO pagos(promoId,userId, tripId, monto, fechaPago) VALUES ('${body.promoId}','${body.userId}',
   '${body.tripId}','${body.monto}','${body.fechaPago}');`;
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  res.send('1 record inserted');
})
app.post('/promociones',(req, res) => {
  const body = req.body;
 
  const query = `INSERT INTO promociones(tipoDescuento,valorDescuento,fechaInicio,FechaFin) VALUES ('${body.tipoDescuento}','${body.valorDescuento}',
   '${body.fechaInicio}','${body.fechaFin}');`;
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  res.send('1 record inserted');
})
app.post('/resenias',(req, res) => {
  const body = req.body;
 
  const query = `INSERT INTO resenias(userId,driverId,calificacion,comentario,FechaResenia) VALUES ('${body.userId}','${body.driverId}',
   '${body.calificacion}','${body.comentario}','${body.fechaResenia}');`;
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  res.send('1 record inserted');
})
app.post('/viajes',(req, res) => {
  const body = req.body;
 
  const query = `INSERT INTO viajes(userId,driverId,vehicleId,horaInicio,horaFin,origen,destino,costoViaje,calificacionViaje) VALUES ('${body.userId}','${body.driverId}',
   '${body.vehicleId}','${body.horaInicio}','${body.horaFin}','${body.origen}','${body.destino}','${body.costoViaje}','${body.calificacionViaje}');`;
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  res.send('1 record inserted');
})
const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'db1',
})
app.listen(port, () => {
  console.log(`Project sample is running on: ${port}`)
})
connection.connect();
