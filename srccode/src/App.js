import React from 'react'

function App() {
  return (
    <div>
      <div className="top">
        <svg width="978" height="978" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1=".779%" x2="50%" y2="100%" id="a"><stop stopColor="#0989B4" stopOpacity="0" offset="0%"/><stop stopColor="#53FFEE" offset="99.94%"/></linearGradient></defs><ellipse fill="url(#a)" transform="rotate(-135 489 489)" cx="489" cy="489" rx="489" ry="488" fillRule="evenodd" opacity=".5"/></svg>
      </div>
      <div className="box">
      <div className="mid">
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
      <div className="bottom">
        <svg width="978" height="978" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1=".779%" x2="50%" y2="100%" id="a"><stop stopColor="#0989B4" stopOpacity="0" offset="0%"/><stop stopColor="#53FFEE" offset="99.94%"/></linearGradient></defs><ellipse fill="url(#a)" transform="scale(1 -1) rotate(45 1669.55 0)" cx="489" cy="489" rx="489" ry="488" fillRule="evenodd" opacity=".25"/></svg>
      </div>

    </div>
  )
}

export default App