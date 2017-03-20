import { Router } from 'express'
import snapRoutes from './snap/snapRoutes'

const router = Router()

router.use('/snaps', snapRoutes)

export default router
