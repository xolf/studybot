# Studybot
Studybot is a web application, which is developed to teach students how to programm.
#
Live Demo: [Studybot.xolf.info](http://studybot.xolf.info/)
#
Orginal Idea by [Robot Karol](http://www.schule.bayern.de/karol/)

### German
#### Befehle
```javascript
Welt(x,y);
```
Definiert die Welt, mit der Breite x und der Tiefe y
```javascript
var Bot = new Bot(x,y,s,n);
```
Definiert den Bot bei x,y mit der Blickrichtung s und dem Namen n
```javascript
Bot.Schritt();
```
Lässt den Bot einen Schritt nach vorne gehen
```javascript
Bot.LinksDrehen();
```
Lässt den Bot nach links drehen
```javascript
Bot.RechtsDrehen();
```
Lässt den Bot nach rechts drehen
```javascript
Bot.Postion();
```
Gibt die Position des Bots aus