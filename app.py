from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template("index.html")

@app.route("/creditpoints")
def abc():
    return render_template("creditpoints.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/creditscores")
def creditscores():
    return render_template("creditscores.html")
