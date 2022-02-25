from flask import Flask


def init_app():
    app = Flask(__name__, instance_relative_config=False)
    app.config.from_object('config.Config')

    #TODO get db form database.py

    with app.app_context():
        #TODO: add blueprints

        return app