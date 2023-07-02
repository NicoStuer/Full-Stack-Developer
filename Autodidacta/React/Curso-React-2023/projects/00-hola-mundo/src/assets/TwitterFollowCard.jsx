/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
export function TwiterFollowCard ({ children, userName, isFollowing}) {
    
    return (
        <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' alt="El avatar de unavatar.io" src={`https://unavatar.io/${userName}`}/>
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>
      <aside>
        <button className='tw-followCard-button'>
          Seguir
        </button>
      </aside>
    </article>
    )
}