import { Router } from 'express';
import Table from '../table';
let router = Router();

let blogs = new Table('blogs');

router.get('/', (req, res) => {

    blogs.getAll()
    .then(blog => {
        res.json(blog);
    });

});

export default router;