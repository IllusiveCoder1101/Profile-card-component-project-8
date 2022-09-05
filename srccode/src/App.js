import React from 'react'

function App() {
  return (
    <div className='box'>
      <div className="container">
        <div className="header">
        </div>
        <img src={require("./assets/image-victor.jpg")} alt="avatar" className='avatar' />
        <h1 className='about'><em>Victor Crest</em> 26</h1>
        <p className='place'>London</p>
        <div className="footer">
          <div className="followers">
            <h2 className='no'>80k</h2>
            <p className='tag'>Followers</p>
          </div>
          <div className="Likes">
            <h2 className='no'>803k</h2>
            <p className='tag'>Likes</p>
          </div>
          <div className="Photos">
            <h2 className='no'>1.4k</h2>
            <p className='tag'>Photos</p>
          </div>
      </div>
      </div>

    </div>
  )
}

export default App