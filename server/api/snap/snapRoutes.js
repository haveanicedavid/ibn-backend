import { Router } from 'express'
import controller from './snapController.js'

const router = Router()

router.route('/') // /api/snaps/
  .get(controller.createSnap)

router.route('/all') // /api/snaps/all
  .get(controller.getAllSnaps)

export default router
