import { Router } from 'express'
import controller from './snapController.js'

const router = Router()

router.route('/create') // /api/snaps/create
  .post(controller.createSnap)

router.route('/recent') // /api/snaps/all
  .get(controller.getRecentSnaps)

export default router
