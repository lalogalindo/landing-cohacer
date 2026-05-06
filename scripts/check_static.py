from html.parser import HTMLParser
from pathlib import Path
import sys

root = Path(__file__).resolve().parents[1]
required = [
    root / "index.html",
    root / "src" / "styles.css",
    root / "src" / "main.js",
    root / "assets" / "cohacer-logo.svg",
    root / "assets" / "cohacer-logo-light.svg",
    root / "assets" / "hero-person.svg",
    root / "assets" / "testimonial-main.svg",
    root / "assets" / "assistant-bot.svg",
]
missing = [str(path.relative_to(root)) for path in required if not path.exists()]
if missing:
    print("Missing files:", ", ".join(missing))
    sys.exit(1)

class Parser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.sections = []
        self.ids = set()
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "header":
            self.sections.append("Header")
        if tag == "section":
            if "hero" in attrs.get("class", ""):
                self.sections.append("Hero principal")
            if attrs.get("id") == "programas":
                self.sections.append("Cursos ofertados")
            if attrs.get("id") == "historias":
                self.sections.append("Testimonios en video")
            if attrs.get("id") == "como-funciona":
                self.sections.append("¿Cómo funciona?")
            if "assistant" in attrs.get("class", ""):
                self.sections.append("Bloque de asistente / chat IA")
            if attrs.get("id") == "contacto":
                self.sections.append("Contacto rápido")
        if tag == "footer":
            self.sections.append("Footer")
        if "id" in attrs:
            self.ids.add(attrs["id"])

parser = Parser()
parser.feed((root / "index.html").read_text())
expected = [
    "Header",
    "Hero principal",
    "Cursos ofertados",
    "Testimonios en video",
    "¿Cómo funciona?",
    "Bloque de asistente / chat IA",
    "Contacto rápido",
    "Footer",
]
if parser.sections != expected:
    print("Unexpected section order:", parser.sections)
    sys.exit(1)

css = (root / "src" / "styles.css").read_text()
for color in ["#ffc629", "#151d33", "#876b3f", "#e52320", "#202070", "#8c8880", "#ffffff"]:
    if color not in css:
        print(f"Missing official color {color}")
        sys.exit(1)

print("Static landing checks passed.")
