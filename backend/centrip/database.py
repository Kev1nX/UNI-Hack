import sqlite3
from flask import g

DATABASE = 'sqlite:///test.db'

def get_db():
    db = gettattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite.connect(DATABASE)
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()