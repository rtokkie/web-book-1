import { generatePath } from 'react-router-dom'

import HomePage from '../pages/Home/Index'

const HOME = '/'
const SIGN_UP = '/sign-up'
const SIGN_IN = '/sign-in'
const USER_SHOW = '/users/:userId'
const USER_BOOKS = '/users/:userId/books'
const USER_BOOK_SHOW = '/users/:userId/books/:bookId' /* <- viewer */
const USER_BOOK_CHAPTER_SHOW = '/users/:userId/book/:bookId/chapters/:chapterId' /* <- viewer */
const ORDERS = '/users/:userId/orders'
const CART = '/users/:userId/cart'
const BOOKS = '/books'
const BOOK_SHOW = '/books/:bookId'

/**
 * frontend-admin のページ一覧
 * /
 * /sign-up
 * /sign-in
 * /books
 * /books/new
 * /books/:bookId <- viewer
 * /books/:bookId/edit
 * /books/:bookId/chapters/:chapterId <- viewer
 * /books/:bookId/chapters/:chapterId/edit
 */

export const routeMap = {
  [HOME]: {
    path: () => {
      return generatePath(HOME)
    },
    Component: HomePage,
  },

  [SIGN_UP]: {
    path: () => {
      return generatePath(SIGN_UP)
    },
    Component: HomePage,
  },

  [SIGN_IN]: {
    path: () => {
      return generatePath(SIGN_IN)
    },
    Component: HomePage,
  },

  [USER_SHOW]: {
    path: ({ userId }: { userId: string }) => {
      return generatePath(USER_SHOW, { userId })
    },
    Component: HomePage,
  },

  [USER_BOOKS]: {
    path: ({ userId }: { userId: string }) => {
      return generatePath(USER_BOOKS, { userId })
    },
    Component: HomePage,
  },

  [USER_BOOK_SHOW]: {
    path: ({ userId, bookId }: { userId: string; bookId: string }) => {
      return generatePath(USER_BOOK_SHOW, { userId, bookId })
    },
    Component: HomePage,
  },

  [USER_BOOK_CHAPTER_SHOW]: {
    path: ({
      userId,
      bookId,
      chapterId,
    }: {
      userId: string
      bookId: string
      chapterId: string
    }) => {
      return generatePath(USER_BOOK_CHAPTER_SHOW, { userId, bookId, chapterId })
    },
    Component: HomePage,
  },

  [ORDERS]: {
    path: ({ userId }: { userId: string }) => {
      return generatePath(ORDERS, { userId })
    },
    Component: HomePage,
  },

  [CART]: {
    path: ({ userId }: { userId: string }) => {
      return generatePath(CART, { userId })
    },
    Component: HomePage,
  },

  [BOOKS]: {
    path: () => {
      return generatePath(BOOKS)
    },
    Component: HomePage,
  },

  [BOOK_SHOW]: {
    path: ({ bookId }: { bookId: string }) => {
      return generatePath(BOOK_SHOW, { bookId })
    },
    Component: HomePage,
  },
}

export const pathTemplates = Object.keys(routeMap) as (keyof typeof routeMap)[]
