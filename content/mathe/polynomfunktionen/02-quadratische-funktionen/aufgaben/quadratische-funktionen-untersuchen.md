+++
titel = "Quadratische Funktionen untersuchen"
einleitung = "Erkunde zuerst den Einfluss von b mit den Schiebereglern. Rechne und zeichne im Heft und trage deine Ergebnisse ein."
+++

# "Einfluss von b erkunden"

## Auftrag: "Scheitelpunkt verfolgen"

Die Grafik zeigt die Funktion $f(x) = a x^2 + b x + c$ und die Normalparabel $g(x) = x^2$. Stelle $a = 1$ und $c = 0$ ein und verändere nur $b$.

::grafik [Einfluss von a, b und c auf die Parabel](../grafiken/parabel-a-b-c.toml)

Halte im Heft fest:

a) Notiere den Scheitelpunkt für $b = -4$, $b = -2$, $b = 0$, $b = 2$ und $b = 4$.

b) Welcher Punkt der Parabel verändert sich nie? Woran liegt das?

c) Wiederhole die Beobachtung mit $a = -1$ und $c = 2$. Was ist jetzt anders?

::tipp
Zum Ablesen des Scheitelpunkts hilft die Symmetrie: Die Parabel verläuft links und rechts von $S$ spiegelbildlich.

::loesung
a) Für $b = -4$ ist $S(2 | -4)$, für $b = -2$ ist $S(1 | -1)$, für $b = 0$ ist $S(0 | 0)$, für $b = 2$ ist $S(-1 | -1)$ und für $b = 4$ ist $S(-2 | -4)$.

b) Der Punkt $(0 | 0)$ bleibt immer auf der Parabel, denn es ist $f(0) = c$ für jedes $b$. Der Teil $b x$ wird an der Stelle $x = 0$ zu $0$.

c) Die Parabel ist nach unten geöffnet. Für $b > 0$ liegt der Scheitelpunkt jetzt rechts der y-Achse und über dem Punkt $(0 | 2)$, zum Beispiel $S(1 | 3)$ für $b = 2$ und $S(2 | 6)$ für $b = 4$. Alle Parabeln gehen durch $(0 | 2)$.

## Auswahl

Welche Aussage stimmt für alle Parabeln mit $f(x) = x^2 + b x + 3$?

- (x) Sie gehen alle durch den Punkt $(0 | 3)$.
- ( ) Sie gehen alle durch den Punkt $(3 | 0)$.
- ( ) Ihr Scheitelpunkt liegt immer auf der y-Achse.
- ( ) Sie sind unterschiedlich weit geöffnet.

::loesung
Es gilt $f(0) = 3$ für jedes $b$. Der Scheitelpunkt liegt nur für $b = 0$ auf der y-Achse. Die Öffnung hängt nur von $a = 1$ ab und ist daher immer gleich.

## Auftrag

Fasse in zwei bis drei Sätzen zusammen, welche Wirkung $b$ auf den Graphen hat.

::textfeld

::loesung
Der Koeffizient $b$ ändert weder die Öffnung noch die Breite der Parabel und auch nicht den y-Achsenabschnitt $c$. Er verschiebt den Scheitelpunkt schräg nach links oder rechts und zugleich nach oben oder unten. Für $a > 0$ wandert der Scheitelpunkt bei $b > 0$ nach links unten, bei $b < 0$ nach rechts unten.

# "Koeffizienten und Funktionstypen"

## Einsetzen

Lies die Koeffizienten der allgemeinen Form $f(x) = a x^2 + b x + c$ ab.

| Funktion | $a$ | $b$ | $c$ |
| --- | --- | --- | --- |
| $f(x) = 2x^2 + 3x - 4$ | ((2)) | ((3)) | ((-4)) |
| $g(x) = -x^2 + 4x$ | ((-1)) | ((4)) | ((0)) |
| $h(x) = x^2 - 7$ | ((1)) | ((0)) | ((-7)) |
| $k(x) = 6 - x - 3x^2$ | ((-3)) | ((-1)) | ((6)) |

::tipp
Fehlt ein Teil im Term, ist sein Koeffizient $0$. Achte auf die Vorzeichen.

