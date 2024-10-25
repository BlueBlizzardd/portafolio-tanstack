/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as menusMenusImport } from './routes/(menus)/_menus'
import { Route as menusMenusOptionsImport } from './routes/(menus)/_menus.options'
import { Route as menusMenusGarageImport } from './routes/(menus)/_menus.garage'
import { Route as menusMenusAboutImport } from './routes/(menus)/_menus.about'

// Create Virtual Routes

const menusImport = createFileRoute('/(menus)')()

// Create/Update Routes

const menusRoute = menusImport.update({
  id: '/(menus)',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const menusMenusRoute = menusMenusImport.update({
  id: '/_menus',
  getParentRoute: () => menusRoute,
} as any)

const menusMenusOptionsRoute = menusMenusOptionsImport.update({
  path: '/options',
  getParentRoute: () => menusMenusRoute,
} as any)

const menusMenusGarageRoute = menusMenusGarageImport.update({
  path: '/garage',
  getParentRoute: () => menusMenusRoute,
} as any)

const menusMenusAboutRoute = menusMenusAboutImport.update({
  path: '/about',
  getParentRoute: () => menusMenusRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/(menus)': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof menusImport
      parentRoute: typeof rootRoute
    }
    '/(menus)/_menus': {
      id: '/_menus'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof menusMenusImport
      parentRoute: typeof menusRoute
    }
    '/(menus)/_menus/about': {
      id: '/_menus/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof menusMenusAboutImport
      parentRoute: typeof menusMenusImport
    }
    '/(menus)/_menus/garage': {
      id: '/_menus/garage'
      path: '/garage'
      fullPath: '/garage'
      preLoaderRoute: typeof menusMenusGarageImport
      parentRoute: typeof menusMenusImport
    }
    '/(menus)/_menus/options': {
      id: '/_menus/options'
      path: '/options'
      fullPath: '/options'
      preLoaderRoute: typeof menusMenusOptionsImport
      parentRoute: typeof menusMenusImport
    }
  }
}

// Create and export the route tree

interface menusMenusRouteChildren {
  menusMenusAboutRoute: typeof menusMenusAboutRoute
  menusMenusGarageRoute: typeof menusMenusGarageRoute
  menusMenusOptionsRoute: typeof menusMenusOptionsRoute
}

const menusMenusRouteChildren: menusMenusRouteChildren = {
  menusMenusAboutRoute: menusMenusAboutRoute,
  menusMenusGarageRoute: menusMenusGarageRoute,
  menusMenusOptionsRoute: menusMenusOptionsRoute,
}

const menusMenusRouteWithChildren = menusMenusRoute._addFileChildren(
  menusMenusRouteChildren,
)

interface menusRouteChildren {
  menusMenusRoute: typeof menusMenusRouteWithChildren
}

const menusRouteChildren: menusRouteChildren = {
  menusMenusRoute: menusMenusRouteWithChildren,
}

const menusRouteWithChildren = menusRoute._addFileChildren(menusRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof menusMenusRouteWithChildren
  '/about': typeof menusMenusAboutRoute
  '/garage': typeof menusMenusGarageRoute
  '/options': typeof menusMenusOptionsRoute
}

export interface FileRoutesByTo {
  '/': typeof menusMenusRouteWithChildren
  '/about': typeof menusMenusAboutRoute
  '/garage': typeof menusMenusGarageRoute
  '/options': typeof menusMenusOptionsRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof menusRouteWithChildren
  '/_menus': typeof menusMenusRouteWithChildren
  '/_menus/about': typeof menusMenusAboutRoute
  '/_menus/garage': typeof menusMenusGarageRoute
  '/_menus/options': typeof menusMenusOptionsRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/garage' | '/options'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/garage' | '/options'
  id:
    | '__root__'
    | '/'
    | '/_menus'
    | '/_menus/about'
    | '/_menus/garage'
    | '/_menus/options'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  menusRoute: typeof menusRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  menusRoute: menusRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/"
      ]
    },
    "/": {
      "filePath": "(menus)",
      "children": [
        "/_menus"
      ]
    },
    "/_menus": {
      "filePath": "(menus)/_menus.tsx",
      "parent": "/",
      "children": [
        "/_menus/about",
        "/_menus/garage",
        "/_menus/options"
      ]
    },
    "/_menus/about": {
      "filePath": "(menus)/_menus.about.tsx",
      "parent": "/_menus"
    },
    "/_menus/garage": {
      "filePath": "(menus)/_menus.garage.tsx",
      "parent": "/_menus"
    },
    "/_menus/options": {
      "filePath": "(menus)/_menus.options.tsx",
      "parent": "/_menus"
    }
  }
}
ROUTE_MANIFEST_END */
