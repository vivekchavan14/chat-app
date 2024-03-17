import React from 'react'
import Conversation from './Conversation'

function ConversationList() {
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      <Conversation />
      <Conversation />

    </div>
  )
}

export default ConversationList