[Allgemeine Form](../inhalt.md#allgemeine-form)

::loesung
Bei $g$ fehlt das konstante Glied, also $c = 0$. Bei $h$ fehlt der Teil mit $x$, also $b = 0$. Bei $k$ ist die Reihenfolge vertauscht: Zu $x^2$ gehört $-3$, zu $x$ gehört $-1$ und das konstante Glied ist $6$.

## Auswahl

::mehrfach

Welche der Funktionen sind quadratische Funktionen?

- (x) $g(x) = -x^2 + x - 1$
- (x) $h(x) = 2x^2$
- ( ) $f(x) = 3x - 2$
- ( ) $k(x) = x^3 + x^2$

::loesung
Eine quadratische Funktion hat $x^2$ als höchste Potenz. Bei $f$ kommt nur $x$ vor, bei $k$ gibt es mit $x^3$ eine höhere Potenz. Bei $h(x) = 2x^2$ sind $b = 0$ und $c = 0$, trotzdem ist es eine quadratische Funktion.

## Auswahl

Die Grafik zeigt den Graphen einer quadratischen Funktion. Welcher Term gehört dazu?

::grafik [Parabel mit unbekanntem Term](../grafiken/ablesen-term-2.toml)

- (x) $f(x) = 2x^2 - 4x - 1$
- ( ) $f(x) = 2x^2 + 4x - 1$
- ( ) $f(x) = -2x^2 - 4x - 1$
- ( ) $f(x) = 2x^2 - 4x + 1$

::tipp
Lies zuerst den y-Achsenabschnitt ab. Er verrät dir $c$. Die Öffnung liefert das Vorzeichen von $a$. Entscheide danach, wo der Scheitelpunkt liegt.

[Darstellungsformen wechseln](../inhalt.md#darstellungsformen-wechseln)

::loesung
Die Parabel schneidet die y-Achse bei $-1$, also ist $c = -1$. Sie ist nach oben geöffnet, also ist $a > 0$. Der Scheitelpunkt $S(1 | -3)$ liegt rechts der y-Achse; bei $a > 0$ gehört dazu $b < 0$. Es bleibt $f(x) = 2x^2 - 4x - 1$. Probe: $f(1) = 2 - 4 - 1 = -3$.

# "Scheitelpunkte und Extremwerte"

## Einsetzen

Lies am Graphen den Scheitelpunkt ab.

::grafik [Parabel mit Scheitelpunkt](../grafiken/scheitelpunkt-tiefpunkt.toml)

Der Scheitelpunkt hat die x-Koordinate ((3)) und die y-Koordinate ((-2)). Er ist ein ((Tiefpunkt | Hochpunkt)). Der kleinste Funktionswert ist ((-2)).

::tipp
Ist die Parabel nach oben oder nach unten geöffnet? Was bedeutet das für den Scheitelpunkt?

[Scheitelpunkt und Extremwert](../inhalt.md#scheitelpunkt-und-extremwert)

::loesung
Der Scheitelpunkt ist $S(3 | -2)$. Die Parabel ist nach oben geöffnet, also ist $S$ der tiefste Punkt. Der kleinste Funktionswert ist die y-Koordinate $-2$.

## Antwort

Welchen größten Funktionswert hat die dargestellte Funktion?

::grafik [Parabel mit Hochpunkt](../grafiken/scheitelpunkt-hochpunkt.toml)

::antwort
4

::fehler
1: Das ist die x-Koordinate des Hochpunkts. Gesucht ist der Funktionswert, also die y-Koordinate.

::loesung
Die Parabel ist nach unten geöffnet mit dem Hochpunkt $S(1 | 4)$. Der größte Funktionswert ist $4$. Er wird bei $x = 1$ angenommen.

## Gruppe: "Wertetabelle auswerten"

Gegeben ist die Wertetabelle einer quadratischen Funktion $h$.

| $x$ | $-1$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| $h(x)$ | $-4$ | $1$ | $4$ | $5$ | $4$ | $1$ | $-4$ |

### Antwort

Bei welchem $x$-Wert liegt der Scheitelpunkt?

::antwort
2

::tipp
Welche Funktionswerte kommen zweimal vor? Der Scheitelpunkt liegt in der Mitte zwischen den zugehörigen $x$-Werten.

::loesung
Die Werte $4$ bei $x = 1$ und $x = 3$ sowie $1$ bei $x = 0$ und $x = 4$ treten doppelt auf. Die Mitte liegt jeweils bei $x = 2$.

### Auswahl

Ist der Scheitelpunkt ein Hochpunkt oder ein Tiefpunkt?

- (x) Hochpunkt
- ( ) Tiefpunkt

::loesung
Die Funktionswerte steigen bis $x = 2$ und fallen danach wieder. Der Scheitelpunkt ist deshalb ein Hochpunkt.

### Antwort

Wie groß ist der größte Funktionswert?

::antwort
5

::loesung
Der Scheitelpunkt ist $S(2 | 5)$. Der größte Funktionswert ist die y-Koordinate $5$.

### Antwort

Welchen Wert hat $c$ in der allgemeinen Form von $h$?

::antwort
1

::loesung
Es gilt $h(0) = c$. In der Tabelle steht bei $x = 0$ der Wert $1$.

## Gruppe: "Wurf eines Balls"

Ein Ball wird nach oben geworfen. Seine Höhe in Metern nach $x$ Sekunden beschreibt die Funktion $h(x) = -5x^2 + 10x + 2$.

### Antwort

Aus welcher Höhe in Metern wird der Ball geworfen?

::antwort
2

::tipp
Der Wurf beginnt bei $x = 0$.

::loesung
$h(0) = 2$. Der Ball wird aus $2$ Metern Höhe geworfen.

### Einsetzen

Berechne die Höhe nach einer und nach zwei Sekunden.

$h(1)$ = ((7)) und $h(2)$ = ((2))

::loesung
$h(1) = -5 + 10 + 2 = 7$ und $h(2) = -20 + 20 + 2 = 2$.

### Antwort

Nach wie vielen Sekunden ist der Ball am höchsten?

::antwort
1

::tipp
Es gilt $h(0) = h(2)$. Wo liegt der Scheitelpunkt in Bezug auf diese beiden Stellen?

::loesung
Die Parabel ist nach unten geöffnet. Wegen $h(0) = h(2) = 2$ liegt der Scheitelpunkt in der Mitte bei $x = 1$.

### Antwort

Wie hoch in Metern fliegt der Ball höchstens?

::antwort
7

::loesung
Die größte Höhe ist die y-Koordinate des Scheitelpunkts $S(1 | 7)$, also $7$ Meter.

# "Darstellungsformen wechseln"

## Auswahl

Zu welcher Funktion gehört die Wertetabelle?

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ |
| --- | --- | --- | --- | --- | --- |
| $f(x)$ | $2$ | $-1$ | $-2$ | $-1$ | $2$ |

- (x) $f(x) = x^2 + 2x - 1$
- ( ) $f(x) = x^2 - 2x - 1$
- ( ) $f(x) = x^2 + 2x + 1$
- ( ) $f(x) = 2x^2 + 2x - 1$

::tipp
Der Funktionswert bei $x = 0$ verrät dir $c$. Prüfe die übrigen Terme mit einem weiteren Wert, zum Beispiel $x = 1$.

[Darstellungsformen wechseln](../inhalt.md#darstellungsformen-wechseln)

::loesung
Aus $f(0) = -1$ folgt $c = -1$. Damit scheidet $x^2 + 2x + 1$ aus. Für $x = 1$ gilt in der Tabelle $f(1) = 2$. Bei $x^2 + 2x - 1$ ergibt das $1 + 2 - 1 = 2$, bei $x^2 - 2x - 1$ dagegen $-2$ und bei $2x^2 + 2x - 1$ den Wert $3$.

## Einsetzen

Vervollständige die Wertetabelle für $f(x) = x^2 - 4x + 1$.

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ |
| --- | --- | --- | --- | --- | --- |
| $f(x)$ | ((1)) | ((-2)) | ((-3)) | ((-2)) | ((1)) |

::loesung
$f(0) = 1$, $quad f(1) = 1 - 4 + 1 = -2$, $quad f(2) = 4 - 8 + 1 = -3$, $quad f(3) = 9 - 12 + 1 = -2$, $quad f(4) = 16 - 16 + 1 = 1$.

Der Scheitelpunkt liegt bei $S(2 | -3)$.

## Auftrag

Gegeben ist $f(x) = x^2 - 2x - 3$.

a) Erstelle im Heft eine Wertetabelle für die Werte $x$ von $-2$ bis $4$ und zeichne den Graphen.

b) Lies den Scheitelpunkt ab. Entscheide, ob es ein Hoch- oder ein Tiefpunkt ist, und gib den Extremwert an.

::tipp
Zeichne die Punkte aus der Wertetabelle in ein Koordinatensystem und verbinde sie zu einer glatten Kurve.

::loesung
a)

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ | $4$ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| $f(x)$ | $5$ | $0$ | $-3$ | $-4$ | $-3$ | $0$ | $5$ |

b) Der Scheitelpunkt ist $S(1 | -4)$. Die Parabel ist nach oben geöffnet, also ist $S$ ein Tiefpunkt. Der kleinste Funktionswert ist $-4$.

