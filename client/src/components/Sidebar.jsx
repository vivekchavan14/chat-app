import React from 'react'
import SearchInput from './SearchInput'
import Conversation from './conversations/Conversation'
import ConversationList from './conversations/ConversationList'
import LogoutButton from './LogoutButton'

function Sidebar() {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
       <SearchInput />
       <div className='divider px-3'></div>
       <ConversationList/>
       <LogoutButton />
       {/*<Conversations />
       <LogoutButton />*/}
    </div>
  )
}

export default Sidebar
