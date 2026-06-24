// React 19 / @types/react v19 scoped the JSX namespace under `React.JSX` and removed
// the global one. Restore it so components may return `JSX.Element` without importing React
// (the `react-jsx` runtime convention used throughout the scaffold).
import type { JSX as ReactJSX } from 'react'

declare global {
  namespace JSX {
    type ElementType = ReactJSX.ElementType
    interface Element extends ReactJSX.Element {}
    interface ElementClass extends ReactJSX.ElementClass {}
    interface ElementAttributesProperty extends ReactJSX.ElementAttributesProperty {}
    interface ElementChildrenAttribute extends ReactJSX.ElementChildrenAttribute {}
    type LibraryManagedAttributes<C, P> = ReactJSX.LibraryManagedAttributes<C, P>
    interface IntrinsicAttributes extends ReactJSX.IntrinsicAttributes {}
    interface IntrinsicClassAttributes<T> extends ReactJSX.IntrinsicClassAttributes<T> {}
    interface IntrinsicElements extends ReactJSX.IntrinsicElements {}
  }
}

export {}
