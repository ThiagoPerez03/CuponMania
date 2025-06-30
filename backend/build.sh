#!/usr/bin/env bash
# build.sh

# Salir inmediatamente si un comando falla
set -o errexit

# Instalar las dependencias
pip install -r requirements.txt

# Recolectar archivos estáticos
python manage.py collectstatic --no-input

# Aplicar migraciones de la base de datos
python manage.py migrate