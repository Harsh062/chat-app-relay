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
        console.log('Updater called');
        const createChatField = proxyStore.getRootField('Chat');
        const chatLists = createChatField.getLinkedRecords('ChatConnection');
       console.log(`chatLists: ${chatLists}`);
      },
      onError: error => console.log(`An error occured:`, error)
    }
  
    requestSubscription(
      environment,
      subscriptionConfig
    )
  
  }