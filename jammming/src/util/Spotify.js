const clientId = '815f5e170bb5494f83887849e310f9bd';
const redirectURI = "http://localhost:3000/";

const access_token;
class Spotify extends React.Component {
  getAccessToken() {
    if (access_token) {
      return access_token;
    }
    accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (window.location.href.includes(accessTokenMatch, expiresInMatch)) {
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
    } else if (access_token === '') {
      return window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
    }
  };

  search(term) {
    var promise = new Promise(function(resolve, reject) {
      // call resolve if the method succeeds
      resolve(true);
    })
    promise.then(bool => console.log('Bool is true'))
  };
};



export default Spotify
