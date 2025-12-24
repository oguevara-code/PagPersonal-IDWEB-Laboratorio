from database import get_db

def registrar_usuario(nombre, email, password):
    db = get_db()
    cursor = db.cursor()
    cursor.execute(
        "INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)",
        (nombre, email, password)
    )
    db.commit()
    db.close()


def validar_usuario(email, password):
    db = get_db()
    cursor = db.cursor()
    cursor.execute(
        "SELECT * FROM usuarios WHERE email = ? AND password = ?",
        (email, password)
    )
    usuario = cursor.fetchone()
    db.close()
    return usuario