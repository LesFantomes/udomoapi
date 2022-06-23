/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  '/': { view: 'pages/homepage' },

  /*MangaController*/
  'GET /manga': {
    controller: 'MangaController',
    action: 'getManga'
  },
  'GET /manga/:id': {
    controller: 'MangaController',
    action: 'getOneManga'
  },
  'POST /manga/create': {
    controller: 'mangaController',
    action: 'createManga',
  },

  'PUT /manga/:id': {
    controller: 'mangaController',
    action: 'modifyManga'
  },

  'DELETE /manga/:id': {
    controller: 'mangaController',
    action: 'deleteManga'
  },

  /*BookstoreController*/
  'GET /bookstore': {
    controller: 'BookstoresController',
    action: 'getBookstore'
  },
  'GET /bookstore/:id': {
    controller: 'BookstoresController',
    action: 'getOneBookstore'
  },
  'POST /bookstore/create': {
    controller: 'BookstoresController',
    action: 'createBookstore',
  },

  'PUT /bookstore/:id': {
    controller: 'BookstoresController',
    action: 'modifyBookstore'
  },

  'DELETE /bookstore/:id': {
    controller: 'BookstoresController',
    action: 'deleteBookstore'
  },

  /*CopiesController*/
  'GET /copies': {
    controller: 'CopiesController',
    action: 'getCopies'
  },
  'GET /copies/:id': {
    controller: 'CopiesController',
    action: 'getOneCopies'
  },
  'POST /copies/create': {
    controller: 'CopiesController',
    action: 'createCopies',
  },

  'PUT /copies/:id': {
    controller: 'CopiesController',
    action: 'modifyCopies'
  },

  'DELETE /copies/:id': {
    controller: 'CopiesController',
    action: 'deleteCopies'
  },

  /*GenresController*/
  'GET /genres': {
    controller: 'GenresController',
    action: 'getGenre'
  },
  'GET /genres/:id': {
    controller: 'GenresController',
    action: 'getOneGenre'
  },
  'POST /genres/create': {
    controller: 'GenresController',
    action: 'createGenre',
  },

  'PUT /genres/:id': {
    controller: 'GenresController',
    action: 'modifyGenre'
  },

  'DELETE /genres/:id': {
    controller: 'GenresController',
    action: 'deleteGenre'
  },

  /*MangaGenreController*/
  'GET /mangagenre': {
    controller: 'MangaGenreController',
    action: 'getMangaGenre'
  },
  'GET /mangagenre/:id': {
    controller: 'MangaGenreController',
    action: 'getOneMangaGenre'
  },
  'POST /mangagenre/create': {
    controller: 'MangaGenreController',
    action: 'createMangaGenre',
  },

  'PUT /mangagenre/:id': {
    controller: 'MangaGenreController',
    action: 'modifyMangaGenre'
  },

  'DELETE /mangagenre/:id': {
    controller: 'MangaGenreController',
    action: 'deleteMangaGenre'
  },

  /*OrdersController*/
  'GET /orders': {
    controller: 'OrdersController',
    action: 'getOrder'
  },
  'GET /orders/:id': {
    controller: 'OrdersController',
    action: 'getOneOrder'
  },
  'POST /orders/create': {
    controller: 'OrdersController',
    action: 'createOrder',
  },

  'PUT /orders/:id': {
    controller: 'OrdersController',
    action: 'modifyOrder'
  },

  'DELETE /orders/:id': {
    controller: 'OrdersController',
    action: 'deleteOrder'
  },

  /*UsersController*/
  'GET /users': {
    controller: 'UsersController',
    action: 'getUser'
  },
  'GET /users/:id': {
    controller: 'UsersController',
    action: 'getOneUser'
  },
  'POST /users/create': {
    controller: 'UsersController',
    action: 'createUser',
  },

  'PUT /users/:id': {
    controller: 'UsersController',
    action: 'modifyUser'
  },

  'DELETE /users/:id': {
    controller: 'UsersController',
    action: 'deleteUser'
  },

  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/


};
