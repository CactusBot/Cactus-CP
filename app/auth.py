from rauth import OAuth2Service
from flask import current_app, url_for, request, redirect, session
import json


class OAuthSignIn(object):
    providers = None

    def __init__(self, provider_name):
        self.provider_name = provider_name
        credentials = current_app.config['OAUTH_CREDENTIALS'][provider_name]
        self.consumer_id = credentials['id']
        self.consumer_secret = credentials['secret']

    def authorize(self):
        pass

    def callback(self):
        pass

    def get_callback_url(self):
        return url_for('oauth_callback', provider=self.provider_name,
                       _external=True)

    @classmethod
    def get_provider(self, provider_name):
        if self.providers is None:
            self.providers = {}
            for provider_class in self.__subclasses__():
                provider = provider_class()
                self.providers[provider.provider_name] = provider
        return self.providers[provider_name]


class BeamSignIn(OAuthSignIn):
    def __init__(self):
        super(BeamSignIn, self).__init__("beam")
        self.service = OAuth2Service(
            name="beam",
            client_id=self.consumer_id,
            client_secret=self.consumer_secret,
            authorize_url="https://beam.pro/oauth/authorize",
            access_token_url="https://beam.pro/api/v1/oauth/token"
        )
        # self.callback_url = self.

    def authorize(self):
        params = {
            "redirect_uri": self.get_callback_url(),
            "response_type": "code",
            "scope": "user:details:self"
        }
        return redirect(self.service.get_authorize_url(**params))

    def test(b):
        print(b)
        return json.loads(str(b))

    def callback(self):
        print(repr(request))
        if "code" not in request.args:
            return None, None, None
        oauth_session = self.service.get_auth_session(
            data={
                "code": request.args["code"],
                "grant_type": "authorization_code",
                "redirect_uri": self.get_callback_url(),
                "client_id": self.consumer_id,
                "client_secret": self.consumer_secret
            },
            decoder=test
        )
        print(oauth_session)
        return "FOO", "bar", "spam"