/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as UseCasesRouteImport } from './routes/use-cases'
import { Route as ServicesRouteImport } from './routes/services'
import { Route as PricingRouteImport } from './routes/pricing'
import { Route as IndexNewRouteImport } from './routes/index-new'
import { Route as BlogRouteImport } from './routes/blog'
import { Route as AboutRouteImport } from './routes/about'
import { Route as IndexRouteImport } from './routes/index'

const UseCasesRoute = UseCasesRouteImport.update({
  id: '/use-cases',
  path: '/use-cases',
  getParentRoute: () => rootRouteImport,
} as any)
const ServicesRoute = ServicesRouteImport.update({
  id: '/services',
  path: '/services',
  getParentRoute: () => rootRouteImport,
} as any)
const PricingRoute = PricingRouteImport.update({
  id: '/pricing',
  path: '/pricing',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexNewRoute = IndexNewRouteImport.update({
  id: '/index-new',
  path: '/index-new',
  getParentRoute: () => rootRouteImport,
} as any)
const BlogRoute = BlogRouteImport.update({
  id: '/blog',
  path: '/blog',
  getParentRoute: () => rootRouteImport,
} as any)
const AboutRoute = AboutRouteImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/blog': typeof BlogRoute
  '/index-new': typeof IndexNewRoute
  '/pricing': typeof PricingRoute
  '/services': typeof ServicesRoute
  '/use-cases': typeof UseCasesRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/blog': typeof BlogRoute
  '/index-new': typeof IndexNewRoute
  '/pricing': typeof PricingRoute
  '/services': typeof ServicesRoute
  '/use-cases': typeof UseCasesRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/blog': typeof BlogRoute
  '/index-new': typeof IndexNewRoute
  '/pricing': typeof PricingRoute
  '/services': typeof ServicesRoute
  '/use-cases': typeof UseCasesRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/blog'
    | '/index-new'
    | '/pricing'
    | '/services'
    | '/use-cases'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/blog'
    | '/index-new'
    | '/pricing'
    | '/services'
    | '/use-cases'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/blog'
    | '/index-new'
    | '/pricing'
    | '/services'
    | '/use-cases'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  BlogRoute: typeof BlogRoute
  IndexNewRoute: typeof IndexNewRoute
  PricingRoute: typeof PricingRoute
  ServicesRoute: typeof ServicesRoute
  UseCasesRoute: typeof UseCasesRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/use-cases': {
      id: '/use-cases'
      path: '/use-cases'
      fullPath: '/use-cases'
      preLoaderRoute: typeof UseCasesRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/services': {
      id: '/services'
      path: '/services'
      fullPath: '/services'
      preLoaderRoute: typeof ServicesRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/pricing': {
      id: '/pricing'
      path: '/pricing'
      fullPath: '/pricing'
      preLoaderRoute: typeof PricingRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/index-new': {
      id: '/index-new'
      path: '/index-new'
      fullPath: '/index-new'
      preLoaderRoute: typeof IndexNewRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/blog': {
      id: '/blog'
      path: '/blog'
      fullPath: '/blog'
      preLoaderRoute: typeof BlogRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  BlogRoute: BlogRoute,
  IndexNewRoute: IndexNewRoute,
  PricingRoute: PricingRoute,
  ServicesRoute: ServicesRoute,
  UseCasesRoute: UseCasesRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