## Graph: "Funktionsterm bestimmen"

Gib einen Funktionsterm der Form $f(x) = a x^2 + b x + c$ an, dessen Graph durch die Punkte $A$, $B$ und $C$ geht.

::grafik [Drei Punkte einer Parabel](../grafiken/eingabe-punkte-3.toml)

::antwort
y = -x^2 + 2x + 3

::tipp
Der Punkt $B$ liegt auf der y-Achse und liefert dir $c$. Die Parabel ist nach unten geöffnet. Probiere $a = -1$ und verändere $b$, bis der Graph durch $A$ und $C$ geht.

[Einfluss von b](../inhalt.md#einfluss-von-b)

::loesung
Aus $B(0 | 3)$ folgt $c = 3$. Mit $A(-1 | 0)$ gilt $a - b + 3 = 0$ und mit $C(3 | 0)$ gilt $9a + 3b + 3 = 0$. Aus der ersten Gleichung folgt $b = a + 3$. Eingesetzt in die zweite ergibt sich $12a + 12 = 0$, also $a = -1$ und $b = 2$. Damit ist $f(x) = -x^2 + 2x + 3$.

# Checkpoint

## Einsetzen

Lies die Koeffizienten von $f(x) = 3x^2 - 5x + 2$ ab.

$a$ = ((3)), $quad b$ = ((-5)), $quad c$ = ((2))

::loesung
Die Zahl vor $x^2$ ist $a = 3$, die Zahl vor $x$ ist $b = -5$ und das konstante Glied ist $c = 2$.

## Auswahl

Welche Aussage über $f(x) = -2x^2 + 8x - 3$ stimmt?

- (x) Die Parabel ist nach unten geöffnet und hat einen größten Funktionswert.
- ( ) Die Parabel ist nach unten geöffnet und hat einen kleinsten Funktionswert.
- ( ) Die Parabel ist nach oben geöffnet und hat einen größten Funktionswert.
- ( ) Die Parabel schneidet die y-Achse bei $8$.

::loesung
Wegen $a = -2 < 0$ ist die Parabel nach unten geöffnet. Der Scheitelpunkt ist dann ein Hochpunkt, also gibt es einen größten Funktionswert. Die y-Achse wird bei $c = -3$ geschnitten.

## Antwort

Gegeben ist die Wertetabelle einer quadratischen Funktion.

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ |
| --- | --- | --- | --- | --- | --- |
| $f(x)$ | $3$ | $0$ | $-1$ | $0$ | $3$ |

Wie groß ist der kleinste Funktionswert?

::antwort
-1

::fehler
2: Das ist die x-Koordinate des Scheitelpunkts. Gesucht ist der Funktionswert.

::loesung
Die Werte sind symmetrisch zu $x = 2$. Der Scheitelpunkt ist $S(2 | -1)$ und ein Tiefpunkt. Der kleinste Funktionswert ist $-1$.

## Einsetzen

Lies am Graphen den Scheitelpunkt ab.

::grafik [Parabel mit Scheitelpunkt](../grafiken/checkpoint-scheitelpunkt.toml)

Der Scheitelpunkt hat die x-Koordinate ((2)) und die y-Koordinate ((3)). Er ist ein ((Hochpunkt | Tiefpunkt)).

::loesung
Der Scheitelpunkt ist $S(2 | 3)$. Die Parabel ist nach unten geöffnet, also ist er ein Hochpunkt.
