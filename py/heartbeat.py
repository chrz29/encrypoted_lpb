#!/usr/bin/python
# -*- coding: utf-8 -*-
import sys
import os, time
from datetime import datetime

import mysql.connector
from mysql.connector import errorcode
os.environ['TZ'] = 'Asia/Manila'


config = {
    'user': 'lpbpisowifi',
    'password': 'NkncqvS6vTkF1BTs',
    'host': '127.0.0.1',
    'database': 'rpi_wifi',
    'raise_on_warnings': True,
    }

# Get and format the current date and time

current_date_time = datetime.now().strftime('%m/%d/%Y %H:%M')

cnx = mysql.connector.connect(**config)
cursor = cnx.cursor()
query = \
    """ UPDATE my_settings
SET lastchecktime = %s
WHERE status = %s """

data = (current_date_time, 1)
cursor.execute(query, data)
cnx.commit()
cursor.close()
cnx.close()

sys.exit(0)
