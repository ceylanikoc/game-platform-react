import React from 'react'
import Action from '../actions/action'
import List from '../list/list'


const Home = () => {
  return (
    <main id="main">
        <section>
            <div className="action-container">
                <div className="container">
                    <Action/>
                </div>
            </div>
             <List/>
        </section>
    </main>
  )
}

export default Home