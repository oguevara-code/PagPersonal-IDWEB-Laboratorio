from database import get_db

def guardar_mensaje(nombre, email, mensaje):
    db = get_db()
    cursor = db.cursor()
    cursor.execute(
        "INSERT INTO contactos (nombre, email, mensaje) VALUES (?, ?, ?)",
        (nombre, email, mensaje)
    )
    db.commit()
    db.close()