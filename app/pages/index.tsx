import * as React from 'react'


export default () => {
    return (
        <div>
            <section className="todoapp">
                <header className="header">
                <h1>todos</h1>
				    <input className="new-todo" placeholder="What needs to be done?" autoFocus />
                </header>
            </section>
        </div>
    )
}