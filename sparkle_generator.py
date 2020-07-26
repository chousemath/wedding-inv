from random import randint, seed
from time import time

print('@media all and (min-height: 800px) and (max-height: 9024px) {\n\t.cover-photo { top: 50px; }')

for i in range(200):
    seed(time())
    fade_time = str(randint(2,4))
    print('\t#sparkle-'+str(i+1)+' { top: calc(50px + '+str(randint(5,160))+'px); left: '+str(randint(20,80))+'vw; position: absolute; -webkit-animation: fadeinout '+fade_time+'s linear infinite; animation: fadeinout '+fade_time+'s linear infinite; opacity: 0;}')

print('}')
    
print('\n\n\n\n')    

print('@media all and (min-height: 650px) and (max-height: 800px) { \n\t.cover-photo { top: 100px; }')

for i in range(200):
    seed(time())
    fade_time = str(randint(2,4))
    print('\t#sparkle-'+str(i+1)+' { top: calc(100px + '+str(randint(5,160))+'px); left: '+str(randint(20,80))+'vw; position: absolute; -webkit-animation: fadeinout '+fade_time+'s linear infinite; animation: fadeinout '+fade_time+'s linear infinite; opacity: 0;}')

print('}')

print('\n\n\n\n')    

print('@media all and (max-height: 650px) { \n\t.cover-photo { top: 0px; }')

for i in range(200):
    seed(time())
    fade_time = str(randint(2,4))
    print('\t#sparkle-'+str(i+1)+' { top: calc(0px + '+str(randint(5,160))+'px); left: '+str(randint(20,80))+'vw; position: absolute; -webkit-animation: fadeinout '+fade_time+'s linear infinite; animation: fadeinout '+fade_time+'s linear infinite; opacity: 0;}')

print('}')

print('\n\n\n\n')    

for i in range(200):
    print('<div id="sparkle-'+str(i+1)+'" class="cover-photo sparkle"></div>')
