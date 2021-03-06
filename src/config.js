require("dotenv").config();

const {
  REACT_APP_ALGOLIA_APP_ID,
  REACT_APP_ALGOLIA_API_KEY,
  REACT_APP_GOOGLE_URL,
  REACT_APP_GETTOKEN_API,
  REACT_APP_UPDATE_DATA_API,
  REACT_APP_CONFLUENCE_UPDATE_API,
  REACT_APP_UPDATE_GOOGLE_DATA_API,
  REACT_APP_GOOGLE_CLIENT_ID,
  REACT_APP_GOOGLE_DRIVE_SCOPE,
  REACT_APP_CONFLUENCE_AUTH_API,
  REACT_APP_JIRA_AUTH,
  REACT_APP_GOOGLE_INDEX_NAME,
  REACT_APP_JIRA_INDEX_NAME,
  REACT_APP_CONFLUENCE_INDEX_NAME,
} = process.env;

const config = {
  algoliaId: REACT_APP_ALGOLIA_APP_ID,
  algoliaApiKey: REACT_APP_ALGOLIA_API_KEY,
  algoliaGoogleIndexName: REACT_APP_GOOGLE_INDEX_NAME,
  algoliaJiraIndexName: REACT_APP_JIRA_INDEX_NAME,
  algoliaConfluenceIndexName: REACT_APP_CONFLUENCE_INDEX_NAME,
  googleUrl: REACT_APP_GOOGLE_URL,
  getTokenApi: REACT_APP_GETTOKEN_API,
  updateDataApi: REACT_APP_UPDATE_DATA_API,
  confluenceUpdateApi: REACT_APP_CONFLUENCE_UPDATE_API,
  confluenceAuthApi: REACT_APP_CONFLUENCE_AUTH_API,
  updateGoogleDataApi: REACT_APP_UPDATE_GOOGLE_DATA_API,
  googleClientId: REACT_APP_GOOGLE_CLIENT_ID,
  googleDriveScope: REACT_APP_GOOGLE_DRIVE_SCOPE, //https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.photos.readonly https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/drive.metadata https://www.googleapis.com/auth/drive.file
  jiraAuth: REACT_APP_JIRA_AUTH,
};

export default config;
