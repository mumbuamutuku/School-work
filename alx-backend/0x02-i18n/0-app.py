#!/usr/bin/env python3
"""
basic Flask app in 0-app.py
"""
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    """
    Create a single / route
    """
    return render_template('0-index.html')


if __name__ == '__main__':
    # run() method of Flask class runs the application
    # on the local development server.
    app.run()
