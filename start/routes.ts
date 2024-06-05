/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const BlogController = () => import('#controllers/blog_controller')

router.on('/').renderInertia('home', { version: 6 })

router.get('/blog', [BlogController, 'index'])
router.get('/blog/article/:id/:slug', [BlogController, 'show'])
