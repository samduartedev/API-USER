import { Router } from "express";
import { createTable, selectUsers, insertUser, selectUser, updateUser, deleteUser } from "./Controler/user.js";


const router = Router();

router.get('/', (req,res)=>{
    res.json({
        "statusCode": 200,
        "msg": "api running"
    })
})

router.get('/users', selectUsers)
router.get('/user', selectUser)
router.post('/user', insertUser)
router.put('/user', updateUser)
router.delete('/user', deleteUser)



export default router;
