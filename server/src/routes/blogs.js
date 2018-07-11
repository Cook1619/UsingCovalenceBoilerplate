import { Router } from 'express';
import Table from '../table';
let router = Router();

let iHateThisLab = new Table('blogs');

router.get('/', async(req, res) => {
   let blogs = await iHateThisLab.getAll();
   res.json(blogs);
});

router.get('/:id', async (req, res) => {
    let id = req.params.id;
    let blogs = await iHateThisLab.getOne(id);
    res.json(blogs);
});

export default router;