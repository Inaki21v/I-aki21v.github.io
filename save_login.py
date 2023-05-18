import json

data = {}
data['users'] = []

username = input("Ingrese el nombre de usuario: ")
password = input("Ingrese la contraseña: ")

user = {'username': username, 'password': password}
data['users'].append(user)

# Guardar los datos en un archivo JSON
with open('user_credentials.json', 'w') as file:
    json.dump(data, file)
