import RPi.GPIO as GPIO 
import sys 


chargeport = int(sys.argv[1])

GPIO.setmode(GPIO.BOARD) 
GPIO.setup(chargeport, GPIO.OUT)  
GPIO.setwarnings(False)
GPIO.output(chargeport, GPIO.HIGH)  
# GPIO.cleanup() 
sys.exit()