import {Router} from 'express'

const router = Router();
import * as videoCtrl from './videos.controller'
router.get('/videos',videoCtrl.getVideos)
router.get('/videos/:id',videoCtrl.getVideo)
router.post('/videos',videoCtrl.createVideo)
router.put('/videos/:id',videoCtrl.updateVideo)
router.delete('/videos/:id',videoCtrl.deleteVideo)

export default router;