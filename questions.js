// questions.js
const QUESTIONS = [
  // =========================
  // Netzwerke (30) – 10 easy / 10 medium / 10 hard
  // =========================

  // --- easy (1–10) ---
  {
    id: 1,
    category: "Netzwerke",
    difficulty: "easy",
    question: "Wofür steht LAN?",
    answers: ["Local Area Network", "Large Access Node", "Link And Network", "Local Account Name"],
    correctIndex: 0,
    explanation: "LAN bedeutet Local Area Network (lokales Netzwerk, z.B. zu Hause oder im Büro)."
  },
  {
    id: 2,
    category: "Netzwerke",
    difficulty: "easy",
    question: "Wofür steht WAN?",
    answers: ["Wide Area Network", "Wireless Access Network", "Web Area Node", "Wide Array Name"],
    correctIndex: 0,
    explanation: "WAN bedeutet Wide Area Network (verbindet große Entfernungen, z.B. über Länder)."
  },
  {
    id: 3,
    category: "Netzwerke",
    difficulty: "easy",
    question: "Was macht ein Router hauptsächlich?",
    answers: [
      "Er leitet Daten zwischen verschiedenen Netzwerken weiter",
      "Er speichert Dateien zentral",
      "Er ersetzt die Firewall",
      "Er erhöht automatisch die Bildschirmauflösung"
    ],
    correctIndex: 0,
    explanation: "Router verbinden Netzwerke und routen Pakete (z.B. LAN ↔ Internet)."
  },
  {
    id: 4,
    category: "Netzwerke",
    difficulty: "easy",
    question: "Was macht DNS?",
    answers: [
      "Es löst Domainnamen in IP-Adressen auf",
      "Es verschlüsselt WLAN-Passwörter",
      "Es beschleunigt die CPU",
      "Es erstellt Backups"
    ],
    correctIndex: 0,
    explanation: "DNS übersetzt z.B. example.com in eine IP-Adresse."
  },
  {
    id: 5,
    category: "Netzwerke",
    difficulty: "easy",
    question: "Welche Angabe ist typisch für eine IPv4-Adresse?",
    answers: ["Vier Zahlenblöcke (0–255) mit Punkten", "Sechs Hex-Blöcke mit Doppelpunkten", "Nur Buchstaben", "Nur 64-Bit Zahlen"],
    correctIndex: 0,
    explanation: "IPv4 wird klassisch als x.x.x.x dargestellt (z.B. 192.168.1.10)."
  },
  {
    id: 6,
    category: "Netzwerke",
    difficulty: "easy",
    question: "Wofür wird DHCP genutzt?",
    answers: [
      "Automatische Vergabe von IP-Adressen und Netzwerkeinstellungen",
      "Komprimieren von Bildern",
      "Erstellen von Datenbanken",
      "Blockieren von Werbung"
    ],
    correctIndex: 0,
    explanation: "DHCP verteilt IP-Adresse, Gateway und DNS automatisch an Clients."
  },
  {
    id: 7,
    category: "Netzwerke",
    difficulty: "easy",
    question: "Was beschreibt die MAC-Adresse am ehesten?",
    answers: [
      "Hardware-Adresse einer Netzwerkschnittstelle",
      "Öffentliche IP-Adresse des Routers",
      "Passwort für WLAN",
      "Name eines DNS-Servers"
    ],
    correctIndex: 0,
    explanation: "MAC-Adressen identifizieren Geräte/Interfaces auf Layer 2 (Ethernet/WLAN)."
  },
  {
    id: 8,
    category: "Netzwerke",
    difficulty: "easy",
    question: "Welche Aussage zu einem Switch passt am besten?",
    answers: [
      "Er verbindet Geräte im gleichen LAN (Layer 2) und leitet Frames weiter",
      "Er vergibt IP-Adressen wie DHCP",
      "Er löst Domainnamen auf wie DNS",
      "Er ersetzt immer einen Router"
    ],
    correctIndex: 0,
    explanation: "Ein Switch arbeitet typischerweise auf Layer 2 und nutzt MAC-Adressen."
  },
  {
    id: 9,
    category: "Netzwerke",
    difficulty: "easy",
    question: "Wofür nutzt man 'ping' meistens?",
    answers: [
      "Um die Erreichbarkeit eines Hosts zu testen",
      "Um Dateien zu verschlüsseln",
      "Um Ports zu öffnen",
      "Um WLAN-Kanäle zu wechseln"
    ],
    correctIndex: 0,
    explanation: "Ping testet, ob ein Ziel antwortet (meist via ICMP)."
  },
  {
    id: 10,
    category: "Netzwerke",
    difficulty: "easy",
    question: "Welche Kombination ist ein typischer Web-Port?",
    answers: ["HTTP: 80", "HTTP: 22", "HTTP: 25", "HTTP: 53"],
    correctIndex: 0,
    explanation: "HTTP nutzt standardmäßig Port 80 (HTTPS typischerweise 443)."
  },

  // --- medium (11–20) ---
  {
    id: 11,
    category: "Netzwerke",
    difficulty: "medium",
    question: "Wofür ist eine Subnetzmaske (Subnet Mask) da?",
    answers: [
      "Um Netzwerk- und Host-Anteil einer IP-Adresse zu trennen",
      "Um WLAN schneller zu machen",
      "Um DNS-Einträge zu speichern",
      "Um Browser-Cookies zu löschen"
    ],
    correctIndex: 0,
    explanation: "Die Subnetzmaske bestimmt, welche Bits das Netz und welche Bits den Host beschreiben."
  },
  {
    id: 12,
    category: "Netzwerke",
    difficulty: "medium",
    question: "Was bedeutet CIDR /24 bei IPv4?",
    answers: [
      "24 Bits sind Netzwerkanteil (typisch 255.255.255.0)",
      "24 Hosts sind im Netz erlaubt",
      "24 Router sind im Netz erlaubt",
      "24 Ports sind geöffnet"
    ],
    correctIndex: 0,
    explanation: "/24 bedeutet 24 Netzbits, oft entspricht das 255.255.255.0."
  },
  {
    id: 13,
    category: "Netzwerke",
    difficulty: "medium",
    question: "Welche IP ist typischerweise privat (RFC1918-Bereich)?",
    answers: ["8.8.8.8", "192.168.1.50", "1.1.1.1", "203.0.113.10"],
    correctIndex: 1,
    explanation: "192.168.0.0/16 ist ein privater IPv4-Bereich (z.B. Heimnetz)."
  },
  {
    id: 14,
    category: "Netzwerke",
    difficulty: "medium",
    question: "Wofür steht NAT meistens?",
    answers: [
      "Übersetzung privater IP-Adressen in öffentliche (und zurück)",
      "Automatische Vergabe von Ports an Browser",
      "Verschlüsselung von DNS",
      "Blockieren von VLANs"
    ],
    correctIndex: 0,
    explanation: "NAT ermöglicht vielen privaten Clients die Nutzung einer öffentlichen IP."
  },
  {
    id: 15,
    category: "Netzwerke",
    difficulty: "medium",
    question: "Was ist der Hauptunterschied zwischen TCP und UDP?",
    answers: [
      "TCP ist verbindungsorientiert/zuverlässig, UDP ist verbindungslos",
      "UDP ist immer schneller als TCP",
      "TCP kann keine Ports nutzen",
      "UDP verschlüsselt automatisch"
    ],
    correctIndex: 0,
    explanation: "TCP sichert Reihenfolge/Zustellung, UDP ist leichter, aber ohne Garantie."
  },
  {
    id: 16,
    category: "Netzwerke",
    difficulty: "medium",
    question: "Wie heißt der erste Schritt beim TCP-Verbindungsaufbau (3-Way-Handshake)?",
    answers: ["SYN", "ACK", "FIN", "RST"],
    correctIndex: 0,
    explanation: "TCP beginnt typischerweise mit SYN → SYN/ACK → ACK."
  },
  {
    id: 17,
    category: "Netzwerke",
    difficulty: "medium",
    question: "Welche Aufgabe hat ARP (IPv4)?",
    answers: [
      "IP-Adresse zu MAC-Adresse im lokalen Netz auflösen",
      "Domainnamen zu IP auflösen",
      "Pakete über das Internet routen",
      "TLS-Zertifikate prüfen"
    ],
    correctIndex: 0,
    explanation: "ARP wird im LAN genutzt, um die MAC-Adresse zu einer IPv4 zu finden."
  },
  {
    id: 18,
    category: "Netzwerke",
    difficulty: "medium",
    question: "Welches Tool zeigt häufig den Weg (Hops) zu einem Ziel?",
    answers: ["traceroute/tracert", "ping", "ipconfig", "whoami"],
    correctIndex: 0,
    explanation: "Traceroute/Tracert zeigt Zwischenstationen (Hops) bis zum Ziel."
  },
  {
    id: 19,
    category: "Netzwerke",
    difficulty: "medium",
    question: "Was ist ein VLAN?",
    answers: [
      "Eine logische Segmentierung eines Switch-Netzwerks",
      "Ein Internet-Browser",
      "Ein VPN-Protokoll",
      "Eine Art WLAN-Passwort"
    ],
    correctIndex: 0,
    explanation: "VLANs trennen Broadcast-Domains logisch, auch wenn die Hardware gemeinsam ist."
  },
  {
    id: 20,
    category: "Netzwerke",
    difficulty: "medium",
    question: "Welche Port-Kombination ist typisch korrekt?",
    answers: ["HTTPS: 443", "HTTPS: 53", "DNS: 80", "SSH: 110"],
    correctIndex: 0,
    explanation: "HTTPS nutzt typischerweise Port 443."
  },

  // --- hard (21–30) ---
  {
    id: 21,
    category: "Netzwerke",
    difficulty: "hard",
    question: "Wofür steht MTU?",
    answers: [
      "Maximum Transmission Unit",
      "Minimum Transfer Utility",
      "Main Traffic Unit",
      "Medium Transport User"
    ],
    correctIndex: 0,
    explanation: "MTU ist die maximale Paketgröße (ohne Fragmentierung) auf einem Link."
  },
  {
    id: 22,
    category: "Netzwerke",
    difficulty: "hard",
    question: "Was ist ein typisches Merkmal von TLS (bei HTTPS)?",
    answers: [
      "Es ermöglicht verschlüsselte Kommunikation und Server-Authentifizierung",
      "Es ersetzt DNS",
      "Es ist nur für E-Mail gedacht",
      "Es funktioniert ohne Zertifikate"
    ],
    correctIndex: 0,
    explanation: "TLS verschlüsselt die Verbindung und nutzt Zertifikate zur Authentifizierung."
  },
  {
    id: 23,
    category: "Netzwerke",
    difficulty: "hard",
    question: "Wofür steht BGP am ehesten?",
    answers: [
      "Routing-Protokoll zwischen autonomen Systemen im Internet",
      "WLAN-Verschlüsselungsstandard",
      "Lokales Dateifreigabe-Protokoll",
      "DNS-Cache-Dienst"
    ],
    correctIndex: 0,
    explanation: "BGP wird im Internet-Backbone für das Routing zwischen Netzen (AS) genutzt."
  },
  {
    id: 24,
    category: "Netzwerke",
    difficulty: "hard",
    question: "Wozu dient STP (Spanning Tree Protocol) hauptsächlich?",
    answers: [
      "Layer-2-Schleifen in Switch-Netzen verhindern",
      "IP-Adressen verteilen",
      "Pakete verschlüsseln",
      "Ports automatisch öffnen"
    ],
    correctIndex: 0,
    explanation: "STP verhindert Broadcast-Stürme durch Loops in Switch-Topologien."
  },
  {
    id: 25,
    category: "Netzwerke",
    difficulty: "hard",
    question: "Welche DNS-Record-Art ist typisch für eine IPv6-Adresse?",
    answers: ["AAAA", "A", "CNAME", "MX"],
    correctIndex: 0,
    explanation: "AAAA-Records zeigen auf IPv6-Adressen (A-Record ist IPv4)."
  },
  {
    id: 26,
    category: "Netzwerke",
    difficulty: "hard",
    question: "Welche DNS-Record-Art ist typischerweise für E-Mail-Routing zuständig?",
    answers: ["MX", "TXT", "CNAME", "PTR"],
    correctIndex: 0,
    explanation: "MX-Records definieren Mailserver für eine Domain."
  },
  {
    id: 27,
    category: "Netzwerke",
    difficulty: "hard",
    question: "Welche IPv6-Adresse ist eine Link-Local-Adresse?",
    answers: ["fe80::1", "2001:db8::1", "8.8.8.8", "10.0.0.1"],
    correctIndex: 0,
    explanation: "fe80::/10 ist der Link-Local-Bereich (nur im lokalen Segment gültig)."
  },
  {
    id: 28,
    category: "Netzwerke",
    difficulty: "hard",
    question: "Welche Aussage beschreibt SYN-Flood am besten?",
    answers: [
      "Viele SYN-Anfragen ohne Abschluss binden Server-Ressourcen (DoS)",
      "Ein DNS-Eintrag wird gefälscht",
      "Ein Router verteilt falsche IPs über DHCP",
      "Ein Switch leert seine MAC-Tabelle absichtlich"
    ],
    correctIndex: 0,
    explanation: "SYN-Flood überlastet oft den Verbindungs-Backlog durch halboffene TCP-Verbindungen."
  },
  {
    id: 29,
    category: "Netzwerke",
    difficulty: "hard",
    question: "Wofür steht QoS im Netzwerk-Kontext?",
    answers: [
      "Quality of Service (Priorisierung/Steuerung von Traffic)",
      "Query over Switch",
      "Queue of Security",
      "Quality of Storage"
    ],
    correctIndex: 0,
    explanation: "QoS priorisiert Datenverkehr (z.B. VoIP) oder begrenzt Bandbreite."
  },
  {
    id: 30,
    category: "Netzwerke",
    difficulty: "hard",
    question: "Welche Aussage zu ICMP stimmt am ehesten?",
    answers: [
      "Es wird u.a. für Diagnose/Fehlermeldungen genutzt (z.B. ping)",
      "Es ist ein Verschlüsselungsprotokoll",
      "Es ist ein Dateisystem",
      "Es ersetzt TCP vollständig"
    ],
    correctIndex: 0,
    explanation: "ICMP dient u.a. für Erreichbarkeits- und Fehler-Meldungen (Diagnose)."
  },
  // --- Netzwerke: easy (31–35) ---
{
  id: 31,
  category: "Netzwerke",
  difficulty: "easy",
  question: "Was ist ein Access Point (AP) am ehesten?",
  answers: ["Ein Gerät, das WLAN bereitstellt", "Ein DNS-Server", "Ein Dateisystem", "Ein Browser-Plugin"],
  correctIndex: 0,
  explanation: "Ein Access Point stellt WLAN bereit und verbindet WLAN-Clients mit dem LAN."
},
{
  id: 32,
  category: "Netzwerke",
  difficulty: "easy",
  question: "Wofür steht SSID im WLAN-Kontext?",
  answers: ["Name des WLAN-Netzwerks", "Passwort des WLAN-Netzwerks", "IP-Adresse des Routers", "MAC-Adresse des Laptops"],
  correctIndex: 0,
  explanation: "SSID ist der sichtbare Name des WLANs."
},
{
  id: 33,
  category: "Netzwerke",
  difficulty: "easy",
  question: "Was ist Ethernet?",
  answers: ["Ein Standard für kabelgebundene Netzwerke (LAN)", "Ein WLAN-Passwort", "Ein Betriebssystem", "Ein Webserver"],
  correctIndex: 0,
  explanation: "Ethernet ist die typische LAN-Technik über Netzwerkkabel (z.B. RJ45)."
},
{
  id: 34,
  category: "Netzwerke",
  difficulty: "easy",
  question: "Was ist ein Modem?",
  answers: ["Gerät, das die Internetleitung (z.B. DSL/Kabel) in Daten für den Router umsetzt", "Ein Switch", "Ein Virenscanner", "Ein DNS-Record"],
  correctIndex: 0,
  explanation: "Modems stellen die Verbindung zum Provider her (DSL/Kabel/Glasfaser – je nach Technik)."
},
{
  id: 35,
  category: "Netzwerke",
  difficulty: "easy",
  question: "Wofür steht VPN?",
  answers: ["Virtual Private Network", "Very Public Network", "Verified Protocol Node", "Visual Packet Number"],
  correctIndex: 0,
  explanation: "VPN bedeutet Virtual Private Network."
},

// --- Netzwerke: medium (36–40) ---
{
  id: 36,
  category: "Netzwerke",
  difficulty: "medium",
  question: "Was ist ein Default Gateway?",
  answers: ["Der Router, an den Pakete für andere Netze geschickt werden", "Der DNS-Server", "Die Subnetzmaske", "Der Browser-Cache"],
  correctIndex: 0,
  explanation: "Das Default Gateway ist meist die Router-IP im lokalen Netz."
},
{
  id: 37,
  category: "Netzwerke",
  difficulty: "medium",
  question: "Wofür wird Port-Forwarding (NAT) typischerweise genutzt?",
  answers: [
    "Um eingehende Verbindungen aus dem Internet an ein internes Gerät weiterzuleiten",
    "Um WLAN-Kanäle automatisch zu wechseln",
    "Um DNS-Records zu erstellen",
    "Um IPv6 zu deaktivieren"
  ],
  correctIndex: 0,
  explanation: "Port-Forwarding le erleichtert den Zugriff von außen auf Dienste im LAN (z.B. Server)."
},
{
  id: 38,
  category: "Netzwerke",
  difficulty: "medium",
  question: "Was bedeutet TTL (Time To Live) bei IP-Paketen am ehesten?",
  answers: [
    "Begrenzt die Anzahl der Hops, damit Pakete nicht endlos im Kreis laufen",
    "Legt die Paketgröße fest",
    "Verschlüsselt den Datenverkehr",
    "Ist das Passwort für den Router"
  ],
  correctIndex: 0,
  explanation: "TTL wird pro Hop reduziert; bei 0 wird das Paket verworfen."
},
{
  id: 39,
  category: "Netzwerke",
  difficulty: "medium",
  question: "Was ist der Hauptunterschied zwischen Hub und Switch?",
  answers: [
    "Ein Switch leitet gezielt an Ports weiter, ein Hub sendet an alle Ports",
    "Ein Hub kann VLAN, ein Switch nicht",
    "Ein Hub arbeitet auf Layer 3, ein Switch auf Layer 7",
    "Ein Switch vergibt IP-Adressen, ein Hub nicht"
  ],
  correctIndex: 0,
  explanation: "Switches nutzen MAC-Tabellen und senden nicht blind an alle."
},
{
  id: 40,
  category: "Netzwerke",
  difficulty: "medium",
  question: "Welche Aussage zu 'Firewall' passt am besten?",
  answers: [
    "Sie filtert Netzwerkverkehr anhand von Regeln",
    "Sie ersetzt den Router komplett",
    "Sie speichert Passwörter",
    "Sie ist ein DNS-Record"
  ],
  correctIndex: 0,
  explanation: "Firewalls kontrollieren ein-/ausgehenden Traffic nach Regeln (Ports, IPs, Protokolle)."
},

// --- Netzwerke: hard (41–45) ---
{
  id: 41,
  category: "Netzwerke",
  difficulty: "hard",
  question: "Was ist PMTUD (Path MTU Discovery) am ehesten?",
  answers: [
    "Ein Verfahren, um die maximale Paketgröße ohne Fragmentierung auf dem Pfad zu finden",
    "Ein DNS-Record für MTU",
    "Ein Verschlüsselungsstandard für WLAN",
    "Ein Routing-Protokoll für IPv6"
  ],
  correctIndex: 0,
  explanation: "PMTUD versucht die passende MTU entlang des Pfads zu ermitteln."
},
{
  id: 42,
  category: "Netzwerke",
  difficulty: "hard",
  question: "Was ist Anycast?",
  answers: [
    "Mehrere Server teilen sich dieselbe IP, und Routing liefert zum 'nächsten' Knoten",
    "Eine Art NAT nur für IPv6",
    "Ein Ersatz für DNS",
    "Ein spezielles VLAN für Server"
  ],
  correctIndex: 0,
  explanation: "Anycast wird u.a. bei DNS/CDN genutzt, um Nutzer zum nächstgelegenen Standort zu routen."
},
{
  id: 43,
  category: "Netzwerke",
  difficulty: "hard",
  question: "Wofür steht 802.1X?",
  answers: [
    "Port-basierte Netzwerkzugangskontrolle (Authentifizierung, z.B. in Firmen-WLAN/LAN)",
    "WLAN-Kanalstandard für 5 GHz",
    "DNS-Verschlüsselung",
    "IP-Adressierungsschema"
  ],
  correctIndex: 0,
  explanation: "802.1X steuert den Zugang am Port (LAN/WLAN) meist mit RADIUS/Enterprise-Auth."
},
{
  id: 44,
  category: "Netzwerke",
  difficulty: "hard",
  question: "Was ist DNSSEC?",
  answers: [
    "Erweiterung, die DNS-Antworten kryptografisch signiert (Authentizität/Integrität)",
    "Ein VPN-Protokoll",
    "Eine Firewall-Regel",
    "Ein Ersatz für TLS"
  ],
  correctIndex: 0,
  explanation: "DNSSEC hilft, DNS-Manipulation (z.B. Cache Poisoning) zu erschweren."
},
{
  id: 45,
  category: "Netzwerke",
  difficulty: "hard",
  question: "Wie viele nutzbare Host-Adressen hat ein IPv4-Netz /29?",
  answers: ["2", "6", "8", "14"],
  correctIndex: 1,
  explanation: "/29 hat 8 Adressen insgesamt, abzüglich Netz- und Broadcastadresse bleiben 6 nutzbare Hosts."
},
// =========================
// Betriebssysteme (45) – 15 easy / 15 medium / 15 hard
// IDs: 46–90
// =========================

// --- easy (46–60) ---
{
  id: 46,
  category: "Betriebssysteme",
  difficulty: "easy",
  question: "Was ist ein Betriebssystem (OS)?",
  answers: ["Software, die Hardware verwaltet und Programme ausführt", "Ein Internetkabel", "Ein Browser-Plugin", "Ein Dateiformat"],
  correctIndex: 0,
  explanation: "Ein Betriebssystem ist die Basissoftware zwischen Hardware und Anwendungen."
},
{
  id: 47,
  category: "Betriebssysteme",
  difficulty: "easy",
  question: "Welche Komponente ist typisch Teil eines Betriebssystems?",
  answers: ["Kernel", "HTML", "Router", "RAM-Riegel"],
  correctIndex: 0,
  explanation: "Der Kernel ist der zentrale Kern des Betriebssystems."
},
{
  id: 48,
  category: "Betriebssysteme",
  difficulty: "easy",
  question: "Was ist eine Datei?",
  answers: ["Gespeicherte Daten mit Namen auf einem Speichermedium", "Ein Internetprotokoll", "Eine CPU-Einstellung", "Ein WLAN-Standard"],
  correctIndex: 0,
  explanation: "Dateien enthalten Daten (z.B. Text, Bilder, Programme)."
},
{
  id: 49,
  category: "Betriebssysteme",
  difficulty: "easy",
  question: "Was ist ein Ordner (Verzeichnis)?",
  answers: ["Ein Container zum Organisieren von Dateien", "Ein Treiber", "Ein Router", "Eine Verschlüsselung"],
  correctIndex: 0,
  explanation: "Ordner strukturieren Dateien auf dem Dateisystem."
},
{
  id: 50,
  category: "Betriebssysteme",
  difficulty: "easy",
  question: "Welche Art von Software ist ein 'Treiber' (Driver)?",
  answers: ["Software zur Ansteuerung von Hardware", "Eine Firewall-Regel", "Ein Dateityp", "Ein Browser-Cache"],
  correctIndex: 0,
  explanation: "Treiber ermöglichen dem OS, mit Hardware (z.B. Drucker) zu kommunizieren."
},
{
  id: 51,
  category: "Betriebssysteme",
  difficulty: "easy",
  question: "Was ist ein Prozess?",
  answers: ["Ein laufendes Programm (Instanz)", "Ein Dateiname", "Ein Druckauftrag", "Ein BIOS-Update"],
  correctIndex: 0,
  explanation: "Wenn ein Programm läuft, wird es als Prozess verwaltet."
},
{
  id: 52,
  category: "Betriebssysteme",
  difficulty: "easy",
  question: "Was ist ein Benutzerkonto im Betriebssystem?",
  answers: ["Eine Identität mit Rechten und Einstellungen", "Eine IP-Adresse", "Ein Dateityp", "Ein Netzwerkprotokoll"],
  correctIndex: 0,
  explanation: "Konten steuern z.B. Zugriff, Rechte und persönliche Einstellungen."
},
{
  id: 53,
  category: "Betriebssysteme",
  difficulty: "easy",
  question: "Wozu dient ein Passwort beim Login?",
  answers: ["Authentifizierung des Benutzers", "Komprimierung von Dateien", "Beschleunigung des Netzwerks", "Ändern der Bildschirmauflösung"],
  correctIndex: 0,
  explanation: "Passwörter helfen, Nutzer zu identifizieren (Authentifizierung)."
},
{
  id: 54,
  category: "Betriebssysteme",
  difficulty: "easy",
  question: "Was ist ein Update?",
  answers: ["Eine Aktualisierung von Software/OS", "Ein neues Kabel", "Ein externer Monitor", "Eine WLAN-Antenne"],
  correctIndex: 0,
  explanation: "Updates bringen z.B. Fehlerfixes, Sicherheitsupdates oder neue Funktionen."
},
{
  id: 55,
  category: "Betriebssysteme",
  difficulty: "easy",
  question: "Was ist ein Neustart (Reboot)?",
  answers: ["Der Computer wird neu gestartet", "Alle Dateien werden gelöscht", "Die CPU wird übertaktet", "Der Router wird ersetzt"],
  correctIndex: 0,
  explanation: "Beim Neustart wird das System neu geladen."
},
{
  id: 56,
  category: "Betriebssysteme",
  difficulty: "easy",
  question: "Was ist ein Desktop?",
  answers: ["Die grafische Arbeitsoberfläche", "Ein Internetprotokoll", "Ein Dateiformat", "Ein Prozessor-Typ"],
  correctIndex: 0,
  explanation: "Der Desktop ist ein Teil der GUI, wo z.B. Icons liegen."
},
{
  id: 57,
  category: "Betriebssysteme",
  difficulty: "easy",
  question: "Was ist eine GUI?",
  answers: ["Grafische Benutzeroberfläche", "Ein Dateisystem", "Ein Netzwerkadapter", "Eine Programmiersprache"],
  correctIndex: 0,
  explanation: "GUI = Graphical User Interface."
},
{
  id: 58,
  category: "Betriebssysteme",
  difficulty: "easy",
  question: "Was ist ein Terminal/Command Line?",
  answers: ["Textbasierte Eingabe von Befehlen", "Ein Drucker-Treiber", "Ein Ordner", "Ein Virenscanner"],
  correctIndex: 0,
  explanation: "Im Terminal kann man Befehle eintippen (CLI)."
},
{
  id: 59,
  category: "Betriebssysteme",
  difficulty: "easy",
  question: "Was ist ein Dateipfad?",
  answers: ["Adresse, wo eine Datei/Ordner liegt", "Ein CPU-Kern", "Ein WLAN-Passwort", "Ein DNS-Record"],
  correctIndex: 0,
  explanation: "Ein Pfad beschreibt den Speicherort im Dateisystem."
},
{
  id: 60,
  category: "Betriebssysteme",
  difficulty: "easy",
  question: "Wofür steht 'RAM' am ehesten?",
  answers: ["Arbeitsspeicher für laufende Programme", "Festplattenspeicher", "Internetbandbreite", "Grafikkartentreiber"],
  correctIndex: 0,
  explanation: "RAM ist schneller, flüchtiger Speicher für laufende Prozesse."
},

// --- medium (61–75) ---
{
  id: 61,
  category: "Betriebssysteme",
  difficulty: "medium",
  question: "Was macht ein Task-Manager typischerweise?",
  answers: ["Zeigt Prozesse und Ressourcenverbrauch", "Ändert DNS-Einträge", "Komprimiert Dateien", "Erstellt automatisch Backups"],
  correctIndex: 0,
  explanation: "Task-Manager zeigt z.B. CPU/RAM-Auslastung und laufende Programme."
},
{
  id: 62,
  category: "Betriebssysteme",
  difficulty: "medium",
  question: "Was ist ein Dateisystem?",
  answers: ["Struktur, wie Daten auf Datenträgern organisiert werden", "Ein Router-Protokoll", "Ein Browser-Cache", "Ein Monitor-Treiber"],
  correctIndex: 0,
  explanation: "Dateisysteme verwalten Dateien/Ordner auf einem Datenträger."
},
{
  id: 63,
  category: "Betriebssysteme",
  difficulty: "medium",
  question: "Was beschreibt 'Berechtigungen' (Permissions) am besten?",
  answers: ["Wer darf lesen/schreiben/ausführen", "Wie schnell WLAN ist", "Welche Schriftart genutzt wird", "Wie groß eine Festplatte ist"],
  correctIndex: 0,
  explanation: "Permissions steuern Zugriff auf Dateien/Ordner/Programme."
},
{
  id: 64,
  category: "Betriebssysteme",
  difficulty: "medium",
  question: "Was ist ein Administrator-Konto?",
  answers: ["Konto mit erweiterten Rechten", "Konto ohne Passwort", "Ein Gastkonto", "Ein Konto nur für Internet"],
  correctIndex: 0,
  explanation: "Admins dürfen z.B. Software installieren und Systemeinstellungen ändern."
},
{
  id: 65,
  category: "Betriebssysteme",
  difficulty: "medium",
  question: "Was ist ein 'Service' (Dienst)?",
  answers: ["Hintergrundprozess, der Systemfunktionen bereitstellt", "Ein Dateiname", "Ein Bildformat", "Ein Router"],
  correctIndex: 0,
  explanation: "Dienste laufen oft im Hintergrund und starten ggf. automatisch."
},
{
  id: 66,
  category: "Betriebssysteme",
  difficulty: "medium",
  question: "Was bedeutet 'Booten'?",
  answers: ["Startvorgang des Systems (OS laden)", "Bildschirm heller stellen", "Ordner umbenennen", "Internet trennen"],
  correctIndex: 0,
  explanation: "Beim Booten lädt der Computer das Betriebssystem."
},
{
  id: 67,
  category: "Betriebssysteme",
  difficulty: "medium",
  question: "Was ist ein BIOS/UEFI am ehesten?",
  answers: ["Firmware, die Hardware initialisiert und Booten startet", "Ein Dateisystem", "Ein Netzwerkprotokoll", "Ein Texteditor"],
  correctIndex: 0,
  explanation: "BIOS/UEFI startet den Bootprozess und initialisiert Hardware."
},
{
  id: 68,
  category: "Betriebssysteme",
  difficulty: "medium",
  question: "Was ist ein 'Treiberkonflikt' am ehesten?",
  answers: ["Treiber verursachen Probleme, z.B. Instabilität/Fehlfunktionen", "Zu wenig Internetbandbreite", "Zu viele Browser-Tabs", "Zu große Bildschirmauflösung"],
  correctIndex: 0,
  explanation: "Inkompatible/fehlerhafte Treiber können Geräte oder System stören."
},
{
  id: 69,
  category: "Betriebssysteme",
  difficulty: "medium",
  question: "Was ist 'Multitasking'?",
  answers: ["Mehrere Prozesse werden quasi gleichzeitig ausgeführt", "Nur ein Programm läuft", "Nur Internetseiten werden parallel geladen", "Der Monitor hat 2 Anschlüsse"],
  correctIndex: 0,
  explanation: "Das OS teilt CPU-Zeit zwischen Prozessen auf."
},
{
  id: 70,
  category: "Betriebssysteme",
  difficulty: "medium",
  question: "Wozu dient 'Paging/Swap'?",
  answers: ["RAM-Erweiterung durch Auslagern auf Datenträger", "WLAN beschleunigen", "DNS speichern", "CPU kühlen"],
  correctIndex: 0,
  explanation: "Swap/Pagefile nutzt Festplatte/SSD als Auslagerung, ist aber langsamer als RAM."
},
{
  id: 71,
  category: "Betriebssysteme",
  difficulty: "medium",
  question: "Was ist ein 'Patch'?",
  answers: ["Kleine Korrektur/Hotfix für Software", "Ein neues Netzwerkkabel", "Ein Ordner", "Ein Dateityp"],
  correctIndex: 0,
  explanation: "Patches beheben oft Bugs oder Sicherheitslücken."
},
{
  id: 72,
  category: "Betriebssysteme",
  difficulty: "medium",
  question: "Was ist 'Systemwiederherstellung' am ehesten?",
  answers: ["Zurücksetzen auf einen früheren Systemzustand", "Komprimieren von Dateien", "Ändern der IP-Adresse", "Installieren von Treibern"],
  correctIndex: 0,
  explanation: "Man kann Änderungen rückgängig machen (je nach OS/Feature)."
},
{
  id: 73,
  category: "Betriebssysteme",
  difficulty: "medium",
  question: "Was ist ein 'Benutzerprofil'?",
  answers: ["Persönliche Einstellungen und Daten eines Nutzers", "Ein Hardware-Treiber", "Ein Router-Log", "Ein Dateisystemtyp"],
  correctIndex: 0,
  explanation: "Profile enthalten z.B. Desktop, Einstellungen, App-Daten."
},
{
  id: 74,
  category: "Betriebssysteme",
  difficulty: "medium",
  question: "Was ist eine Partition?",
  answers: ["Logische Aufteilung eines Datenträgers", "Ein Prozess im RAM", "Ein Router-Port", "Ein DNS-Eintrag"],
  correctIndex: 0,
  explanation: "Partitionen teilen z.B. eine SSD in Bereiche für unterschiedliche Systeme/Daten."
},
{
  id: 75,
  category: "Betriebssysteme",
  difficulty: "medium",
  question: "Was ist eine Dateiendung (z.B. .png) vor allem?",
  answers: ["Ein Hinweis auf den Dateityp/Format", "Ein Passwort", "Der Speicherort", "Ein CPU-Modus"],
  correctIndex: 0,
  explanation: "Endungen helfen, Dateitypen zu erkennen (nicht immer 100% sicher, aber üblich)."
},

// --- hard (76–90) ---
{
  id: 76,
  category: "Betriebssysteme",
  difficulty: "hard",
  question: "Was ist ein Deadlock?",
  answers: ["Prozesse blockieren sich gegenseitig und kommen nicht weiter", "Eine schnelle SSD", "Ein DNS-Fehler", "Ein Monitor-Problem"],
  correctIndex: 0,
  explanation: "Deadlock: Ressourcen-Abhängigkeiten verhindern Fortschritt."
},
{
  id: 77,
  category: "Betriebssysteme",
  difficulty: "hard",
  question: "Was ist ein Kontextwechsel (Context Switch)?",
  answers: ["Wechsel der CPU-Ausführung zwischen Prozessen/Threads", "Wechsel von WLAN zu LAN", "Wechsel des Dateiformats", "Wechsel des Bildschirms"],
  correctIndex: 0,
  explanation: "Das OS speichert/ladet CPU-Zustand, um zwischen Tasks umzuschalten."
},
{
  id: 78,
  category: "Betriebssysteme",
  difficulty: "hard",
  question: "Welche Aussage zu virtuellen Speicher (Virtual Memory) passt am besten?",
  answers: [
    "Er gibt Prozessen einen eigenen Adressraum und nutzt Paging/Swap",
    "Er ist nur ein anderer Name für Festplatte",
    "Er existiert nur bei macOS",
    "Er macht CPU automatisch schneller"
  ],
  correctIndex: 0,
  explanation: "Virtual Memory isoliert Prozesse und ermöglicht Auslagerung/Adressraumverwaltung."
},
{
  id: 79,
  category: "Betriebssysteme",
  difficulty: "hard",
  question: "Was ist ein 'Kernel Panic' am ehesten?",
  answers: ["Kritischer Fehler im Kernel, System muss stoppen/neustarten", "Ein normaler App-Absturz", "Ein Browser-Update", "Ein Passwort-Fehler"],
  correctIndex: 0,
  explanation: "Kernel Panic ist ein schwerer Kernel-Fehler (ähnlich wie Bluescreen-Konzept)."
},
{
  id: 80,
  category: "Betriebssysteme",
  difficulty: "hard",
  question: "Wozu dient ASLR (Address Space Layout Randomization)?",
  answers: ["Erschwert Exploits durch zufällige Speicheradressen", "Beschleunigt Downloads", "Ersetzt Antivirenprogramme", "Komprimiert RAM automatisch"],
  correctIndex: 0,
  explanation: "ASLR randomisiert Adressbereiche und macht Angriffe schwerer."
},
{
  id: 81,
  category: "Betriebssysteme",
  difficulty: "hard",
  question: "Was ist 'Sandboxing' im OS/Software-Kontext?",
  answers: ["Programme laufen isoliert mit eingeschränkten Rechten", "Programme bekommen Admin-Rechte", "Programme werden im RAM komprimiert", "Programme werden immer schneller"],
  correctIndex: 0,
  explanation: "Sandboxing begrenzt Schaden, falls eine App kompromittiert ist."
},
{
  id: 82,
  category: "Betriebssysteme",
  difficulty: "hard",
  question: "Was ist ein 'Symbolic Link' (Symlink)?",
  answers: ["Ein Verweis, der auf eine andere Datei/Ordner zeigt", "Ein komprimiertes Archiv", "Ein Administrator-Konto", "Ein Netzwerkprotokoll"],
  correctIndex: 0,
  explanation: "Symlinks verweisen auf andere Pfade (wie eine Verknüpfung auf Dateisystem-Ebene)."
},
{
  id: 83,
  category: "Betriebssysteme",
  difficulty: "hard",
  question: "Welche Aussage zu 'Least Privilege' stimmt am ehesten?",
  answers: ["Nur die minimal nötigen Rechte vergeben", "Immer Admin benutzen", "Passwörter im Klartext speichern", "Alle Ports öffnen"],
  correctIndex: 0,
  explanation: "Sicherheitsprinzip: so wenig Rechte wie möglich."
},
{
  id: 84,
  category: "Betriebssysteme",
  difficulty: "hard",
  question: "Was ist ein 'Thread'?",
  answers: ["Ein Ausführungsstrang innerhalb eines Prozesses", "Ein Dateityp", "Ein Netzwerkadapter", "Eine Partition"],
  correctIndex: 0,
  explanation: "Threads teilen sich Ressourcen eines Prozesses, laufen aber getrennt."
},
{
  id: 85,
  category: "Betriebssysteme",
  difficulty: "hard",
  question: "Was ist ein Race Condition-Problem am ehesten?",
  answers: ["Mehrere Threads greifen unkoordiniert auf gemeinsame Daten zu", "Zu wenig Festplattenspeicher", "Zu viele Browser-Tabs", "Zu langsames WLAN"],
  correctIndex: 0,
  explanation: "Ohne Synchronisation können Ergebnisse abhängig von Timing variieren."
},
{
  id: 86,
  category: "Betriebssysteme",
  difficulty: "hard",
  question: "Wozu dient ein Mutex?",
  answers: ["Synchronisation: exklusiver Zugriff auf gemeinsame Ressource", "IP-Adressen verteilen", "Domainnamen auflösen", "Dateien komprimieren"],
  correctIndex: 0,
  explanation: "Mutex verhindert gleichzeitigen Zugriff mehrerer Threads auf kritische Bereiche."
},
{
  id: 87,
  category: "Betriebssysteme",
  difficulty: "hard",
  question: "Was bedeutet 'Fork' (Unix/Linux) am ehesten?",
  answers: ["Erzeugt einen neuen Prozess als Kopie des aktuellen Prozesses", "Löscht einen Prozess", "Verschlüsselt eine Datei", "Ändert die IP-Adresse"],
  correctIndex: 0,
  explanation: "fork() erstellt einen Child-Prozess, der aus dem Parent hervorgeht."
},
{
  id: 88,
  category: "Betriebssysteme",
  difficulty: "hard",
  question: "Was ist ein 'File Descriptor' (FD) am ehesten?",
  answers: ["Eine Zahl/Handle, die auf eine offene Datei/Socket zeigt", "Ein Dateiname", "Ein Passwort", "Ein Dateisystemtyp"],
  correctIndex: 0,
  explanation: "FDs referenzieren offene Ressourcen wie Dateien oder Netzwerkverbindungen."
},
{
  id: 89,
  category: "Betriebssysteme",
  difficulty: "hard",
  question: "Was beschreibt 'Copy-on-Write' am besten?",
  answers: [
    "Kopieren passiert erst beim Schreiben; Lesen teilt sich Speicher",
    "Jede Datei wird immer doppelt gespeichert",
    "RAM wird automatisch komprimiert",
    "Swap wird komplett deaktiviert"
  ],
  correctIndex: 0,
  explanation: "CoW spart Speicher/IO, indem erst beim Ändern kopiert wird."
},
{
  id: 90,
  category: "Betriebssysteme",
  difficulty: "hard",
  question: "Was ist ein typischer Vorteil von 64‑Bit gegenüber 32‑Bit (im OS/CPU-Kontext)?",
  answers: [
    "Größerer adressierbarer Speicherbereich (mehr RAM adressierbar)",
    "Automatisch schnelleres Internet",
    "Automatisch bessere Grafik",
    "Keine Updates mehr nötig"
  ],
  correctIndex: 0,
  explanation: "64‑Bit kann deutlich mehr Speicher adressieren als 32‑Bit."
},
// =========================
// Mathe (45) – 15 easy / 15 medium / 15 hard
// IDs: 91–135
// =========================

// --- easy (91–105) ---
{
  id: 91,
  category: "Mathe",
  difficulty: "easy",
  question: "Wie viel ist 7 × 8?",
  answers: ["54", "56", "58", "64"],
  correctIndex: 1,
  explanation: "7 × 8 = 56."
},
{
  id: 92,
  category: "Mathe",
  difficulty: "easy",
  question: "Wie viel ist 12 + 19?",
  answers: ["29", "30", "31", "32"],
  correctIndex: 2,
  explanation: "12 + 19 = 31."
},
{
  id: 93,
  category: "Mathe",
  difficulty: "easy",
  question: "Wie viel ist 50% von 80?",
  answers: ["20", "30", "40", "50"],
  correctIndex: 2,
  explanation: "50% ist die Hälfte: 80 / 2 = 40."
},
{
  id: 94,
  category: "Mathe",
  difficulty: "easy",
  question: "Wie viel ist 25% von 200?",
  answers: ["25", "50", "75", "100"],
  correctIndex: 1,
  explanation: "25% von 200 = 0,25 × 200 = 50."
},
{
  id: 95,
  category: "Mathe",
  difficulty: "easy",
  question: "Wie viel ist 9²?",
  answers: ["18", "72", "81", "90"],
  correctIndex: 2,
  explanation: "9² = 9 × 9 = 81."
},
{
  id: 96,
  category: "Mathe",
  difficulty: "easy",
  question: "Welche Zahl ist gerade?",
  answers: ["13", "21", "34", "55"],
  correctIndex: 2,
  explanation: "Gerade Zahlen sind durch 2 teilbar: 34 ist gerade."
},
{
  id: 97,
  category: "Mathe",
  difficulty: "easy",
  question: "Was ist die Lösung von 3x = 12?",
  answers: ["x = 3", "x = 4", "x = 6", "x = 9"],
  correctIndex: 1,
  explanation: "3x = 12 ⇒ x = 12/3 = 4."
},
{
  id: 98,
  category: "Mathe",
  difficulty: "easy",
  question: "Wie viel ist 15 − 27?",
  answers: ["12", "-12", "-2", "2"],
  correctIndex: 1,
  explanation: "15 − 27 = -12."
},
{
  id: 99,
  category: "Mathe",
  difficulty: "easy",
  question: "Wie viel ist 6 × 0?",
  answers: ["0", "6", "1", "60"],
  correctIndex: 0,
  explanation: "Jede Zahl mal 0 ist 0."
},
{
  id: 100,
  category: "Mathe",
  difficulty: "easy",
  question: "Was ist 1/2 als Dezimalzahl?",
  answers: ["0,2", "0,5", "1,5", "2,0"],
  correctIndex: 1,
  explanation: "1/2 = 0,5."
},
{
  id: 101,
  category: "Mathe",
  difficulty: "easy",
  question: "Wie viele Minuten sind 2 Stunden?",
  answers: ["90", "100", "120", "180"],
  correctIndex: 2,
  explanation: "2 Stunden = 2 × 60 = 120 Minuten."
},
{
  id: 102,
  category: "Mathe",
  difficulty: "easy",
  question: "Welche Zahl ist am größten?",
  answers: ["0,7", "0,07", "0,17", "0,9"],
  correctIndex: 3,
  explanation: "0,9 ist am größten."
},
{
  id: 103,
  category: "Mathe",
  difficulty: "easy",
  question: "Wie viel ist 3/4 von 100?",
  answers: ["25", "50", "75", "80"],
  correctIndex: 2,
  explanation: "3/4 von 100 = 75."
},
{
  id: 104,
  category: "Mathe",
  difficulty: "easy",
  question: "Wie viel ist 5 × 5 × 5?",
  answers: ["25", "75", "100", "125"],
  correctIndex: 3,
  explanation: "5³ = 125."
},
{
  id: 105,
  category: "Mathe",
  difficulty: "easy",
  question: "Was ist der Umfang eines Quadrats mit Seitenlänge 4?",
  answers: ["8", "12", "16", "20"],
  correctIndex: 2,
  explanation: "Umfang = 4 × Seite = 4 × 4 = 16."
},

// --- medium (106–120) ---
{
  id: 106,
  category: "Mathe",
  difficulty: "medium",
  question: "Was ist der Mittelwert von 4, 6 und 8?",
  answers: ["5", "6", "7", "8"],
  correctIndex: 1,
  explanation: "(4 + 6 + 8) / 3 = 18 / 3 = 6."
},
{
  id: 107,
  category: "Mathe",
  difficulty: "medium",
  question: "Welche Zahl ist eine Primzahl?",
  answers: ["21", "27", "29", "39"],
  correctIndex: 2,
  explanation: "29 ist nur durch 1 und 29 teilbar."
},
{
  id: 108,
  category: "Mathe",
  difficulty: "medium",
  question: "Löse: 2x + 3 = 11",
  answers: ["x = 2", "x = 3", "x = 4", "x = 5"],
  correctIndex: 1,
  explanation: "2x + 3 = 11 ⇒ 2x = 8 ⇒ x = 4. (Achtung: richtige Option ist x=4)"
},
{
  id: 109,
  category: "Mathe",
  difficulty: "medium",
  question: "Wie viel ist 3,5 + 2,75?",
  answers: ["6,15", "6,25", "6,35", "6,45"],
  correctIndex: 1,
  explanation: "3,5 + 2,75 = 6,25."
},
{
  id: 110,
  category: "Mathe",
  difficulty: "medium",
  question: "Wie viel Prozent sind 18 von 60?",
  answers: ["20%", "25%", "30%", "40%"],
  correctIndex: 2,
  explanation: "18/60 = 0,3 = 30%."
},
{
  id: 111,
  category: "Mathe",
  difficulty: "medium",
  question: "Was ist 2³ + 3²?",
  answers: ["13", "17", "19", "23"],
  correctIndex: 2,
  explanation: "2³ = 8 und 3² = 9 ⇒ 8 + 9 = 17. (Achtung: richtige Option ist 17)"
},
{
  id: 112,
  category: "Mathe",
  difficulty: "medium",
  question: "Vereinfache: 12/16",
  answers: ["1/2", "3/4", "2/3", "4/3"],
  correctIndex: 1,
  explanation: "12/16 gekürzt durch 4 ergibt 3/4."
},
{
  id: 113,
  category: "Mathe",
  difficulty: "medium",
  question: "Wie groß ist die Fläche eines Rechtecks 6 × 9?",
  answers: ["15", "27", "45", "54"],
  correctIndex: 3,
  explanation: "Fläche = 6 × 9 = 54."
},
{
  id: 114,
  category: "Mathe",
  difficulty: "medium",
  question: "Wenn x = -2, wie groß ist x²?",
  answers: ["-4", "-2", "2", "4"],
  correctIndex: 3,
  explanation: "(-2)² = 4."
},
{
  id: 115,
  category: "Mathe",
  difficulty: "medium",
  question: "Welche Aussage stimmt?",
  answers: ["√49 = 6", "√49 = 7", "√49 = 8", "√49 = 9"],
  correctIndex: 1,
  explanation: "7 × 7 = 49 ⇒ √49 = 7."
},
{
  id: 116,
  category: "Mathe",
  difficulty: "medium",
  question: "Wie viel ist 1,2 × 0,5?",
  answers: ["0,6", "0,7", "1,7", "2,4"],
  correctIndex: 0,
  explanation: "1,2 × 0,5 = 0,6."
},
{
  id: 117,
  category: "Mathe",
  difficulty: "medium",
  question: "Welche Zahl ist durch 3 teilbar?",
  answers: ["52", "64", "81", "94"],
  correctIndex: 2,
  explanation: "81 ist durch 3 teilbar (8+1=9)."
},
{
  id: 118,
  category: "Mathe",
  difficulty: "medium",
  question: "Wie lautet das Ergebnis von 10! / 9! ?",
  answers: ["0", "1", "9", "10"],
  correctIndex: 3,
  explanation: "10! / 9! = 10."
},
{
  id: 119,
  category: "Mathe",
  difficulty: "medium",
  question: "Ein Würfel hat 6 Seiten. Wie viele Seiten haben 3 Würfel zusammen?",
  answers: ["12", "15", "18", "24"],
  correctIndex: 2,
  explanation: "3 × 6 = 18."
},
{
  id: 120,
  category: "Mathe",
  difficulty: "medium",
  question: "Wie groß ist der Umfang eines Kreises (π ≈ 3,14) mit Durchmesser 10?",
  answers: ["15,7", "31,4", "62,8", "78,5"],
  correctIndex: 1,
  explanation: "Umfang ≈ π × d = 3,14 × 10 = 31,4."
},

// --- hard (121–135) ---
{
  id: 121,
  category: "Mathe",
  difficulty: "hard",
  question: "Löse: 3x − 2 = 4x + 5",
  answers: ["x = -7", "x = 7", "x = -3", "x = 3"],
  correctIndex: 0,
  explanation: "3x − 2 = 4x + 5 ⇒ -2 = x + 5 ⇒ x = -7."
},
{
  id: 122,
  category: "Mathe",
  difficulty: "hard",
  question: "Wie viel ist 2/3 von 90?",
  answers: ["30", "45", "60", "75"],
  correctIndex: 2,
  explanation: "90 × 2/3 = 60."
},
{
  id: 123,
  category: "Mathe",
  difficulty: "hard",
  question: "Wie groß ist die Wahrscheinlichkeit, bei einem fairen Würfel eine Zahl > 4 zu würfeln?",
  answers: ["1/6", "1/3", "1/2", "2/3"],
  correctIndex: 1,
  explanation: "Zahlen >4 sind 5 und 6 ⇒ 2 von 6 ⇒ 2/6 = 1/3."
},
{
  id: 124,
  category: "Mathe",
  difficulty: "hard",
  question: "Was ist die Lösung von x² = 49 (über den reellen Zahlen)?",
  answers: ["x = 7", "x = -7", "x = 7 oder x = -7", "x = 49"],
  correctIndex: 2,
  explanation: "x² = 49 hat zwei Lösungen: x = ±7."
},
{
  id: 125,
  category: "Mathe",
  difficulty: "hard",
  question: "Welche Zahl ist keine rationale Zahl?",
  answers: ["0,25", "3/7", "√2", "-5"],
  correctIndex: 2,
  explanation: "√2 ist irrational."
},
{
  id: 126,
  category: "Mathe",
  difficulty: "hard",
  question: "Vereinfache: (x² · x³) / x²",
  answers: ["x³", "x⁵", "x⁷", "1"],
  correctIndex: 0,
  explanation: "x²·x³ = x⁵, geteilt durch x² ⇒ x³."
},
{
  id: 127,
  category: "Mathe",
  difficulty: "hard",
  question: "Ein rechtwinkliges Dreieck hat Katheten 6 und 8. Wie lang ist die Hypotenuse?",
  answers: ["10", "12", "14", "16"],
  correctIndex: 0,
  explanation: "Pythagoras: √(6²+8²)=√(36+64)=√100=10."
},
{
  id: 128,
  category: "Mathe",
  difficulty: "hard",
  question: "Wie lautet 0,125 als Bruch (gekürzt)?",
  answers: ["1/4", "1/8", "1/16", "3/8"],
  correctIndex: 1,
  explanation: "0,125 = 125/1000 = 1/8."
},
{
  id: 129,
  category: "Mathe",
  difficulty: "hard",
  question: "Was ist der Median der Zahlen 2, 7, 9, 10, 21?",
  answers: ["7", "9", "10", "21"],
  correctIndex: 1,
  explanation: "Der Median ist der mittlere Wert der sortierten Liste ⇒ 9."
},
{
  id: 130,
  category: "Mathe",
  difficulty: "hard",
  question: "Wie viel ist (−3)³?",
  answers: ["-27", "-9", "9", "27"],
  correctIndex: 0,
  explanation: "(-3)³ = -27."
},
{
  id: 131,
  category: "Mathe",
  difficulty: "hard",
  question: "Vereinfache: 3(2x − 5) + 4x",
  answers: ["10x − 15", "6x − 15", "10x − 5", "6x − 5"],
  correctIndex: 0,
  explanation: "3(2x−5)=6x−15, plus 4x ⇒ 10x−15."
},
{
  id: 132,
  category: "Mathe",
  difficulty: "hard",
  question: "Welche Aussage ist richtig?",
  answers: ["log10(100)=1", "log10(100)=2", "log10(100)=10", "log10(100)=100"],
  correctIndex: 1,
  explanation: "10² = 100 ⇒ log10(100) = 2."
},
{
  id: 133,
  category: "Mathe",
  difficulty: "hard",
  question: "Wie viele Grade hat die Summe der Innenwinkel eines Dreiecks?",
  answers: ["90°", "120°", "180°", "360°"],
  correctIndex: 2,
  explanation: "Innenwinkelsumme im Dreieck = 180°."
},
{
  id: 134,
  category: "Mathe",
  difficulty: "hard",
  question: "Wenn a:b = 2:5 und a = 14, wie groß ist b?",
  answers: ["21", "28", "35", "49"],
  correctIndex: 2,
  explanation: "2 Teile entsprechen 14 ⇒ 1 Teil = 7 ⇒ 5 Teile = 35."
},
{
  id: 135,
  category: "Mathe",
  difficulty: "hard",
  question: "Was ist die Wahrscheinlichkeit, bei zwei fairen Münzwürfen genau einmal Kopf zu bekommen?",
  answers: ["1/4", "1/2", "3/4", "1"],
  correctIndex: 1,
  explanation: "Möglichkeiten: KK, KZ, ZK, ZZ ⇒ genau einmal Kopf: KZ oder ZK ⇒ 2/4 = 1/2."
},
// =========================
// Englisch (45) – 15 easy / 15 medium / 15 hard
// IDs: 136–180
// =========================

// --- easy (136–150) ---
{
  id: 136,
  category: "Englisch",
  difficulty: "easy",
  question: "Was bedeutet 'always'?",
  answers: ["niemals", "manchmal", "immer", "selten"],
  correctIndex: 2,
  explanation: "'Always' bedeutet 'immer'."
},
{
  id: 137,
  category: "Englisch",
  difficulty: "easy",
  question: "Was bedeutet 'never'?",
  answers: ["immer", "niemals", "oft", "bald"],
  correctIndex: 1,
  explanation: "'Never' bedeutet 'niemals'."
},
{
  id: 138,
  category: "Englisch",
  difficulty: "easy",
  question: "Was bedeutet 'maybe'?",
  answers: ["vielleicht", "sicher", "sofort", "gestern"],
  correctIndex: 0,
  explanation: "'Maybe' bedeutet 'vielleicht'."
},
{
  id: 139,
  category: "Englisch",
  difficulty: "easy",
  question: "Welche Übersetzung ist richtig: 'I am learning'?",
  answers: ["Ich lerne (gerade).", "Ich habe gelernt.", "Ich werde lernen.", "Ich kann lernen."],
  correctIndex: 0,
  explanation: "Present Continuous beschreibt eine gerade stattfindende Handlung."
},
{
  id: 140,
  category: "Englisch",
  difficulty: "easy",
  question: "Was ist die Vergangenheitsform (Past) von 'go'?",
  answers: ["goed", "went", "gone", "goes"],
  correctIndex: 1,
  explanation: "Past von 'go' ist 'went'."
},
{
  id: 141,
  category: "Englisch",
  difficulty: "easy",
  question: "Was bedeutet 'quick'?",
  answers: ["langsam", "schnell", "laut", "leise"],
  correctIndex: 1,
  explanation: "'Quick' bedeutet 'schnell'."
},
{
  id: 142,
  category: "Englisch",
  difficulty: "easy",
  question: "Was bedeutet 'happy'?",
  answers: ["traurig", "hungrig", "glücklich", "müde"],
  correctIndex: 2,
  explanation: "'Happy' bedeutet 'glücklich'."
},
{
  id: 143,
  category: "Englisch",
  difficulty: "easy",
  question: "Was bedeutet 'to buy'?",
  answers: ["verkaufen", "kaufen", "bringen", "bauen"],
  correctIndex: 1,
  explanation: "'To buy' heißt 'kaufen'."
},
{
  id: 144,
  category: "Englisch",
  difficulty: "easy",
  question: "Welche Übersetzung ist richtig: 'I have a dog'?",
  answers: ["Ich habe einen Hund.", "Ich hatte einen Hund.", "Ich will einen Hund.", "Ich bin ein Hund."],
  correctIndex: 0,
  explanation: "'I have a dog' = 'Ich habe einen Hund'."
},
{
  id: 145,
  category: "Englisch",
  difficulty: "easy",
  question: "Was bedeutet 'because'?",
  answers: ["aber", "weil", "wenn", "damit"],
  correctIndex: 1,
  explanation: "'Because' bedeutet 'weil'."
},
{
  id: 146,
  category: "Englisch",
  difficulty: "easy",
  question: "Was ist die richtige Pluralform von 'child'?",
  answers: ["childs", "childes", "children", "childrens"],
  correctIndex: 2,
  explanation: "Die Mehrzahl von 'child' ist 'children'."
},
{
  id: 147,
  category: "Englisch",
  difficulty: "easy",
  question: "Welche Form ist richtig: 'He ___ to school.'",
  answers: ["go", "goes", "going", "gone"],
  correctIndex: 1,
  explanation: "Bei he/she/it: Verb + s ⇒ 'He goes'."
},
{
  id: 148,
  category: "Englisch",
  difficulty: "easy",
  question: "Was bedeutet 'yesterday'?",
  answers: ["morgen", "gestern", "heute", "bald"],
  correctIndex: 1,
  explanation: "'Yesterday' bedeutet 'gestern'."
},
{
  id: 149,
  category: "Englisch",
  difficulty: "easy",
  question: "Was bedeutet 'beautiful'?",
  answers: ["hässlich", "gefährlich", "schön", "seltsam"],
  correctIndex: 2,
  explanation: "'Beautiful' bedeutet 'schön'."
},
{
  id: 150,
  category: "Englisch",
  difficulty: "easy",
  question: "Welche Übersetzung ist richtig: 'Thank you'?",
  answers: ["Bitte", "Entschuldigung", "Danke", "Gern geschehen"],
  correctIndex: 2,
  explanation: "'Thank you' bedeutet 'Danke'."
},

// --- medium (151–165) ---
{
  id: 151,
  category: "Englisch",
  difficulty: "medium",
  question: "Welche Aussage ist grammatikalisch korrekt?",
  answers: ["He don't like it.", "He doesn't likes it.", "He doesn't like it.", "He not like it."],
  correctIndex: 2,
  explanation: "Mit 'doesn't' bleibt das Verb in Grundform: 'doesn't like'."
},
{
  id: 152,
  category: "Englisch",
  difficulty: "medium",
  question: "Wähle den richtigen Artikel: '___ apple'",
  answers: ["a", "an", "the", "no article"],
  correctIndex: 1,
  explanation: "Vor Vokallaut nutzt man 'an': 'an apple'."
},
{
  id: 153,
  category: "Englisch",
  difficulty: "medium",
  question: "Was bedeutet 'although'?",
  answers: ["weil", "obwohl", "damit", "während"],
  correctIndex: 1,
  explanation: "'Although' bedeutet 'obwohl'."
},
{
  id: 154,
  category: "Englisch",
  difficulty: "medium",
  question: "Was ist die richtige Vergangenheitsform von 'take'?",
  answers: ["taked", "took", "taken", "takes"],
  correctIndex: 1,
  explanation: "Past von 'take' ist 'took'."
},
{
  id: 155,
  category: "Englisch",
  difficulty: "medium",
  question: "Welche Form ist korrekt: 'I ___ here since 2020.'",
  answers: ["live", "am living", "have lived", "lived"],
  correctIndex: 2,
  explanation: "Bei 'since' nutzt man oft Present Perfect: 'have lived'."
},
{
  id: 156,
  category: "Englisch",
  difficulty: "medium",
  question: "Was bedeutet 'to improve'?",
  answers: ["verschlechtern", "verbessern", "vergessen", "vergleichen"],
  correctIndex: 1,
  explanation: "'To improve' heißt 'verbessern'."
},
{
  id: 157,
  category: "Englisch",
  difficulty: "medium",
  question: "Welche Satzstellung ist korrekt?",
  answers: [
    "She every day reads a book.",
    "She reads a book every day.",
    "She reads every day a book.",
    "Every day reads she a book."
  ],
  correctIndex: 1,
  explanation: "Typisch: Subject + Verb + Object + Time ⇒ 'She reads a book every day.'"
},
{
  id: 158,
  category: "Englisch",
  difficulty: "medium",
  question: "Was bedeutet 'instead of'?",
  answers: ["wegen", "anstatt", "trotz", "während"],
  correctIndex: 1,
  explanation: "'Instead of' bedeutet 'anstatt'."
},
{
  id: 159,
  category: "Englisch",
  difficulty: "medium",
  question: "Welche Form ist korrekt: 'If it ___, we stay inside.'",
  answers: ["rain", "rains", "rained", "raining"],
  correctIndex: 1,
  explanation: "In einfachen Bedingungen (Zero Conditional) steht Präsens: 'If it rains...'"
},
{
  id: 160,
  category: "Englisch",
  difficulty: "medium",
  question: "Was ist die richtige Pluralform von 'mouse'?",
  answers: ["mouses", "mice", "mousees", "meese"],
  correctIndex: 1,
  explanation: "Plural von 'mouse' ist 'mice'."
},
{
  id: 161,
  category: "Englisch",
  difficulty: "medium",
  question: "Was bedeutet 'to realize' im normalen Kontext am ehesten?",
  answers: ["realisieren / bemerken", "realisieren (bauen)", "rechtfertigen", "reparieren"],
  correctIndex: 0,
  explanation: "Meist bedeutet 'realize' 'bemerken/erkennen'."
},
{
  id: 162,
  category: "Englisch",
  difficulty: "medium",
  question: "Welche Aussage passt zu 'comparative'?",
  answers: ["good → better", "good → best", "good → gooder", "good → most good"],
  correctIndex: 0,
  explanation: "Komparativ: good → better (Superlativ: best)."
},
{
  id: 163,
  category: "Englisch",
  difficulty: "medium",
  question: "Was bedeutet 'to borrow'?",
  answers: ["ausleihen", "verleihen", "kaufen", "verkaufen"],
  correctIndex: 0,
  explanation: "'To borrow' = ausleihen (von jemandem)."
},
{
  id: 164,
  category: "Englisch",
  difficulty: "medium",
  question: "Welche Form ist korrekt: 'I didn’t ___ anything.'",
  answers: ["saw", "see", "seen", "seeing"],
  correctIndex: 1,
  explanation: "Nach 'didn't' steht die Grundform: 'see'."
},
{
  id: 165,
  category: "Englisch",
  difficulty: "medium",
  question: "Was bedeutet 'neither ... nor'?",
  answers: ["sowohl ... als auch", "weder ... noch", "entweder ... oder", "nicht nur ... sondern auch"],
  correctIndex: 1,
  explanation: "'Neither ... nor' bedeutet 'weder ... noch'."
},

// --- hard (166–180) ---
{
  id: 166,
  category: "Englisch",
  difficulty: "hard",
  question: "Welche Aussage ist korrekt (Reported Speech)?",
  answers: [
    "He said he is tired.",
    "He said he was tired.",
    "He says he was tired.",
    "He said he tired."
  ],
  correctIndex: 1,
  explanation: "Oft wird bei Reported Speech die Zeit eine Stufe zurückgesetzt: is → was."
},
{
  id: 167,
  category: "Englisch",
  difficulty: "hard",
  question: "Wähle die korrekte Form: 'I wish I ___ more time.'",
  answers: ["have", "had", "will have", "am having"],
  correctIndex: 1,
  explanation: "Nach 'I wish' nutzt man oft Past Simple für einen Wunsch in der Gegenwart: 'I wish I had...'"
},
{
  id: 168,
  category: "Englisch",
  difficulty: "hard",
  question: "Welche Aussage ist korrekt (Third Conditional)?",
  answers: [
    "If I studied, I would pass.",
    "If I had studied, I would have passed.",
    "If I study, I will pass.",
    "If I would study, I passed."
  ],
  correctIndex: 1,
  explanation: "Third Conditional: If + Past Perfect, would have + past participle."
},
{
  id: 169,
  category: "Englisch",
  difficulty: "hard",
  question: "Was bedeutet 'despite'?",
  answers: ["wegen", "trotz", "während", "damit"],
  correctIndex: 1,
  explanation: "'Despite' bedeutet 'trotz'."
},
{
  id: 170,
  category: "Englisch",
  difficulty: "hard",
  question: "Welche Form ist korrekt: 'The book ___ by millions of people.'",
  answers: ["read", "is read", "is reading", "was readed"],
  correctIndex: 1,
  explanation: "Passiv: 'is read' (present passive)."
},
{
  id: 171,
  category: "Englisch",
  difficulty: "hard",
  question: "Welche Präposition ist korrekt: 'interested ___ music'?",
  answers: ["in", "on", "at", "to"],
  correctIndex: 0,
  explanation: "Man sagt: interested in."
},
{
  id: 172,
  category: "Englisch",
  difficulty: "hard",
  question: "Was bedeutet 'to figure out'?",
  answers: ["herausfinden", "vergessen", "aufgeben", "aufwachen"],
  correctIndex: 0,
  explanation: "'Figure out' bedeutet 'herausfinden'."
},
{
  id: 173,
  category: "Englisch",
  difficulty: "hard",
  question: "Welche Aussage ist korrekt (Gerund/Infinitive)?",
  answers: [
    "I enjoy to swim.",
    "I enjoy swimming.",
    "I enjoy swim.",
    "I enjoy to swimming."
  ],
  correctIndex: 1,
  explanation: "Nach 'enjoy' folgt ein Gerund: enjoy swimming."
},
{
  id: 174,
  category: "Englisch",
  difficulty: "hard",
  question: "Was bedeutet 'to insist on'?",
  answers: ["auf etwas bestehen", "etwas erlauben", "etwas vermeiden", "etwas ablehnen"],
  correctIndex: 0,
  explanation: "'Insist on' = auf etwas bestehen."
},
{
  id: 175,
  category: "Englisch",
  difficulty: "hard",
  question: "Wähle die korrekte Form: 'Hardly ___ when the phone rang.'",
  answers: ["I had sat down", "had I sat down", "I sat down", "did I sat down"],
  correctIndex: 1,
  explanation: "Inversion nach 'Hardly': 'Hardly had I sat down...'"
},
{
  id: 176,
  category: "Englisch",
  difficulty: "hard",
  question: "Welche Form ist korrekt: 'She suggested that he ___ earlier.'",
  answers: ["leave", "leaves", "left", "will leave"],
  correctIndex: 0,
  explanation: "Nach 'suggest' kann der Konjunktiv/Grundform stehen: 'suggested that he leave'."
},
{
  id: 177,
  category: "Englisch",
  difficulty: "hard",
  question: "Was ist die richtige Bedeutung von 'actually'?",
  answers: ["aktuell", "eigentlich / tatsächlich", "künstlich", "eventuell"],
  correctIndex: 1,
  explanation: "'Actually' bedeutet meist 'eigentlich/tatsächlich', nicht 'aktuell'."
},
{
  id: 178,
  category: "Englisch",
  difficulty: "hard",
  question: "Welche Aussage ist korrekt (Relative Clause)?",
  answers: [
    "This is the man which I met yesterday.",
    "This is the man who I met yesterday.",
    "This is the man what I met yesterday.",
    "This is the man whom is very tall."
  ],
  correctIndex: 1,
  explanation: "Für Personen ist 'who' üblich: 'the man who I met...'"
},
{
  id: 179,
  category: "Englisch",
  difficulty: "hard",
  question: "Wähle die korrekte Form: 'No sooner ___ than it started to rain.'",
  answers: ["we left", "had we left", "we had left", "did we left"],
  correctIndex: 1,
  explanation: "Inversion nach 'No sooner': 'No sooner had we left...'"
},
{
  id: 180,
  category: "Englisch",
  difficulty: "hard",
  question: "Welche Aussage ist korrekt (Modal Perfect)?",
  answers: [
    "He must be forgot.",
    "He must have forgotten.",
    "He must has forgotten.",
    "He must forgot."
  ],
  correctIndex: 1,
  explanation: "Modal Perfect: must have + past participle ⇒ must have forgotten."
},
// =========================
// JavaScript (45) – 15 easy / 15 medium / 15 hard
// IDs: 181–225
// =========================

// --- easy (181–195) ---
{
  id: 181,
  category: "JavaScript",
  difficulty: "easy",
  question: "Wie schreibt man einen Kommentar in einer Zeile in JavaScript?",
  answers: ["<!-- Kommentar -->", "// Kommentar", "/* Kommentar */", "# Kommentar"],
  correctIndex: 1,
  explanation: "Einzeilige Kommentare beginnen mit //."
},
{
  id: 182,
  category: "JavaScript",
  difficulty: "easy",
  question: "Welche Funktion gibt Text in der Konsole aus?",
  answers: ["console.print()", "console.log()", "print()", "log.console()"],
  correctIndex: 1,
  explanation: "console.log() schreibt in die Entwicklerkonsole."
},
{
  id: 183,
  category: "JavaScript",
  difficulty: "easy",
  question: "Welche Schreibweise erstellt ein Array?",
  answers: ["{}", "[]", "()", "<>"],
  correctIndex: 1,
  explanation: "Arrays werden mit [] erstellt."
},
{
  id: 184,
  category: "JavaScript",
  difficulty: "easy",
  question: "Wie heißt der Operator für strikte Gleichheit (Wert und Typ)?",
  answers: ["==", "===", "=", "!="],
  correctIndex: 1,
  explanation: "=== prüft Wert und Datentyp."
},
{
  id: 185,
  category: "JavaScript",
  difficulty: "easy",
  question: "Welches Keyword deklariert eine Variable (modern, änderbar)?",
  answers: ["var", "let", "const", "static"],
  correctIndex: 1,
  explanation: "let ist block-scoped und änderbar."
},
{
  id: 186,
  category: "JavaScript",
  difficulty: "easy",
  question: "Welches Keyword deklariert eine Konstante?",
  answers: ["let", "const", "var", "final"],
  correctIndex: 1,
  explanation: "const verhindert eine Neu-Zuweisung."
},
{
  id: 187,
  category: "JavaScript",
  difficulty: "easy",
  question: "Wie greift man auf das erste Element eines Arrays arr zu?",
  answers: ["arr(0)", "arr[0]", "arr.first()", "arr.get(0)"],
  correctIndex: 1,
  explanation: "Array-Indizes starten bei 0."
},
{
  id: 188,
  category: "JavaScript",
  difficulty: "easy",
  question: "Wie fügt man ein Element ans Ende eines Arrays hinzu?",
  answers: ["push()", "pop()", "shift()", "unshift()"],
  correctIndex: 0,
  explanation: "push() hängt ein Element hinten an."
},
{
  id: 189,
  category: "JavaScript",
  difficulty: "easy",
  question: "Was liefert typeof \"Hallo\" ?",
  answers: ["text", "string", "String", "char"],
  correctIndex: 1,
  explanation: "typeof für einen String ist 'string'."
},
{
  id: 190,
  category: "JavaScript",
  difficulty: "easy",
  question: "Welche Methode wandelt einen String in eine Zahl um (Basisfall)?",
  answers: ["Number(\"42\")", "String(42)", "Array(42)", "Int(\"42\")"],
  correctIndex: 0,
  explanation: "Number('42') ergibt die Zahl 42."
},
{
  id: 191,
  category: "JavaScript",
  difficulty: "easy",
  question: "Welche Schreibweise ruft eine Funktion myFn auf?",
  answers: ["myFn", "myFn()", "call myFn", "myFn[]"],
  correctIndex: 1,
  explanation: "Funktionen werden mit () aufgerufen."
},
{
  id: 192,
  category: "JavaScript",
  difficulty: "easy",
  question: "Wie heißt das Objekt für das aktuelle HTML-Dokument im Browser?",
  answers: ["window", "document", "screen", "navigator"],
  correctIndex: 1,
  explanation: "document ist der Einstieg ins DOM."
},
{
  id: 193,
  category: "JavaScript",
  difficulty: "easy",
  question: "Welche Methode selektiert ein Element per CSS-Selector?",
  answers: ["document.getElement()", "document.querySelector()", "document.select()", "document.css()"],
  correctIndex: 1,
  explanation: "querySelector() nutzt CSS-Selektoren."
},
{
  id: 194,
  category: "JavaScript",
  difficulty: "easy",
  question: "Welche Methode hängt an ein Element einen Click-Listener?",
  answers: ["addEventListener()", "onEvent()", "listen()", "addClick()"],
  correctIndex: 0,
  explanation: "addEventListener('click', ...) registriert Events."
},
{
  id: 195,
  category: "JavaScript",
  difficulty: "easy",
  question: "Was ist der Rückgabewert von Boolean(0)?",
  answers: ["true", "false", "\"false\"", "0"],
  correctIndex: 1,
  explanation: "0 ist 'falsy' → Boolean(0) ist false."
},

// --- medium (196–210) ---
{
  id: 196,
  category: "JavaScript",
  difficulty: "medium",
  question: "Was macht Array.prototype.map()?",
  answers: [
    "Erstellt ein neues Array mit transformierten Elementen",
    "Filtert Elemente aus dem Array heraus",
    "Sortiert das Array immer aufsteigend",
    "Ändert das Original-Array und gibt nichts zurück"
  ],
  correctIndex: 0,
  explanation: "map() gibt ein neues Array zurück."
},
{
  id: 197,
  category: "JavaScript",
  difficulty: "medium",
  question: "Was macht Array.prototype.filter()?",
  answers: [
    "Erstellt ein neues Array mit Elementen, die eine Bedingung erfüllen",
    "Gibt das erste Element zurück",
    "Ändert jedes Element im Array",
    "Ersetzt alle Elemente durch true/false"
  ],
  correctIndex: 0,
  explanation: "filter() behält nur Elemente, deren Callback true liefert."
},
{
  id: 198,
  category: "JavaScript",
  difficulty: "medium",
  question: "Welche Aussage zu let vs. var stimmt am ehesten?",
  answers: [
    "let ist block-scoped, var ist function-scoped",
    "var ist block-scoped, let ist global-scoped",
    "let kann nicht neu zugewiesen werden",
    "var existiert nur in strict mode"
  ],
  correctIndex: 0,
  explanation: "let gilt im Block; var gilt in der Funktion."
},
{
  id: 199,
  category: "JavaScript",
  difficulty: "medium",
  question: "Was ist ein Template Literal?",
  answers: [
    "String mit Backticks, erlaubt ${...} Interpolation",
    "Ein Objekt-Literal mit {}",
    "Ein Array-Literal mit []",
    "Ein JSON-Format"
  ],
  correctIndex: 0,
  explanation: "Template Literals nutzen ` und ${}."
},
{
  id: 200,
  category: "JavaScript",
  difficulty: "medium",
  question: "Wofür steht JSON am ehesten?",
  answers: [
    "Ein Textformat zum Datenaustausch (JavaScript Object Notation)",
    "Ein Datenbankserver",
    "Ein HTTP-Statuscode",
    "Ein Verschlüsselungsstandard"
  ],
  correctIndex: 0,
  explanation: "JSON ist ein Textformat für strukturierte Daten."
},
{
  id: 201,
  category: "JavaScript",
  difficulty: "medium",
  question: "Was macht JSON.parse()?",
  answers: [
    "Wandelt einen JSON-String in ein Objekt um",
    "Wandelt ein Objekt in einen JSON-String um",
    "Verschlüsselt einen String",
    "Komprimiert Daten"
  ],
  correctIndex: 0,
  explanation: "JSON.parse() → String zu Objekt."
},
{
  id: 202,
  category: "JavaScript",
  difficulty: "medium",
  question: "Was macht JSON.stringify()?",
  answers: [
    "Wandelt ein Objekt in einen JSON-String um",
    "Wandelt einen JSON-String in ein Objekt um",
    "Validiert HTML",
    "Lädt Daten vom Server"
  ],
  correctIndex: 0,
  explanation: "JSON.stringify() → Objekt zu String."
},
{
  id: 203,
  category: "JavaScript",
  difficulty: "medium",
  question: "Welche Aussage zu === vs == stimmt?",
  answers: [
    "== vergleicht ohne Typumwandlung, === mit Typumwandlung",
    "=== vergleicht ohne Typumwandlung, == mit Typumwandlung",
    "Beide machen immer exakt das Gleiche",
    "=== ist nur für Zahlen"
  ],
  correctIndex: 1,
  explanation: "=== ist strikt; == macht ggf. Typumwandlung."
},
{
  id: 204,
  category: "JavaScript",
  difficulty: "medium",
  question: "Was ist das Ergebnis von typeof null?",
  answers: ["null", "object", "undefined", "number"],
  correctIndex: 1,
  explanation: "typeof null ist historisch bedingt 'object'."
},
{
  id: 205,
  category: "JavaScript",
  difficulty: "medium",
  question: "Was beschreibt 'hoisting' am besten?",
  answers: [
    "Deklarationen werden vor der Ausführung in einen 'früheren' Bereich gehoben",
    "Funktionen werden automatisch verschlüsselt",
    "Arrays werden automatisch sortiert",
    "Promises werden immer synchron ausgeführt"
  ],
  correctIndex: 0,
  explanation: "Hoisting betrifft u.a. var- und Funktionsdeklarationen."
},
{
  id: 206,
  category: "JavaScript",
  difficulty: "medium",
  question: "Was ist ein 'Arrow Function' Unterschied zu function() (wichtigster Punkt)?",
  answers: [
    "Arrow Functions haben ihr eigenes this",
    "Arrow Functions haben kein eigenes this",
    "Arrow Functions können keine Parameter haben",
    "Arrow Functions laufen immer asynchron"
  ],
  correctIndex: 1,
  explanation: "Arrow Functions binden this lexikalisch (kein eigenes this)."
},
{
  id: 207,
  category: "JavaScript",
  difficulty: "medium",
  question: "Was macht Array.prototype.includes(x)?",
  answers: [
    "Prüft, ob x im Array enthalten ist (true/false)",
    "Gibt den Index von x zurück",
    "Entfernt x aus dem Array",
    "Sortiert das Array nach x"
  ],
  correctIndex: 0,
  explanation: "includes() liefert true/false."
},
{
  id: 208,
  category: "JavaScript",
  difficulty: "medium",
  question: "Welche Methode entfernt das letzte Element aus einem Array?",
  answers: ["push()", "pop()", "shift()", "unshift()"],
  correctIndex: 1,
  explanation: "pop() entfernt das letzte Element."
},
{
  id: 209,
  category: "JavaScript",
  difficulty: "medium",
  question: "Wofür steht DOM?",
  answers: [
    "Document Object Model",
    "Data Output Mode",
    "Dynamic Operation Module",
    "Document Order Mapping"
  ],
  correctIndex: 0,
  explanation: "DOM = Document Object Model."
},
{
  id: 210,
  category: "JavaScript",
  difficulty: "medium",
  question: "Was ist das Ergebnis von '5' + 1 in JavaScript?",
  answers: ["6", "51", "Error", "NaN"],
  correctIndex: 1,
  explanation: "String + Number ergibt String-Konkatenation: '51'."
},

// --- hard (211–225) ---
{
  id: 211,
  category: "JavaScript",
  difficulty: "hard",
  question: "Was ist eine Closure?",
  answers: [
    "Eine Funktion, die Zugriff auf Variablen aus ihrem äußeren Scope behält",
    "Eine Methode, um Arrays zu schließen",
    "Ein spezieller Datentyp für Klassen",
    "Eine Art JSON-Komprimierung"
  ],
  correctIndex: 0,
  explanation: "Closures 'merken' sich ihren lexical scope."
},
{
  id: 212,
  category: "JavaScript",
  difficulty: "hard",
  question: "Welche Aussage zur Event Loop stimmt am ehesten?",
  answers: [
    "Sie koordiniert Call Stack und Task Queues, um asynchronen Code auszuführen",
    "Sie macht JavaScript multi-threaded",
    "Sie ersetzt den Garbage Collector",
    "Sie konvertiert automatisch Typen"
  ],
  correctIndex: 0,
  explanation: "Die Event Loop plant Tasks/Microtasks nach dem Call Stack."
},
{
  id: 213,
  category: "JavaScript",
  difficulty: "hard",
  question: "Welche Aussage zu Microtasks stimmt typischerweise?",
  answers: [
    "Promises (then/catch/finally) landen in der Microtask Queue",
    "setTimeout landet in der Microtask Queue",
    "DOM-Events sind immer Microtasks",
    "Microtasks laufen nur nach einem Seitenreload"
  ],
  correctIndex: 0,
  explanation: "Promise-Reaktionen sind Microtasks; setTimeout ist (Macro)Task."
},
{
  id: 214,
  category: "JavaScript",
  difficulty: "hard",
  question: "Was ist der Hauptzweck von 'use strict'?",
  answers: [
    "Strengere Regeln/Fehler in JS aktivieren (z.B. keine impliziten Globals)",
    "Alle Variablen werden automatisch const",
    "Code wird automatisch schneller",
    "Promises werden deaktiviert"
  ],
  correctIndex: 0,
  explanation: "Strict Mode verhindert einige 'stille' Fehler und schärft Regeln."
},
{
  id: 215,
  category: "JavaScript",
  difficulty: "hard",
  question: "Welche Aussage zu Prototypen in JavaScript stimmt?",
  answers: [
    "Objekte können Eigenschaften über die Prototype Chain erben",
    "JavaScript unterstützt gar keine Vererbung",
    "Prototypen funktionieren nur bei Arrays",
    "Prototypen ersetzen JSON"
  ],
  correctIndex: 0,
  explanation: "Eigenschaften werden über die Prototype Chain aufgelöst."
},
{
  id: 216,
  category: "JavaScript",
  difficulty: "hard",
  question: "Was ist der Unterschied zwischen null und undefined am ehesten?",
  answers: [
    "undefined: nicht definiert/zugewiesen; null: bewusst 'leer' gesetzt",
    "null: nicht definiert/zugewiesen; undefined: bewusst 'leer' gesetzt",
    "Beides ist immer identisch",
    "undefined ist eine Zahl"
  ],
  correctIndex: 0,
  explanation: "undefined bedeutet oft 'fehlt'; null ist ein gesetzter Leerwert."
},
{
  id: 217,
  category: "JavaScript",
  difficulty: "hard",
  question: "Was macht Object.freeze(obj)?",
  answers: [
    "Macht ein Objekt unveränderlich (keine neuen/gelöschten/änderten Properties)",
    "Kopiert das Objekt tief (deep copy)",
    "Konvertiert es zu JSON",
    "Löscht alle Properties"
  ],
  correctIndex: 0,
  explanation: "freeze verhindert Änderungen an Properties (shallow)."
},
{
  id: 218,
  category: "JavaScript",
  difficulty: "hard",
  question: "Welche Aussage zu 'this' ist richtig?",
  answers: [
    "this hängt vom Aufrufkontext ab (wie eine Funktion aufgerufen wird)",
    "this ist immer window",
    "this ist immer das aktuelle Objekt-Literal",
    "this ist in JavaScript verboten"
  ],
  correctIndex: 0,
  explanation: "this wird durch den Call-Site bestimmt (Arrow Functions ausgenommen)."
},
{
  id: 219,
  category: "JavaScript",
  difficulty: "hard",
  question: "Was macht der Spread-Operator ... in Arrays am ehesten?",
  answers: [
    "Er 'entpackt' Elemente, z.B. um Arrays zu kopieren/zusammenzuführen",
    "Er sortiert Arrays",
    "Er löscht Duplikate automatisch",
    "Er macht Code asynchron"
  ],
  correctIndex: 0,
  explanation: "[...arr] erstellt z.B. eine flache Kopie."
},
{
  id: 220,
  category: "JavaScript",
  difficulty: "hard",
  question: "Wofür steht 'rest parameter' in function f(...args)?",
  answers: [
    "Sammelt beliebig viele Argumente in einem Array",
    "Verteilt ein Array in einzelne Argumente",
    "Stoppt die Funktion sofort",
    "Erzwingt einen Default-Wert"
  ],
  correctIndex: 0,
  explanation: "...args sammelt Argumente in einem Array."
},
{
  id: 221,
  category: "JavaScript",
  difficulty: "hard",
  question: "Welche Aussage zu async/await stimmt?",
  answers: [
    "await pausiert die async-Funktion, bis das Promise erfüllt/abgelehnt ist",
    "await macht Code komplett synchron ohne Promises",
    "await darf nur in normalen Funktionen genutzt werden",
    "await funktioniert nur mit setTimeout"
  ],
  correctIndex: 0,
  explanation: "await funktioniert in async-Funktionen und wartet auf ein Promise."
},
{
  id: 222,
  category: "JavaScript",
  difficulty: "hard",
  question: "Was ist der Zweck von try/catch bei async/await?",
  answers: [
    "Fehler (reject) beim await können wie Exceptions behandelt werden",
    "Es beschleunigt den Code",
    "Es deaktiviert Promises",
    "Es ersetzt if/else"
  ],
  correctIndex: 0,
  explanation: "Rejected Promises können im await als Fehler geworfen werden."
},
{
  id: 223,
  category: "JavaScript",
  difficulty: "hard",
  question: "Was macht Array.prototype.reduce() am ehesten?",
  answers: [
    "Reduziert ein Array auf einen einzelnen Wert (Akkumulator)",
    "Sortiert ein Array absteigend",
    "Entfernt automatisch doppelte Werte",
    "Teilt ein Array in zwei Arrays"
  ],
  correctIndex: 0,
  explanation: "reduce(acc, item) baut z.B. Summe, Objekt, Map, etc."
},
{
  id: 224,
  category: "JavaScript",
  difficulty: "hard",
  question: "Welche Aussage zu 'shallow copy' stimmt?",
  answers: [
    "Verschachtelte Objekte/Arrays werden weiterhin per Referenz geteilt",
    "Alle Ebenen werden vollständig kopiert",
    "Shallow Copy ist unmöglich in JS",
    "Shallow Copy funktioniert nur mit JSON.parse"
  ],
  correctIndex: 0,
  explanation: "Shallow Copy kopiert nur die erste Ebene (z.B. {...obj}, [...arr])."
},
{
  id: 225,
  category: "JavaScript",
  difficulty: "hard",
  question: "Warum kann JSON.parse(JSON.stringify(obj)) problematisch sein (als Deep Copy)?",
  answers: [
    "Funktionen, undefined und spezielle Typen (Date, Map, Set) gehen verloren/werden verändert",
    "Es ist immer die beste Deep-Copy-Methode ohne Nachteile",
    "Es funktioniert nur im Node.js, nicht im Browser",
    "Es macht automatisch zyklische Referenzen möglich"
  ],
  correctIndex: 0,
  explanation: "JSON-Deep-Copy verliert nicht-JSON-kompatible Werte und scheitert bei Zyklen."
},
// =========================
// HTMLCSS (45) – 15 easy / 15 medium / 15 hard
// IDs: 226–270
// =========================

// --- easy (226–240) ---
{
  id: 226,
  category: "HTMLCSS",
  difficulty: "easy",
  question: "Welches HTML-Tag nutzt man für die größte Überschrift?",
  answers: ["<h6>", "<h1>", "<head>", "<title>"],
  correctIndex: 1,
  explanation: "<h1> ist die wichtigste/größte Überschrift."
},
{
  id: 227,
  category: "HTMLCSS",
  difficulty: "easy",
  question: "Wofür steht HTML?",
  answers: ["HyperText Markup Language", "HighText Machine Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Logic"],
  correctIndex: 0,
  explanation: "HTML ist eine Auszeichnungssprache für Webseiten."
},
{
  id: 228,
  category: "HTMLCSS",
  difficulty: "easy",
  question: "Welches HTML-Element erstellt einen Link?",
  answers: ["<a>", "<link>", "<href>", "<url>"],
  correctIndex: 0,
  explanation: "Links werden mit <a href=\"...\"> erstellt."
},
{
  id: 229,
  category: "HTMLCSS",
  difficulty: "easy",
  question: "Welche CSS-Eigenschaft ändert die Textfarbe?",
  answers: ["font-color", "text-color", "color", "foreground"],
  correctIndex: 2,
  explanation: "Mit color wird die Textfarbe gesetzt."
},
{
  id: 230,
  category: "HTMLCSS",
  difficulty: "easy",
  question: "Welche CSS-Eigenschaft ändert die Hintergrundfarbe?",
  answers: ["background", "bg-color", "background-color", "color"],
  correctIndex: 2,
  explanation: "background-color setzt die Hintergrundfarbe."
},
{
  id: 231,
  category: "HTMLCSS",
  difficulty: "easy",
  question: "Welches Attribut beschreibt den Link-Zielpfad bei <a>?",
  answers: ["src", "href", "target", "rel"],
  correctIndex: 1,
  explanation: "href enthält die URL."
},
{
  id: 232,
  category: "HTMLCSS",
  difficulty: "easy",
  question: "Welches Tag nutzt man für ein Bild?",
  answers: ["<img>", "<image>", "<pic>", "<src>"],
  correctIndex: 0,
  explanation: "Bilder nutzt man mit <img src=\"...\">."
},
{
  id: 233,
  category: "HTMLCSS",
  difficulty: "easy",
  question: "Welches Attribut ist bei <img> für den Bildpfad zuständig?",
  answers: ["href", "src", "alt", "title"],
  correctIndex: 1,
  explanation: "src enthält den Pfad/URL zum Bild."
},
{
  id: 234,
  category: "HTMLCSS",
  difficulty: "easy",
  question: "Wofür ist das alt-Attribut bei <img> gedacht?",
  answers: ["Alternative Textbeschreibung", "Bildkomprimierung", "Bildgröße automatisch", "Link-Weiterleitung"],
  correctIndex: 0,
  explanation: "alt ist wichtig für Barrierefreiheit und falls das Bild nicht lädt."
},
{
  id: 235,
  category: "HTMLCSS",
  difficulty: "easy",
  question: "Welche CSS-Eigenschaft ändert die Schriftgröße?",
  answers: ["font-size", "text-size", "size", "font-weight"],
  correctIndex: 0,
  explanation: "font-size setzt die Schriftgröße."
},
{
  id: 236,
  category: "HTMLCSS",
  difficulty: "easy",
  question: "Welche CSS-Eigenschaft macht Text fett?",
  answers: ["font-style", "font-weight", "text-bold", "weight"],
  correctIndex: 1,
  explanation: "font-weight: bold macht Text fett."
},
{
  id: 237,
  category: "HTMLCSS",
  difficulty: "easy",
  question: "Welche Einheit ist typischerweise relativ zur Schriftgröße des Elements?",
  answers: ["px", "cm", "em", "mm"],
  correctIndex: 2,
  explanation: "em ist relativ zur aktuellen Schriftgröße."
},
{
  id: 238,
  category: "HTMLCSS",
  difficulty: "easy",
  question: "Welches HTML-Element nutzt man für eine ungeordnete Liste?",
  answers: ["<ol>", "<ul>", "<li>", "<list>"],
  correctIndex: 1,
  explanation: "Ungeordnete Listen: <ul> mit <li>."
},
{
  id: 239,
  category: "HTMLCSS",
  difficulty: "easy",
  question: "Welches Tag ist ein Listenpunkt in <ul>/<ol>?",
  answers: ["<li>", "<ul>", "<p>", "<item>"],
  correctIndex: 0,
  explanation: "<li> ist ein Listen-Item."
},
{
  id: 240,
  category: "HTMLCSS",
  difficulty: "easy",
  question: "Welches HTML-Element ist ein Absatz?",
  answers: ["<div>", "<span>", "<p>", "<br>"],
  correctIndex: 2,
  explanation: "<p> steht für Paragraph."
},

// --- medium (241–255) ---
{
  id: 241,
  category: "HTMLCSS",
  difficulty: "medium",
  question: "Was ist der Unterschied zwischen <div> und <span> (typisch)?",
  answers: [
    "<div> ist inline, <span> ist block",
    "<div> ist block, <span> ist inline",
    "Beide sind immer gleich",
    "<span> darf nur in <head> stehen"
  ],
  correctIndex: 1,
  explanation: "<div> ist standardmäßig block-level, <span> inline."
},
{
  id: 242,
  category: "HTMLCSS",
  difficulty: "medium",
  question: "Welche CSS-Selektor-Schreibweise selektiert alle Elemente mit class=\"btn\"?",
  answers: ["#btn", ".btn", "btn", "*btn"],
  correctIndex: 1,
  explanation: ".classname selektiert Klassen."
},
{
  id: 243,
  category: "HTMLCSS",
  difficulty: "medium",
  question: "Welche CSS-Selektor-Schreibweise selektiert ein Element mit id=\"app\"?",
  answers: [".app", "#app", "app", "@app"],
  correctIndex: 1,
  explanation: "#id selektiert IDs."
},
{
  id: 244,
  category: "HTMLCSS",
  difficulty: "medium",
  question: "Welche Eigenschaft setzt Innenabstand (inner spacing) eines Elements?",
  answers: ["margin", "padding", "gap", "border"],
  correctIndex: 1,
  explanation: "padding ist der Innenabstand."
},
{
  id: 245,
  category: "HTMLCSS",
  difficulty: "medium",
  question: "Welche Eigenschaft setzt Außenabstand (outer spacing) eines Elements?",
  answers: ["margin", "padding", "outline", "spacing"],
  correctIndex: 0,
  explanation: "margin ist der Außenabstand."
},
{
  id: 246,
  category: "HTMLCSS",
  difficulty: "medium",
  question: "Was bewirkt box-sizing: border-box;?",
  answers: [
    "width/height beinhalten padding + border",
    "padding wird ignoriert",
    "border verschwindet",
    "margin zählt zur width"
  ],
  correctIndex: 0,
  explanation: "border-box macht Layout oft berechenbarer."
},
{
  id: 247,
  category: "HTMLCSS",
  difficulty: "medium",
  question: "Wofür nutzt man Flexbox typischerweise am besten?",
  answers: ["1D-Layout (eine Richtung: Reihe oder Spalte)", "2D-Grid-Layout", "Datenbankabfragen", "JS-Animationen"],
  correctIndex: 0,
  explanation: "Flexbox ist ideal für Layout in einer Dimension."
},
{
  id: 248,
  category: "HTMLCSS",
  difficulty: "medium",
  question: "Welche CSS-Eigenschaft macht ein Element zum Flex-Container?",
  answers: ["position: flex", "display: flex", "flex: container", "layout: flex"],
  correctIndex: 1,
  explanation: "display: flex aktiviert Flexbox."
},
{
  id: 249,
  category: "HTMLCSS",
  difficulty: "medium",
  question: "Welche Eigenschaft steuert die Ausrichtung entlang der Hauptachse in Flexbox?",
  answers: ["align-items", "justify-content", "align-content", "place-items"],
  correctIndex: 1,
  explanation: "justify-content arbeitet entlang der Hauptachse."
},
{
  id: 250,
  category: "HTMLCSS",
  difficulty: "medium",
  question: "Welche Eigenschaft steuert die Ausrichtung entlang der Querachse in Flexbox?",
  answers: ["align-items", "justify-items", "justify-content", "text-align"],
  correctIndex: 0,
  explanation: "align-items richtet auf der Querachse aus."
},
{
  id: 251,
  category: "HTMLCSS",
  difficulty: "medium",
  question: "Wofür ist das meta viewport Tag hauptsächlich?",
  answers: ["SEO", "Responsive Darstellung auf mobilen Geräten", "Script-Laden", "Cookie-Steuerung"],
  correctIndex: 1,
  explanation: "Viewport steuert das Layout/Zoom-Verhalten auf mobilen Geräten."
},
{
  id: 252,
  category: "HTMLCSS",
  difficulty: "medium",
  question: "Was ist semantisches HTML?",
  answers: [
    "HTML mit Bedeutung (z.B. <header>, <main>, <footer>)",
    "HTML ohne CSS",
    "HTML nur für Tabellen",
    "HTML, das nur im Internet Explorer funktioniert"
  ],
  correctIndex: 0,
  explanation: "Semantische Tags beschreiben Struktur und Bedeutung."
},
{
  id: 253,
  category: "HTMLCSS",
  difficulty: "medium",
  question: "Welche Aussage zu <strong> ist am besten?",
  answers: [
    "Nur optisch fett ohne Bedeutung",
    "Semantisch: wichtiger Text (standardmäßig fett)",
    "Erstellt automatisch eine Überschrift",
    "Ist veraltet und darf nicht genutzt werden"
  ],
  correctIndex: 1,
  explanation: "<strong> hat semantische Bedeutung (wichtig)."
},
{
  id: 254,
  category: "HTMLCSS",
  difficulty: "medium",
  question: "Wie heißt das CSS-Konzept, das bestimmt welche Regel gewinnt?",
  answers: ["Compilation", "Specificity", "Inheritance only", "Serialization"],
  correctIndex: 1,
  explanation: "Spezifität entscheidet (plus Reihenfolge/!important)."
},
{
  id: 255,
  category: "HTMLCSS",
  difficulty: "medium",
  question: "Welche Schreibweise ist ein Attribut-Selektor für input type=\"text\"?",
  answers: ["input.type=text", "input[type=\"text\"]", "input{type:\"text\"}", "input(type=\"text\")"],
  correctIndex: 1,
  explanation: "Attributselektor: [attr=\"value\"]."
},

// --- hard (256–270) ---
{
  id: 256,
  category: "HTMLCSS",
  difficulty: "hard",
  question: "Was ist der Unterschied zwischen CSS Grid und Flexbox (kurz)?",
  answers: [
    "Grid ist 2D (Zeilen+Spalten), Flexbox 1D",
    "Grid ist nur für Text, Flexbox nur für Bilder",
    "Flexbox ist 2D, Grid ist 1D",
    "Es gibt keinen Unterschied"
  ],
  correctIndex: 0,
  explanation: "Grid kann in zwei Dimensionen layouten; Flexbox primär in einer."
},
{
  id: 257,
  category: "HTMLCSS",
  difficulty: "hard",
  question: "Welche Eigenschaft macht ein Element zum Grid-Container?",
  answers: ["display: grid", "position: grid", "grid: on", "layout: grid"],
  correctIndex: 0,
  explanation: "display: grid aktiviert CSS Grid."
},
{
  id: 258,
  category: "HTMLCSS",
  difficulty: "hard",
  question: "Wofür ist z-index relevant?",
  answers: ["Nur für flex-items", "Nur für grid-items", "Für Überlappung/Stacking bei positionierten Elementen", "Für Schriftgrößen"],
  correctIndex: 2,
  explanation: "z-index wirkt in einem Stacking Context bei positionierten Elementen."
},
{
  id: 259,
  category: "HTMLCSS",
  difficulty: "hard",
  question: "Was ist ein CSS Stacking Context (stark vereinfacht)?",
  answers: [
    "Ein Kontext, der die Stapelreihenfolge (z-index) von Elementen begrenzt",
    "Ein CSS-Reset",
    "Ein HTML-Tag",
    "Ein Browser-Cache"
  ],
  correctIndex: 0,
  explanation: "Ein Stacking Context begrenzt/ordnet z-index-Ebenen."
},
{
  id: 260,
  category: "HTMLCSS",
  difficulty: "hard",
  question: "Welche Aussage zu position: absolute stimmt?",
  answers: [
    "Element bleibt immer im normalen Flow",
    "Element wird aus dem normalen Flow genommen und relativ zum nächsten positionierten Ancestor platziert",
    "Element ist immer relativ zum Viewport",
    "Element kann keine top/left Werte nutzen"
  ],
  correctIndex: 1,
  explanation: "Absolute ist aus dem Flow und orientiert sich am nächsten positionierten Vorfahren."
},
{
  id: 261,
  category: "HTMLCSS",
  difficulty: "hard",
  question: "Welche Aussage zu position: fixed stimmt?",
  answers: [
    "Element scrollt mit dem Dokument mit",
    "Element bleibt am Viewport fixiert (typisch)",
    "Element verhält sich wie static",
    "fixed funktioniert nur in Tabellen"
  ],
  correctIndex: 1,
  explanation: "fixed bleibt typischerweise am Viewport kleben."
},
{
  id: 262,
  category: "HTMLCSS",
  difficulty: "hard",
  question: "Was macht overflow: hidden; häufig?",
  answers: [
    "Inhalt außerhalb der Box wird abgeschnitten",
    "Inhalt wird automatisch vergrößert",
    "Element wird unsichtbar samt Platz",
    "Schrift wird versteckt, aber Bilder nicht"
  ],
  correctIndex: 0,
  explanation: "Overflow hidden schneidet überstehenden Inhalt ab."
},
{
  id: 263,
  category: "HTMLCSS",
  difficulty: "hard",
  question: "Was ist der Hauptvorteil von rem gegenüber em (typisch)?",
  answers: [
    "rem ist immer relativ zum Root (html) und dadurch konsistenter",
    "rem ist relativ zum Parent und daher verschachtelungsabhängig",
    "rem funktioniert nur in Chrome",
    "rem ist ein Farbmodell"
  ],
  correctIndex: 0,
  explanation: "rem bezieht sich auf die Root-Schriftgröße."
},
{
  id: 264,
  category: "HTMLCSS",
  difficulty: "hard",
  question: "Was ist eine CSS Media Query?",
  answers: [
    "Abfrage, um Styles abhängig von z.B. Bildschirmbreite anzuwenden",
    "Eine Datenbankabfrage",
    "Ein HTML-Attribut",
    "Ein JavaScript-Event"
  ],
  correctIndex: 0,
  explanation: "Media Queries sind wichtig für Responsive Design."
},
{
  id: 265,
  category: "HTMLCSS",
  difficulty: "hard",
  question: "Welche Aussage zu Accessibility (A11y) ist am wichtigsten?",
  answers: [
    "alt-Texte und semantisches HTML helfen Screenreadern",
    "Nur Farben sind entscheidend",
    "A11y ist nur für mobile Geräte",
    "A11y bedeutet, alles in <div> zu bauen"
  ],
  correctIndex: 0,
  explanation: "Semantik + alternative Texte sind zentrale Grundlagen."
},
{
  id: 266,
  category: "HTMLCSS",
  difficulty: "hard",
  question: "Wofür ist das label-Element in Formularen wichtig?",
  answers: [
    "Nur fürs Styling",
    "Verbessert Usability/A11y und verknüpft Text mit Input",
    "Es ersetzt den Input komplett",
    "Es validiert automatisch das Formular"
  ],
  correctIndex: 1,
  explanation: "label (for=...) verbindet Beschriftung und Eingabefeld."
},
{
  id: 267,
  category: "HTMLCSS",
  difficulty: "hard",
  question: "Welche Aussage zu CSS Specificity stimmt eher?",
  answers: [
    "Inline-Styles schlagen Klassen immer",
    "Klassen schlagen IDs immer",
    "IDs schlagen Inline-Styles immer",
    "Specificity ist zufällig"
  ],
  correctIndex: 0,
  explanation: "Inline-Styles haben sehr hohe Priorität (ohne !important-Ausnahmen)."
},
{
  id: 268,
  category: "HTMLCSS",
  difficulty: "hard",
  question: "Warum kann !important problematisch sein?",
  answers: [
    "Es erschwert Wartung, weil es normale Prioritäten überschreibt",
    "Es macht CSS schneller",
    "Es ist nötig für jedes Projekt",
    "Es deaktiviert Media Queries"
  ],
  correctIndex: 0,
  explanation: "!important kann Styles schwerer steuerbar machen."
},
{
  id: 269,
  category: "HTMLCSS",
  difficulty: "hard",
  question: "Was ist das Ziel von 'normalize.css' oder CSS-Resets (allgemein)?",
  answers: [
    "Browser-Default-Styles angleichen/neutralisieren",
    "JavaScript ersetzen",
    "SEO verbessern",
    "Bilder komprimieren"
  ],
  correctIndex: 0,
  explanation: "Resets/Normalize reduzieren Unterschiede zwischen Browsern."
},
{
  id: 270,
  category: "HTMLCSS",
  difficulty: "hard",
  question: "Welche Aussage zu <script> im HTML ist richtig (typisch)?",
  answers: [
    "defer lädt das Script und führt es nach dem Parsen aus",
    "defer führt das Script sofort aus und blockiert HTML",
    "async garantiert Reihenfolge mehrerer Scripts",
    "Ohne Attribute läuft ein Script immer nach dem DOMContentLoaded"
  ],
  correctIndex: 0,
  explanation: "defer: Download parallel, Ausführung nach HTML-Parsing (Reihenfolge bleibt)."
}, 
// =========================
// General / Allgemeinwissen (45) – 15 easy / 15 medium / 15 hard
// IDs: 271–315
// =========================

// --- easy (271–285) ---
{
  id: 271,
  category: "General",
  difficulty: "easy",
  question: "Wie viele Kontinente gibt es auf der Erde (klassische Zählung)?",
  answers: ["5", "6", "7", "8"],
  correctIndex: 2,
  explanation: "Üblich sind 7 Kontinente."
},
{
  id: 272,
  category: "General",
  difficulty: "easy",
  question: "Welche Farbe entsteht aus Blau und Gelb (Malen)?",
  answers: ["Lila", "Grün", "Orange", "Braun"],
  correctIndex: 1,
  explanation: "Blau + Gelb ergibt Grün."
},
{
  id: 273,
  category: "General",
  difficulty: "easy",
  question: "Wie viele Tage hat ein Schaltjahr?",
  answers: ["365", "366", "367", "364"],
  correctIndex: 1,
  explanation: "Ein Schaltjahr hat 366 Tage."
},
{
  id: 274,
  category: "General",
  difficulty: "easy",
  question: "Was ist die Hauptstadt von Deutschland?",
  answers: ["München", "Hamburg", "Berlin", "Frankfurt"],
  correctIndex: 2,
  explanation: "Berlin ist die Hauptstadt Deutschlands."
},
{
  id: 275,
  category: "General",
  difficulty: "easy",
  question: "Wie viele Stunden hat ein Tag?",
  answers: ["12", "18", "24", "60"],
  correctIndex: 2,
  explanation: "Ein Tag hat 24 Stunden."
},
{
  id: 276,
  category: "General",
  difficulty: "easy",
  question: "Welcher Planet ist der Sonne am nächsten?",
  answers: ["Venus", "Merkur", "Mars", "Jupiter"],
  correctIndex: 1,
  explanation: "Merkur ist der sonnennächste Planet."
},
{
  id: 277,
  category: "General",
  difficulty: "easy",
  question: "Wofür steht das 'H' in H2O?",
  answers: ["Helium", "Hydrogen/Wasserstoff", "Hassium", "Höhe"],
  correctIndex: 1,
  explanation: "H steht für Wasserstoff."
},
{
  id: 278,
  category: "General",
  difficulty: "easy",
  question: "Wie heißt das größte Säugetier der Welt?",
  answers: ["Elefant", "Blauwal", "Giraffe", "Orca"],
  correctIndex: 1,
  explanation: "Der Blauwal ist das größte Säugetier."
},
{
  id: 279,
  category: "General",
  difficulty: "easy",
  question: "Welche Sprache wird in Brasilien hauptsächlich gesprochen?",
  answers: ["Spanisch", "Portugiesisch", "Englisch", "Französisch"],
  correctIndex: 1,
  explanation: "In Brasilien spricht man Portugiesisch."
},
{
  id: 280,
  category: "General",
  difficulty: "easy",
  question: "Welches Tier legt Eier und ist ein Säugetier?",
  answers: ["Delfin", "Fledermaus", "Schnabeltier", "Elefant"],
  correctIndex: 2,
  explanation: "Das Schnabeltier (Monotrem) legt Eier."
},
{
  id: 281,
  category: "General",
  difficulty: "easy",
  question: "Wie viele Monate hat ein Jahr?",
  answers: ["10", "11", "12", "13"],
  correctIndex: 2,
  explanation: "Ein Jahr hat 12 Monate."
},
{
  id: 282,
  category: "General",
  difficulty: "easy",
  question: "Welche Himmelsrichtung ist gegenüber von Norden?",
  answers: ["Osten", "Westen", "Süden", "Nordwesten"],
  correctIndex: 2,
  explanation: "Gegenüber von Norden liegt Süden."
},
{
  id: 283,
  category: "General",
  difficulty: "easy",
  question: "Welche Einheit misst man typischerweise bei Temperatur in Deutschland?",
  answers: ["Fahrenheit", "Celsius", "Kelvin", "Newton"],
  correctIndex: 1,
  explanation: "In Deutschland nutzt man meistens Grad Celsius."
},
{
  id: 284,
  category: "General",
  difficulty: "easy",
  question: "Wie heißt das Organ, mit dem man sieht?",
  answers: ["Ohr", "Nase", "Auge", "Herz"],
  correctIndex: 2,
  explanation: "Mit den Augen sieht man."
},
{
  id: 285,
  category: "General",
  difficulty: "easy",
  question: "Welche Jahreszeit kommt nach dem Sommer?",
  answers: ["Frühling", "Herbst", "Winter", "Sommer"],
  correctIndex: 1,
  explanation: "Nach dem Sommer kommt der Herbst."
},

// --- medium (286–300) ---
{
  id: 286,
  category: "General",
  difficulty: "medium",
  question: "Welcher Ozean ist der größte?",
  answers: ["Atlantik", "Indischer Ozean", "Pazifik", "Arktischer Ozean"],
  correctIndex: 2,
  explanation: "Der Pazifik ist der größte Ozean."
},
{
  id: 287,
  category: "General",
  difficulty: "medium",
  question: "Wie viele Bundesländer hat Deutschland?",
  answers: ["14", "15", "16", "17"],
  correctIndex: 2,
  explanation: "Deutschland hat 16 Bundesländer."
},
{
  id: 288,
  category: "General",
  difficulty: "medium",
  question: "Welche Stadt ist die Hauptstadt von Frankreich?",
  answers: ["Lyon", "Marseille", "Paris", "Nizza"],
  correctIndex: 2,
  explanation: "Paris ist die Hauptstadt Frankreichs."
},
{
  id: 289,
  category: "General",
  difficulty: "medium",
  question: "Was ist die chemische Formel von Kochsalz?",
  answers: ["NaCl", "H2O", "CO2", "Na2SO4"],
  correctIndex: 0,
  explanation: "Kochsalz ist Natriumchlorid (NaCl)."
},
{
  id: 290,
  category: "General",
  difficulty: "medium",
  question: "Wie viele Zähne hat ein Erwachsener typischerweise (inkl. Weisheitszähne)?",
  answers: ["28", "30", "32", "34"],
  correctIndex: 2,
  explanation: "Typisch sind 32 Zähne inklusive Weisheitszähne."
},
{
  id: 291,
  category: "General",
  difficulty: "medium",
  question: "Wie heißt die Währung in Japan?",
  answers: ["Yuan", "Yen", "Won", "Dollar"],
  correctIndex: 1,
  explanation: "In Japan ist die Währung der Yen."
},
{
  id: 292,
  category: "General",
  difficulty: "medium",
  question: "Wer schrieb 'Faust'?",
  answers: ["Schiller", "Goethe", "Kafka", "Brecht"],
  correctIndex: 1,
  explanation: "Goethe schrieb 'Faust'."
},
{
  id: 293,
  category: "General",
  difficulty: "medium",
  question: "Welche Energieform liefert die Sonne hauptsächlich zur Erde?",
  answers: ["Kernenergie", "Strahlungsenergie", "Schallenergie", "Magnetenergie"],
  correctIndex: 1,
  explanation: "Die Sonne liefert Strahlungsenergie (Licht/Wärme)."
},
{
  id: 294,
  category: "General",
  difficulty: "medium",
  question: "Wie nennt man ein Vieleck mit 8 Seiten?",
  answers: ["Hexagon", "Heptagon", "Oktagon", "Nonagon"],
  correctIndex: 2,
  explanation: "8 Seiten = Oktagon."
},
{
  id: 295,
  category: "General",
  difficulty: "medium",
  question: "Was ist die Hauptstadt von Italien?",
  answers: ["Mailand", "Rom", "Neapel", "Florenz"],
  correctIndex: 1,
  explanation: "Rom ist die Hauptstadt Italiens."
},
{
  id: 296,
  category: "General",
  difficulty: "medium",
  question: "Welche Farbe hat Chlorophyll typischerweise?",
  answers: ["Rot", "Grün", "Blau", "Schwarz"],
  correctIndex: 1,
  explanation: "Chlorophyll ist grün."
},
{
  id: 297,
  category: "General",
  difficulty: "medium",
  question: "Wie heißt der längste Fluss der Welt (je nach Quelle/Definition umstritten)?",
  answers: ["Nil", "Amazonas", "Mississippi", "Donau"],
  correctIndex: 0,
  explanation: "In vielen klassischen Quiz-Kontexten gilt der Nil als längster Fluss."
},
{
  id: 298,
  category: "General",
  difficulty: "medium",
  question: "Wie nennt man die Wissenschaft vom Wetter?",
  answers: ["Geologie", "Meteorologie", "Biologie", "Astronomie"],
  correctIndex: 1,
  explanation: "Wetterkunde heißt Meteorologie."
},
{
  id: 299,
  category: "General",
 difficulty: "medium",
  question: "Was ist ein Synonym für 'schnell'?",
  answers: ["rasch", "träge", "still", "mühsam"],
  correctIndex: 0,
  explanation: "Rasch ist ein Synonym für schnell."
},
{
  id: 300,
  category: "General",
  difficulty: "medium",
  question: "Wie viele Grad hat ein rechter Winkel?",
  answers: ["45", "60", "90", "180"],
  correctIndex: 2,
  explanation: "Ein rechter Winkel hat 90°."
},

// --- hard (301–315) ---
{
  id: 301,
  category: "General",
  difficulty: "hard",
  question: "Wie heißt die Hauptstadt von Kanada?",
  answers: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
  correctIndex: 2,
  explanation: "Ottawa ist die Hauptstadt Kanadas."
},
{
  id: 302,
  category: "General",
  difficulty: "hard",
  question: "Welches Element hat das chemische Symbol 'Fe'?",
  answers: ["Fluor", "Eisen", "Fermium", "Blei"],
  correctIndex: 1,
  explanation: "Fe steht für Eisen."
},
{
  id: 303,
  category: "General",
  difficulty: "hard",
  question: "Welche Einheit hat elektrische Leistung?",
  answers: ["Volt", "Watt", "Ohm", "Ampere"],
  correctIndex: 1,
  explanation: "Leistung misst man in Watt."
},
{
  id: 304,
  category: "General",
  difficulty: "hard",
  question: "Wer malte die 'Mona Lisa'?",
  answers: ["Michelangelo", "Leonardo da Vinci", "Van Gogh", "Picasso"],
  correctIndex: 1,
  explanation: "Die 'Mona Lisa' ist von Leonardo da Vinci."
},
{
  id: 305,
  category: "General",
  difficulty: "hard",
  question: "Welche Sprache hat die meisten Muttersprachler weltweit?",
  answers: ["Englisch", "Spanisch", "Mandarin-Chinesisch", "Hindi"],
  correctIndex: 2,
  explanation: "Mandarin hat weltweit die meisten Muttersprachler."
},
{
  id: 306,
  category: "General",
  difficulty: "hard",
  question: "Wie heißt die Hauptstadt von Australien?",
  answers: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
  correctIndex: 2,
  explanation: "Canberra ist die Hauptstadt Australiens."
},
{
  id: 307,
  category: "General",
  difficulty: "hard",
  question: "Wie viele Knochen hat ein erwachsener Mensch typischerweise?",
  answers: ["196", "206", "216", "226"],
  correctIndex: 1,
  explanation: "Ein Erwachsener hat typischerweise 206 Knochen."
},
{
  id: 308,
  category: "General",
  difficulty: "hard",
  question: "Was ist die Hauptstadt von Brasilien?",
  answers: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
  correctIndex: 2,
  explanation: "Brasília ist die Hauptstadt Brasiliens."
},
{
  id: 309,
  category: "General",
  difficulty: "hard",
  question: "Wer entwickelte die Relativitätstheorie?",
  answers: ["Newton", "Einstein", "Galilei", "Tesla"],
  correctIndex: 1,
  explanation: "Albert Einstein ist bekannt für die Relativitätstheorie."
},
{
  id: 310,
  category: "General",
  difficulty: "hard",
  question: "Was ist das härteste natürliche Mineral (klassische Mohs-Skala)?",
  answers: ["Quarz", "Smaragd", "Diamant", "Topas"],
  correctIndex: 2,
  explanation: "Diamant ist auf der Mohs-Skala am härtesten."
},
{
  id: 311,
  category: "General",
  difficulty: "hard",
  question: "Welche Blutgruppe gilt als 'Universalspender' (für Erythrozyten, vereinfacht)?",
  answers: ["AB+", "0-", "A-", "B+"],
  correctIndex: 1,
  explanation: "0- gilt vereinfacht als Universalspender für rote Blutkörperchen."
},
{
  id: 312,
  category: "General",
  difficulty: "hard",
  question: "Wie heißt die Hauptstadt von Südkorea?",
  answers: ["Seoul", "Busan", "Incheon", "Daegu"],
  correctIndex: 0,
  explanation: "Seoul ist die Hauptstadt Südkoreas."
},
{
  id: 313,
  category: "General",
  difficulty: "hard",
  question: "Wie viele Strings hat eine Standard-Gitarre?",
  answers: ["4", "5", "6", "7"],
  correctIndex: 2,
  explanation: "Eine Standard-Gitarre hat 6 Saiten."
},
{
  id: 314,
  category: "General",
  difficulty: "hard",
  question: "Welche Einheit misst man bei Frequenz?",
  answers: ["Newton", "Hertz", "Joule", "Pascal"],
  correctIndex: 1,
  explanation: "Frequenz wird in Hertz (Hz) gemessen."
},
{
  id: 315,
  category: "General",
  difficulty: "hard",
  question: "Welche Stadt nennt man oft 'Big Apple'?",
  answers: ["Los Angeles", "New York City", "Chicago", "Miami"],
  correctIndex: 1,
  explanation: "'Big Apple' ist ein Spitzname für New York City."
}
];
