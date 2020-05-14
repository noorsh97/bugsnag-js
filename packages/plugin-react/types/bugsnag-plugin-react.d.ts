import { Plugin, Client, OnErrorCallback } from '@bugsnag/core'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BugsnagPluginReact extends Plugin { }
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
declare class BugsnagPluginReact {
  constructor(react?: typeof React)
}

type BugsnagErrorBoundary = React.ComponentType<{
  onError?: OnErrorCallback
  FallbackComponent?: React.ComponentType<{
    error: Error
    info: React.ErrorInfo
  }>
}>

interface BugsnagPluginReactResult {
  createErrorBoundary(react?: typeof React): BugsnagErrorBoundary
}

// add a new call signature for the getPlugin() method that types the react plugin result
declare module '@bugsnag/core' {
  interface Client {
    getPlugin(id: 'react'): BugsnagPluginReactResult | undefined
  }
}

export default BugsnagPluginReact
