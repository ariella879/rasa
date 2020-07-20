
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/',
  component: ComponentCreator('/'),
  exact: true,
  
},
{
  path: '/:route',
  component: ComponentCreator('/:route'),
  
  routes: [
{
  path: '/api/action-server',
  component: ComponentCreator('/api/action-server'),
  exact: true,
  
},
{
  path: '/api/agent',
  component: ComponentCreator('/api/agent'),
  exact: true,
  
},
{
  path: '/api/core-featurization',
  component: ComponentCreator('/api/core-featurization'),
  exact: true,
  
},
{
  path: '/api/custom-nlu-components',
  component: ComponentCreator('/api/custom-nlu-components'),
  exact: true,
  
},
{
  path: '/api/event-brokers',
  component: ComponentCreator('/api/event-brokers'),
  exact: true,
  
},
{
  path: '/api/events',
  component: ComponentCreator('/api/events'),
  exact: true,
  
},
{
  path: '/api/http-api',
  component: ComponentCreator('/api/http-api'),
  exact: true,
  
},
{
  path: '/api/jupyter-notebooks',
  component: ComponentCreator('/api/jupyter-notebooks'),
  exact: true,
  
},
{
  path: '/api/lock-stores',
  component: ComponentCreator('/api/lock-stores'),
  exact: true,
  
},
{
  path: '/api/rasa-sdk',
  component: ComponentCreator('/api/rasa-sdk'),
  exact: true,
  
},
{
  path: '/api/tensorflow_usage',
  component: ComponentCreator('/api/tensorflow_usage'),
  exact: true,
  
},
{
  path: '/api/tracker',
  component: ComponentCreator('/api/tracker'),
  exact: true,
  
},
{
  path: '/api/tracker-stores',
  component: ComponentCreator('/api/tracker-stores'),
  exact: true,
  
},
{
  path: '/api/training-data-importers',
  component: ComponentCreator('/api/training-data-importers'),
  exact: true,
  
},
{
  path: '/changelog',
  component: ComponentCreator('/changelog'),
  exact: true,
  
},
{
  path: '/core/about',
  component: ComponentCreator('/core/about'),
  exact: true,
  
},
{
  path: '/core/actions',
  component: ComponentCreator('/core/actions'),
  exact: true,
  
},
{
  path: '/core/domains',
  component: ComponentCreator('/core/domains'),
  exact: true,
  
},
{
  path: '/core/fallback-actions',
  component: ComponentCreator('/core/fallback-actions'),
  exact: true,
  
},
{
  path: '/core/forms',
  component: ComponentCreator('/core/forms'),
  exact: true,
  
},
{
  path: '/core/interactive-learning',
  component: ComponentCreator('/core/interactive-learning'),
  exact: true,
  
},
{
  path: '/core/knowledge-bases',
  component: ComponentCreator('/core/knowledge-bases'),
  exact: true,
  
},
{
  path: '/core/policies',
  component: ComponentCreator('/core/policies'),
  exact: true,
  
},
{
  path: '/core/reminders-and-external-events',
  component: ComponentCreator('/core/reminders-and-external-events'),
  exact: true,
  
},
{
  path: '/core/responses',
  component: ComponentCreator('/core/responses'),
  exact: true,
  
},
{
  path: '/core/retrieval-actions',
  component: ComponentCreator('/core/retrieval-actions'),
  exact: true,
  
},
{
  path: '/core/slots',
  component: ComponentCreator('/core/slots'),
  exact: true,
  
},
{
  path: '/core/stories',
  component: ComponentCreator('/core/stories'),
  exact: true,
  
},
{
  path: '/dialogue-elements/completing-tasks',
  component: ComponentCreator('/dialogue-elements/completing-tasks'),
  exact: true,
  
},
{
  path: '/dialogue-elements/dialogue-elements',
  component: ComponentCreator('/dialogue-elements/dialogue-elements'),
  exact: true,
  
},
{
  path: '/dialogue-elements/guiding-users',
  component: ComponentCreator('/dialogue-elements/guiding-users'),
  exact: true,
  
},
{
  path: '/dialogue-elements/small-talk',
  component: ComponentCreator('/dialogue-elements/small-talk'),
  exact: true,
  
},
{
  path: '/glossary',
  component: ComponentCreator('/glossary'),
  exact: true,
  
},
{
  path: '/index',
  component: ComponentCreator('/index'),
  exact: true,
  
},
{
  path: '/migrate-from/facebook-wit-ai-to-rasa',
  component: ComponentCreator('/migrate-from/facebook-wit-ai-to-rasa'),
  exact: true,
  
},
{
  path: '/migrate-from/google-dialogflow-to-rasa',
  component: ComponentCreator('/migrate-from/google-dialogflow-to-rasa'),
  exact: true,
  
},
{
  path: '/migrate-from/ibm-watson-to-rasa',
  component: ComponentCreator('/migrate-from/ibm-watson-to-rasa'),
  exact: true,
  
},
{
  path: '/migrate-from/microsoft-luis-to-rasa',
  component: ComponentCreator('/migrate-from/microsoft-luis-to-rasa'),
  exact: true,
  
},
{
  path: '/migration-guide',
  component: ComponentCreator('/migration-guide'),
  exact: true,
  
},
{
  path: '/nlu/about',
  component: ComponentCreator('/nlu/about'),
  exact: true,
  
},
{
  path: '/nlu/choosing-a-pipeline',
  component: ComponentCreator('/nlu/choosing-a-pipeline'),
  exact: true,
  
},
{
  path: '/nlu/components',
  component: ComponentCreator('/nlu/components'),
  exact: true,
  
},
{
  path: '/nlu/entity-extraction',
  component: ComponentCreator('/nlu/entity-extraction'),
  exact: true,
  
},
{
  path: '/nlu/language-support',
  component: ComponentCreator('/nlu/language-support'),
  exact: true,
  
},
{
  path: '/nlu/training-data-format',
  component: ComponentCreator('/nlu/training-data-format'),
  exact: true,
  
},
{
  path: '/nlu/using-nlu-only',
  component: ComponentCreator('/nlu/using-nlu-only'),
  exact: true,
  
},
{
  path: '/user-guide/architecture',
  component: ComponentCreator('/user-guide/architecture'),
  exact: true,
  
},
{
  path: '/user-guide/building-assistants',
  component: ComponentCreator('/user-guide/building-assistants'),
  exact: true,
  
},
{
  path: '/user-guide/cloud-storage',
  component: ComponentCreator('/user-guide/cloud-storage'),
  exact: true,
  
},
{
  path: '/user-guide/command-line-interface',
  component: ComponentCreator('/user-guide/command-line-interface'),
  exact: true,
  
},
{
  path: '/user-guide/configuring-http-api',
  component: ComponentCreator('/user-guide/configuring-http-api'),
  exact: true,
  
},
{
  path: '/user-guide/connectors/cisco-webex-teams',
  component: ComponentCreator('/user-guide/connectors/cisco-webex-teams'),
  exact: true,
  
},
{
  path: '/user-guide/connectors/custom-connectors',
  component: ComponentCreator('/user-guide/connectors/custom-connectors'),
  exact: true,
  
},
{
  path: '/user-guide/connectors/facebook-messenger',
  component: ComponentCreator('/user-guide/connectors/facebook-messenger'),
  exact: true,
  
},
{
  path: '/user-guide/connectors/hangouts',
  component: ComponentCreator('/user-guide/connectors/hangouts'),
  exact: true,
  
},
{
  path: '/user-guide/connectors/mattermost',
  component: ComponentCreator('/user-guide/connectors/mattermost'),
  exact: true,
  
},
{
  path: '/user-guide/connectors/microsoft-bot-framework',
  component: ComponentCreator('/user-guide/connectors/microsoft-bot-framework'),
  exact: true,
  
},
{
  path: '/user-guide/connectors/rocketchat',
  component: ComponentCreator('/user-guide/connectors/rocketchat'),
  exact: true,
  
},
{
  path: '/user-guide/connectors/slack',
  component: ComponentCreator('/user-guide/connectors/slack'),
  exact: true,
  
},
{
  path: '/user-guide/connectors/telegram',
  component: ComponentCreator('/user-guide/connectors/telegram'),
  exact: true,
  
},
{
  path: '/user-guide/connectors/twilio',
  component: ComponentCreator('/user-guide/connectors/twilio'),
  exact: true,
  
},
{
  path: '/user-guide/connectors/your-own-website',
  component: ComponentCreator('/user-guide/connectors/your-own-website'),
  exact: true,
  
},
{
  path: '/user-guide/docker/building-in-docker',
  component: ComponentCreator('/user-guide/docker/building-in-docker'),
  exact: true,
  
},
{
  path: '/user-guide/docker/deploying-in-docker-compose',
  component: ComponentCreator('/user-guide/docker/deploying-in-docker-compose'),
  exact: true,
  
},
{
  path: '/user-guide/how-to-deploy',
  component: ComponentCreator('/user-guide/how-to-deploy'),
  exact: true,
  
},
{
  path: '/user-guide/installation',
  component: ComponentCreator('/user-guide/installation'),
  exact: true,
  
},
{
  path: '/user-guide/messaging-and-voice-channels',
  component: ComponentCreator('/user-guide/messaging-and-voice-channels'),
  exact: true,
  
},
{
  path: '/user-guide/rasa-tutorial',
  component: ComponentCreator('/user-guide/rasa-tutorial'),
  exact: true,
  
},
{
  path: '/user-guide/setting-up-ci-cd',
  component: ComponentCreator('/user-guide/setting-up-ci-cd'),
  exact: true,
  
},
{
  path: '/user-guide/testing-your-assistant',
  component: ComponentCreator('/user-guide/testing-your-assistant'),
  exact: true,
  
},
{
  path: '/user-guide/validate-files',
  component: ComponentCreator('/user-guide/validate-files'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
