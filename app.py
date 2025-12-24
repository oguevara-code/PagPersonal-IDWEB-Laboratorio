from flask import Flask, render_template, request, redirect, url_for
from usuarios import registrar_usuario, validar_usuario
from contacto import guardar_mensaje
import sqlite3

app = Flask(__name__)

@app.route("/registro", methods=["GET", "POST"])
def registro():
    if request.method == "POST":
        nombre = request.form["nombre"]
        email = request.form["email"]
        password = request.form["password"]
        registrar_usuario(nombre, email, password)
        return redirect(url_for("login"))
    return render_template("registro.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form["email"]
        password = request.form["password"]
        usuario = validar_usuario(email, password)
        if usuario:
            return redirect(url_for("index"))
    return render_template("login.html")

@app.route("/contacto", methods=["GET", "POST"])
def contacto():
    if request.method == "POST":
        nombre = request.form["nombre"]
        email = request.form["email"]
        mensaje = request.form["mensaje"]
        guardar_mensaje(nombre, email, mensaje)
        return redirect(url_for("contacto"))
    return render_template("contacto.html")

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)