# User login via Facebook Authentication

```
<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{your-app-id}',
      cookie     : true,
      xfbml      : true,
      version    : '{latest-api-version}'
    });
    FB.AppEvents.logPageView();   
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>
```

### Checking, if User is already logged in via facebook

```
FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});
```

### Example response object

```
{
    status: 'connected',
    authResponse: {
        accessToken: '...',
        expiresIn:'...',
        signedRequest:'...',
        userID:'...'
    }
}
```

***status*** gibt den Login-Status der Person an, die die App verwendet. Der Status kann einer der Folgenden sein:

* connected: Die Person ist bei Facebook angemeldet und hat sich bei deiner App angemeldet.

* not_authorized: Die Person ist bei Facebook angemeldet, hat sich aber nicht bei deiner App angemeldet.

* unknown: Die Person ist nicht bei Facebook angemeldet. Daher weißt du nicht, ob sie bei deiner App angemeldet ist oder vorher FB.logout() aufgerufen wurde, weshalb sie keine Verbindung zu Facebook herstellen kann.
* authResponse wird hinzugefügt, wenn der Status connected lautet, und besteht aus folgenden Teilen:
accessToken: Enthält einen Zugriffsschlüssel für den Nutzer der App.

* expiresIn: Gibt die UNIX-Zeit an, zu der der Schlüssel abläuft und erneuert werden muss.
signedRequest: Ein signierter Parameter, der Informationen zum Nutzer der App enthält.

* userID: Die ID des Nutzers der App.

Sobald deine App den Login-Status des Nutzers herausgefunden hat, kann sie eine der folgenden Aktionen ausführen:

* Wenn die Person bei Facebook und bei deiner App angemeldet ist, erhält sie Zugriff auf alle durch die Anmeldung freigeschalteten Funktionen deiner App.

* Wenn die Person nicht bei deiner App oder bei Facebook angemeldet ist, wird ihr der Login-Dialog mit FB.login() oder der Login-Button angezeigt.


Das Hinzufügen des Login-Buttons zu deiner Seite ist ein Kinderspiel. Lies dir die Dokumentation für den Login-Button durch und richte den Button so ein, wie du es möchtest. Klicke dann auf Code anfordern und dir wird der Code angezeigt, den du benötigst, um den Button auf deiner Seite einzubinden.

Das onlogin-Attribut für den Button zur Einrichtung eines JavaScript-Rückrufs, mit dem der Login-Status geprüft wird, um zu sehen, ob sich eine Person erfolgreich angemeldet hat:

```

<fb:login-button
  scope="public_profile,email"
  onlogin="checkLoginState();">
</fb:login-button>
```


Dies ist der Rückruf. Er ruft FB.getLoginStatus() auf, um den aktuellen Login-Status herauszufinden. (statusChangeCallback() ist eine Funktion, die Teil des Beispiels ist, das die Antwort verarbeitet.)

```
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}
```
