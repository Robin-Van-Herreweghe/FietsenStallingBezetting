import React from 'react'

// import components
import Topbar from './Topbar'
import ContentPage from '../../Routes/MainRoutes' 

const Layout = () => {
    return (
        <div className="d-flex flex-column">
            <Topbar></Topbar>
            <ContentPage></ContentPage>
        </div>
    )
}

export default Layout
