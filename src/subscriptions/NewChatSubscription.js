import {
    graphql,
    requestSubscription
  } from 'react-relay';
  import environment from '../Environment';
  
  const newChatSubscription = graphql`
    subscription NewChatSubscription {
      Chat(filter: { mutation_in: [CREATED] }) {
        node {
          id
          from 
          createdAt
          content    
        }
      }
    }
  `
  
  // 3
  export default () => {
  
    const subscriptionConfig = {
      subscription: newChatSubscription,
      variables: {},
      updater: proxyStore => {
        // const createChatField = proxyStore.getRootField('Chat');
        // const newChat = createChatField.getLinkedRecord('node');
        // const from = newChat.getLinkedRecord('from');
        // const chatId = newChat.getValue('id');
        // const createdAt = newChat.getLinkedRecord('createdAt');
        // const content = newChat.getValue('content');
  
        // const chat = proxyStore.get(chatId)
        // chat.getLinkedRecord('votes').setValue(newVoteCount, 'count')
      },
      onError: error => console.log(`An error occured:`, error)
    }
  
    requestSubscription(
      environment,
      subscriptionConfig
    )
  
  }