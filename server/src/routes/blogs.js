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
router.get('/:id', async (req, res) => {
    let id = req.params.id;
    let blog = await table.getOne(id);
    res.json(blog);
});

export default router;