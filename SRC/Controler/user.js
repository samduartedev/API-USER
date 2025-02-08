import { json } from "express";
import { openDb } from "../configDB.js";


export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS User (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT NOT NULL, email TEXT, data_nascimento DATE)')
    })
}

export async function insertUser(req,res){
    let user = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO User (nome, email, data_nascimento ) VALUES (?,?,?)', [user.name,user.email,user.data_nascimento])
    })
    res.json({
        "statusCode": 200,
        "msg": "User successfully registrated"
    })

}

export async function selectUsers(req,res){
    let user = req.body;
    openDb().then(db=>{
        db.all('SELECT * FROM User')
        .then(users=>res.json(users))
    })
}

export async function selectUser(req,res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('SELECT * FROM User WHERE id=?',[id])
        .then(user=>res.json(user))
    })
}

export async function updateUser(req,res){
    let user = req.body;
    openDb().then(db=>{
        db.get('UPDATE User SET nome=?, email=?, data_nascimento=? WHERE id=? ', [user.nome, user.email, user.data_nascimento, user.id])
    })
    res.json({
        "statusCode": 200,
        "msg": "User successfully updated"
    })
}

export async function deleteUser(req,res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('DELETE FROM User WHERE id=?',[id])
        .then(res=>res)
    })
    res.json({
        "statusCode": 200,
        "msg": "User successfully deleted"
    })
}