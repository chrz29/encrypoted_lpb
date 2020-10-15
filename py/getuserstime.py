import urllib.request
import sys 
mac = sys.argv[1]
contents = urllib.request.urlopen('http://10.0.0.1/api/getuserstime.php?mac='+mac+'', timeout = 1).read() 