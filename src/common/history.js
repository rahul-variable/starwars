import { createBrowserHistory } from 'history'

export default createBrowserHistory({
    basename: `${process.env.CONTEXT_URL}`
})