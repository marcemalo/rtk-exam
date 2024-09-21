import { Suspense } from "react"
import "./App.css"

const SuspenseComponent = ({children}) => {
  return (
    <Suspense fallback={<div class="loader"></div>}>
        {children}
    </Suspense>
  )
}

const Container = ({children}) => {
  return (
    <div className="container max-w-[1200px] mx-auto">
        {children}
    </div>
  )
}

export {SuspenseComponent, Container}