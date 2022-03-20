import { Fragment } from 'react'

import Header from '../header/header'

export default function Layout(props) {
    return (
        <Fragment>
            <Header />
            <main className="bg-slate-900 h-screen">{props.children}</main>
        </Fragment>
    );
}