import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  texts: any[];
  results: string[];

  search(event) {
    this.results = this.all.filter( (t)=> {
      var s =  new String(event).toUpperCase();
      return s.indexOf(t.text.toUpperCase()) === -1 || s.indexOf(t.cont.toUpperCase()) === -1 || s.indexOf(t.code.toUpperCase()) === -1;
    }).slice(0,100);
  }

  onKeyUp(event: KeyboardEvent) {
    if (event.key == "Enter") {
     let tokenInput = event.srcElement as any;
     if (tokenInput.value) {
      this.texts.push(tokenInput.value);
      tokenInput.value = "";
     }
    }
  }

  all: any[] = [
    {
      "code": "0BAT",
      "text": "ohne Batterie",
      "cont": "OHNE BATTERIEN",
      "prio": ""
    },
    {
      "code": "0DZ",
      "text": "Doppelzylinder Ovalprofil",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "0HU",
      "text": "ohne Hülse",
      "cont": "BEFESTIGUNG_EINBAU",
      "prio": ""
    },
    {
      "code": "0HZ",
      "text": "Halbzylinder Ovalprofil",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "0I",
      "text": "0I - Ohne Identmitteltechnologie",
      "cont": "IM_TECHNOLOGIE",
      "prio": ""
    },
    {
      "code": "0K",
      "text": "Ovalknauf Aluminium",
      "cont": "KNAUFFORM",
      "prio": ""
    },
    {
      "code": "0KA",
      "text": "Ovalknauf Aluminium asymmetrisch",
      "cont": "KNAUFFORM",
      "prio": ""
    },
    {
      "code": "0KHZ",
      "text": "Knaufhalbzylinder Ovalprofil",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "0KZ",
      "text": "Knaufzylinder Ovalprofil",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "0R",
      "text": "Orange",
      "cont": "ROSETTE",
      "prio": ""
    },
    {
      "code": "0SN",
      "text": "Ohne Schließnase/-hebel",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "0V/34",
      "text": "Australischer Ovalzylinder Standard/Länge des Zylinders (OV1)",
      "cont": "LÄNGE A0",
      "prio": ""
    },
    {
      "code": "0V/36",
      "text": "Australischer Ovalzylinder Standard/Länge des Zylinders (OV1)",
      "cont": "LÄNGE A0",
      "prio": ""
    },
    {
      "code": "0V/48",
      "text": "Australischer Ovalzylinder Standard/Länge des Zylinders (OVE1)",
      "cont": "LÄNGE A0",
      "prio": ""
    },
    {
      "code": "0V/51",
      "text": "Australischer Ovalzylinder Standard/Länge des Zylinders (OV1)",
      "cont": "LÄNGE A0",
      "prio": ""
    },
    {
      "code": "0V/54",
      "text": "Australischer Ovalzylinder Standard/Länge des Zylinders (OV1)",
      "cont": "LÄNGE A0",
      "prio": ""
    },
    {
      "code": "0V/56",
      "text": "Australischer Ovalzylinder Standard/Länge des Zylinders (OV1)",
      "cont": "LÄNGE A0",
      "prio": ""
    },
    {
      "code": "0V/78",
      "text": "Australischer Ovalzylinder Standard/Länge des Zylinders (OVE1)",
      "cont": "LÄNGE A0",
      "prio": ""
    },
    {
      "code": "0V/81",
      "text": "Australischer Ovalzylinder Standard/Länge des Zylinders (OV1)",
      "cont": "LÄNGE A0",
      "prio": ""
    },
    {
      "code": "0VA",
      "text": "Ovalzylinder Astra®",
      "cont": "LÄNGE A0",
      "prio": ""
    },
    {
      "code": "0VH",
      "text": "Ovalzylinder Holdback®",
      "cont": "LÄNGE A0",
      "prio": ""
    },
    {
      "code": "0Z22",
      "text": "Olivenzylinder 22 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "100",
      "text": "100 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "100/100",
      "text": "100/100 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "100/105",
      "text": "100/105 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "100/110",
      "text": "100/110 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "100/115",
      "text": "100/115 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "100/120",
      "text": "100/120 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "100/27",
      "text": "100/27 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "100/30",
      "text": "100/30 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "100/35",
      "text": "100/35 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "100/40",
      "text": "100/40 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "100/45",
      "text": "100/45 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "100/50",
      "text": "100/50 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "100/55",
      "text": "100/55 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "100/60",
      "text": "100/60 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "100/65",
      "text": "100/65 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "100/70",
      "text": "100/70 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "100/75",
      "text": "100/75 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "100/80",
      "text": "100/80 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "100/85",
      "text": "100/85 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "100/90",
      "text": "100/90 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "100/95",
      "text": "100/95 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "100/K27",
      "text": "100/K27 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "100/K30",
      "text": "100/K30 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "100/K35",
      "text": "100/K35 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "100/K40",
      "text": "100/K40 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "100/K45",
      "text": "100/K45 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "100/K50",
      "text": "100/K50 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "100/K55",
      "text": "100/K55 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "101",
      "text": "101 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "101/101",
      "text": "101/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/106",
      "text": "101/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/111",
      "text": "101/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/116",
      "text": "101/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/121",
      "text": "101/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/126",
      "text": "101/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/131",
      "text": "101/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/136",
      "text": "101/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/141",
      "text": "101/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/146",
      "text": "101/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/151",
      "text": "101/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/156",
      "text": "101/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/161",
      "text": "101/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/166",
      "text": "101/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/171",
      "text": "101/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/176",
      "text": "101/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/181",
      "text": "101/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/186",
      "text": "101/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/191",
      "text": "101/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/196",
      "text": "101/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/201",
      "text": "101/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/27",
      "text": "101/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/31",
      "text": "101/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/36",
      "text": "101/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/41",
      "text": "101/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/46",
      "text": "101/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/51",
      "text": "101/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/56",
      "text": "101/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/61",
      "text": "101/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/66",
      "text": "101/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/71",
      "text": "101/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/76",
      "text": "101/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/81",
      "text": "101/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/86",
      "text": "101/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/91",
      "text": "101/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/96",
      "text": "101/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "101/K27",
      "text": "101/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "101/K31",
      "text": "101/K31 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "101/K36",
      "text": "101/K36 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "101/K41",
      "text": "101/K41 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "101/K46",
      "text": "101/K46 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "101/K51",
      "text": "101/K51 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "101/K56",
      "text": "101/K56 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "105",
      "text": "105 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "105/100",
      "text": "105/100 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "105/105",
      "text": "105/105 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "105/110",
      "text": "105/110 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "105/115",
      "text": "105/115 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "105/120",
      "text": "105/120 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "105/27",
      "text": "105/27 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "105/30",
      "text": "105/30 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "105/35",
      "text": "105/35 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "105/40",
      "text": "105/40 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "105/45",
      "text": "105/45 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "105/50",
      "text": "105/50 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "105/55",
      "text": "105/55 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "105/60",
      "text": "105/60 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "105/65",
      "text": "105/65 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "105/70",
      "text": "105/70 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "105/75",
      "text": "105/75 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "105/80",
      "text": "105/80 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "105/85",
      "text": "105/85 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "105/90",
      "text": "105/90 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "105/95",
      "text": "105/95 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "105/K100",
      "text": "105/K100 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "105/K27",
      "text": "105/K27 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "105/K30",
      "text": "105/K30 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "105/K35",
      "text": "105/K35 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "105/K40",
      "text": "105/K40 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "105/K45",
      "text": "105/K45 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "105/K50",
      "text": "105/K50 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "106",
      "text": "106 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "106/101",
      "text": "106/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/106",
      "text": "106/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/111",
      "text": "106/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/116",
      "text": "106/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/121",
      "text": "106/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/126",
      "text": "106/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/131",
      "text": "106/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/136",
      "text": "106/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/141",
      "text": "106/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/146",
      "text": "106/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/151",
      "text": "106/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/156",
      "text": "106/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/161",
      "text": "106/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/166",
      "text": "106/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/171",
      "text": "106/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/176",
      "text": "106/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/181",
      "text": "106/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/186",
      "text": "106/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/191",
      "text": "106/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/196",
      "text": "106/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/201",
      "text": "106/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/27",
      "text": "106/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/31",
      "text": "106/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/36",
      "text": "106/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/41",
      "text": "106/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/46",
      "text": "106/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/51",
      "text": "106/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/56",
      "text": "106/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/61",
      "text": "106/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/66",
      "text": "106/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/71",
      "text": "106/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/76",
      "text": "106/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/81",
      "text": "106/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/86",
      "text": "106/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/91",
      "text": "106/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/96",
      "text": "106/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "106/K101",
      "text": "106/K101 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "106/K27",
      "text": "106/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "106/K31",
      "text": "106/K31 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "106/K36",
      "text": "106/K36 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "106/K41",
      "text": "106/K41 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "106/K46",
      "text": "106/K46 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "106/K51",
      "text": "106/K51 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "110",
      "text": "110 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "110/100",
      "text": "110/100 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "110/105",
      "text": "110/105 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "110/110",
      "text": "110/110 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "110/115",
      "text": "110/115 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "110/120",
      "text": "110/120 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "110/27",
      "text": "110/27 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "110/30",
      "text": "110/30 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "110/35",
      "text": "110/35 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "110/40",
      "text": "110/40 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "110/45",
      "text": "110/45 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "110/50",
      "text": "110/50 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "110/55",
      "text": "110/55 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "110/60",
      "text": "110/60 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "110/65",
      "text": "110/65 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "110/70",
      "text": "110/70 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "110/75",
      "text": "110/75 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "110/80",
      "text": "110/80 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "110/85",
      "text": "110/85 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "110/90",
      "text": "110/90 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "110/95",
      "text": "110/95 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "110/K27",
      "text": "110/K27 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "110/K30",
      "text": "110/K30 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "110/K35",
      "text": "110/K35 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "110/K40",
      "text": "110/K40 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "110/K45",
      "text": "110/K45 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "110/K50",
      "text": "110/K50 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "110/K60",
      "text": "110/K60 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "110/K70",
      "text": "110/K70 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "110/K80",
      "text": "110/K80 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "111",
      "text": "111 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "111/101",
      "text": "111/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/106",
      "text": "111/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/111",
      "text": "111/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/116",
      "text": "111/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/121",
      "text": "111/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/126",
      "text": "111/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/131",
      "text": "111/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/136",
      "text": "111/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/141",
      "text": "111/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/146",
      "text": "111/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/151",
      "text": "111/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/156",
      "text": "111/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/161",
      "text": "111/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/166",
      "text": "111/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/171",
      "text": "111/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/176",
      "text": "111/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/181",
      "text": "111/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/186",
      "text": "111/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/191",
      "text": "111/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/196",
      "text": "111/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/201",
      "text": "111/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/27",
      "text": "111/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/31",
      "text": "111/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/36",
      "text": "111/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/41",
      "text": "111/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/46",
      "text": "111/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/51",
      "text": "111/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/56",
      "text": "111/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/61",
      "text": "111/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/66",
      "text": "111/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/71",
      "text": "111/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/76",
      "text": "111/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/81",
      "text": "111/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/86",
      "text": "111/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/91",
      "text": "111/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/96",
      "text": "111/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "111/K27",
      "text": "111/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "111/K31",
      "text": "111/K31 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "111/K36",
      "text": "111/K36 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "111/K41",
      "text": "111/K41 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "111/K46",
      "text": "111/K46 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "111/K51",
      "text": "111/K51 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "111/K61",
      "text": "111/K61 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "111/K71",
      "text": "111/K71 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "111/K81",
      "text": "111/K81 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "115",
      "text": "115 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "115/100",
      "text": "115/100 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "115/105",
      "text": "115/105 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "115/110",
      "text": "115/110 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "115/115",
      "text": "115/115 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "115/120",
      "text": "115/120 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "115/27",
      "text": "115/27 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "115/30",
      "text": "115/30 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "115/35",
      "text": "115/35 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "115/40",
      "text": "115/40 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "115/45",
      "text": "115/45 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "115/50",
      "text": "115/50 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "115/55",
      "text": "115/55 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "115/60",
      "text": "115/60 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "115/65",
      "text": "115/65 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "115/70",
      "text": "115/70 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "115/75",
      "text": "115/75 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "115/80",
      "text": "115/80 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "115/85",
      "text": "115/85 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "115/90",
      "text": "115/90 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "115/95",
      "text": "115/95 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "115/K27",
      "text": "115/K27 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "115/K30",
      "text": "115/K30 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "115/K35",
      "text": "115/K35 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "115/K40",
      "text": "115/K40 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "115/K45",
      "text": "115/K45 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "115/K50",
      "text": "115/K50 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "115/K60",
      "text": "115/K60 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "115/K65",
      "text": "115/K65 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "115/K70",
      "text": "115/K70 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "116",
      "text": "116 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "116/101",
      "text": "116/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/106",
      "text": "116/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/111",
      "text": "116/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/116",
      "text": "116/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/121",
      "text": "116/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/126",
      "text": "116/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/131",
      "text": "116/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/136",
      "text": "116/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/141",
      "text": "116/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/146",
      "text": "116/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/151",
      "text": "116/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/156",
      "text": "116/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/161",
      "text": "116/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/166",
      "text": "116/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/171",
      "text": "116/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/176",
      "text": "116/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/181",
      "text": "116/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/186",
      "text": "116/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/191",
      "text": "116/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/196",
      "text": "116/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/201",
      "text": "116/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/27",
      "text": "116/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/31",
      "text": "116/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/36",
      "text": "116/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/41",
      "text": "116/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/46",
      "text": "116/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/51",
      "text": "116/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/56",
      "text": "116/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/61",
      "text": "116/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/66",
      "text": "116/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/71",
      "text": "116/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/76",
      "text": "116/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/81",
      "text": "116/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/86",
      "text": "116/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/91",
      "text": "116/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/96",
      "text": "116/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "116/K27",
      "text": "116/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "116/K31",
      "text": "116/K31 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "116/K36",
      "text": "116/K36 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "116/K41",
      "text": "116/K41 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "116/K46",
      "text": "116/K46 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "116/K51",
      "text": "116/K51 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "116/K61",
      "text": "116/K61 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "116/K66",
      "text": "116/K66 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "116/K71",
      "text": "116/K71 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "120",
      "text": "Nutenbartschlüssel",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "120/100",
      "text": "120/100 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "120/105",
      "text": "120/105 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "120/110",
      "text": "120/110 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "120/115",
      "text": "120/115 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "120/120",
      "text": "120/120 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "120/27",
      "text": "120/27 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "120/30",
      "text": "120/30 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "120/35",
      "text": "120/35 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "120/40",
      "text": "120/40 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "120/45",
      "text": "120/45 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "120/50",
      "text": "120/50 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "120/55",
      "text": "120/55 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "120/60",
      "text": "120/60 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "120/65",
      "text": "120/65 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "120/70",
      "text": "120/70 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "120/75",
      "text": "120/75 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "120/80",
      "text": "120/80 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "120/85",
      "text": "120/85 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "120/90",
      "text": "120/90 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "120/95",
      "text": "120/95 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "120/K110",
      "text": "120/K110 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "120/K27",
      "text": "120/K27 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "120/K30",
      "text": "120/K30 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "120/K35",
      "text": "120/K35 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "120/K40",
      "text": "120/K40 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "120/K45",
      "text": "120/K45 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "120/K50",
      "text": "120/K50 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "120/K60",
      "text": "120/K60 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "120/K70",
      "text": "120/K70 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "121",
      "text": "121 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "121/101",
      "text": "121/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/106",
      "text": "121/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/111",
      "text": "121/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/116",
      "text": "121/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/121",
      "text": "121/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/126",
      "text": "121/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/131",
      "text": "121/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/136",
      "text": "121/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/141",
      "text": "121/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/146",
      "text": "121/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/151",
      "text": "121/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/156",
      "text": "121/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/161",
      "text": "121/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/166",
      "text": "121/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/171",
      "text": "121/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/176",
      "text": "121/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/181",
      "text": "121/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/186",
      "text": "121/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/191",
      "text": "121/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/196",
      "text": "121/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/201",
      "text": "121/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/27",
      "text": "121/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/31",
      "text": "121/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/36",
      "text": "121/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/41",
      "text": "121/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/46",
      "text": "121/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/51",
      "text": "121/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/56",
      "text": "121/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/61",
      "text": "121/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/66",
      "text": "121/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/71",
      "text": "121/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/76",
      "text": "121/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/81",
      "text": "121/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/86",
      "text": "121/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/91",
      "text": "121/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/96",
      "text": "121/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "121/K111",
      "text": "121/K111 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "121/K27",
      "text": "121/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "121/K31",
      "text": "121/K31 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "121/K36",
      "text": "121/K36 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "121/K41",
      "text": "121/K41 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "121/K46",
      "text": "121/K46 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "121/K51",
      "text": "121/K51 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "121/K61",
      "text": "121/K61 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "121/K71",
      "text": "121/K71 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "126",
      "text": "126 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "126/101",
      "text": "126/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/106",
      "text": "126/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/111",
      "text": "126/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/116",
      "text": "126/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/121",
      "text": "126/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/126",
      "text": "126/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/131",
      "text": "126/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/136",
      "text": "126/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/141",
      "text": "126/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/146",
      "text": "126/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/151",
      "text": "126/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/156",
      "text": "126/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/161",
      "text": "126/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/166",
      "text": "126/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/171",
      "text": "126/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/176",
      "text": "126/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/181",
      "text": "126/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/186",
      "text": "126/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/191",
      "text": "126/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/196",
      "text": "126/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/201",
      "text": "126/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/27",
      "text": "126/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/31",
      "text": "126/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/36",
      "text": "126/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/41",
      "text": "126/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/46",
      "text": "126/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/51",
      "text": "126/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/56",
      "text": "126/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/61",
      "text": "126/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/66",
      "text": "126/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/71",
      "text": "126/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/76",
      "text": "126/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/81",
      "text": "126/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/86",
      "text": "126/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/91",
      "text": "126/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/96",
      "text": "126/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "126/K27",
      "text": "126/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "126/K31",
      "text": "126/K31 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "126/K36",
      "text": "126/K36 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "126/K41",
      "text": "126/K41 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "126/K46",
      "text": "126/K46 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "126/K51",
      "text": "126/K51 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "130",
      "text": "130 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "131",
      "text": "131 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "131/101",
      "text": "131/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/106",
      "text": "131/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/111",
      "text": "131/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/116",
      "text": "131/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/121",
      "text": "131/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/126",
      "text": "131/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/131",
      "text": "131/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/136",
      "text": "131/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/141",
      "text": "131/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/146",
      "text": "131/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/151",
      "text": "131/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/156",
      "text": "131/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/161",
      "text": "131/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/166",
      "text": "131/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/171",
      "text": "131/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/176",
      "text": "131/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/181",
      "text": "131/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/186",
      "text": "131/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/191",
      "text": "131/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/196",
      "text": "131/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/201",
      "text": "131/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/27",
      "text": "131/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/31",
      "text": "131/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/36",
      "text": "131/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/41",
      "text": "131/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/46",
      "text": "131/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/51",
      "text": "131/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/56",
      "text": "131/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/61",
      "text": "131/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/66",
      "text": "131/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/71",
      "text": "131/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/76",
      "text": "131/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/81",
      "text": "131/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/86",
      "text": "131/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/91",
      "text": "131/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/96",
      "text": "131/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "131/K27",
      "text": "131/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "131/K31",
      "text": "131/K31 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "131/K36",
      "text": "131/K36 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "131/K41",
      "text": "131/K41 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "131/K46",
      "text": "131/K46 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "131/K51",
      "text": "131/K51 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "136",
      "text": "136 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "136/101",
      "text": "136/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/106",
      "text": "136/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/111",
      "text": "136/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/116",
      "text": "136/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/121",
      "text": "136/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/126",
      "text": "136/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/131",
      "text": "136/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/136",
      "text": "136/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/141",
      "text": "136/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/146",
      "text": "136/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/151",
      "text": "136/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/156",
      "text": "136/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/161",
      "text": "136/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/166",
      "text": "136/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/171",
      "text": "136/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/176",
      "text": "136/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/181",
      "text": "136/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/186",
      "text": "136/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/191",
      "text": "136/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/196",
      "text": "136/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/201",
      "text": "136/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/27",
      "text": "136/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/31",
      "text": "136/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/36",
      "text": "136/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/41",
      "text": "136/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/46",
      "text": "136/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/51",
      "text": "136/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/56",
      "text": "136/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/61",
      "text": "136/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/66",
      "text": "136/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/71",
      "text": "136/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/76",
      "text": "136/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/81",
      "text": "136/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/86",
      "text": "136/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/91",
      "text": "136/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/96",
      "text": "136/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "136/K191",
      "text": "136/K191 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "136/K27",
      "text": "136/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "136/K31",
      "text": "136/K31 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "136/K36",
      "text": "136/K36 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "136/K41",
      "text": "136/K41 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "136/K46",
      "text": "136/K46 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "136/K51",
      "text": "136/K51 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "136/K91",
      "text": "136/K91 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "140",
      "text": "140 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "141",
      "text": "141 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "141/101",
      "text": "141/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/106",
      "text": "141/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/111",
      "text": "141/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/116",
      "text": "141/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/121",
      "text": "141/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/126",
      "text": "141/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/131",
      "text": "141/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/136",
      "text": "141/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/141",
      "text": "141/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/146",
      "text": "141/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/151",
      "text": "141/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/156",
      "text": "141/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/161",
      "text": "141/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/166",
      "text": "141/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/171",
      "text": "141/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/176",
      "text": "141/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/181",
      "text": "141/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/186",
      "text": "141/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/191",
      "text": "141/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/196",
      "text": "141/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/201",
      "text": "141/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/27",
      "text": "141/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/31",
      "text": "141/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/36",
      "text": "141/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/41",
      "text": "141/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/46",
      "text": "141/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/51",
      "text": "141/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/56",
      "text": "141/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/61",
      "text": "141/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/66",
      "text": "141/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/71",
      "text": "141/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/76",
      "text": "141/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/81",
      "text": "141/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/86",
      "text": "141/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/91",
      "text": "141/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/96",
      "text": "141/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "141/K191",
      "text": "141/K191 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "141/K27",
      "text": "141/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "141/K31",
      "text": "141/K31 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "141/K36",
      "text": "141/K36 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "141/K41",
      "text": "141/K41 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "141/K46",
      "text": "141/K46 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "141/K51",
      "text": "141/K51 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "146",
      "text": "146 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "146/101",
      "text": "146/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/106",
      "text": "146/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/111",
      "text": "146/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/116",
      "text": "146/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/121",
      "text": "146/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/126",
      "text": "146/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/131",
      "text": "146/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/136",
      "text": "146/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/141",
      "text": "146/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/146",
      "text": "146/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/151",
      "text": "146/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/156",
      "text": "146/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/161",
      "text": "146/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/166",
      "text": "146/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/171",
      "text": "146/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/176",
      "text": "146/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/181",
      "text": "146/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/186",
      "text": "146/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/191",
      "text": "146/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/196",
      "text": "146/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/201",
      "text": "146/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/27",
      "text": "146/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/31",
      "text": "146/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/36",
      "text": "146/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/41",
      "text": "146/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/46",
      "text": "146/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/51",
      "text": "146/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/56",
      "text": "146/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/61",
      "text": "146/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/66",
      "text": "146/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/71",
      "text": "146/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/76",
      "text": "146/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/81",
      "text": "146/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/86",
      "text": "146/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/91",
      "text": "146/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/96",
      "text": "146/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "146/K27",
      "text": "146/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "146/K31",
      "text": "146/K31 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "146/K36",
      "text": "146/K36 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "146/K41",
      "text": "146/K41 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "146/K46",
      "text": "146/K46 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "146/K51",
      "text": "146/K51 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "150",
      "text": "150 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "151",
      "text": "151 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "151/101",
      "text": "151/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/106",
      "text": "151/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/111",
      "text": "151/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/116",
      "text": "151/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/121",
      "text": "151/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/126",
      "text": "151/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/131",
      "text": "151/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/136",
      "text": "151/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/141",
      "text": "151/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/146",
      "text": "151/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/151",
      "text": "151/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/156",
      "text": "151/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/161",
      "text": "151/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/166",
      "text": "151/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/171",
      "text": "151/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/176",
      "text": "151/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/181",
      "text": "151/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/186",
      "text": "151/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/191",
      "text": "151/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/196",
      "text": "151/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/201",
      "text": "151/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/27",
      "text": "151/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/31",
      "text": "151/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/36",
      "text": "151/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/41",
      "text": "151/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/46",
      "text": "151/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/51",
      "text": "151/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/56",
      "text": "151/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/61",
      "text": "151/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/66",
      "text": "151/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/71",
      "text": "151/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/76",
      "text": "151/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/81",
      "text": "151/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/86",
      "text": "151/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/91",
      "text": "151/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/96",
      "text": "151/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "151/K27",
      "text": "151/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "151/K31",
      "text": "151/K31 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "151/K36",
      "text": "151/K36 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "151/K41",
      "text": "151/K41 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "151/K46",
      "text": "151/K46 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "151/K51",
      "text": "151/K51 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "156",
      "text": "156 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "156/101",
      "text": "156/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/106",
      "text": "156/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/111",
      "text": "156/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/116",
      "text": "156/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/121",
      "text": "156/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/126",
      "text": "156/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/131",
      "text": "156/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/136",
      "text": "156/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/141",
      "text": "156/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/146",
      "text": "156/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/151",
      "text": "156/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/156",
      "text": "156/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/161",
      "text": "156/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/166",
      "text": "156/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/171",
      "text": "156/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/176",
      "text": "156/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/181",
      "text": "156/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/186",
      "text": "156/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/191",
      "text": "156/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/196",
      "text": "156/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/201",
      "text": "156/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/27",
      "text": "156/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/31",
      "text": "156/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/36",
      "text": "156/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/41",
      "text": "156/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/46",
      "text": "156/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/51",
      "text": "156/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/56",
      "text": "156/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/61",
      "text": "156/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/66",
      "text": "156/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/71",
      "text": "156/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/76",
      "text": "156/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/81",
      "text": "156/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/86",
      "text": "156/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/91",
      "text": "156/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/96",
      "text": "156/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "156/K27",
      "text": "156/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "156/K31",
      "text": "156/K31 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "156/K36",
      "text": "156/K36 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "156/K41",
      "text": "156/K41 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "156/K46",
      "text": "156/K46 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "156/K51",
      "text": "156/K51 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "160",
      "text": "160 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "161",
      "text": "161 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "161/101",
      "text": "161/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/106",
      "text": "161/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/111",
      "text": "161/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/116",
      "text": "161/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/121",
      "text": "161/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/126",
      "text": "161/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/131",
      "text": "161/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/136",
      "text": "161/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/141",
      "text": "161/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/146",
      "text": "161/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/151",
      "text": "161/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/156",
      "text": "161/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/161",
      "text": "161/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/166",
      "text": "161/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/171",
      "text": "161/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/176",
      "text": "161/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/181",
      "text": "161/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/186",
      "text": "161/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/191",
      "text": "161/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/196",
      "text": "161/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/201",
      "text": "161/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/27",
      "text": "161/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/31",
      "text": "161/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/36",
      "text": "161/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/41",
      "text": "161/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/46",
      "text": "161/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/51",
      "text": "161/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/56",
      "text": "161/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/61",
      "text": "161/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/66",
      "text": "161/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/71",
      "text": "161/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/76",
      "text": "161/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/81",
      "text": "161/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/86",
      "text": "161/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/91",
      "text": "161/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/96",
      "text": "161/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "161/K27",
      "text": "161/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "161/K31",
      "text": "161/K31 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "161/K36",
      "text": "161/K36 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "161/K41",
      "text": "161/K41 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "161/K46",
      "text": "161/K46 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "161/K51",
      "text": "161/K51 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "166",
      "text": "166 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "166/101",
      "text": "166/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/106",
      "text": "166/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/111",
      "text": "166/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/116",
      "text": "166/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/121",
      "text": "166/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/126",
      "text": "166/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/131",
      "text": "166/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/136",
      "text": "166/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/141",
      "text": "166/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/146",
      "text": "166/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/151",
      "text": "166/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/156",
      "text": "166/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/161",
      "text": "166/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/166",
      "text": "166/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/171",
      "text": "166/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/176",
      "text": "166/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/181",
      "text": "166/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/186",
      "text": "166/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/191",
      "text": "166/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/196",
      "text": "166/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/201",
      "text": "166/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/27",
      "text": "166/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/31",
      "text": "166/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/36",
      "text": "166/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/41",
      "text": "166/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/46",
      "text": "166/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/51",
      "text": "166/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/56",
      "text": "166/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/61",
      "text": "166/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/66",
      "text": "166/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/71",
      "text": "166/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/76",
      "text": "166/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/81",
      "text": "166/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/86",
      "text": "166/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/91",
      "text": "166/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/96",
      "text": "166/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "166/K27",
      "text": "166/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "171",
      "text": "171 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "171/101",
      "text": "171/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/106",
      "text": "171/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/111",
      "text": "171/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/116",
      "text": "171/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/121",
      "text": "171/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/126",
      "text": "171/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/131",
      "text": "171/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/136",
      "text": "171/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/141",
      "text": "171/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/146",
      "text": "171/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/151",
      "text": "171/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/156",
      "text": "171/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/161",
      "text": "171/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/166",
      "text": "171/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/171",
      "text": "171/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/176",
      "text": "171/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/181",
      "text": "171/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/186",
      "text": "171/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/191",
      "text": "171/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/196",
      "text": "171/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/201",
      "text": "171/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/27",
      "text": "171/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/31",
      "text": "171/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/36",
      "text": "171/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/41",
      "text": "171/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/46",
      "text": "171/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/51",
      "text": "171/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/56",
      "text": "171/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/61",
      "text": "171/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/66",
      "text": "171/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/71",
      "text": "171/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/76",
      "text": "171/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/81",
      "text": "171/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/86",
      "text": "171/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/91",
      "text": "171/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/96",
      "text": "171/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "171/K27",
      "text": "171/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "176",
      "text": "176 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "176/101",
      "text": "176/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/106",
      "text": "176/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/111",
      "text": "176/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/116",
      "text": "176/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/121",
      "text": "176/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/126",
      "text": "176/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/131",
      "text": "176/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/136",
      "text": "176/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/141",
      "text": "176/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/146",
      "text": "176/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/151",
      "text": "176/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/156",
      "text": "176/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/161",
      "text": "176/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/166",
      "text": "176/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/171",
      "text": "176/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/176",
      "text": "176/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/181",
      "text": "176/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/186",
      "text": "176/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/191",
      "text": "176/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/196",
      "text": "176/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/201",
      "text": "176/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/27",
      "text": "176/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/31",
      "text": "176/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/36",
      "text": "176/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/41",
      "text": "176/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/46",
      "text": "176/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/51",
      "text": "176/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/56",
      "text": "176/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/61",
      "text": "176/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/66",
      "text": "176/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/71",
      "text": "176/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/76",
      "text": "176/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/81",
      "text": "176/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/86",
      "text": "176/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/91",
      "text": "176/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/96",
      "text": "176/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "176/K27",
      "text": "176/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "176/K31",
      "text": "176/K31 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "176/K41",
      "text": "176/K41 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "176/K51",
      "text": "176/K51 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "181",
      "text": "181 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "181/101",
      "text": "181/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/106",
      "text": "181/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/111",
      "text": "181/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/116",
      "text": "181/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/121",
      "text": "181/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/126",
      "text": "181/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/131",
      "text": "181/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/136",
      "text": "181/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/141",
      "text": "181/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/146",
      "text": "181/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/151",
      "text": "181/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/156",
      "text": "181/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/161",
      "text": "181/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/166",
      "text": "181/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/171",
      "text": "181/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/176",
      "text": "181/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/181",
      "text": "181/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/186",
      "text": "181/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/191",
      "text": "181/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/196",
      "text": "181/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/201",
      "text": "181/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/27",
      "text": "181/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/31",
      "text": "181/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/36",
      "text": "181/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/41",
      "text": "181/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/46",
      "text": "181/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/51",
      "text": "181/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/56",
      "text": "181/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/61",
      "text": "181/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/66",
      "text": "181/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/71",
      "text": "181/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/76",
      "text": "181/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/81",
      "text": "181/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/86",
      "text": "181/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/91",
      "text": "181/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/96",
      "text": "181/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "181/K27",
      "text": "181/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "186",
      "text": "186 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "186/101",
      "text": "186/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/106",
      "text": "186/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/111",
      "text": "186/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/116",
      "text": "186/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/121",
      "text": "186/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/126",
      "text": "186/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/131",
      "text": "186/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/136",
      "text": "186/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/141",
      "text": "186/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/146",
      "text": "186/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/151",
      "text": "186/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/156",
      "text": "186/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/161",
      "text": "186/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/166",
      "text": "186/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/171",
      "text": "186/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/176",
      "text": "186/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/181",
      "text": "186/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/186",
      "text": "186/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/191",
      "text": "186/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/196",
      "text": "186/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/201",
      "text": "186/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/27",
      "text": "186/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/31",
      "text": "186/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/36",
      "text": "186/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/41",
      "text": "186/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/46",
      "text": "186/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/51",
      "text": "186/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/56",
      "text": "186/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/61",
      "text": "186/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/66",
      "text": "186/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/71",
      "text": "186/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/76",
      "text": "186/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/81",
      "text": "186/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/86",
      "text": "186/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/91",
      "text": "186/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/96",
      "text": "186/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "186/K27",
      "text": "186/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "191",
      "text": "191 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "191/101",
      "text": "191/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/106",
      "text": "191/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/111",
      "text": "191/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/116",
      "text": "191/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/121",
      "text": "191/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/126",
      "text": "191/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/131",
      "text": "191/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/136",
      "text": "191/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/141",
      "text": "191/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/146",
      "text": "191/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/151",
      "text": "191/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/156",
      "text": "191/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/161",
      "text": "191/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/166",
      "text": "191/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/171",
      "text": "191/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/176",
      "text": "191/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/181",
      "text": "191/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/186",
      "text": "191/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/191",
      "text": "191/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/196",
      "text": "191/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/201",
      "text": "191/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/27",
      "text": "191/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/31",
      "text": "191/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/36",
      "text": "191/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/41",
      "text": "191/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/46",
      "text": "191/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/51",
      "text": "191/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/56",
      "text": "191/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/61",
      "text": "191/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/66",
      "text": "191/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/71",
      "text": "191/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/76",
      "text": "191/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/81",
      "text": "191/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/86",
      "text": "191/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/91",
      "text": "191/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/96",
      "text": "191/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "191/K27",
      "text": "191/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "196",
      "text": "196 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "196/101",
      "text": "196/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/106",
      "text": "196/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/111",
      "text": "196/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/116",
      "text": "196/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/121",
      "text": "196/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/126",
      "text": "196/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/131",
      "text": "196/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/136",
      "text": "196/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/141",
      "text": "196/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/146",
      "text": "196/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/151",
      "text": "196/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/156",
      "text": "196/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/161",
      "text": "196/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/166",
      "text": "196/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/171",
      "text": "196/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/176",
      "text": "196/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/181",
      "text": "196/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/186",
      "text": "196/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/191",
      "text": "196/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/196",
      "text": "196/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/201",
      "text": "196/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/27",
      "text": "196/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/31",
      "text": "196/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/36",
      "text": "196/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/41",
      "text": "196/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/46",
      "text": "196/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/51",
      "text": "196/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/56",
      "text": "196/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/61",
      "text": "196/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/66",
      "text": "196/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/71",
      "text": "196/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/76",
      "text": "196/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/81",
      "text": "196/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/86",
      "text": "196/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/91",
      "text": "196/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/96",
      "text": "196/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "196/K27",
      "text": "196/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "20",
      "text": "20 mm Verlängerung",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "201",
      "text": "201 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "201/101",
      "text": "201/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/106",
      "text": "201/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/111",
      "text": "201/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/116",
      "text": "201/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/121",
      "text": "201/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/126",
      "text": "201/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/131",
      "text": "201/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/136",
      "text": "201/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/141",
      "text": "201/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/146",
      "text": "201/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/151",
      "text": "201/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/156",
      "text": "201/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/161",
      "text": "201/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/166",
      "text": "201/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/171",
      "text": "201/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/176",
      "text": "201/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/181",
      "text": "201/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/186",
      "text": "201/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/191",
      "text": "201/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/196",
      "text": "201/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/31",
      "text": "201/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/36",
      "text": "201/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/41",
      "text": "201/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/46",
      "text": "201/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/51",
      "text": "201/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/56",
      "text": "201/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/61",
      "text": "201/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/66",
      "text": "201/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/71",
      "text": "201/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/76",
      "text": "201/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/81",
      "text": "201/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/86",
      "text": "201/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/91",
      "text": "201/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "201/96",
      "text": "201/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "206",
      "text": "206 MM",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "206/27",
      "text": "206/27 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "206/K27",
      "text": "206/K27 MM",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "21/21",
      "text": "21/21 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "211/27",
      "text": "211/27 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "22",
      "text": "Länge 22mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "221/27",
      "text": "221/27 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "221/36",
      "text": "221/36 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "23",
      "text": "23 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "23/23",
      "text": "23/23 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "231/31",
      "text": "231/31 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "231/36",
      "text": "231/36 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "231/K31",
      "text": "231/K31 MM",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "231/K36",
      "text": "KZ-Länge 231/K36",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "24",
      "text": "Länge 24 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "241/81",
      "text": "241/81 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "25",
      "text": "25 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "251/31",
      "text": "251/31 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "251/36",
      "text": "251/36 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "256/31",
      "text": "256/31 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "256/36",
      "text": "256/36 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "26",
      "text": "26 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "261/41",
      "text": "261/41 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "266/36",
      "text": "266/36 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27",
      "text": "27 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "27/100",
      "text": "27/100 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/101",
      "text": "27/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/105",
      "text": "27/105 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/106",
      "text": "27/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/110",
      "text": "27/110 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/111",
      "text": "27/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/115",
      "text": "27/115 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/116",
      "text": "27/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/120",
      "text": "27/120 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/121",
      "text": "27/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/126",
      "text": "27/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/131",
      "text": "27/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/136",
      "text": "27/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/141",
      "text": "27/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/146",
      "text": "27/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/151",
      "text": "27/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/156",
      "text": "27/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/161",
      "text": "27/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/166",
      "text": "27/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/171",
      "text": "27/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/176",
      "text": "27/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/181",
      "text": "27/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/186",
      "text": "27/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/191",
      "text": "27/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/196",
      "text": "27/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/206",
      "text": "27/206 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/211",
      "text": "27/211 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/221",
      "text": "27/221 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/27",
      "text": "27/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/30",
      "text": "27/30 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/301",
      "text": "27/301 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/31",
      "text": "27/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/35",
      "text": "27/35 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/36",
      "text": "27/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/40",
      "text": "27/40 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/41",
      "text": "27/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/45",
      "text": "27/345mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/46",
      "text": "27/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/50",
      "text": "27/50 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/51",
      "text": "27/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/55",
      "text": "27/55 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/56",
      "text": "27/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/60",
      "text": "27/60 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/61",
      "text": "27/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/65",
      "text": "27/65 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/66",
      "text": "27/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/70",
      "text": "27/70 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/71",
      "text": "27/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/75",
      "text": "27/75 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/76",
      "text": "27/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/80",
      "text": "27/80 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/81",
      "text": "27/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/85",
      "text": "27/85 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/86",
      "text": "27/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/90",
      "text": "27/90 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/91",
      "text": "27/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/95",
      "text": "27/95 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/96",
      "text": "27/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "27/K100",
      "text": "27/K100 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/K101",
      "text": "27/K101 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "27/K105",
      "text": "27/K105 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/K106",
      "text": "27/K106 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "27/K110",
      "text": "27/K110 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/K111",
      "text": "27/K111 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "27/K115",
      "text": "27/K115 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/K116",
      "text": "27/K116 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "27/K120",
      "text": "27/K120 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/K121",
      "text": "27/K121 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "27/K161",
      "text": "27/K161 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "27/K191",
      "text": "27/K191 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "27/K27",
      "text": "27/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "27/K30",
      "text": "27/K30 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/K31",
      "text": "27/K31 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "27/K35",
      "text": "27/K35 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/K36",
      "text": "27/K36 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "27/K40",
      "text": "27/K40 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/K41",
      "text": "27/K41 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "27/K45",
      "text": "27/K45 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/K46",
      "text": "27/K46 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "27/K50",
      "text": "27/K50 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/K51",
      "text": "27/K51 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "27/K55",
      "text": "27/K55 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/K56",
      "text": "27/K56 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "27/K60",
      "text": "27/K60 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/K61",
      "text": "27/K61 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "27/K65",
      "text": "27/K65 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/K66",
      "text": "27/K66 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "27/K70",
      "text": "27/K70 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/K71",
      "text": "27/K71 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "27/K75",
      "text": "27/K75 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/K76",
      "text": "27/K76 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "27/K80",
      "text": "27/K80 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/K81",
      "text": "27/K81 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "27/K85",
      "text": "27/K85 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/K86",
      "text": "27/K86 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "27/K90",
      "text": "27/K90 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/K91",
      "text": "27/K91 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "27/K95",
      "text": "27/K95 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "27/K96",
      "text": "27/K96 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "276/31",
      "text": "276/31 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "28",
      "text": "28 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "28/31",
      "text": "28/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "28/36",
      "text": "28/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "28/41",
      "text": "28/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "28/46",
      "text": "28/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "28/51",
      "text": "28/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "28/56",
      "text": "28/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "28/61",
      "text": "28/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "28/66",
      "text": "28/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "28/71",
      "text": "28/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "28/76",
      "text": "28/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "28/81",
      "text": "28/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "28/86",
      "text": "28/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "28/91",
      "text": "28/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "28/96",
      "text": "28/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "28/K31",
      "text": "28/K31 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "28/K36",
      "text": "28/K36 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "28/K41",
      "text": "28/K41 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "28/K46",
      "text": "28/K46 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "28/K51",
      "text": "28/K51 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "28/K56",
      "text": "28/K56 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "28/K61",
      "text": "28/K61 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "28/K66",
      "text": "28/K66 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "28/K71",
      "text": "28/K71 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "28/K76",
      "text": "28/K76 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "28/K81",
      "text": "28/K81 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "28/K86",
      "text": "28/K86 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "28/K91",
      "text": "28/K91 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "28/K96",
      "text": "28/K96 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "281",
      "text": "281 - Error Descr",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "281/36",
      "text": "281/36 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "29",
      "text": "Länge 29 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "29/ZI",
      "text": "29/ZI - /29 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "291/31",
      "text": "291/31 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "2GW3",
      "text": "2 Gewinde M3 rückseitig",
      "cont": "BEFESTIGUNG_EINBAU",
      "prio": ""
    },
    {
      "code": "2GW4",
      "text": "2 Gewinde M4 rückseitig",
      "cont": "BEFESTIGUNG_EINBAU",
      "prio": ""
    },
    {
      "code": "2GW5",
      "text": "2 Gewinde M5 rückseitig",
      "cont": "BEFESTIGUNG_EINBAU",
      "prio": ""
    },
    {
      "code": "2S30",
      "text": "2S30 - ABZUG 2-STELL. 30GRAD",
      "cont": "SCHLÜSSELABZUG_LW",
      "prio": ""
    },
    {
      "code": "2S90",
      "text": "2S90 - ABZUG 2-STELL. 90GRAD",
      "cont": "SCHLÜSSELABZUG_LW",
      "prio": ""
    },
    {
      "code": "30",
      "text": "30 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "30/100",
      "text": "30/100 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/105",
      "text": "30/105 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/110",
      "text": "30/110 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/115",
      "text": "30/115 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/120",
      "text": "30/120 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/27",
      "text": "30/27 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/30",
      "text": "30/30 -",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/35",
      "text": "30/35 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/40",
      "text": "30/40 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/45",
      "text": "30/45 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/50",
      "text": "30/50 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/55",
      "text": "30/55 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/60",
      "text": "30/60 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/65",
      "text": "30/65 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/70",
      "text": "30/70 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/75",
      "text": "30/75 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/80",
      "text": "30/80 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/85",
      "text": "30/85 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/90",
      "text": "30/90 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/95",
      "text": "30/95 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/K100",
      "text": "30/K100 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/K105",
      "text": "30/K105 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/K110",
      "text": "30/K110 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/K115",
      "text": "30/K115 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/K120",
      "text": "30/K120 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/K27",
      "text": "30/K27 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/K30",
      "text": "30/K30 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/K35",
      "text": "30/K35 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/K40",
      "text": "30/K40 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/K45",
      "text": "30/K45 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/K50",
      "text": "30/K50 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/K55",
      "text": "30/K55 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/K60",
      "text": "30/K60 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/K65",
      "text": "30/K65 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/K70",
      "text": "30/K70 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/K75",
      "text": "30/K75 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/K80",
      "text": "30/K80 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/K85",
      "text": "30/K85 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/K90",
      "text": "30/K90 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "30/K95",
      "text": "30/K95 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "301/27",
      "text": "301/27 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "306",
      "text": "306 MM",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "306/31",
      "text": "306/31 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31",
      "text": "31 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "31/101",
      "text": "31/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/106",
      "text": "31/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/111",
      "text": "31/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/116",
      "text": "31/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/121",
      "text": "31/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/126",
      "text": "31/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/131",
      "text": "31/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/136",
      "text": "31/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/141",
      "text": "31/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/146",
      "text": "31/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/151",
      "text": "31/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/156",
      "text": "31/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/161",
      "text": "31/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/166",
      "text": "31/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/171",
      "text": "31/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/176",
      "text": "31/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/181",
      "text": "31/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/186",
      "text": "31/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/191",
      "text": "31/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/196",
      "text": "31/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/201",
      "text": "31/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/231",
      "text": "31/231 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/251",
      "text": "31/251 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/256",
      "text": "31/256 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/27",
      "text": "31/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/276",
      "text": "31/276 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/28",
      "text": "31/28 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/291",
      "text": "31/291 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/306",
      "text": "31/306 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/31",
      "text": "31/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/326",
      "text": "31/326 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/36",
      "text": "31/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/41",
      "text": "31/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/46",
      "text": "31/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/51",
      "text": "31/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/56",
      "text": "31/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/61",
      "text": "31/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/66",
      "text": "31/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/71",
      "text": "31/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/76",
      "text": "31/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/81",
      "text": "31/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/86",
      "text": "31/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/91",
      "text": "31/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/96",
      "text": "31/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "31/K101",
      "text": "31/K101 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "31/K106",
      "text": "31/K106 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "31/K111",
      "text": "31/K111 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "31/K116",
      "text": "31/K116 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "31/K121",
      "text": "31/K121 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "31/K131",
      "text": "31/K131 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "31/K136",
      "text": "31/K136 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "31/K141",
      "text": "31/K141 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "31/K156",
      "text": "31/K156 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "31/K161",
      "text": "31/K161 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "31/K166",
      "text": "31/K166 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "31/K186",
      "text": "31/K186 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "31/K27",
      "text": "31/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "31/K31",
      "text": "31/K31 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "31/K36",
      "text": "31/K36 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "31/K41",
      "text": "31/K41 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "31/K46",
      "text": "31/K46 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "31/K51",
      "text": "31/K51 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "31/K56",
      "text": "31/K56 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "31/K61",
      "text": "31/K61 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "31/K66",
      "text": "31/K66 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "31/K71",
      "text": "31/K71 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "31/K76",
      "text": "31/K76 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "31/K81",
      "text": "31/K81 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "31/K86",
      "text": "31/K86 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "31/K91",
      "text": "31/K91 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "31/K96",
      "text": "31/K96 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "32",
      "text": "32 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "32/57",
      "text": "32/57 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "32/ZI",
      "text": "32 mm, Zeiss-Ikon®-Ausführung",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "326/31",
      "text": "326/31 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "33",
      "text": "33 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "34",
      "text": "34 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "34/34",
      "text": "PDZ - Portaldoppelzylinder 34/34 EVVA",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "34/39",
      "text": "PDZ - Portaldoppelzylinder 34/39 EVVA",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "3405",
      "text": "Olive 3405",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "3413",
      "text": "Olive 3413",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "3413/2",
      "text": "Olive 3413.2",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "34171004",
      "text": "34171004 - 3417R1004  GELB",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "34173003",
      "text": "34173003 - 3417R3003  RUBINROT",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "34173005",
      "text": "34173005 - 3417R3005  WEINROT",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "34175002",
      "text": "34175002 - 3417R5002  ULTRAMARINBL",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "34175013",
      "text": "34175013 - 3417R5013  KOBALTBLAU",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "34176012",
      "text": "34176012 - 3417R6012  SCHWARZGRÜN",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "34176022",
      "text": "34176022 - 3417R6022  BRAUNOLIV",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "34176024",
      "text": "34176024 - 3417R6024  VERKEHRSGRÜN",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "34177016",
      "text": "34177016 - 3417R7016  ANTHRAZITGRAU",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "34177035",
      "text": "34177035 - 3417R7035  LICHTGRAU",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "34178014",
      "text": "34178014 - 3417R8014  SEPIABRAUN",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "34178017",
      "text": "34178017 - 3417R8017  SCHOKOLADENBR",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "34179001",
      "text": "34179001 - 3417R9001  CREMEWEISS",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "34179005",
      "text": "34179005 - 3417R9005  TIEFSCHWARZ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "34179010",
      "text": "34179010 - 3417R9010  REINWEISS",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "35",
      "text": "35 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "35/100",
      "text": "35/100 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/105",
      "text": "35/105 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/110",
      "text": "35/110 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/115",
      "text": "35/115 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/120",
      "text": "35/120 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/27",
      "text": "35/27 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/30",
      "text": "35/30 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/35",
      "text": "35/35 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/40",
      "text": "35/40 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/45",
      "text": "35/45 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/50",
      "text": "35/50 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/55",
      "text": "35/55 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/60",
      "text": "35/60 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/65",
      "text": "35/65 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/70",
      "text": "35/70 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/75",
      "text": "35/75 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/80",
      "text": "35/80 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/85",
      "text": "35/85 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/90",
      "text": "35/90 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/95",
      "text": "35/95 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/K100",
      "text": "35/K100 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/K105",
      "text": "35/K105 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/K110",
      "text": "35/K110 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/K115",
      "text": "35/K115 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/K120",
      "text": "35/K120 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/K27",
      "text": "35/K27 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/K30",
      "text": "35/K30 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/K35",
      "text": "35/K35 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/K40",
      "text": "35/K40 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/K45",
      "text": "35/K45 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/K50",
      "text": "35/K50 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/K55",
      "text": "35/K55 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/K60",
      "text": "35/K60 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/K65",
      "text": "35/K65 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/K70",
      "text": "35/K70 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/K75",
      "text": "35/K75 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/K80",
      "text": "35/K80 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/K85",
      "text": "35/K85 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/K90",
      "text": "35/K90 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/K95",
      "text": "35/K95 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "35/ZI",
      "text": "35 mm, Zeiss-Ikon®-Ausführung",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36",
      "text": "36 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "36/101",
      "text": "36/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/106",
      "text": "36/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/111",
      "text": "36/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/116",
      "text": "36/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/121",
      "text": "36/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/126",
      "text": "36/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/131",
      "text": "36/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/136",
      "text": "36/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/141",
      "text": "36/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/146",
      "text": "36/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/151",
      "text": "36/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/156",
      "text": "36/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/161",
      "text": "36/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/166",
      "text": "36/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/171",
      "text": "36/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/176",
      "text": "36/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/181",
      "text": "36/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/186",
      "text": "36/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/191",
      "text": "36/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/196",
      "text": "36/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/201",
      "text": "36/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/221",
      "text": "36/221 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/251",
      "text": "36/251 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/256",
      "text": "36/256 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/266",
      "text": "36/266 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/27",
      "text": "36/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/28",
      "text": "36/28 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/281",
      "text": "36/281 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/31",
      "text": "36/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/36",
      "text": "36/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/41",
      "text": "36/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/46",
      "text": "36/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/51",
      "text": "36/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/56",
      "text": "36/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/61",
      "text": "36/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/66",
      "text": "36/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/71",
      "text": "36/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/76",
      "text": "36/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/81",
      "text": "36/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/86",
      "text": "36/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/91",
      "text": "36/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/96",
      "text": "36/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "36/K101",
      "text": "36/K101 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "36/K106",
      "text": "36/K106 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "36/K111",
      "text": "36/K111 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "36/K116",
      "text": "36/K116 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "36/K121",
      "text": "36/K121 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "36/K161",
      "text": "36/K161 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "36/K27",
      "text": "36/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "36/K31",
      "text": "36/K31 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "36/K36",
      "text": "36/K36 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "36/K41",
      "text": "36/K41 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "36/K46",
      "text": "36/K46 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "36/K51",
      "text": "36/K51 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "36/K56",
      "text": "36/K56 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "36/K61",
      "text": "36/K61 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "36/K66",
      "text": "36/K66 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "36/K71",
      "text": "36/K71 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "36/K76",
      "text": "36/K76 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "36/K81",
      "text": "36/K81 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "36/K86",
      "text": "36/K86 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "36/K91",
      "text": "36/K91 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "36/K96",
      "text": "36/K96 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "366",
      "text": "366 MM",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "37",
      "text": "37 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "38",
      "text": "Länge 38",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "38/ZI",
      "text": "38 mm, Zeiss-Ikon®-Ausführung",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "39",
      "text": "Länge 39 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "39/34",
      "text": "PDZ - Portaldoppelzylinder 39/34 EVVA",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "39/39",
      "text": "PDZ - Portaldoppelzylinder 39/39 EVVA",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "3KS",
      "text": "",
      "cont": "",
      "prio": ""
    },
    {
      "code": "3KS+",
      "text": "",
      "cont": "",
      "prio": ""
    },
    {
      "code": "40",
      "text": "40 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "40/100",
      "text": "40/100 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/105",
      "text": "40/105 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/110",
      "text": "40/110 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/115",
      "text": "40/115 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/120",
      "text": "40/120 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/27",
      "text": "40/27 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/30",
      "text": "40/30 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/35",
      "text": "40/35 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/40",
      "text": "40/40 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/45",
      "text": "40/45 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/50",
      "text": "40/50 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/55",
      "text": "40/55 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/60",
      "text": "40/60 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/65",
      "text": "40/65 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/70",
      "text": "40/70 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/75",
      "text": "40/75 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/80",
      "text": "40/80 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/85",
      "text": "40/85 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/90",
      "text": "40/90 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/95",
      "text": "40/95 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/K100",
      "text": "40/K100 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/K105",
      "text": "40/K105 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/K110",
      "text": "40/K110 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/K115",
      "text": "40/K115 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/K120",
      "text": "40/K120 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/K27",
      "text": "40/K27 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/K30",
      "text": "40/K30 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/K35",
      "text": "40/K35 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/K40",
      "text": "40/K40 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/K45",
      "text": "40/K45 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/K50",
      "text": "40/K50 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/K55",
      "text": "40/K55 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/K60",
      "text": "40/K60 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/K65",
      "text": "40/K65 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/K70",
      "text": "40/K70 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/K75",
      "text": "40/K75 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/K80",
      "text": "40/K80 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/K85",
      "text": "40/K85 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/K90",
      "text": "40/K90 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "40/K95",
      "text": "40/K95 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "4000LA",
      "text": "Möbelschloss Universal 4000 Lade",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "4000LI",
      "text": "Möbelschloss Universal 4000 links",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "4000RE",
      "text": "Möbelschloss Universal 4000 rechts",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "41",
      "text": "41 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "41/101",
      "text": "41/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/106",
      "text": "41/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/111",
      "text": "41/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/116",
      "text": "41/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/121",
      "text": "41/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/126",
      "text": "41/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/131",
      "text": "41/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/136",
      "text": "41/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/141",
      "text": "41/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/146",
      "text": "41/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/151",
      "text": "41/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/156",
      "text": "41/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/161",
      "text": "41/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/166",
      "text": "41/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/171",
      "text": "41/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/176",
      "text": "41/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/181",
      "text": "41/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/186",
      "text": "41/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/191",
      "text": "41/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/196",
      "text": "41/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/201",
      "text": "41/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/261",
      "text": "41/261 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/27",
      "text": "41/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/28",
      "text": "41/28 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/31",
      "text": "41/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/36",
      "text": "41/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/41",
      "text": "41/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/46",
      "text": "41/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/51",
      "text": "41/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/56",
      "text": "41/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/61",
      "text": "41/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/66",
      "text": "41/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/71",
      "text": "41/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/76",
      "text": "41/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/81",
      "text": "41/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/86",
      "text": "41/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/91",
      "text": "41/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/96",
      "text": "41/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "41/K101",
      "text": "41/K101 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "41/K106",
      "text": "41/K106 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "41/K111",
      "text": "41/K111 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "41/K116",
      "text": "41/K116 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "41/K121",
      "text": "41/K121 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "41/K181",
      "text": "41/K181 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "41/K27",
      "text": "41/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "41/K31",
      "text": "41/K31 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "41/K36",
      "text": "41/K36 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "41/K41",
      "text": "41/K41 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "41/K46",
      "text": "41/K46 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "41/K51",
      "text": "41/K51 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "41/K56",
      "text": "41/K56 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "41/K61",
      "text": "41/K61 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "41/K66",
      "text": "41/K66 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "41/K71",
      "text": "41/K71 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "41/K76",
      "text": "41/K76 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "41/K81",
      "text": "41/K81 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "41/K86",
      "text": "41/K86 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "41/K91",
      "text": "41/K91 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "41/K96",
      "text": "41/K96 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "41/ZI",
      "text": "41/ZI - /41 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "42",
      "text": "42 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "44",
      "text": "PHZ - Portalhalbzylinder /44 EVVA",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "44/ZI",
      "text": "44/ZI - /44 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "45",
      "text": "45 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "45/100",
      "text": "45/100 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/105",
      "text": "45/105 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/110",
      "text": "45/110 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/115",
      "text": "45/115 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/120",
      "text": "45/120 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/27",
      "text": "45/27 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/30",
      "text": "45/30 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/35",
      "text": "45/35 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/40",
      "text": "45/40 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/45",
      "text": "45/45 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/50",
      "text": "45/50 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/55",
      "text": "45/55 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/60",
      "text": "45/60 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/65",
      "text": "45/65 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/70",
      "text": "45/70 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/75",
      "text": "45/75 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/80",
      "text": "45/80 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/85",
      "text": "45/85 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/90",
      "text": "45/90 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/95",
      "text": "45/95 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/K100",
      "text": "45/K100 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/K105",
      "text": "45/K105 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/K110",
      "text": "45/K110 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/K115",
      "text": "45/K115 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/K120",
      "text": "45/K120 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/K27",
      "text": "45/K27 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/K30",
      "text": "45/K30 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/K35",
      "text": "45/K35 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/K40",
      "text": "45/K40 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/K45",
      "text": "45/K45 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/K50",
      "text": "45/K50 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/K55",
      "text": "45/K55 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/K60",
      "text": "45/K60 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/K65",
      "text": "45/K65 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/K70",
      "text": "45/K70 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/K75",
      "text": "45/K75 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/K80",
      "text": "45/K80 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/K85",
      "text": "45/K85 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/K90",
      "text": "45/K90 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "45/K95",
      "text": "45/K95 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "4540LI",
      "text": "Möbelschloss Universal 4540 links",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "4540RE",
      "text": "Möbelschloss Universal 4540 rechts",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "46",
      "text": "46 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "46/101",
      "text": "46/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/106",
      "text": "46/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/111",
      "text": "46/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/116",
      "text": "46/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/121",
      "text": "46/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/126",
      "text": "46/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/131",
      "text": "46/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/136",
      "text": "46/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/141",
      "text": "46/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/146",
      "text": "46/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/151",
      "text": "46/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/156",
      "text": "46/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/161",
      "text": "46/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/166",
      "text": "46/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/171",
      "text": "46/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/176",
      "text": "46/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/181",
      "text": "46/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/186",
      "text": "46/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/191",
      "text": "46/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/196",
      "text": "46/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/201",
      "text": "46/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/27",
      "text": "46/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/28",
      "text": "46/28 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/31",
      "text": "46/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/36",
      "text": "46/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/41",
      "text": "46/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/46",
      "text": "46/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/51",
      "text": "46/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/56",
      "text": "46/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/61",
      "text": "46/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/66",
      "text": "46/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/71",
      "text": "46/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/76",
      "text": "46/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/81",
      "text": "46/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/86",
      "text": "46/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/91",
      "text": "46/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/96",
      "text": "46/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "46/K101",
      "text": "46/K101 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "46/K106",
      "text": "46/K106 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "46/K111",
      "text": "46/K111 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "46/K116",
      "text": "46/K116 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "46/K121",
      "text": "46/K121 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "46/K27",
      "text": "46/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "46/K31",
      "text": "46/K31 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "46/K36",
      "text": "46/K36 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "46/K41",
      "text": "46/K41 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "46/K46",
      "text": "46/K46 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "46/K51",
      "text": "46/K51 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "46/K56",
      "text": "46/K56 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "46/K61",
      "text": "46/K61 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "46/K66",
      "text": "46/K66 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "46/K71",
      "text": "46/K71 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "46/K76",
      "text": "46/K76 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "46/K81",
      "text": "46/K81 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "46/K86",
      "text": "46/K86 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "46/K91",
      "text": "46/K91 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "46/K96",
      "text": "46/K96 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "47",
      "text": "47 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "47/ZI",
      "text": "47/ZI - /47 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "4KS",
      "text": "",
      "cont": "",
      "prio": ""
    },
    {
      "code": "50",
      "text": "50 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "50/100",
      "text": "50/100 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/105",
      "text": "50/105 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/110",
      "text": "50/110 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/115",
      "text": "50/115 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/120",
      "text": "50/120 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/27",
      "text": "50/27 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/30",
      "text": "50/30 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/35",
      "text": "50/35 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/40",
      "text": "50/40 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/45",
      "text": "50/45 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/50",
      "text": "50/50 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/55",
      "text": "50/55 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/60",
      "text": "50/60 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/65",
      "text": "50/65 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/70",
      "text": "50/70 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/75",
      "text": "50/75 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/80",
      "text": "50/80 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/85",
      "text": "50/85 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/90",
      "text": "50/90 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/95",
      "text": "50/95 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/K100",
      "text": "50/K100 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/K105",
      "text": "50/K105 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/K110",
      "text": "50/K110 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/K115",
      "text": "50/K115 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/K120",
      "text": "50/K120 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/K27",
      "text": "50/K27 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/K30",
      "text": "50/K30 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/K35",
      "text": "50/K35 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/K40",
      "text": "50/K40 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/K45",
      "text": "50/K45 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/K50",
      "text": "50/K50 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/K55",
      "text": "50/K55 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/K60",
      "text": "50/K60 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/K65",
      "text": "50/K65 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/K70",
      "text": "50/K70 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/K75",
      "text": "50/K75 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/K80",
      "text": "50/K80 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/K85",
      "text": "50/K85 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/K90",
      "text": "50/K90 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "50/K95",
      "text": "50/K95 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "51",
      "text": "51 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "51/101",
      "text": "51/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/106",
      "text": "51/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/111",
      "text": "51/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/116",
      "text": "51/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/121",
      "text": "51/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/126",
      "text": "51/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/131",
      "text": "51/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/136",
      "text": "51/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/141",
      "text": "51/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/146",
      "text": "51/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/151",
      "text": "51/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/156",
      "text": "51/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/161",
      "text": "51/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/166",
      "text": "51/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/171",
      "text": "51/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/176",
      "text": "51/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/181",
      "text": "51/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/186",
      "text": "51/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/191",
      "text": "51/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/196",
      "text": "51/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/201",
      "text": "51/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/27",
      "text": "51/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/28",
      "text": "51/28 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/31",
      "text": "51/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/36",
      "text": "51/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/41",
      "text": "51/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/46",
      "text": "51/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/51",
      "text": "51/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/56",
      "text": "51/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/61",
      "text": "51/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/66",
      "text": "51/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/71",
      "text": "51/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/76",
      "text": "51/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/81",
      "text": "51/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/86",
      "text": "51/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/91",
      "text": "51/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/96",
      "text": "51/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "51/K101",
      "text": "51/K101 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "51/K106",
      "text": "51/K106 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "51/K111",
      "text": "51/K111 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "51/K116",
      "text": "51/K116 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "51/K121",
      "text": "51/K121 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "51/K27",
      "text": "51/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "51/K31",
      "text": "51/K31 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "51/K36",
      "text": "51/K36 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "51/K41",
      "text": "51/K41 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "51/K46",
      "text": "51/K46 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "51/K51",
      "text": "51/K51 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "51/K56",
      "text": "51/K56 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "51/K61",
      "text": "51/K61 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "51/K66",
      "text": "51/K66 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "51/K71",
      "text": "51/K71 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "51/K76",
      "text": "51/K76 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "51/K81",
      "text": "51/K81 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "51/K86",
      "text": "51/K86 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "51/K91",
      "text": "51/K91 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "51/K96",
      "text": "51/K96 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "55",
      "text": "55 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "55/100",
      "text": "55/100 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/105",
      "text": "55/105 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/110",
      "text": "55/110 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/115",
      "text": "55/115 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/120",
      "text": "55/120 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/27",
      "text": "55/27 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/30",
      "text": "55/30 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/35",
      "text": "55/35 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/40",
      "text": "55/40 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/45",
      "text": "55/45 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/50",
      "text": "55/50 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/55",
      "text": "55/55 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/60",
      "text": "55/60 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/65",
      "text": "55/65 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/70",
      "text": "55/70 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/75",
      "text": "55/75 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/80",
      "text": "55/80 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/85",
      "text": "55/85 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/90",
      "text": "55/90 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/95",
      "text": "55/95 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/K105",
      "text": "55/K105 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/K27",
      "text": "55/K27 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/K30",
      "text": "55/K30 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/K35",
      "text": "55/K35 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/K40",
      "text": "55/K40 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/K45",
      "text": "55/K45 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/K50",
      "text": "55/K50 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/K55",
      "text": "55/K55 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/K60",
      "text": "55/K60 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/K65",
      "text": "55/K65 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/K70",
      "text": "55/K70 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/K75",
      "text": "55/K75 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/K80",
      "text": "55/K80 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/K85",
      "text": "55/K85 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/K90",
      "text": "55/K90 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "55/K95",
      "text": "55/K95 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "56",
      "text": "56 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "56/101",
      "text": "56/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/106",
      "text": "56/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/111",
      "text": "56/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/116",
      "text": "56/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/121",
      "text": "56/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/126",
      "text": "56/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/131",
      "text": "56/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/136",
      "text": "56/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/141",
      "text": "56/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/146",
      "text": "56/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/151",
      "text": "56/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/156",
      "text": "56/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/161",
      "text": "56/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/166",
      "text": "56/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/171",
      "text": "56/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/176",
      "text": "56/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/181",
      "text": "56/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/186",
      "text": "56/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/191",
      "text": "56/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/196",
      "text": "56/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/201",
      "text": "56/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/27",
      "text": "56/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/28",
      "text": "56/28 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/31",
      "text": "56/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/36",
      "text": "56/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/41",
      "text": "56/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/46",
      "text": "56/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/51",
      "text": "56/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/56",
      "text": "56/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/61",
      "text": "56/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/66",
      "text": "56/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/71",
      "text": "56/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/76",
      "text": "56/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/81",
      "text": "56/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/86",
      "text": "56/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/91",
      "text": "56/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/96",
      "text": "56/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "56/K106",
      "text": "56/K106 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "56/K27",
      "text": "56/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "56/K31",
      "text": "56/K31 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "56/K36",
      "text": "56/K36 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "56/K41",
      "text": "56/K41 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "56/K46",
      "text": "56/K46 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "56/K51",
      "text": "56/K51 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "56/K56",
      "text": "56/K56 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "56/K61",
      "text": "56/K61 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "56/K66",
      "text": "56/K66 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "56/K71",
      "text": "56/K71 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "56/K76",
      "text": "56/K76 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "56/K81",
      "text": "56/K81 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "56/K86",
      "text": "56/K86 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "56/K91",
      "text": "56/K91 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "56/K96",
      "text": "56/K96 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "57",
      "text": "57 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "60",
      "text": "60 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "60/100",
      "text": "60/100 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/105",
      "text": "60/105 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/110",
      "text": "60/110 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/115",
      "text": "60/115 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/120",
      "text": "60/120 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/27",
      "text": "60/27 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/30",
      "text": "60/30 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/35",
      "text": "60/35 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/40",
      "text": "60/40 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/45",
      "text": "60/45 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/50",
      "text": "60/50 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/55",
      "text": "60/55 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/60",
      "text": "60/60 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/65",
      "text": "60/65 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/70",
      "text": "60/70 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/75",
      "text": "60/75 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/80",
      "text": "60/80 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/85",
      "text": "60/85 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/90",
      "text": "60/90 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/95",
      "text": "60/95 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/K27",
      "text": "60/K27 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/K30",
      "text": "60/K30 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/K35",
      "text": "60/K35 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/K40",
      "text": "60/K40 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/K45",
      "text": "60/K45 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/K50",
      "text": "60/K50 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/K55",
      "text": "60/K55 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/K60",
      "text": "60/K60 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/K65",
      "text": "60/K65 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/K70",
      "text": "60/K70 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/K75",
      "text": "60/K75 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/K80",
      "text": "60/K80 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/K85",
      "text": "60/K85 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/K90",
      "text": "60/K90 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "60/K95",
      "text": "60/K95 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "61",
      "text": "61 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "61/101",
      "text": "61/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/106",
      "text": "61/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/111",
      "text": "61/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/116",
      "text": "61/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/121",
      "text": "61/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/126",
      "text": "61/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/131",
      "text": "61/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/136",
      "text": "61/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/141",
      "text": "61/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/146",
      "text": "61/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/151",
      "text": "61/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/156",
      "text": "61/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/161",
      "text": "61/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/166",
      "text": "61/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/171",
      "text": "61/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/176",
      "text": "61/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/181",
      "text": "61/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/186",
      "text": "61/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/191",
      "text": "61/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/196",
      "text": "61/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/201",
      "text": "61/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/27",
      "text": "61/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/28",
      "text": "61/28 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/31",
      "text": "61/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/36",
      "text": "61/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/41",
      "text": "61/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/46",
      "text": "61/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/51",
      "text": "61/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/56",
      "text": "61/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/61",
      "text": "61/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/66",
      "text": "61/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/71",
      "text": "61/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/76",
      "text": "61/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/81",
      "text": "61/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/86",
      "text": "61/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/91",
      "text": "61/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/96",
      "text": "61/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "61/K27",
      "text": "61/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "61/K31",
      "text": "61/K31 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "61/K36",
      "text": "61/K36 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "61/K41",
      "text": "61/K41 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "61/K46",
      "text": "61/K46 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "61/K51",
      "text": "61/K51 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "61/K56",
      "text": "61/K56 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "61/K61",
      "text": "61/K61 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "61/K66",
      "text": "61/K66 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "61/K71",
      "text": "61/K71 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "61/K76",
      "text": "61/K76 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "61/K81",
      "text": "61/K81 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "61/K86",
      "text": "61/K86 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "61/K91",
      "text": "61/K91 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "61/K96",
      "text": "61/K96 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "628",
      "text": "Schlosskasten 628",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "638",
      "text": "Schlosskasten 638",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "65",
      "text": "65 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "65/100",
      "text": "65/100 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/105",
      "text": "65/105 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/110",
      "text": "65/110 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/115",
      "text": "65/115 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/120",
      "text": "65/120 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/27",
      "text": "65/27 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/30",
      "text": "65/30 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/35",
      "text": "65/35 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/40",
      "text": "65/40 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/45",
      "text": "65/45 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/50",
      "text": "65/50 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/55",
      "text": "65/55 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/60",
      "text": "65/60 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/65",
      "text": "65/65 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/70",
      "text": "65/70 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/75",
      "text": "65/75 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/80",
      "text": "65/80 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/85",
      "text": "65/85 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/90",
      "text": "65/90 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/95",
      "text": "65/95 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/K100",
      "text": "65/K100 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/K115",
      "text": "65/K115 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/K27",
      "text": "65/K27 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/K30",
      "text": "65/K30 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/K35",
      "text": "65/K35 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/K40",
      "text": "65/K40 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/K45",
      "text": "65/K45 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/K50",
      "text": "65/K50 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/K55",
      "text": "65/K55 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/K60",
      "text": "65/K60 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/K65",
      "text": "65/K65 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/K70",
      "text": "65/K70 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/K75",
      "text": "65/K75 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/K80",
      "text": "65/K80 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/K85",
      "text": "65/K85 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/K90",
      "text": "65/K90 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "65/K95",
      "text": "65/K95 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "66",
      "text": "66 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "66/101",
      "text": "66/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/106",
      "text": "66/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/111",
      "text": "66/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/116",
      "text": "66/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/121",
      "text": "66/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/126",
      "text": "66/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/131",
      "text": "66/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/136",
      "text": "66/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/141",
      "text": "66/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/146",
      "text": "66/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/151",
      "text": "66/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/156",
      "text": "66/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/161",
      "text": "66/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/166",
      "text": "66/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/171",
      "text": "66/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/176",
      "text": "66/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/181",
      "text": "66/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/186",
      "text": "66/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/191",
      "text": "66/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/196",
      "text": "66/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/201",
      "text": "66/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/27",
      "text": "66/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/28",
      "text": "66/28 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/31",
      "text": "66/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/36",
      "text": "66/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/41",
      "text": "66/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/46",
      "text": "66/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/51",
      "text": "66/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/56",
      "text": "66/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/61",
      "text": "66/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/66",
      "text": "66/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/71",
      "text": "66/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/76",
      "text": "66/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/81",
      "text": "66/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/86",
      "text": "66/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/91",
      "text": "66/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/96",
      "text": "66/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "66/K101",
      "text": "66/K101 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "66/K116",
      "text": "66/K116 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "66/K27",
      "text": "66/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "66/K31",
      "text": "66/K31 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "66/K36",
      "text": "66/K36 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "66/K41",
      "text": "66/K41 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "66/K46",
      "text": "66/K46 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "66/K51",
      "text": "66/K51 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "66/K56",
      "text": "66/K56 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "66/K61",
      "text": "66/K61 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "66/K66",
      "text": "66/K66 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "66/K71",
      "text": "66/K71 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "66/K76",
      "text": "66/K76 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "66/K81",
      "text": "66/K81 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "66/K86",
      "text": "66/K86 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "66/K91",
      "text": "66/K91 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "66/K96",
      "text": "66/K96 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "67",
      "text": "67 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "70",
      "text": "70 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "70/100",
      "text": "70/100 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/105",
      "text": "70/105 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/110",
      "text": "70/110 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/115",
      "text": "70/115 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/120",
      "text": "70/120 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/27",
      "text": "70/27 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/30",
      "text": "70/30 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/35",
      "text": "70/35 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/40",
      "text": "70/40 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/45",
      "text": "70/45 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/50",
      "text": "70/50 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/55",
      "text": "70/55 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/60",
      "text": "70/60 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/65",
      "text": "70/65 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/70",
      "text": "70/70 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/75",
      "text": "70/75 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/80",
      "text": "70/80 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/85",
      "text": "70/85 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/90",
      "text": "70/90 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/95",
      "text": "70/95 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/K100",
      "text": "70/K100 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/K27",
      "text": "70/K27 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/K30",
      "text": "70/K30 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/K35",
      "text": "70/K35 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/K40",
      "text": "70/K40 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/K45",
      "text": "70/K45 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/K50",
      "text": "70/K50 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/K55",
      "text": "70/K55 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/K60",
      "text": "70/K60 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/K65",
      "text": "70/K65 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/K70",
      "text": "70/K70 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/K75",
      "text": "70/K75 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/K80",
      "text": "70/K80 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/K85",
      "text": "70/K85 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/K90",
      "text": "70/K90 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "70/K95",
      "text": "70/K95 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "71",
      "text": "71 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "71/101",
      "text": "71/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/106",
      "text": "71/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/111",
      "text": "71/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/116",
      "text": "71/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/121",
      "text": "71/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/126",
      "text": "71/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/131",
      "text": "71/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/136",
      "text": "71/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/141",
      "text": "71/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/146",
      "text": "71/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/151",
      "text": "71/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/156",
      "text": "71/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/161",
      "text": "71/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/166",
      "text": "71/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/171",
      "text": "71/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/176",
      "text": "71/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/181",
      "text": "71/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/186",
      "text": "71/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/191",
      "text": "71/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/196",
      "text": "71/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/201",
      "text": "71/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/27",
      "text": "71/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/28",
      "text": "71/28 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/31",
      "text": "71/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/36",
      "text": "71/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/41",
      "text": "71/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/46",
      "text": "71/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/51",
      "text": "71/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/56",
      "text": "71/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/61",
      "text": "71/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/66",
      "text": "71/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/71",
      "text": "71/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/76",
      "text": "71/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/81",
      "text": "71/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/86",
      "text": "71/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/91",
      "text": "71/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/96",
      "text": "71/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "71/K101",
      "text": "71/K101 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "71/K27",
      "text": "71/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "71/K31",
      "text": "71/K31 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "71/K36",
      "text": "71/K36 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "71/K41",
      "text": "71/K41 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "71/K46",
      "text": "71/K46 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "71/K51",
      "text": "71/K51 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "71/K56",
      "text": "71/K56 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "71/K61",
      "text": "71/K61 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "71/K66",
      "text": "71/K66 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "71/K71",
      "text": "71/K71 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "71/K76",
      "text": "71/K76 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "71/K81",
      "text": "71/K81 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "71/K86",
      "text": "71/K86 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "71/K91",
      "text": "71/K91 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "71/K96",
      "text": "71/K96 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "75",
      "text": "75 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "75/100",
      "text": "75/100 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/105",
      "text": "75/105 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/110",
      "text": "75/110 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/115",
      "text": "75/115 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/120",
      "text": "75/120 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/27",
      "text": "75/27 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/30",
      "text": "75/30 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/35",
      "text": "75/35 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/40",
      "text": "75/40 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/45",
      "text": "75/45 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/50",
      "text": "75/50 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/55",
      "text": "75/55 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/60",
      "text": "75/60 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/65",
      "text": "75/65 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/70",
      "text": "75/70 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/75",
      "text": "75/75 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/80",
      "text": "75/80 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/85",
      "text": "75/85 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/90",
      "text": "75/90 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/95",
      "text": "75/95 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/K27",
      "text": "75/K27 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/K30",
      "text": "75/K30 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/K35",
      "text": "75/K35 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/K40",
      "text": "75/K40 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/K45",
      "text": "75/K45 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/K50",
      "text": "75/K50 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/K55",
      "text": "75/K55 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/K60",
      "text": "75/K60 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/K65",
      "text": "75/K65 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/K70",
      "text": "75/K70 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/K75",
      "text": "75/K75 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/K80",
      "text": "75/K80 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/K85",
      "text": "75/K85 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/K90",
      "text": "75/K90 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "75/K95",
      "text": "75/K95 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "76",
      "text": "76 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "76/101",
      "text": "76/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/106",
      "text": "76/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/111",
      "text": "76/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/116",
      "text": "76/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/121",
      "text": "76/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/126",
      "text": "76/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/131",
      "text": "76/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/136",
      "text": "76/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/141",
      "text": "76/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/146",
      "text": "76/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/151",
      "text": "76/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/156",
      "text": "76/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/161",
      "text": "76/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/166",
      "text": "76/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/171",
      "text": "76/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/176",
      "text": "76/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/181",
      "text": "76/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/186",
      "text": "76/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/191",
      "text": "76/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/196",
      "text": "76/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/201",
      "text": "76/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/27",
      "text": "76/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/28",
      "text": "76/28 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/31",
      "text": "76/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/36",
      "text": "76/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/41",
      "text": "76/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/46",
      "text": "76/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/51",
      "text": "76/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/56",
      "text": "76/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/61",
      "text": "76/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/66",
      "text": "76/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/71",
      "text": "76/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/76",
      "text": "76/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/81",
      "text": "76/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/86",
      "text": "76/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/91",
      "text": "76/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/96",
      "text": "76/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "76/K27",
      "text": "76/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "76/K31",
      "text": "76/K31 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "76/K36",
      "text": "76/K36 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "76/K41",
      "text": "76/K41 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "76/K46",
      "text": "76/K46 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "76/K51",
      "text": "76/K51 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "76/K56",
      "text": "76/K56 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "76/K61",
      "text": "76/K61 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "76/K66",
      "text": "76/K66 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "76/K71",
      "text": "76/K71 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "76/K76",
      "text": "76/K76 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "76/K81",
      "text": "76/K81 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "76/K86",
      "text": "76/K86 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "76/K91",
      "text": "76/K91 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "76/K96",
      "text": "76/K96 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "80",
      "text": "Drückervierkantstift, 8 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "80/100",
      "text": "80/100 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/105",
      "text": "80/105 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/110",
      "text": "80/110 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/115",
      "text": "80/115 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/120",
      "text": "80/120 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/27",
      "text": "80/27 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/30",
      "text": "80/30 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/35",
      "text": "80/35 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/40",
      "text": "80/40 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/45",
      "text": "80/45 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/50",
      "text": "80/50 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/55",
      "text": "80/55 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/60",
      "text": "80/60 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/65",
      "text": "80/65 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/70",
      "text": "80/70 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/75",
      "text": "80/75 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/80",
      "text": "80/80 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/85",
      "text": "80/85 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/90",
      "text": "80/90 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/95",
      "text": "80/95 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/K27",
      "text": "80/K27 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/K30",
      "text": "80/K30 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/K35",
      "text": "80/K35 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/K40",
      "text": "80/K40 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/K45",
      "text": "80/K45 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/K50",
      "text": "80/K50 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/K55",
      "text": "80/K55 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/K60",
      "text": "80/K60 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/K65",
      "text": "80/K65 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/K70",
      "text": "80/K70 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/K75",
      "text": "80/K75 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/K80",
      "text": "80/K80 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/K85",
      "text": "80/K85 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/K90",
      "text": "80/K90 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "80/K95",
      "text": "80/K95 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "81",
      "text": "81 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "81/101",
      "text": "81/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/106",
      "text": "81/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/111",
      "text": "81/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/116",
      "text": "81/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/121",
      "text": "81/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/126",
      "text": "81/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/131",
      "text": "81/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/136",
      "text": "81/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/141",
      "text": "81/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/146",
      "text": "81/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/151",
      "text": "81/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/156",
      "text": "81/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/161",
      "text": "81/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/166",
      "text": "81/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/171",
      "text": "81/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/176",
      "text": "81/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/181",
      "text": "81/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/186",
      "text": "81/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/191",
      "text": "81/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/196",
      "text": "81/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/201",
      "text": "81/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/241",
      "text": "81/241 MM",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/27",
      "text": "81/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/28",
      "text": "81/28 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/31",
      "text": "81/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/36",
      "text": "81/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/41",
      "text": "81/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/46",
      "text": "81/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/51",
      "text": "81/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/56",
      "text": "81/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/61",
      "text": "81/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/66",
      "text": "81/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/71",
      "text": "81/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/76",
      "text": "81/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/81",
      "text": "81/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/86",
      "text": "81/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/91",
      "text": "81/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/96",
      "text": "81/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "81/K27",
      "text": "81/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "81/K31",
      "text": "81/K31 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "81/K36",
      "text": "81/K36 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "81/K41",
      "text": "81/K41 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "81/K46",
      "text": "81/K46 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "81/K51",
      "text": "81/K51 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "81/K56",
      "text": "81/K56 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "81/K61",
      "text": "81/K61 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "81/K66",
      "text": "81/K66 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "81/K71",
      "text": "81/K71 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "81/K76",
      "text": "81/K76 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "81/K81",
      "text": "81/K81 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "81/K86",
      "text": "81/K86 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "81/K91",
      "text": "81/K91 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "81/K96",
      "text": "81/K96 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "85",
      "text": "Drückervierkantstift, 8,5 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "85/100",
      "text": "85/100 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/105",
      "text": "85/105 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/110",
      "text": "85/110 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/115",
      "text": "85/115 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/120",
      "text": "85/120 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/27",
      "text": "85/27 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/30",
      "text": "85/30 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/35",
      "text": "85/35 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/40",
      "text": "85/40 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/45",
      "text": "85/45 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/50",
      "text": "85/50 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/55",
      "text": "85/55 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/60",
      "text": "85/60 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/65",
      "text": "85/65 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/70",
      "text": "85/70 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/75",
      "text": "85/75 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/80",
      "text": "85/80 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/85",
      "text": "85/85 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/90",
      "text": "85/90 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/95",
      "text": "85/95 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/K27",
      "text": "85/K27 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/K30",
      "text": "85/K30 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/K35",
      "text": "85/K35 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/K40",
      "text": "85/K40 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/K45",
      "text": "85/K45 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/K50",
      "text": "85/K50 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/K55",
      "text": "85/K55 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/K60",
      "text": "85/K60 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/K65",
      "text": "85/K65 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/K70",
      "text": "85/K70 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/K75",
      "text": "85/K75 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/K80",
      "text": "85/K80 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/K85",
      "text": "85/K85 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/K90",
      "text": "85/K90 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "85/K95",
      "text": "85/K95 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "86",
      "text": "86 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "86/101",
      "text": "86/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/106",
      "text": "86/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/111",
      "text": "86/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/116",
      "text": "86/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/121",
      "text": "86/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/126",
      "text": "86/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/131",
      "text": "86/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/136",
      "text": "86/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/141",
      "text": "86/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/146",
      "text": "86/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/151",
      "text": "86/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/156",
      "text": "86/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/161",
      "text": "86/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/166",
      "text": "86/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/171",
      "text": "86/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/176",
      "text": "86/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/181",
      "text": "86/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/186",
      "text": "86/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/191",
      "text": "86/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/196",
      "text": "86/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/201",
      "text": "86/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/27",
      "text": "86/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/28",
      "text": "86/28 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/31",
      "text": "86/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/36",
      "text": "86/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/41",
      "text": "86/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/46",
      "text": "86/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/51",
      "text": "86/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/56",
      "text": "86/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/61",
      "text": "86/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/66",
      "text": "86/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/71",
      "text": "86/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/76",
      "text": "86/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/81",
      "text": "86/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/86",
      "text": "86/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/91",
      "text": "86/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/96",
      "text": "86/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "86/K27",
      "text": "86/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "86/K31",
      "text": "86/K31 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "86/K36",
      "text": "86/K36 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "86/K41",
      "text": "86/K41 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "86/K46",
      "text": "86/K46 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "86/K51",
      "text": "86/K51 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "86/K56",
      "text": "86/K56 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "86/K61",
      "text": "86/K61 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "86/K66",
      "text": "86/K66 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "86/K71",
      "text": "86/K71 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "86/K76",
      "text": "86/K76 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "86/K81",
      "text": "86/K81 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "86/K86",
      "text": "86/K86 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "86/K91",
      "text": "86/K91 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "86/K96",
      "text": "86/K96 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "90",
      "text": "Drückervierkantstift, 9 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "90/100",
      "text": "90/100 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/105",
      "text": "90/105 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/110",
      "text": "90/110 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/115",
      "text": "90/115 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/120",
      "text": "90/120 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/27",
      "text": "90/27 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/30",
      "text": "90/30 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/35",
      "text": "90/35 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/40",
      "text": "90/40 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/45",
      "text": "90/45 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/50",
      "text": "90/50 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/55",
      "text": "90/55 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/60",
      "text": "90/60 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/65",
      "text": "90/65 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/70",
      "text": "90/70 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/75",
      "text": "90/75 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/80",
      "text": "90/80 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/85",
      "text": "90/85 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/90",
      "text": "90/90 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/95",
      "text": "90/95 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/K27",
      "text": "90/K27 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/K30",
      "text": "90/K30 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/K35",
      "text": "90/K35 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/K40",
      "text": "90/K40 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/K45",
      "text": "90/K45 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/K50",
      "text": "90/K50 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/K55",
      "text": "90/K55 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/K60",
      "text": "90/K60 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/K65",
      "text": "90/K65 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/K70",
      "text": "90/K70 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/K75",
      "text": "90/K75 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/K80",
      "text": "90/K80 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/K85",
      "text": "90/K85 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/K90",
      "text": "90/K90 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "90/K95",
      "text": "90/K95 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "91",
      "text": "91 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "91/101",
      "text": "91/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/106",
      "text": "91/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/111",
      "text": "91/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/116",
      "text": "91/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/121",
      "text": "91/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/126",
      "text": "91/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/131",
      "text": "91/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/136",
      "text": "91/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/141",
      "text": "91/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/146",
      "text": "91/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/151",
      "text": "91/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/156",
      "text": "91/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/161",
      "text": "91/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/166",
      "text": "91/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/171",
      "text": "91/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/176",
      "text": "91/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/181",
      "text": "91/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/186",
      "text": "91/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/191",
      "text": "91/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/196",
      "text": "91/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/201",
      "text": "91/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/27",
      "text": "91/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/28",
      "text": "91/28 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/31",
      "text": "91/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/36",
      "text": "91/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/41",
      "text": "91/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/46",
      "text": "91/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/51",
      "text": "91/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/56",
      "text": "91/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/61",
      "text": "91/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/66",
      "text": "91/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/71",
      "text": "91/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/76",
      "text": "91/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/81",
      "text": "91/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/86",
      "text": "91/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/91",
      "text": "91/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/96",
      "text": "91/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "91/K27",
      "text": "91/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "91/K31",
      "text": "91/K31 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "91/K36",
      "text": "91/K36 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "91/K41",
      "text": "91/K41 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "91/K46",
      "text": "91/K46 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "91/K51",
      "text": "91/K51 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "91/K56",
      "text": "91/K56 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "91/K61",
      "text": "91/K61 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "91/K66",
      "text": "91/K66 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "91/K71",
      "text": "91/K71 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "91/K76",
      "text": "91/K76 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "91/K81",
      "text": "91/K81 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "91/K86",
      "text": "91/K86 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "91/K91",
      "text": "91/K91 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "91/K96",
      "text": "91/K96 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "95",
      "text": "95 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "95/100",
      "text": "95/100 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/105",
      "text": "95/105 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/110",
      "text": "95/110 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/115",
      "text": "95/115 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/120",
      "text": "95/120 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/27",
      "text": "95/27 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/30",
      "text": "95/30 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/35",
      "text": "95/35 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/40",
      "text": "95/40 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/45",
      "text": "95/45 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/50",
      "text": "95/50 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/55",
      "text": "95/55 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/60",
      "text": "95/60 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/65",
      "text": "95/65 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/70",
      "text": "95/70 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/75",
      "text": "95/75 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/80",
      "text": "95/80 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/85",
      "text": "95/85 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/90",
      "text": "95/90 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/95",
      "text": "95/95 mm",
      "cont": "LÄNGE DZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/K105",
      "text": "95/K105 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/K27",
      "text": "95/K27 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/K30",
      "text": "95/K30 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/K35",
      "text": "95/K35 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/K40",
      "text": "95/K40 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/K45",
      "text": "95/K45 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/K50",
      "text": "95/K50 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/K55",
      "text": "95/K55 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/K60",
      "text": "95/K60 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/K65",
      "text": "95/K65 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/K70",
      "text": "95/K70 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/K75",
      "text": "95/K75 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/K80",
      "text": "95/K80 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/K85",
      "text": "95/K85 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/K90",
      "text": "95/K90 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "95/K95",
      "text": "95/K95 mm",
      "cont": "LÄNGE KZ MODUL M",
      "prio": ""
    },
    {
      "code": "96",
      "text": "96 mm",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "96/101",
      "text": "96/101 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/106",
      "text": "96/106 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/111",
      "text": "96/111 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/116",
      "text": "96/116 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/121",
      "text": "96/121 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/126",
      "text": "96/126 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/131",
      "text": "96/131 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/136",
      "text": "96/136 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/141",
      "text": "96/141 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/146",
      "text": "96/146 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/151",
      "text": "96/151 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/156",
      "text": "96/156 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/161",
      "text": "96/161 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/166",
      "text": "96/166 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/171",
      "text": "96/171 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/176",
      "text": "96/176 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/181",
      "text": "96/181 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/186",
      "text": "96/186 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/191",
      "text": "96/191 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/196",
      "text": "96/196 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/201",
      "text": "96/201 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/27",
      "text": "96/27 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/28",
      "text": "96/28 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/31",
      "text": "96/31 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/36",
      "text": "96/36 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/41",
      "text": "96/41 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/46",
      "text": "96/46 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/51",
      "text": "96/51 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/56",
      "text": "96/56 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/61",
      "text": "96/61 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/66",
      "text": "96/66 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/71",
      "text": "96/71 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/76",
      "text": "96/76 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/81",
      "text": "96/81 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/86",
      "text": "96/86 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/91",
      "text": "96/91 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/96",
      "text": "96/96 mm",
      "cont": "LÄNGE DZ",
      "prio": ""
    },
    {
      "code": "96/K106",
      "text": "96/K106 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "96/K27",
      "text": "96/K27 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "96/K31",
      "text": "96/K31 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "96/K36",
      "text": "96/K36 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "96/K41",
      "text": "96/K41 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "96/K46",
      "text": "96/K46 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "96/K51",
      "text": "96/K51 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "96/K56",
      "text": "96/K56 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "96/K61",
      "text": "96/K61 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "96/K66",
      "text": "96/K66 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "96/K71",
      "text": "96/K71 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "96/K76",
      "text": "96/K76 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "96/K81",
      "text": "96/K81 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "96/K86",
      "text": "96/K86 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "96/K91",
      "text": "96/K91 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "96/K96",
      "text": "96/K96 mm",
      "cont": "LÄNGE KZ",
      "prio": ""
    },
    {
      "code": "A",
      "text": "AirKey",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "A0",
      "text": "Australischer Ovalprofilzylinder",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "A001",
      "text": "TBS",
      "cont": "OEM-KUNDE",
      "prio": ""
    },
    {
      "code": "A0-S",
      "text": "Australischer Profilzylinder (Ovalprofil) SYMO ",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "A0V",
      "text": "Australischer Ovalprofilzylinder",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "A308-A",
      "text": "Dreikant 8 mm außen",
      "cont": "FLEXAUSSEN",
      "prio": ""
    },
    {
      "code": "A308-B",
      "text": "Dreikant 8 mm beidseitig",
      "cont": "FLEX_INNEN",
      "prio": ""
    },
    {
      "code": "A308-I",
      "text": "Dreikant 8 mm innen",
      "cont": "FLEX_INNEN",
      "prio": ""
    },
    {
      "code": "A311-A",
      "text": "Dreikant 11 mm außen",
      "cont": "FLEXAUSSEN",
      "prio": ""
    },
    {
      "code": "A311-B",
      "text": "Dreikant 11 mm beidseitig",
      "cont": "FLEX_INNEN",
      "prio": ""
    },
    {
      "code": "A311-I",
      "text": "Dreikant 11 mm innen",
      "cont": "FLEX_INNEN",
      "prio": ""
    },
    {
      "code": "A314-A",
      "text": "Dreikant 14 mm außen",
      "cont": "FLEXAUSSEN",
      "prio": ""
    },
    {
      "code": "A314-B",
      "text": "Dreikant 14 mm beidseitig",
      "cont": "FLEX_INNEN",
      "prio": ""
    },
    {
      "code": "A314-I",
      "text": "Dreikant 14 mm innen",
      "cont": "FLEX_INNEN",
      "prio": ""
    },
    {
      "code": "A4K-A",
      "text": "Vierkant außen",
      "cont": "FLEXAUSSEN",
      "prio": ""
    },
    {
      "code": "A4K-B",
      "text": "Vierkant beidseitig",
      "cont": "FLEX_INNEN",
      "prio": ""
    },
    {
      "code": "A4K-I",
      "text": "Vierkant innen",
      "cont": "FLEX_INNEN",
      "prio": ""
    },
    {
      "code": "A501",
      "text": "A501   WERTHEIM V60/23",
      "cont": "SPERRBALKEN_TYPE",
      "prio": ""
    },
    {
      "code": "A507",
      "text": "A507   FREISSLER C-893-12",
      "cont": "SPERRBALKEN_TYPE",
      "prio": ""
    },
    {
      "code": "A507A",
      "text": "A507A  FREISSLER K0431A",
      "cont": "SPERRBALKEN_TYPE",
      "prio": ""
    },
    {
      "code": "A510",
      "text": "A510   SOWITSCH 27.119",
      "cont": "SPERRBALKEN_TYPE",
      "prio": ""
    },
    {
      "code": "AI",
      "text": "Außen-/Innenzylinder",
      "cont": "MODELL",
      "prio": ""
    },
    {
      "code": "AI6-A",
      "text": "Innensechskant außen",
      "cont": "FLEXAUSSEN",
      "prio": ""
    },
    {
      "code": "AI6-B",
      "text": "Innensechskant beidseitig",
      "cont": "FLEX_INNEN",
      "prio": ""
    },
    {
      "code": "AI6-I",
      "text": "Innensechskant innen",
      "cont": "FLEX_INNEN",
      "prio": ""
    },
    {
      "code": "AIR-KEY",
      "text": "",
      "cont": "",
      "prio": ""
    },
    {
      "code": "AK",
      "text": "Allroundknauf",
      "cont": "KNAUFFORM",
      "prio": ""
    },
    {
      "code": "ALLG",
      "text": "Allgemein",
      "cont": "MODELL",
      "prio": ""
    },
    {
      "code": "AMB",
      "text": "außermittige Bohrung",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "AMI",
      "text": "Key in Knob",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "AP",
      "text": "für Paniktüren",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "APA",
      "text": "Anschraubplatte ABUS®",
      "cont": "BEFESTIGUNG_EINBAU",
      "prio": ""
    },
    {
      "code": "API63",
      "text": "Anschraubplatte IKON® 4063",
      "cont": "BEFESTIGUNG_EINBAU",
      "prio": ""
    },
    {
      "code": "ARS",
      "text": "Abreißsicherung",
      "cont": "SPERRNASE",
      "prio": ""
    },
    {
      "code": "AS-A",
      "text": "Anti-Snap außen",
      "cont": "FLEXAUSSEN",
      "prio": ""
    },
    {
      "code": "ASL-A",
      "text": "Schlitz senkrecht außen",
      "cont": "FLEXAUSSEN",
      "prio": ""
    },
    {
      "code": "ASL-B",
      "text": "Schlitz senkrecht beidseitig",
      "cont": "FLEX_INNEN",
      "prio": ""
    },
    {
      "code": "ASL-I",
      "text": "Schlitz senkrecht innen",
      "cont": "FLEX_INNEN",
      "prio": ""
    },
    {
      "code": "ASS24",
      "text": "Möbelzylinder 24 mm mit ASS®-Adapter",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "ASS24-S",
      "text": "Möbelzylinder 24 mm SYMO mit ASS®-Adapter",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "ASW-A",
      "text": "Schlitz waagrecht außen",
      "cont": "FLEXAUSSEN",
      "prio": ""
    },
    {
      "code": "ASW-B",
      "text": "Schlitz waagrecht beidseitig",
      "cont": "FLEX_INNEN",
      "prio": ""
    },
    {
      "code": "ASW-I",
      "text": "Schlitz waagrecht innen",
      "cont": "FLEX_INNEN",
      "prio": ""
    },
    {
      "code": "ATA",
      "text": "Anpassbare Knaufachse",
      "cont": "KNAUFFORM",
      "prio": ""
    },
    {
      "code": "AU",
      "text": "Gold",
      "cont": "OBERFLÄCHE",
      "prio": ""
    },
    {
      "code": "AV05",
      "text": "Verlängerung 5 mm",
      "cont": "VERL_KNAUFACHSE",
      "prio": ""
    },
    {
      "code": "AV10",
      "text": "Verlängerung 10 mm",
      "cont": "VERL_KNAUFACHSE",
      "prio": ""
    },
    {
      "code": "AV15",
      "text": "Verlängerung 15 mm",
      "cont": "VERL_KNAUFACHSE",
      "prio": ""
    },
    {
      "code": "AZ",
      "text": "für EVVA-Zusatzschlösser",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "AZ22",
      "text": "Außenzylinder 22 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "AZ25",
      "text": "Außenzylinder 25 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "AZ28",
      "text": "Außenzylinder 28 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "AZ28-S",
      "text": "Außenzylinder 28 mm SYMO",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "AZ29",
      "text": "Außenzylinder 29 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "AZ29EDP",
      "text": "Schalterzylinder",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "AZ29S",
      "text": "Schalterzylinder 29 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "AZ29SZ",
      "text": "Schalterzylinder 29 mm EDP",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "AZ29SZ-S",
      "text": "Schalterzylinder 29 mm EDP SYMO",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "AZ30",
      "text": "Mortisezylinder 30 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "AZ30RM",
      "text": "Mortisezylinder 30 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "AZ30RM-S",
      "text": "Mortisezylinder 30 mm SYMO",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "AZ37",
      "text": "Außenzylinder 37 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "AZ37-S",
      "text": "Außenzylinder 37 mm SYMO",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "AZ37-SEC",
      "text": "Modell: Aussenzylinder | Skandinavischer Sicherheitszylinder  AZ37 außen",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "AZ38",
      "text": "Außenzylinder 38 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "AZG",
      "text": "für Zusatzschlösser",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "AZI",
      "text": "für ABUS®-Zusatzschlösser",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "AZL",
      "text": "für Zusatzschlösser",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "B001",
      "text": "Selesta",
      "cont": "OEM-KUNDE",
      "prio": ""
    },
    {
      "code": "B01",
      "text": "2 Abzugsstellungen 0°, 90°",
      "cont": "SCHLÜSSELABZUG_LW",
      "prio": ""
    },
    {
      "code": "B02",
      "text": "2 Abzugsstellungen 0°, 180°",
      "cont": "SCHLÜSSELABZUG_LW",
      "prio": ""
    },
    {
      "code": "B03",
      "text": "2 Abzugsstellungen 0°, -90°",
      "cont": "SCHLÜSSELABZUG_LW",
      "prio": ""
    },
    {
      "code": "B12",
      "text": "2 Abzugsstellungen 90°, 180°",
      "cont": "SCHLÜSSELABZUG_LW",
      "prio": ""
    },
    {
      "code": "B13",
      "text": "2 Abzugsstellungen 90°, -90°",
      "cont": "SCHLÜSSELABZUG_LW",
      "prio": ""
    },
    {
      "code": "B23",
      "text": "2 Abzugsstellungen 180°, -90°",
      "cont": "SCHLÜSSELABZUG_LW",
      "prio": ""
    },
    {
      "code": "BB",
      "text": "Blind-blind",
      "cont": "LOCHUNG",
      "prio": ""
    },
    {
      "code": "BE",
      "text": "Beschlag",
      "cont": "MODELL",
      "prio": ""
    },
    {
      "code": "BEFE",
      "text": "Befestigungsplatte eckig",
      "cont": "BEFESTIGUNG_EINBAU",
      "prio": ""
    },
    {
      "code": "BEFR",
      "text": "Befestigungsplatte rund",
      "cont": "BEFESTIGUNG_EINBAU",
      "prio": ""
    },
    {
      "code": "BETA1",
      "text": "Vorserienversion",
      "cont": "DEMOVERSION",
      "prio": ""
    },
    {
      "code": "BG",
      "text": "Blind-gelocht",
      "cont": "LOCHUNG",
      "prio": ""
    },
    {
      "code": "BGB",
      "text": "Lochung blind/gelocht/blind",
      "cont": "LOCHUNG",
      "prio": ""
    },
    {
      "code": "BIF",
      "text": "Doppelschließnase Biffar®",
      "cont": "SPERRNASE",
      "prio": ""
    },
    {
      "code": "BKFLA",
      "text": "BKFLA - BKF LA",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "BKFLI",
      "text": "Möbelschloss BKF links",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "BKFRE",
      "text": "Möbelschloss BKF rechts",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "BKRLA",
      "text": "BKRLA - BKR LA",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "BKRLI",
      "text": "Möbelschloss BKR links",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "BKRRE",
      "text": "Möbelschloss BKR rechts",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "BL",
      "text": "Blau",
      "cont": "FARBE",
      "prio": ""
    },
    {
      "code": "BL-A",
      "text": "Blind außen",
      "cont": "FLEXAUSSEN",
      "prio": ""
    },
    {
      "code": "BL-B",
      "text": "Blind beidseitig",
      "cont": "FLEX_INNEN",
      "prio": ""
    },
    {
      "code": "BL-I",
      "text": "Blind innen",
      "cont": "FLEX_INNEN",
      "prio": ""
    },
    {
      "code": "BLIND",
      "text": "Blindmodul Xesar-, AirKey-Zylinder",
      "cont": "KNAUFFORM",
      "prio": ""
    },
    {
      "code": "BR",
      "text": "Braun",
      "cont": "LÄNGE",
      "prio": ""
    },
    {
      "code": "BS",
      "text": "Bügelschutz",
      "cont": "BÜGELSCHUTZ",
      "prio": ""
    },
    {
      "code": "BS60",
      "text": "Befestigungsplatte KABA",
      "cont": "BEFESTIGUNG_EINBAU",
      "prio": ""
    },
    {
      "code": "BSZ",
      "text": "Beidseitig schließbarer Zylinder",
      "cont": "SPERROPTION",
      "prio": ""
    },
    {
      "code": "C001",
      "text": "OEM neutral",
      "cont": "OEM-KUNDE",
      "prio": ""
    },
    {
      "code": "CAP",
      "text": "für CISA®-Antipanikstange",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "CH-01LG4",
      "text": "3401/L/G/4Z                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-01LGK",
      "text": "3401/L/G/K                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-01LN4",
      "text": "3401/L/N/4Z                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-01LNK",
      "text": "3401/L/N/K                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-01RG4",
      "text": "3401/R/G/4Z                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-01RGK",
      "text": "3401/R/G/K                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-01RN4",
      "text": "3401/R/N/4Z                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-01RNK",
      "text": "3401/R/N/K                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-03LG4",
      "text": "3403/L/G/4Z                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-03LGK",
      "text": "3403/L/G/K                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-03LN4",
      "text": "3403/L/N/4Z                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-03LNK",
      "text": "3403/L/N/K                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-03RG4",
      "text": "3403/R/G/4Z                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-03RGK",
      "text": "3403/R/G/K                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-03RN4",
      "text": "3403/R/N/4Z                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-03RNK",
      "text": "3403/R/N/K                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-05LG",
      "text": "3405/L/G                                                              ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-05LN",
      "text": "3405/L/N                                                              ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-05RG",
      "text": "3405/R/G                                                              ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-05RN",
      "text": "3405/R/N                                                              ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-075BL",
      "text": "Aufschraub-Riegelschlösser KABA Typ 1075B links",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-075BR",
      "text": "Aufschraub-Riegelschlösser KABA Typ 1075B rechts",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-075BS",
      "text": "Aufschraub-Riegelschlösser KABA Typ 1075B Lade",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-075BU",
      "text": "Aufschraub-Riegelschlösser KABA Typ 1075B unten",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-1074L",
      "text": "Aufschraub-Riegelschlösser KABA Typ 1074 links",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-1074R",
      "text": "Aufschraub-Riegelschlösser KABA Typ 1074 rechts",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-1074S",
      "text": "Aufschraub-Riegelschlösser KABA Typ 1074 Lade",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-1074U",
      "text": "Aufschraub-Riegelschlösser KABA Typ 1074 unten",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-1075L",
      "text": "Aufschraub-Riegelschlösser KABA Typ 1075 links",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-1075R",
      "text": "Aufschraub-Riegelschlösser KABA Typ 1075 rechts",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-1075S",
      "text": "Aufschraub-Riegelschlösser KABA Typ 1075 Lade",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-1075U",
      "text": "Aufschraub-Riegelschlösser KABA Typ 1075 unten",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-11LG4",
      "text": "3411/L/G/4Z                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-11LGK",
      "text": "3411/L/G/K                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-11LN4",
      "text": "3411/L/N/4Z                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-11LNK",
      "text": "3411/L/N/K                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-11RG4",
      "text": "3411/R/G/4Z                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-11RGK",
      "text": "3411/R/G/K                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-11RN4",
      "text": "3411/R/N/4Z                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-11RNK",
      "text": "3411/R/N/K                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-1220L",
      "text": "Riegelschloss KABA Typ 1012 DM20 Links",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-1220R",
      "text": "Riegelschloss KABA Typ 1012 DM20 Rechts",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-1220S",
      "text": "Riegelschloss KABA Typ 1012 DM20 Lade",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-1220U",
      "text": "Riegelschloss KABA Typ 1012 DM20 unten",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-1225L",
      "text": "Riegelschloss KABA Typ 1012 DM25 Links",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-1225R",
      "text": "Riegelschloss KABA Typ 1012 DM25 Rechts",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-1225S",
      "text": "Riegelschloss KABA Typ 1012 DM25 Lade",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-1225U",
      "text": "Riegelschloss KABA Typ 1012 DM25 unten",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-1230L",
      "text": "Riegelschloss KABA Typ 1012 DM30 Links",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-1230R",
      "text": "Riegelschloss KABA Typ 1012 DM30 Rechts",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-1230S",
      "text": "Riegelschloss KABA Typ 1012 DM30 Lade",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-1230U",
      "text": "Riegelschloss KABA Typ 1012 DM30 unten",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-1235L",
      "text": "Riegelschloss KABA Typ 1012 DM35 Links",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-1235R",
      "text": "Riegelschloss KABA Typ 1012 DM35 Rechts",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-1235S",
      "text": "Riegelschloss KABA Typ 1012 DM35 Lade",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-1235U",
      "text": "Riegelschloss KABA Typ 1012 DM35 unten",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-1240L",
      "text": "Riegelschloss KABA Typ 1012 DM40 Links",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-1240R",
      "text": "Riegelschloss KABA Typ 1012 DM40 Rechts",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-1240S",
      "text": "Riegelschloss KABA Typ 1012 DM40 Lade",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-1240U",
      "text": "Riegelschloss KABA Typ 1012 DM40 unten",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-13LG4",
      "text": "3413/L/G/4Z                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-13LGK",
      "text": "3413/L/G/K                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-13LN4",
      "text": "3413/L/N/4Z                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-13LNK",
      "text": "3413/L/N/K                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-13RG4",
      "text": "3413/R/G/4Z                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-13RGK",
      "text": "3413/R/G/K                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-13RN4",
      "text": "3413/R/N/4Z                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-13RNK",
      "text": "3413/R/N/K                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17L02",
      "text": "3417/L/6022/2Z                                                        ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17L0K",
      "text": "3417/L/6022/K                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17LC2",
      "text": "3417/L/9001/2Z                                                        ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17LCK",
      "text": "3417/L/9001/K                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17LD2",
      "text": "3417/L/3005/2Z                                                        ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17LDK",
      "text": "3417/L/3005/K                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17LH2",
      "text": "3417/L/5013/2Z                                                        ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17LHK",
      "text": "3417/L/5013/K                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17LJ2",
      "text": "3417/L/1004/2Z                                                        ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17LJK",
      "text": "3417/L/1004/K                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17LL2",
      "text": "3417/L/7035/2Z                                                        ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17LLK",
      "text": "3417/L/7035/K                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17LM2",
      "text": "3417/L/6012/2Z                                                        ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17LMK",
      "text": "3417/L/6012/K                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17LP2",
      "text": "3417/L/8017/2Z                                                        ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17LPK",
      "text": "3417/L/8017/K                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17LR2",
      "text": "3417/L/3003/2Z                                                        ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17LRK",
      "text": "3417/L/3003/K                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17LS2",
      "text": "3417/L/9005/2Z                                                        ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17LSK",
      "text": "3417/L/9005/K                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17LT2",
      "text": "3417/L/8014/2Z                                                        ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17LTK",
      "text": "3417/L/8014/K                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17LU2",
      "text": "3417/L/5002/2Z                                                        ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17LUK",
      "text": "3417/L/5002/K                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17LV2",
      "text": "3417/L/6024/2Z                                                        ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17LVK",
      "text": "3417/L/6024/K                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17LW2",
      "text": "3417/L/9010/2Z                                                        ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17LWK",
      "text": "3417/L/9010/K                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17LZ2",
      "text": "3417/L/7016/2Z                                                        ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17LZK",
      "text": "3417/L/7016/K                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17R02",
      "text": "3417/R/6022/2Z                                                        ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17R0K",
      "text": "3417/R/6022/K                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17RC2",
      "text": "3417/R/9001/2Z                                                        ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17RCK",
      "text": "3417/R/9001/K                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17RD2",
      "text": "3417/R/3005/2Z                                                        ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17RDK",
      "text": "3417/R/3005/K                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17RH2",
      "text": "3417/R/5013/2Z                                                        ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17RHK",
      "text": "3417/R/5013/K                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17RJ2",
      "text": "3417/R/1004/2Z                                                        ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17RJK",
      "text": "3417/R/1004/K                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17RL2",
      "text": "3417/R/7035/2Z                                                        ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17RLK",
      "text": "3417/R/7035/K                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17RM2",
      "text": "3417/R/6012/2Z                                                        ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17RMK",
      "text": "3417/R/6012/K                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17RP2",
      "text": "3417/R/8017/2Z                                                        ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17RPK",
      "text": "3417/R/8017/K                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17RR2",
      "text": "3417/R/3003/2Z                                                        ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17RRK",
      "text": "3417/R/3003/K                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17RS2",
      "text": "3417/R/9005/2Z                                                        ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17RSK",
      "text": "3417/R/9005/K                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17RT2",
      "text": "3417/R/8014/2Z                                                        ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17RTK",
      "text": "3417/R/8014/K                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17RU2",
      "text": "3417/R/5002/2Z                                                        ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17RUK",
      "text": "3417/R/5002/K                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17RV2",
      "text": "3417/R/6024/2Z                                                        ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17RVK",
      "text": "3417/R/6024/K                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17RW2",
      "text": "3417/R/9010/2Z                                                        ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17RWK",
      "text": "3417/R/9010/K                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17RZ2",
      "text": "3417/R/7016/2Z                                                        ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-17RZK",
      "text": "3417/R/7016/K                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-2006L",
      "text": "Heusser Riegelschloss 2006 Links, Dornmaß 20",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-2006R",
      "text": "Heusser Riegelschloss 2006 Rechts, Dornmaß 20",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-2006S",
      "text": "Heusser Riegelschloss 2006 Lade, Dornmaß 20",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-2006U",
      "text": "Heusser Riegelschloss 2006 Unten, Dornmaß 20",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-2074H",
      "text": "2074 H                                                                ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-2074V",
      "text": "2074 V                                                                ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-3016L",
      "text": "3016 LI                                                               ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-3016R",
      "text": "3016 RE                                                               ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-3017L",
      "text": "3017 LI                                                               ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-3017R",
      "text": "3017 RE                                                               ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-32LG2",
      "text": "3413.2/L/G/2Z                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-32LGK",
      "text": "3413.2/L/G/K                                                          ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-32LN2",
      "text": "3413.2/L/N/2Z                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-32LNK",
      "text": "3413.2/L/N/K                                                          ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-32RG2",
      "text": "3413.R/L/G/2Z                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-32RGK",
      "text": "3413.R/L/G/K                                                          ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-32RN2",
      "text": "3413.R/L/N/2Z                                                         ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-32RNK",
      "text": "3413.R/L/N/K                                                          ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-4519L",
      "text": "2345 1,9 L                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-4519R",
      "text": "2345 1,9 R                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-4525L",
      "text": "2345 2,5 L                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-4525R",
      "text": "2345 2,5 R                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-63LG",
      "text": "3463/L/G                                                              ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-63LN",
      "text": "3463/L/N                                                              ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-63RG",
      "text": "3463/R/G                                                              ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-63RN",
      "text": "3463/R/N                                                              ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-6A10L",
      "text": "Heusser Riegelschloss 2006 Links, Dornmaß 100",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-6A10R",
      "text": "Heusser Riegelschloss 2006 Rechts, Dornmaß 100",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-6A10S",
      "text": "Heusser Riegelschloss 2006 Lade, Dornmaß 100",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-6A10U",
      "text": "Heusser Riegelschloss 2006 Unten, Dornmaß 100",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-6A30L",
      "text": "Heusser Riegelschloss 2006 Links, Dornmaß 30",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-6A30R",
      "text": "Heusser Riegelschloss 2006 Links, Dornmaß 30",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-6A30S",
      "text": "Heusser Riegelschloss 2006 Lade, Dornmaß 30",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-6A30U",
      "text": "Heusser Riegelschloss 2006 Unten, Dornmaß 30",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-6A40L",
      "text": "Heusser Riegelschloss 2006 Links, Dornmaß 40",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-6A40R",
      "text": "Heusser Riegelschloss 2006 Rechts, Dornmaß 40",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-6A40S",
      "text": "Heusser Riegelschloss 2006 Lade, Dornmaß 40",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-6A40U",
      "text": "Heusser Riegelschloss 2006 Unten, Dornmaß 40",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-6A50L",
      "text": "Heusser Riegelschloss 2006 Links, Dornmaß 50",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-6A50R",
      "text": "Heusser Riegelschloss 2006 Rechts, Dornmaß 50",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-6A50S",
      "text": "Heusser Riegelschloss 2006 Lade, Dornmaß 50",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-6A50U",
      "text": "Heusser Riegelschloss 2006 Unten, Dornmaß 50",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-6A60L",
      "text": "Heusser Riegelschloss 2006 Links, Dornmaß 60",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-6A60R",
      "text": "Heusser Riegelschloss 2006 Rechts, Dornmaß 60",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-6A60S",
      "text": "Heusser Riegelschloss 2006 Lade, Dornmaß 60",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-6A60U",
      "text": "Heusser Riegelschloss 2006 Unten, Dornmaß 60",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-6A80L",
      "text": "Heusser Riegelschloss 2006 Links, Dornmaß 80",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-6A80R",
      "text": "Heusser Riegelschloss 2006 Rechts, Dornmaß 80",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-6A80S",
      "text": "Heusser Riegelschloss 2006 Lade, Dornmaß 80",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-6A80U",
      "text": "Heusser Riegelschloss 2006 Unten, Dornmaß 80",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-81LG2",
      "text": "3481/L/G/2Z                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-81LGK",
      "text": "3481/L/G/K                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-81LN2",
      "text": "3481/L/N/2Z                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-81LNK",
      "text": "3481/L/N/K                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-81RG2",
      "text": "3481/R/G/2Z                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-81RGK",
      "text": "3481/R/G/K                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-81RN2",
      "text": "3481/R/N/2Z                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-81RNK",
      "text": "3481/R/N/K                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83L12",
      "text": "3483/L/11/2Z                                                          ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83L1K",
      "text": "3483/L/11/K                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83L22",
      "text": "3483/L/21/2Z                                                          ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83L2K",
      "text": "3483/L/21/K                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83L32",
      "text": "3483/L/31/2Z                                                          ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83L3K",
      "text": "3483/L/31/K                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83L42",
      "text": "3483/L/41/2Z                                                          ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83L4K",
      "text": "3483/L/41/K                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83L52",
      "text": "3483/L/51/2Z                                                          ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83L5K",
      "text": "3483/L/51/K                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83L62",
      "text": "3483/L/61/2Z                                                          ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83L6K",
      "text": "3483/L/61/K                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83L72",
      "text": "3483/L/71/2Z                                                          ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83L7K",
      "text": "3483/L/71/K                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83LA2",
      "text": "3483/L/70/2Z                                                          ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83LAK",
      "text": "3483/L/70/K                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83LB2",
      "text": "3483/L/40/2Z                                                          ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83LBK",
      "text": "3483/L/40/K                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83LE2",
      "text": "3483/L/30/2Z                                                          ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83LEK",
      "text": "3483/L/30/K                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83LF2",
      "text": "3483/L/50/2Z                                                          ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83LFK",
      "text": "3483/L/50/K                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83LK2",
      "text": "3483/L/10/2Z                                                          ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83LKK",
      "text": "3483/L/10/K                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83LX2",
      "text": "3483/L/20/2Z                                                          ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83LXK",
      "text": "3483/L/20/K                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83LY2",
      "text": "3483/L/60/2Z                                                          ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83LYK",
      "text": "3483/L/60/K                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83R12",
      "text": "3483/R/11/2Z                                                          ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83R1K",
      "text": "3483/R/11/K                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83R22",
      "text": "3483/R/21/2Z                                                          ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83R2K",
      "text": "3483/R/21/K                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83R32",
      "text": "3483/R/31/2Z                                                          ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83R3K",
      "text": "3483/R/31/K                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83R42",
      "text": "3483/R/41/2Z                                                          ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83R4K",
      "text": "3483/R/41/K                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83R52",
      "text": "3483/R/51/2Z                                                          ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83R5K",
      "text": "3483/R/51/K                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83R62",
      "text": "3483/R/61/2Z                                                          ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83R6K",
      "text": "3483/R/61/K                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83R72",
      "text": "3483/R/71/2Z                                                          ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83R7K",
      "text": "3483/R/71/K                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83RA2",
      "text": "3483/R/70/2Z                                                          ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83RAK",
      "text": "3483/R/70/K                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83RB2",
      "text": "3483/R/40/2Z                                                          ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83RBK",
      "text": "3483/R/40/K                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83RE2",
      "text": "3483/R/30/2Z                                                          ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83REK",
      "text": "3483/R/30/K                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83RF2",
      "text": "3483/R/50/2Z                                                          ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83RFK",
      "text": "3483/R/50/K                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83RK2",
      "text": "3483/R/10/2Z                                                          ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83RKK",
      "text": "3483/R/10/K                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83RX2",
      "text": "3483/R/20/2Z                                                          ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83RXK",
      "text": "3483/R/20/K                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83RY2",
      "text": "3483/R/60/2Z                                                          ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-83RYK",
      "text": "3483/R/60/K                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-89LG2",
      "text": "3489/L/G/2Z                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-89LGK",
      "text": "3489/L/G/K                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-89LN2",
      "text": "3489/L/N/2Z                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-89LNK",
      "text": "3489/L/N/K                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-89RG2",
      "text": "3489/R/G/2Z                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-89RGK",
      "text": "3489/R/G/K                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-89RN2",
      "text": "3489/R/N/2Z                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-89RNK",
      "text": "3489/R/N/K                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-91LGK",
      "text": "3491/L/G/K                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-91LNK",
      "text": "3491/L/N/K                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-91RGK",
      "text": "3491/R/G/K                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-91RNK",
      "text": "3491/R/N/K                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-93LG2",
      "text": "3493/L/G/2Z                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-93LGK",
      "text": "3493/L/G/K                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-93LN2",
      "text": "3493/L/N/2Z                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-93LNK",
      "text": "3493/L/N/K                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-93RG2",
      "text": "3493/R/G/2Z                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-93RGK",
      "text": "3493/R/G/K                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-93RN2",
      "text": "3493/R/N/2Z                                                           ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-93RNK",
      "text": "3493/R/N/K                                                            ",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "CH-H1129",
      "text": "HEBEL TYPE 1129-16                                                    ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-H1136",
      "text": "HEBEL TYPE 1136 UNBEKANNT                                             ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-M1",
      "text": "MITNEHMER M-1                                                         ",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "CH-M11",
      "text": "MITNEHMER M-11                                                        ",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "CH-M11B",
      "text": "MITNEHMER M-11B                                                       ",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "CH-M2",
      "text": "MITNEHMER M-2                                                         ",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "CH-M24",
      "text": "MITNEHMER M-24                                                        ",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "CH-M4",
      "text": "MITNEHMER M-4                                                         ",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "CH-M43L",
      "text": "MITNEHMER M-43L                                                       ",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "CH-M44",
      "text": "MITNEHMER M-44                                                        ",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "CH-M45",
      "text": "MITNEHMER M-45                                                        ",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "CH-M46",
      "text": "MITNEHMER M-46                                                        ",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "CH-M5",
      "text": "MITNEHMER M-5                                                         ",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "CH-M6",
      "text": "MITNEHMER M-6                                                         ",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "CH-M74",
      "text": "MITNEHMER M-74                                                        ",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "CH-M75",
      "text": "MITNEHMER M-75                                                        ",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "CH-R10",
      "text": "HEBEL TYPE 1129-10                                                    ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R11",
      "text": "HEBEL TYPE 1129-11                                                    ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R12",
      "text": "HEBEL TYPE 1129-12                                                    ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R13",
      "text": "HEBEL TYPE 1129-13                                                    ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R14",
      "text": "HEBEL TYPE 1129-14                                                    ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R14A",
      "text": "HEBEL TYPE 1129-14A                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R15",
      "text": "HEBEL TYPE 1129-15                                                    ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R16",
      "text": "Hebel Type 1129-16",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R17",
      "text": "Hebel Type 1129-17",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R18",
      "text": "Hebel Type 1129-18",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R18A",
      "text": "Hebel Type 1129-18A",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R19",
      "text": "Hebel Type 1129-19",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R20",
      "text": "Hebel Type 1129-20",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6",
      "text": "HEBEL TYPE 1129-6                                                     ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R60",
      "text": "HEBEL TYPE 1061-6Q                                                    ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R601",
      "text": "HEBEL TYPE 1061-6Q1                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R602",
      "text": "HEBEL TYPE 1061-6Q2                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R66",
      "text": "HEBEL TYPE 1061-66                                                    ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R68",
      "text": "HEBEL TYPE 1061-68                                                    ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6A",
      "text": "HEBEL TYPE 1061-6A                                                    ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6A1",
      "text": "HEBEL TYPE 1061-6A1                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6A2",
      "text": "HEBEL TYPE 1061-6A2                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6B",
      "text": "HEBEL TYPE 1061-6B                                                    ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6B1",
      "text": "HEBEL TYPE 1061-6B1                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6B2",
      "text": "HEBEL TYPE 1061-6B2                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6C",
      "text": "HEBEL TYPE 1061-6C                                                    ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6C1",
      "text": "HEBEL TYPE 1061-6C1                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6C2",
      "text": "HEBEL TYPE 1061-6C2                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6E",
      "text": "HEBEL TYPE 1061-6E                                                    ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6E1",
      "text": "HEBEL TYPE 1061-6E1                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6E2",
      "text": "HEBEL TYPE 1061-6E2                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6E3",
      "text": "HEBEL TYPE 1061-6E3                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6H",
      "text": "HEBEL TYPE 1061-6H                                                    ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6H2",
      "text": "HEBEL TYPE 1061-6H2                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6H3",
      "text": "HEBEL TYPE 1061-6H3                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6H4",
      "text": "HEBEL TYPE 1061-6H4                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6M",
      "text": "HEBEL TYPE 1061-6M                                                    ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6M1",
      "text": "HEBEL TYPE 1061-6M1                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6S",
      "text": "HEBEL TYPE 1061-6S                                                    ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6S1",
      "text": "HEBEL TYPE 1061-6S1                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6S4",
      "text": "HEBEL TYPE 1061-6S4                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6T",
      "text": "HEBEL TYPE 1061-6T                                                    ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6T1",
      "text": "HEBEL TYPE 1061-6T1                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6T2",
      "text": "HEBEL TYPE 1061-6T2                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6U",
      "text": "HEBEL TYPE 1061-6U                                                    ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6U1",
      "text": "HEBEL TYPE 1061-6U1                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6U2",
      "text": "HEBEL TYPE 1061-6U2                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6U3",
      "text": "HEBEL TYPE 1061-6U3                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6V",
      "text": "HEBEL TYPE 1061-6V                                                    ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6V1",
      "text": "HEBEL TYPE 1061-6V1                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6V2",
      "text": "HEBEL TYPE 1061-6V2                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6V3",
      "text": "HEBEL TYPE 1061-6V3                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6W",
      "text": "HEBEL TYPE 1061-6W                                                    ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6W1",
      "text": "HEBEL TYPE 1061-6W1                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6W2",
      "text": "HEBEL TYPE 1061-6W2                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6W3",
      "text": "HEBEL TYPE 1061-6W3                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6X",
      "text": "HEBEL TYPE 1061-6X                                                    ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6X1",
      "text": "HEBEL TYPE 1061-6X1                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6X2",
      "text": "HEBEL TYPE 1061-6X2                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6X3",
      "text": "HEBEL TYPE 1061-6X3                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6Y",
      "text": "HEBEL TYPE 1061-6Y                                                    ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6Y2",
      "text": "HEBEL TYPE 1061-6Y2                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6Y3",
      "text": "HEBEL TYPE 1061-6Y3                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6Y4",
      "text": "HEBEL TYPE 1061-6Y4                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6Z",
      "text": "HEBEL TYPE 1061-6Z                                                    ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6Z1",
      "text": "HEBEL TYPE 1061-6Z1                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6Z2",
      "text": "HEBEL TYPE 1061-6Z2                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R6ZK",
      "text": "HEBEL TYPE 1061-6ZK  (STD)                                            ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R7",
      "text": "HEBEL TYPE 1129-7                                                     ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R70",
      "text": "HEBEL TYPE 1061-70                                                    ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R8",
      "text": "HEBEL TYPE 1129-8                                                     ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R9",
      "text": "HEBEL TYPE 1129-9                                                     ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R960",
      "text": "HEBEL TYPE 1061-96Q                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R9601",
      "text": "HEBEL TYPE 1061-96Q1                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R9602",
      "text": "HEBEL TYPE 1061-96Q2                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96A",
      "text": "HEBEL TYPE 1061-96A                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96A1",
      "text": "HEBEL TYPE 1061-96A1                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96A2",
      "text": "HEBEL TYPE 1061-96A2                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96B",
      "text": "HEBEL TYPE 1061-96B                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96B1",
      "text": "HEBEL TYPE 1061-96B1                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96B2",
      "text": "HEBEL TYPE 1061-96B2                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96C",
      "text": "HEBEL TYPE 1061-96C                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96C1",
      "text": "HEBEL TYPE 1061-96C1                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96C2",
      "text": "HEBEL TYPE 1061-96C2                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96E",
      "text": "HEBEL TYPE 1061-96E                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96E1",
      "text": "HEBEL TYPE 1061-96E1                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96E2",
      "text": "HEBEL TYPE 1061-96E2                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96E3",
      "text": "HEBEL TYPE 1061-96E3                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96H",
      "text": "HEBEL TYPE 1061-96H                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96H2",
      "text": "HEBEL TYPE 1061-96H2                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96H3",
      "text": "HEBEL TYPE 1061-96H3                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96H4",
      "text": "HEBEL TYPE 1061-96H4                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96M",
      "text": "HEBEL TYPE 1061-96M                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96M1",
      "text": "HEBEL TYPE 1061-96M1                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96S",
      "text": "HEBEL TYPE 1061-96S                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96S2",
      "text": "HEBEL TYPE 1061-96S2                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96S4",
      "text": "HEBEL TYPE 1061-96S4                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96T",
      "text": "HEBEL TYPE 1061-96T                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96T1",
      "text": "HEBEL TYPE 1061-96T1                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96T2",
      "text": "HEBEL TYPE 1061-96T2                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96U",
      "text": "HEBEL TYPE 1061-96U                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96U1",
      "text": "HEBEL TYPE 1061-96U1                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96U2",
      "text": "HEBEL TYPE 1061-96U2                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96U3",
      "text": "HEBEL TYPE 1061-96U3                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96V",
      "text": "HEBEL TYPE 1061-96V                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96V1",
      "text": "HEBEL TYPE 1061-96V1                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96V2",
      "text": "HEBEL TYPE 1061-96V2                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96V3",
      "text": "HEBEL TYPE 1061-96V3                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96W",
      "text": "HEBEL TYPE 1061-96W                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96W1",
      "text": "HEBEL TYPE 1061-96W1                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96W2",
      "text": "HEBEL TYPE 1061-96W2                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96W3",
      "text": "HEBEL TYPE 1061-96W3                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96X",
      "text": "HEBEL TYPE 1061-96X                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96X1",
      "text": "HEBEL TYPE 1061-96X1                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96X2",
      "text": "HEBEL TYPE 1061-96X2                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96X3",
      "text": "HEBEL TYPE 1061-96X3                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96Y",
      "text": "HEBEL TYPE 1061-96Y                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96Y2",
      "text": "HEBEL TYPE 1061-96Y2                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96Y3",
      "text": "HEBEL TYPE 1061-96Y3                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96Y4",
      "text": "HEBEL TYPE 1061-96Y4                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96Z",
      "text": "HEBEL TYPE 1061-96Z                                                   ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96Z1",
      "text": "HEBEL TYPE 1061-96Z1                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96Z2",
      "text": "HEBEL TYPE 1061-96Z2                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CH-R96ZK",
      "text": "HEBEL TYPE 1061-96ZK                                                  ",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "CK",
      "text": "D-line®-Knauf",
      "cont": "KNAUFFORM",
      "prio": ""
    },
    {
      "code": "CLA",
      "text": "Classroom Funktion",
      "cont": "SPERROPTION",
      "prio": ""
    },
    {
      "code": "COD",
      "text": "Kodierteil",
      "cont": "",
      "prio": ""
    },
    {
      "code": "CP",
      "text": "Chrom poliert",
      "cont": "OBERFLÄCHE",
      "prio": ""
    },
    {
      "code": "CPV",
      "text": "Chrom voll poliert",
      "cont": "OBERFLÄCHE",
      "prio": ""
    },
    {
      "code": "CR",
      "text": "Chrom",
      "cont": "OBERFLÄCHE",
      "prio": ""
    },
    {
      "code": "CU",
      "text": "Steuereinheit",
      "cont": "MONTAGEART",
      "prio": ""
    },
    {
      "code": "CU0",
      "text": "Online-Steuereinheit",
      "cont": "MONTAGEART",
      "prio": ""
    },
    {
      "code": "CUS",
      "text": "Steuereinheit",
      "cont": "MONTAGEART",
      "prio": ""
    },
    {
      "code": "CZ-FK",
      "text": "Flachknauf CZ",
      "cont": "KNAUFFORM",
      "prio": ""
    },
    {
      "code": "D",
      "text": "Dienstleistung",
      "cont": "SORTIMENT",
      "prio": ""
    },
    {
      "code": "D04",
      "text": "4 Abzugsstellungen 0°, 90°, 180°, 270°",
      "cont": "SCHLÜSSELABZUG_LW",
      "prio": ""
    },
    {
      "code": "D04K",
      "text": "MIFARE® DESFire® 4K",
      "cont": "IM_TECHNOLOGIE",
      "prio": ""
    },
    {
      "code": "D4K",
      "text": "Identtechnologie Desfire 4K",
      "cont": "IM_TECHNOLOGIE",
      "prio": ""
    },
    {
      "code": "DB",
      "text": "für Deutsche Bahn",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "DPM25",
      "text": "Münzpfandschlosszylinder",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "DPMLI1E",
      "text": "Depomat® DPM80 links 1 EUR",
      "cont": "BEFESTIGUNG_EINBAU",
      "prio": ""
    },
    {
      "code": "DPMRE1E",
      "text": "Depomat® DPM80 rechts 1 EUR",
      "cont": "BEFESTIGUNG_EINBAU",
      "prio": ""
    },
    {
      "code": "DPX",
      "text": "",
      "cont": "",
      "prio": ""
    },
    {
      "code": "DR",
      "text": "Drücker",
      "cont": "MODELL",
      "prio": ""
    },
    {
      "code": "DRZ22",
      "text": "Druckzylinder 22 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "DRZ22-S",
      "text": "Druckzylinder 22 mm SYMO",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "DRZ25",
      "text": "Druckzylinder 25 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "DRZ28",
      "text": "Druckzylinder 28 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "DRZ28-S",
      "text": "Druckzylinder 28 mm SYMO",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "DU",
      "text": "Duplo-Schlüssel",
      "cont": "SCHLÜSSELFUNKTION",
      "prio": ""
    },
    {
      "code": "DU-A",
      "text": "Duplofunktion außen",
      "cont": "BES_SPERRFUNKTION",
      "prio": ""
    },
    {
      "code": "DU-B",
      "text": "Duplofunktion beidseitig",
      "cont": "BES_SPERRFUNKTION",
      "prio": ""
    },
    {
      "code": "DU-I",
      "text": "Duplofunktion innen",
      "cont": "BES_SPERRFUNKTION",
      "prio": ""
    },
    {
      "code": "DV70",
      "text": "7 mm",
      "cont": "DRÜCKERVIERKANT",
      "prio": ""
    },
    {
      "code": "DV80",
      "text": "8 mm",
      "cont": "DRÜCKERVIERKANT",
      "prio": ""
    },
    {
      "code": "DV85",
      "text": "8,5 mm",
      "cont": "DRÜCKERVIERKANT",
      "prio": ""
    },
    {
      "code": "DV90",
      "text": "9 mm",
      "cont": "DRÜCKERVIERKANT",
      "prio": ""
    },
    {
      "code": "DZ",
      "text": "Doppelzylinder Europrofil",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "DZ-M",
      "text": "Doppelzylinder Europrofil Modul",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "DZ-S",
      "text": "Doppelzylinder Europrofil SYMO",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "E",
      "text": "Elektronisches Schließsystem",
      "cont": "SORTIMENT",
      "prio": ""
    },
    {
      "code": "E&M",
      "text": "Elektronisches & Mechanisches Schließsystem",
      "cont": "",
      "prio": ""
    },
    {
      "code": "E00",
      "text": "Ohne Lochung",
      "cont": "ENTFERNUNG",
      "prio": ""
    },
    {
      "code": "E10",
      "text": "Europrofil 100 mm",
      "cont": "ENTFERNUNG",
      "prio": ""
    },
    {
      "code": "E11",
      "text": "Europrofil 110 mm",
      "cont": "ENTFERNUNG",
      "prio": ""
    },
    {
      "code": "E4000001",
      "text": "E.ZU.ALLG.NG3 - Notstromgerät",
      "cont": "ARTIKEL",
      "prio": ""
    },
    {
      "code": "E47",
      "text": "Europrofil 47 mm",
      "cont": "ENTFERNUNG",
      "prio": ""
    },
    {
      "code": "E48",
      "text": "Europrofil 48 mm",
      "cont": "ENTFERNUNG",
      "prio": ""
    },
    {
      "code": "E49",
      "text": "Europrofil 49 mm",
      "cont": "ENTFERNUNG",
      "prio": ""
    },
    {
      "code": "E55",
      "text": "Europrofil 55 mm",
      "cont": "ENTFERNUNG",
      "prio": ""
    },
    {
      "code": "E62",
      "text": "Europrofil 62 mm",
      "cont": "ENTFERNUNG",
      "prio": ""
    },
    {
      "code": "E70",
      "text": "Europrofil 70 mm",
      "cont": "ENTFERNUNG",
      "prio": ""
    },
    {
      "code": "E72",
      "text": "Europrofil 72 mm",
      "cont": "ENTFERNUNG",
      "prio": ""
    },
    {
      "code": "E78",
      "text": "Europrofil 78 mm",
      "cont": "ENTFERNUNG",
      "prio": ""
    },
    {
      "code": "E85",
      "text": "Europrofil 85 mm",
      "cont": "ENTFERNUNG",
      "prio": ""
    },
    {
      "code": "E88",
      "text": "Europrofil 88 mm",
      "cont": "ENTFERNUNG",
      "prio": ""
    },
    {
      "code": "E90",
      "text": "Europrofil 90 mm",
      "cont": "ENTFERNUNG",
      "prio": ""
    },
    {
      "code": "E92",
      "text": "Europrofil 92 mm",
      "cont": "ENTFERNUNG",
      "prio": ""
    },
    {
      "code": "E98",
      "text": "Europrofil 98,5 mm",
      "cont": "ENTFERNUNG",
      "prio": ""
    },
    {
      "code": "EBT",
      "text": "EMZY Bluetooth",
      "cont": "KNAUFFORM",
      "prio": ""
    },
    {
      "code": "EK",
      "text": "für elektronisches CISA®-Aufschraubschloss",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "EM",
      "text": "Edelstahl",
      "cont": "OBERFLÄCHE",
      "prio": ""
    },
    {
      "code": "EP",
      "text": "Edelstahl poliert",
      "cont": "OBERFLÄCHE",
      "prio": ""
    },
    {
      "code": "EPS",
      "text": "",
      "cont": "",
      "prio": ""
    },
    {
      "code": "EPSM",
      "text": "",
      "cont": "",
      "prio": ""
    },
    {
      "code": "ERKLALI",
      "text": "ERKLALI - ERK LADE-LI",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "ERKLARE",
      "text": "ERKLARE - ERK LADE-RE",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "ERKLI",
      "text": "Möbelschloss ERK links",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "ERKRE",
      "text": "Möbelschloss ERK rechts",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "ES3",
      "text": "3 Eigenschlüssel",
      "cont": "FLEX_INNEN",
      "prio": ""
    },
    {
      "code": "ESPLI",
      "text": "Möbelschloss ESP links",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "ESPRE",
      "text": "Möbelschloss ESP rechts",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "EZ",
      "text": "Einsatzzylinder",
      "cont": "MODELL",
      "prio": ""
    },
    {
      "code": "F/33",
      "text": "Fichet-Zylinder",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "F/51",
      "text": "Fichet®-Zylinder 51 mm",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "F/80",
      "text": "Fichet®-Zylinder 80 mm",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "F06",
      "text": "6 Abzugsstellungen 0°, 60°, 120°, 180°, 240°, 300°",
      "cont": "SCHLÜSSELABZUG_LW",
      "prio": ""
    },
    {
      "code": "FAB",
      "text": "Farbpunkt Aubergine",
      "cont": "FARBPUNKT",
      "prio": ""
    },
    {
      "code": "FAP",
      "text": "Anti-Panik",
      "cont": "FUNKTION",
      "prio": ""
    },
    {
      "code": "FBL",
      "text": "Farbpunkt Blau",
      "cont": "FARBPUNKT",
      "prio": ""
    },
    {
      "code": "FBR",
      "text": "Farbpunkt Braun",
      "cont": "FARBPUNKT",
      "prio": ""
    },
    {
      "code": "FDR",
      "text": "Farbpunkt Dunkelrot",
      "cont": "FARBPUNKT",
      "prio": ""
    },
    {
      "code": "FED",
      "text": "Federrückzug",
      "cont": "SCHLÜSSELABZUG_LW",
      "prio": ""
    },
    {
      "code": "FEG",
      "text": "FEG - FARBPUNKT - EISGRÜN",
      "cont": "FARBPUNKT",
      "prio": ""
    },
    {
      "code": "FGE",
      "text": "Farbpunkt Gelb",
      "cont": "FARBPUNKT",
      "prio": ""
    },
    {
      "code": "FGL",
      "text": "Funktion: Gefederte Sperrnase Links",
      "cont": "FUNKTION",
      "prio": ""
    },
    {
      "code": "FGN",
      "text": "Farbpunkt Grün",
      "cont": "FARBPUNKT",
      "prio": ""
    },
    {
      "code": "FK",
      "text": "Flachknauf",
      "cont": "KNAUFFORM",
      "prio": ""
    },
    {
      "code": "FL1",
      "text": "Freilauffunktion einfach",
      "cont": "SPERROPTION",
      "prio": ""
    },
    {
      "code": "FLU",
      "text": "Lageunabhängige Einbausituation",
      "cont": "FUNKTION",
      "prio": ""
    },
    {
      "code": "FP",
      "text": "für italienisches Tor",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "FPS",
      "text": "",
      "cont": "",
      "prio": ""
    },
    {
      "code": "FRS",
      "text": "Farbpunkt Rosa",
      "cont": "FARBPUNKT",
      "prio": ""
    },
    {
      "code": "FRT",
      "text": "Farbpunkt Rot",
      "cont": "FARBPUNKT",
      "prio": ""
    },
    {
      "code": "FS",
      "text": "für Feuerschutztüren",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "FSR",
      "text": "Schließnasenrastung",
      "cont": "FUNKTION",
      "prio": ""
    },
    {
      "code": "FSW",
      "text": "Farbpunkt Schwarz",
      "cont": "FARBPUNKT",
      "prio": ""
    },
    {
      "code": "FVI",
      "text": "Farbpunkt Violett",
      "cont": "FARBPUNKT",
      "prio": ""
    },
    {
      "code": "FVS",
      "text": "Verriegelte Schließnase",
      "cont": "SCHLIESSNASENFUNKTIO",
      "prio": ""
    },
    {
      "code": "FZG",
      "text": "Freilauffunktion für Getriebeschlösser",
      "cont": "FUNKTION",
      "prio": ""
    },
    {
      "code": "G",
      "text": "Gesamtportfolio",
      "cont": "SCHLÜSSELART",
      "prio": ""
    },
    {
      "code": "G0",
      "text": "Gold",
      "cont": "SCHLÜSSELART",
      "prio": ""
    },
    {
      "code": "G0D",
      "text": "für Godrej®",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "GB",
      "text": "Gelocht-blind",
      "cont": "LOCHUNG",
      "prio": ""
    },
    {
      "code": "GBKF",
      "text": "Für Möbelschlösser BKF",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "GBKR",
      "text": "Für Möbelschlösser BKR",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "GE",
      "text": "Gelb",
      "cont": "FARBE",
      "prio": ""
    },
    {
      "code": "GEF",
      "text": "Gefahrenfunktion",
      "cont": "SPERROPTION",
      "prio": ""
    },
    {
      "code": "GEH",
      "text": "Gehäuse",
      "cont": "",
      "prio": ""
    },
    {
      "code": "GERK",
      "text": "GERK - GERICHTET FÜR ERK",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "GESP",
      "text": "Für Espagnoletten-Schloss",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "GG",
      "text": "Gelocht-gelocht",
      "cont": "LOCHUNG",
      "prio": ""
    },
    {
      "code": "GH",
      "text": "Generalhauptschlüssel",
      "cont": "SCHLÜSSELART",
      "prio": ""
    },
    {
      "code": "GK",
      "text": "Griffmuldenknauf",
      "cont": "KNAUFFORM",
      "prio": ""
    },
    {
      "code": "GKMR",
      "text": "Griffknopf 38 mm für Möbeltüren",
      "cont": "ROSETTE",
      "prio": ""
    },
    {
      "code": "GLIP",
      "text": "Für LIPS®-Schließnase",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "GM0N",
      "text": "gerichtet für Monarch®-Schließnase",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "GMAR",
      "text": "Für Möbelschloss MAR",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "GMAT",
      "text": "Für Möbelschloss MAT",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "GMER",
      "text": "Für Möbelschloss MER",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "GMET",
      "text": "Für Möbelschloss MET",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "GN",
      "text": "Grün",
      "cont": "FARBE",
      "prio": ""
    },
    {
      "code": "GSES",
      "text": "Für Möbelschloss SES",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "GTA1",
      "text": "Glastürplatte 1 hoch",
      "cont": "ROSETTE",
      "prio": ""
    },
    {
      "code": "GTA2",
      "text": "Glastürplatte 2 hoch",
      "cont": "ROSETTE",
      "prio": ""
    },
    {
      "code": "GTA3",
      "text": "Glastürplatte 3 hoch",
      "cont": "ROSETTE",
      "prio": ""
    },
    {
      "code": "GTA4",
      "text": "Glastürplatte 4 hoch",
      "cont": "ROSETTE",
      "prio": ""
    },
    {
      "code": "GTA5",
      "text": "Glastürplatte 5 hoch",
      "cont": "ROSETTE",
      "prio": ""
    },
    {
      "code": "GTA6",
      "text": "Glastürplatte 6 hoch",
      "cont": "ROSETTE",
      "prio": ""
    },
    {
      "code": "GTB1",
      "text": "Glastürplatte 1 breit",
      "cont": "ROSETTE",
      "prio": ""
    },
    {
      "code": "GTB2",
      "text": "Glastürplatte 2 breit",
      "cont": "ROSETTE",
      "prio": ""
    },
    {
      "code": "GTB3",
      "text": "Glastürplatte 3 breit",
      "cont": "ROSETTE",
      "prio": ""
    },
    {
      "code": "GTB4",
      "text": "Glastürplatte 4 breit",
      "cont": "ROSETTE",
      "prio": ""
    },
    {
      "code": "GTB5",
      "text": "Glastürplatte 5 breit",
      "cont": "ROSETTE",
      "prio": ""
    },
    {
      "code": "GTB6",
      "text": "Glastürplatte 6 breit",
      "cont": "ROSETTE",
      "prio": ""
    },
    {
      "code": "GWB4",
      "text": "Gewindebohrung M4",
      "cont": "BEFESTIGUNG_EINBAU",
      "prio": ""
    },
    {
      "code": "GWB6",
      "text": "1 Gewinde M6",
      "cont": "BANDUNG",
      "prio": ""
    },
    {
      "code": "GYAL",
      "text": "Für Yale®-Schließnase",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "H",
      "text": "Hauptschlüssel",
      "cont": "SCHLÜSSELART",
      "prio": ""
    },
    {
      "code": "H0T-A",
      "text": "Hotelfunktion außen",
      "cont": "SPERROPTION",
      "prio": ""
    },
    {
      "code": "H12",
      "text": "Hangschloss mit Einsatz, lichte Weite 12 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "H18",
      "text": "Hangschloss, lichte Weite 18 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "H24",
      "text": "Hangschloss, lichte Weite 24 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "H30",
      "text": "Hangschloss, lichte Weite 30 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "H50",
      "text": "Hangschloss, lichte Weite 50 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "H6326",
      "text": "H6326 - SENKRECHTER HEBEL",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H6423",
      "text": "Hebel senkrecht H6423",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H7218",
      "text": "Hebel waagrecht H72, 18 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H7226",
      "text": "Hebel waagrecht H72, 26 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H7227",
      "text": "Hebel waagrecht H72, 27 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H7233",
      "text": "Hebel waagrecht H72, 33 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H7237",
      "text": "Hebel waagrecht H72, 37 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H7240",
      "text": "Hebel waagrecht H72, 40 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H7245",
      "text": "Hebel waagrecht H72, 45 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H7250",
      "text": "Hebel waagrecht H72, 50 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H7255",
      "text": "Hebel waagrecht H72, 55 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H7260",
      "text": "Hebel waagrecht H72, 60 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H7265",
      "text": "Hebel waagrecht H72, 65 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H7270",
      "text": "Hebel waagrecht H72, 70 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H7275",
      "text": "Hebel waagrecht H72, 75 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H7280",
      "text": "Hebel waagrecht H72, 80 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H7285",
      "text": "Hebel waagrecht H72, 85 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H7326",
      "text": "Hebel senkrecht H73, 26 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H7333",
      "text": "Hebel senkrecht H73, 33 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H7336",
      "text": "Hebel senkrecht H73, 36 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H7340",
      "text": "Hebel senkrecht H73, 40 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H7345",
      "text": "Hebel senkrecht H73, 45 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H7350",
      "text": "Hebel senkrecht H73, 50 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H7355",
      "text": "Hebel senkrecht H73, 55 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H7360",
      "text": "Hebel senkrecht H73, 60 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H7365",
      "text": "Hebel senkrecht H73, 65 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H7370",
      "text": "Hebel senkrecht H73, 70 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H7375",
      "text": "Hebel senkrecht H73, 75 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H7380",
      "text": "Hebel senkrecht H73, 80 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H8733",
      "text": "Hebel waagrecht H87, 33 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H8740",
      "text": "Hebel waagrecht H87, 40 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H8745",
      "text": "Hebel waagrecht H87, 45 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H8765",
      "text": "Hebel waagrecht H87, 65 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H8845",
      "text": "Hebel senkrecht H88, 45 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H8865",
      "text": "Hebel senkrecht H88, 65 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H8927",
      "text": "Hebel waagrecht H89, 27 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H9048",
      "text": "Hebel senkrecht H90, 48 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H9139",
      "text": "Hebel waagrecht H91, 39 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H9159",
      "text": "Hebel waagrecht H91, 59 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H9165",
      "text": "Hebel waagrecht H91, 65 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H9241",
      "text": "Hebel waagrecht H92, 41 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H9248",
      "text": "Hebel waagrecht H92, 48 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H9252",
      "text": "Hebel waagrecht H92, 52 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H9433",
      "text": "Hebel senkrecht H94, 33 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H9441",
      "text": "Hebel senkrecht H94, 41 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H9459",
      "text": "Hebel senkrecht H94, 59 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H9545",
      "text": "Hebel waagrecht H95, 45 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H9550",
      "text": "Hebel waagrecht H95, 50 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H9633",
      "text": "Hebel senkrecht H96, 33 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H9645",
      "text": "Hebel senkrecht H96, 45 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H9650",
      "text": "Hebel senkrecht H96, 50 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H9733",
      "text": "Hebel waagrecht H97, 33 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H9737",
      "text": "Hebel waagrecht H97, 37 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H9740",
      "text": "Hebel waagrecht H97, 40 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H9745",
      "text": "Hebel waagrecht H97, 45 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H9750",
      "text": "Hebel waagrecht H97, 50 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H9755",
      "text": "Hebel waagrecht H97, 55 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H9770",
      "text": "Hebel waagrecht H97, 70 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H9847",
      "text": "Hebel waagrecht H98, 47 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "H9939",
      "text": "Hebel senkrecht H99, 39 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "HA",
      "text": "Hangschloss",
      "cont": "MODELL",
      "prio": ""
    },
    {
      "code": "HB",
      "text": "Hebelzylinder",
      "cont": "MODELL",
      "prio": ""
    },
    {
      "code": "HB0230",
      "text": "Hebel waagrecht HB02, 30 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "HB0329",
      "text": "Hebel waagrecht HB03, 29 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "HB0429",
      "text": "Hebel waagrecht HB04, 29 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "HB0628",
      "text": "Hebel waagrecht HB06, 28 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "HB0728",
      "text": "Hebel waagrecht HB07, 28 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "HB0828",
      "text": "Hebel waagrecht HB08, 28 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "HB1029",
      "text": "Hebel waagrecht HB10, 29 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "HB2214",
      "text": "Hebel waagrecht HB 22/14 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "HB2217",
      "text": "Hebel waagrecht HB 22/17 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "HB2222",
      "text": "Hebel waagrecht HB 22/22 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "HB2817",
      "text": "Hebel waagrecht HB 28/17 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "HB2822",
      "text": "Hebel waagrecht HB 28/22 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "HH0133",
      "text": "Hebel waagrecht HH01, 33 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "HH0650",
      "text": "Hebel waagrecht HH06, 50 mm",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "HM24",
      "text": "Hangschloss mit Einsatz, lichte Weite 24 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "HM24-S",
      "text": "Hangschloss mit Modul, lichte Weite 24 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "HMB",
      "text": "Hebelzylinder Europrofil",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "HMB37",
      "text": "HMB37 -",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "HMB50",
      "text": "HMB50 - WAAGRECHTER HEBEL HMB",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "HMB70",
      "text": "Hebel 70 mm für HMB",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "HMB80",
      "text": "Hebel 80 mm für HMB",
      "cont": "HEBEL",
      "prio": ""
    },
    {
      "code": "HU38",
      "text": "Distanzhülse Länge 38,5 mm",
      "cont": "BEFESTIGUNG_EINBAU",
      "prio": ""
    },
    {
      "code": "HZ",
      "text": "Halbzylinder Europrofil",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "HZ-S",
      "text": "Halbzylinder Europrofil SYMO",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "I015",
      "text": "für Zeiss Ikon® I015",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "I016",
      "text": "Zeiss Ikon®-Ausführung",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "I017",
      "text": "Zeiss Ikon®-Ausführung",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "I018",
      "text": "Zeiss Ikon®-Ausführung",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "I019",
      "text": "Zeiss Ikon®-Ausführung",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "I020",
      "text": "für Zeiss Ikon® I020",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "I021",
      "text": "Zeiss Ikon®-Ausführung",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "I023",
      "text": "Zeiss Ikon®-Ausführung",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "I050",
      "text": "für Ikon® 4050",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "I063",
      "text": "für Ikon® 4063",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "I169",
      "text": "Zeiss Ikon®-Ausführung: MMRE 4572",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "ICS",
      "text": "",
      "cont": "",
      "prio": ""
    },
    {
      "code": "IM",
      "text": "Identmedien",
      "cont": "MODELL",
      "prio": ""
    },
    {
      "code": "IRDZ",
      "text": "Italienischer Rundprofilzylinder IRDZ",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "IRW",
      "text": "Identtechnologie iButton R/W",
      "cont": "IM_TECHNOLOGIE",
      "prio": ""
    },
    {
      "code": "IZ",
      "text": "für EVVA-Zusatzschlösser",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "IZ25",
      "text": "Innenzylinder 25 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "IZ28",
      "text": "Innenzylinder 28 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "IZ37",
      "text": "Innenzylinder 37 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "IZ38",
      "text": "Innenzylinder 38 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "K19",
      "text": "für KABA®-Kastenschloss",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "K9000BZ",
      "text": "Zusatzkastenschloss K9000 Bronze-métallisé",
      "cont": "ZUSATZSCHLOSS",
      "prio": ""
    },
    {
      "code": "K9000G0",
      "text": "Zusatzkastenschloss K9000 Gold-métallisé",
      "cont": "ZUSATZSCHLOSS",
      "prio": ""
    },
    {
      "code": "K9000SI",
      "text": "Zusatzkastenschloss K9000 Weißaluminium Silber",
      "cont": "ZUSATZSCHLOSS",
      "prio": ""
    },
    {
      "code": "K9000WS",
      "text": "Zusatzkastenschloss K9000 Reinweiß",
      "cont": "ZUSATZSCHLOSS",
      "prio": ""
    },
    {
      "code": "K900BZ",
      "text": "Zusatzkastenschloss K900 Bronze-métallisé",
      "cont": "ZUSATZSCHLOSS",
      "prio": ""
    },
    {
      "code": "K900G0",
      "text": "Zusatzkastenschloss K900 Gold-métallisé",
      "cont": "ZUSATZSCHLOSS",
      "prio": ""
    },
    {
      "code": "K900SI",
      "text": "Zusatzkastenschloss K900 Weißaluminium Silber",
      "cont": "ZUSATZSCHLOSS",
      "prio": ""
    },
    {
      "code": "K900WS",
      "text": "Zusatzkastenschloss K900 Reinweiß",
      "cont": "ZUSATZSCHLOSS",
      "prio": ""
    },
    {
      "code": "K9020BZ",
      "text": "K9020BZ - K9020 BZ",
      "cont": "ZUSATZSCHLOSS",
      "prio": ""
    },
    {
      "code": "K9020G0",
      "text": "K9020G0 - K9020 GO",
      "cont": "ZUSATZSCHLOSS",
      "prio": ""
    },
    {
      "code": "K9020NS",
      "text": "K9020NS - K9020 NS",
      "cont": "ZUSATZSCHLOSS",
      "prio": ""
    },
    {
      "code": "K920BZ",
      "text": "Sicherheitszusatzschloss K920 bronze",
      "cont": "ZUSATZSCHLOSS",
      "prio": ""
    },
    {
      "code": "K920G0",
      "text": "Sicherheitszusatzschloss K920 gold",
      "cont": "ZUSATZSCHLOSS",
      "prio": ""
    },
    {
      "code": "K920NS",
      "text": "Sicherheitszusatzschloss K920 neusilber",
      "cont": "ZUSATZSCHLOSS",
      "prio": ""
    },
    {
      "code": "KB",
      "text": "Kettenbefestigung",
      "cont": "KETTENBEFESTIGUNG",
      "prio": ""
    },
    {
      "code": "K-CP",
      "text": "Chrom poliert",
      "cont": "KNAUFOBERFLÄCHE",
      "prio": ""
    },
    {
      "code": "K-CR",
      "text": "Chrom",
      "cont": "KNAUFOBERFLÄCHE",
      "prio": ""
    },
    {
      "code": "KER",
      "text": "Kern",
      "cont": "",
      "prio": ""
    },
    {
      "code": "KHZ",
      "text": "Knaufhalbzylinder Europrofil",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "KHZ-S",
      "text": "Knaufhalbzylinder Europrofil SYMO",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "KIK",
      "text": "Carbine®-Zylinder",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "KK",
      "text": "Kegelknauf",
      "cont": "KNAUFFORM",
      "prio": ""
    },
    {
      "code": "KKN",
      "text": "Knaufform: Innenknauf KKN",
      "cont": "KNAUFFORM",
      "prio": ""
    },
    {
      "code": "KKZ",
      "text": "Knaufzylinder beidseitig Europrofil",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "K-MP",
      "text": "Messing poliert",
      "cont": "KNAUFOBERFLÄCHE",
      "prio": ""
    },
    {
      "code": "K-MS",
      "text": "Messing",
      "cont": "KNAUFOBERFLÄCHE",
      "prio": ""
    },
    {
      "code": "K-NI",
      "text": "Nickel",
      "cont": "KNAUFOBERFLÄCHE",
      "prio": ""
    },
    {
      "code": "K-NP",
      "text": "Nickel poliert",
      "cont": "KNAUFOBERFLÄCHE",
      "prio": ""
    },
    {
      "code": "K-PB",
      "text": "Patiniert Braun",
      "cont": "KNAUFOBERFLÄCHE",
      "prio": ""
    },
    {
      "code": "K-PS",
      "text": "Patiniert Schwarz",
      "cont": "KNAUFOBERFLÄCHE",
      "prio": ""
    },
    {
      "code": "KS-A",
      "text": "Kontaktstift außen",
      "cont": "FLEXAUSSEN",
      "prio": ""
    },
    {
      "code": "KS-I",
      "text": "Kontaktstift innen",
      "cont": "FLEX_INNEN",
      "prio": ""
    },
    {
      "code": "K-SW",
      "text": "Schwarz",
      "cont": "KNAUFOBERFLÄCHE",
      "prio": ""
    },
    {
      "code": "KU",
      "text": "KU - KUNDENSCHLÜSSEL ANBEI",
      "cont": "SCHLÜSSELART",
      "prio": ""
    },
    {
      "code": "KV05",
      "text": "Kernende verlängert 5 mm",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "KV10",
      "text": "Kernende verlängert 10 mm",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "KZ",
      "text": "Knaufzylinder Europrofil",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "KZ-A",
      "text": "Erhöhter Zieh- und Bohrschutz außen",
      "cont": "KERNZIEHSCHUTZ",
      "prio": ""
    },
    {
      "code": "KZ-B",
      "text": "Erhöhter Ziehschutz/Bohrschutz beidseitig",
      "cont": "KERNZIEHSCHUTZ",
      "prio": ""
    },
    {
      "code": "KZ-I",
      "text": "Erhöhter Ziehschutz/Bohrschutz innen",
      "cont": "KERNZIEHSCHUTZ",
      "prio": ""
    },
    {
      "code": "KZ-M",
      "text": "Knaufzylinder Europrofil Modul",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "KZ-S",
      "text": "Knaufzylinder Europrofil SYMO",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "L",
      "text": "L-Drücker",
      "cont": "DRÜCKERAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "L01K",
      "text": "Identtechnologie Legic 1K",
      "cont": "IM_TECHNOLOGIE",
      "prio": ""
    },
    {
      "code": "L1K",
      "text": "Identtechnologie Legic 1K",
      "cont": "IM_TECHNOLOGIE",
      "prio": ""
    },
    {
      "code": "LB",
      "text": "Bronze hell",
      "cont": "OBERFLÄCHE",
      "prio": ""
    },
    {
      "code": "LI",
      "text": "Links",
      "cont": "ORIENTIERUNG",
      "prio": ""
    },
    {
      "code": "LSH",
      "text": "Langer Schlüsselhals",
      "cont": "SCHLÜSSELHALS",
      "prio": ""
    },
    {
      "code": "LWA",
      "text": "Schließnasenmitnahme links 0°–90°",
      "cont": "SCHLÜSSELABZUG_LW",
      "prio": ""
    },
    {
      "code": "LWB",
      "text": "Schließnasenmitnahme rechts 0°–90°",
      "cont": "SCHLÜSSELABZUG_LW",
      "prio": ""
    },
    {
      "code": "LWC",
      "text": "Schließnasenmitnahme links 0°–180",
      "cont": "SCHLÜSSELABZUG_LW",
      "prio": ""
    },
    {
      "code": "LWD",
      "text": "Schließnasenmitnahme rechts 0°–180°",
      "cont": "SCHLÜSSELABZUG_LW",
      "prio": ""
    },
    {
      "code": "LWE",
      "text": "Schließnasenmitnahme links 0°–270°",
      "cont": "SCHLÜSSELABZUG_LW",
      "prio": ""
    },
    {
      "code": "LWF",
      "text": "Schließnasenmitnahme rechts 0°–270°",
      "cont": "SCHLÜSSELABZUG_LW",
      "prio": ""
    },
    {
      "code": "LWG",
      "text": "Schließnasenmitnahme rechts/links 0°–90°",
      "cont": "SCHLÜSSELABZUG_LW",
      "prio": ""
    },
    {
      "code": "LWH",
      "text": "Schließnasenmitnahme rechts 45°– links 90°",
      "cont": "SCHLÜSSELABZUG_LW",
      "prio": ""
    },
    {
      "code": "LWI",
      "text": "Schließnasenmitnahme links 45°– rechts 90°",
      "cont": "SCHLÜSSELABZUG_LW",
      "prio": ""
    },
    {
      "code": "M",
      "text": "Mechanisches Schließsystem",
      "cont": "SORTIMENT",
      "prio": ""
    },
    {
      "code": "M.ICS.SW",
      "text": "",
      "cont": "",
      "prio": ""
    },
    {
      "code": "M.MCS.PZ.DZ-S",
      "text": "",
      "cont": "",
      "prio": ""
    },
    {
      "code": "M01K",
      "text": "MIFARE® 1K",
      "cont": "IM_TECHNOLOGIE",
      "prio": ""
    },
    {
      "code": "M04K",
      "text": "MIFARE® 4K",
      "cont": "IM_TECHNOLOGIE",
      "prio": ""
    },
    {
      "code": "M0-S",
      "text": "Modul Europrofil SYMO",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "M107",
      "text": "Mitnehmer KABA",
      "cont": "ROSETTE",
      "prio": ""
    },
    {
      "code": "M1K",
      "text": "Identtechnolgoie Mifare 1K",
      "cont": "IM_TECHNOLOGIE",
      "prio": ""
    },
    {
      "code": "M4K",
      "text": "Identtechnolgoie Mifare 4K",
      "cont": "IM_TECHNOLOGIE",
      "prio": ""
    },
    {
      "code": "MAR30LA",
      "text": "Möbelschloss MAR Lade, Dornmaß 30",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MAR30LI",
      "text": "Möbelschloss MAR links, Dornmaß 30",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MAR30RE",
      "text": "Möbelschloss MAR rechts, Dornmaß 30",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MAR35LA",
      "text": "Möbelschloss MAR Lade, Dornmaß 35",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MAR35LI",
      "text": "Möbelschloss MAR links, Dornmaß 35",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MAR35RE",
      "text": "Möbelschloss MAR rechts, Dornmaß 35",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MAR40LA",
      "text": "Möbelschloss MAR Lade, Dornmaß 40",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MAR40LI",
      "text": "Möbelschloss MAR links, Dornmaß 40",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MAR40RE",
      "text": "Möbelschloss MAR rechts, Dornmaß 40",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MAR45LA",
      "text": "Möbelschloss MAR Lade, Dornmaß 45",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MAR45LI",
      "text": "Möbelschloss MAR links, Dornmaß 45",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MAR45RE",
      "text": "Möbelschloss MAR rechts, Dornmaß 45",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MAR50LA",
      "text": "Möbelschloss MAR Lade, Dornmaß 50",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MAR50LI",
      "text": "Möbelschloss MAR links, Dornmaß 50",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MAR50RE",
      "text": "Möbelschloss MAR rechts, Dornmaß 50",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MAR60LA",
      "text": "Möbelschloss MAR Lade, Dornmaß 60",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MAR60LI",
      "text": "Möbelschloss MAR links, Dornmaß 60",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MAR60RE",
      "text": "Möbelschloss MAR rechts, Dornmaß 60",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MATLI",
      "text": "Möbelschloss MAT links",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MATRE",
      "text": "Möbelschloss MAT rechts",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MB",
      "text": "mittige Bohrung",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "MB19",
      "text": "Hebelzylinder 19 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MB19MSW",
      "text": "Schaltzylinder  MB19",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MB19-S",
      "text": "Hebelzylinder 19 mm SYMO",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MB19SZ",
      "text": "Schaltzylinder 19 mm mit Schalter",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MB19SZ-S",
      "text": "Schaltzylinder 19 mm SYMO mit Schalter",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MB22",
      "text": "Hebelzylinder 22 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MB22K",
      "text": "Hebelzylinder 22 mm für Kirner®",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MB22K-S",
      "text": "Hebelzylinder 22 mm SYMO für Kirner®",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MB22-S",
      "text": "Hebelzylinder 22 mm SYMO",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MB23",
      "text": "Hebelzylinder 23 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MB23CH",
      "text": "Hebelzylinder 23 mm für Brieffach CH",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MB23CH-S",
      "text": "Hebelzylinder 23 mm SYMO für Brieffach CH",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MB23MB",
      "text": "Hebelzylinder 23 mm mittig",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MB23MB-S",
      "text": "Hebelzylinder 23 mm mittig SYMO",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MB23MSW",
      "text": "Hebelzylinder MB23 für Mikroschalter",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MB23SA",
      "text": "Schalterzylinder 23 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MB23SZ",
      "text": "Schaltzylinder 23 mm mit Schalter",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MB23SZ-S",
      "text": "Schaltzylinder 23 mm SYMO mit Schalter",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MB25",
      "text": "Schalterzylinder 25 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MB25DPM",
      "text": "Hebelzylinder DM25 - Depomat",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MB27",
      "text": "Hebelzylinder 27 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MB27R",
      "text": "Hebelzylinder 27 mm für Ruko®-Schließhebel",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MB28ZB",
      "text": "Brieffachzylinder 28 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MB28ZB-S",
      "text": "Brieffachzylinder 28 mm SYMO",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MB30",
      "text": "Hebelzylinder 30 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MB30MB",
      "text": "Hebelzylinder 30 mm mittig",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MB30-S",
      "text": "Hebelzylinder 30 mm SYMO",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MB30SA",
      "text": "Schaltzylinder 30 mm außermittig mit Schalter",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MB30SZ",
      "text": "Schaltzylinder 30 mm mit Schalter",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MCS",
      "text": "Magnet-Code-System (alt)",
      "cont": "SYSTEM",
      "prio": ""
    },
    {
      "code": "MCSM",
      "text": "Magnet-Code-System M (Ikon)",
      "cont": "SYSTEM",
      "prio": ""
    },
    {
      "code": "MCSR",
      "text": "Magnet-Code-System",
      "cont": "SYSTEM",
      "prio": ""
    },
    {
      "code": "MCSRW",
      "text": "Magnet-Code-System Wendeschlüssel",
      "cont": "SYSTEM",
      "prio": ""
    },
    {
      "code": "MCSS",
      "text": "Magnet-Schiebeschloss-System",
      "cont": "SYSTEM",
      "prio": ""
    },
    {
      "code": "MCSW",
      "text": "Magnet-Code-System (alt) Wendeschlüssel",
      "cont": "SYSTEM",
      "prio": ""
    },
    {
      "code": "MER30LA",
      "text": "Möbelschloss MER Lade, Dornmaß 30",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MER30LI",
      "text": "Möbelschloss MER links, Dornmaß 30",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MER30RE",
      "text": "Möbelschloss MER rechts, Dornmaß 30",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MER35LA",
      "text": "Möbelschloss MER Lade, Dornmaß 35",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MER35LI",
      "text": "Möbelschloss MER links, Dornmaß 35",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MER35RE",
      "text": "Möbelschloss MER rechts, Dornmaß 35",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MER40LA",
      "text": "Möbelschloss MER Lade, Dornmaß 40",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MER40LI",
      "text": "Möbelschloss MER links, Dornmaß 40",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MER40RE",
      "text": "Möbelschloss MER rechts, Dornmaß 40",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MER45LA",
      "text": "Möbelschloss MER Lade, Dornmaß 45",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MER45LI",
      "text": "Möbelschloss MER links, Dornmaß 45",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MER45RE",
      "text": "Möbelschloss MER rechts, Dornmaß 45",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MER50LA",
      "text": "Möbelschloss MER Lade, Dornmaß 50",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MER50LI",
      "text": "Möbelschloss MER links, Dornmaß 50",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MER50RE",
      "text": "Möbelschloss MER rechts, Dornmaß 50",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MER60LA",
      "text": "Möbelschloss MER Lade, Dornmaß 60",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MER60LI",
      "text": "Möbelschloss MER links, Dornmaß 60",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MER60RE",
      "text": "Möbelschloss MER rechts, Dornmaß 60",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "METLI",
      "text": "Möbelschloss MET links",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "METRE",
      "text": "Möbelschloss MET rechts",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "MFT",
      "text": "Folientaster",
      "cont": "KNAUFFORM",
      "prio": ""
    },
    {
      "code": "MK",
      "text": "Metallrändelknauf",
      "cont": "KNAUFFORM",
      "prio": ""
    },
    {
      "code": "MKHZ-S",
      "text": "Motorknaufhalbzylinder Europrofil SYMO",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MKZ",
      "text": "Motorzylinder Europrofil",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MKZ-S",
      "text": "Motorzylinder Europrofil SYMO",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "ML",
      "text": "Messing lackiert",
      "cont": "OBERFLÄCHE",
      "prio": ""
    },
    {
      "code": "MP",
      "text": "Messing poliert",
      "cont": "OBERFLÄCHE",
      "prio": ""
    },
    {
      "code": "MPV",
      "text": "Messing voll poliert",
      "cont": "OBERFLÄCHE",
      "prio": ""
    },
    {
      "code": "MR22",
      "text": "Rundzylinder 22 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MR22A",
      "text": "Schalterzylinder 22 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MR22AE",
      "text": "Schalterzylinder 22 mm für Eurolift®",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MR22AE-S",
      "text": "Schalterzylinder 22 mm SYMO für Eurolift®",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MR22AF",
      "text": "Aufzugszylinder 22 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MR22DRZ",
      "text": "Druckzylinder DM22",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MR22HM",
      "text": "Hebelrundzylinder 22 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MR22K",
      "text": "Möbelzylinder 22 mm, Vierkant kurz",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MR22L",
      "text": "Möbelzylinder 22 mm, Vierkant lang",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MR22R",
      "text": "Hebelrundzylinder 22 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MR22R-S",
      "text": "Hebelrundzylinder 22 mm SYMO",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MR22S",
      "text": "Schwenkriegelzylinder 22 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MR22-S",
      "text": "Rundzylinder 22 mm SYMO",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MR22S-S",
      "text": "Schwenkriegelzylinder 22 mm SYMO",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MR22Z",
      "text": "Zentralverschlusszylinder 22 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MR22ZM4",
      "text": "Zentralverschlusszylinder 22 mm M4",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MR22Z-S",
      "text": "Zentralverschlusszylinder 22 mm SYMO",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MR24ASS",
      "text": "Rundzylinder DM24 Junie ASS",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MR25",
      "text": "Möbelzylinder 25 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MR25D21",
      "text": "Druckzylinder Hub21",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MR25DRZ",
      "text": "Druckzylinder DM25",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MR25-S",
      "text": "Möbelzylinder 25 mm SYMO",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MR25Z",
      "text": "Zentralverschlusszylinder 25 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MR25Z-S",
      "text": "Zentralverschlusszylinder 25 mm SYMO",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MR26",
      "text": "Rundzylinder 26 mm Fichet®",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MR26F",
      "text": "Rundzylinder 26 mm Fichet®",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MR28",
      "text": "Möbelzylinder 28 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MR28A",
      "text": "Aufzugszylinder 28 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MR28DRZ",
      "text": "Druckzylinder DM28",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MR29",
      "text": "Rundzylinder 29 mm",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "MS",
      "text": "Messing",
      "cont": "OBERFLÄCHE",
      "prio": ""
    },
    {
      "code": "MS/NI",
      "text": "Messing außen, Nickel innen",
      "cont": "OBERFLÄCHE",
      "prio": ""
    },
    {
      "code": "MSW",
      "text": "Microschalter",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "MU",
      "text": "MU - MUSTERSCHLÜSSEL VOM KUNDEN ANBEI",
      "cont": "SCHLÜSSELART",
      "prio": ""
    },
    {
      "code": "MZ",
      "text": "Möbelzylinder",
      "cont": "MODELL",
      "prio": ""
    },
    {
      "code": "N0K",
      "text": "Ohne Knauf",
      "cont": "KNAUFFORM",
      "prio": ""
    },
    {
      "code": "N0R",
      "text": "norwegische Ausführung",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "N100",
      "text": "Niro®-Bügel lichte Höhe 100 mm",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "N100A",
      "text": "Niro®-Bügel lichte Höhe 100 mm abnehmbar",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "N110",
      "text": "Niro®-Bügel lichte Höhe 110 mm",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "N120",
      "text": "Niro®-Bügel lichte Höhe 120 mm",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "N150",
      "text": "Niro®-Bügel lichte Höhe 150 mm",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "N15A",
      "text": "Niro®-Bügel lichte Höhe 15 mm abnehmbar",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "N165",
      "text": "Niro®-Bügel lichte Höhe 165 mm",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "N17",
      "text": "Niro®-Bügel lichte Höhe 17 mm",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "N180",
      "text": "Niro®-Bügel lichte Höhe 180 mm",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "N180A",
      "text": "Niro®-Bügel lichte Höhe 180 mm abnehmbar",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "N200",
      "text": "Niro®-Bügel lichte Höhe 200 mm",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "N200A",
      "text": "Niro®-Bügel lichte Höhe 200 mm abnehmbar",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "N240",
      "text": "Niro®-Bügel lichte Höhe 240 mm",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "N240A",
      "text": "Niro®-Bügel lichte Höhe 240 mm abnehmbar",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "N30",
      "text": "Niro®-Bügel lichte Höhe 30 mm",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "N40",
      "text": "Niro®-Bügel lichte Höhe 40 mm",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "N50",
      "text": "Niro®-Bügel lichte Höhe 50 mm",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "N60",
      "text": "Niro®-Bügel lichte Höhe 60 mm",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "N60A",
      "text": "Niro®-Bügel lichte Höhe 60 mm abnehmbar",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "N70",
      "text": "Niro®-Bügel lichte Höhe 70 mm",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "N80",
      "text": "Niro®-Bügel lichte Höhe 80 mm",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "N80A",
      "text": "Niro®-Bügel lichte Höhe 80 mm abnehmbar",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "N90",
      "text": "Niro®-Bügel lichte Höhe 90 mm",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "NI",
      "text": "Nickel",
      "cont": "OBERFLÄCHE",
      "prio": ""
    },
    {
      "code": "NI/MS",
      "text": "Nickel innen, Messing außen",
      "cont": "OBERFLÄCHE",
      "prio": ""
    },
    {
      "code": "NP",
      "text": "Nickel poliert",
      "cont": "OBERFLÄCHE",
      "prio": ""
    },
    {
      "code": "NPV",
      "text": "Nickel voll poliert",
      "cont": "OBERFLÄCHE",
      "prio": ""
    },
    {
      "code": "NS-A",
      "text": "Erhöhte Verschleißfestigkeit außen",
      "cont": "KERNMATERIAL",
      "prio": ""
    },
    {
      "code": "NS-B",
      "text": "Erhöhte Verschleißfestigkeit beidseitig",
      "cont": "KERNMATERIAL",
      "prio": ""
    },
    {
      "code": "P6",
      "text": "KIK P6 für Squire P6",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "PAR",
      "text": "Partnerzylinder",
      "cont": "SPERROPTION",
      "prio": ""
    },
    {
      "code": "PB",
      "text": "Patiniert Braun",
      "cont": "OBERFLÄCHE",
      "prio": ""
    },
    {
      "code": "PBP-A",
      "text": "Preteterminated Breaking Point aussen",
      "cont": "FLEXAUSSEN",
      "prio": ""
    },
    {
      "code": "PDZ",
      "text": "Portal-Doppelzylinder",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "PF",
      "text": "PF - Schlüssel sperrt  bei TAF  von/in  S und I-Position",
      "cont": "SCHLÜSSELFUNKTION",
      "prio": ""
    },
    {
      "code": "PHZ",
      "text": "Portal-Halbzylinder",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "PS",
      "text": "Patiniert Schwarz",
      "cont": "OBERFLÄCHE",
      "prio": ""
    },
    {
      "code": "PVA3",
      "text": "Beschichtung deQoline A3",
      "cont": "OBERFLÄCHE",
      "prio": ""
    },
    {
      "code": "PZ",
      "text": "Profilzylinder",
      "cont": "MODELL",
      "prio": ""
    },
    {
      "code": "R",
      "text": "R-Drücker",
      "cont": "DRÜCKERAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "R0",
      "text": "Rohling",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "R050",
      "text": "Rosette 50 mm",
      "cont": "ROSETTE",
      "prio": ""
    },
    {
      "code": "R060",
      "text": "Rosette 60 mm",
      "cont": "ROSETTE",
      "prio": ""
    },
    {
      "code": "R0A",
      "text": "Rosette ABUS®",
      "cont": "ROSETTE",
      "prio": ""
    },
    {
      "code": "R0-A",
      "text": "AirKey-Kombirohling",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "R0-D",
      "text": "Designrohling",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "R0GT",
      "text": "Glastürrosette für Druckzylinder",
      "cont": "ROSETTE",
      "prio": ""
    },
    {
      "code": "R0I",
      "text": "Rosette IKON®",
      "cont": "ROSETTE",
      "prio": ""
    },
    {
      "code": "R0N13",
      "text": "13 mm",
      "cont": "ZUBEHÖR",
      "prio": ""
    },
    {
      "code": "R0N6",
      "text": "6 mm",
      "cont": "ZUBEHÖR",
      "prio": ""
    },
    {
      "code": "R0N8",
      "text": "8 mm",
      "cont": "ZUBEHÖR",
      "prio": ""
    },
    {
      "code": "R0-R",
      "text": "Rohling mit Kunststoffreide alt",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "R0-S",
      "text": "Salto®-Kombirohling",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "R0SKG",
      "text": "Rosette SKG",
      "cont": "ROSETTE",
      "prio": ""
    },
    {
      "code": "R0-X",
      "text": "Rohling Xesar-Kombischlüssel",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "R3087",
      "text": "Heusser Rosette R3087",
      "cont": "ROSETTE",
      "prio": ""
    },
    {
      "code": "R473/40",
      "text": "Heusser Oliven mit Standartrosette Typ R473/40",
      "cont": "ROSETTE",
      "prio": ""
    },
    {
      "code": "R473/46",
      "text": "Heusser Oliven mit Standartrosette Typ R473/46",
      "cont": "ROSETTE",
      "prio": ""
    },
    {
      "code": "R74",
      "text": "Rundprofil 74 mm",
      "cont": "ENTFERNUNG",
      "prio": ""
    },
    {
      "code": "R78",
      "text": "Rundprofil 78 mm",
      "cont": "ENTFERNUNG",
      "prio": ""
    },
    {
      "code": "R94",
      "text": "Rundprofil 94 mm",
      "cont": "ENTFERNUNG",
      "prio": ""
    },
    {
      "code": "RA",
      "text": "Aufputzrahmen",
      "cont": "MONTAGEART",
      "prio": ""
    },
    {
      "code": "RB",
      "text": "Rastbohrung",
      "cont": "RASTBOHRUNG",
      "prio": ""
    },
    {
      "code": "RBL",
      "text": "Blind",
      "cont": "ZYLINDERROSETTE",
      "prio": ""
    },
    {
      "code": "RDZ",
      "text": "Doppelzylinder Rundprofil",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "RDZ-S",
      "text": "Doppelzylinder Rundprofil SYMO",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "RE",
      "text": "Rechts",
      "cont": "ORIENTIERUNG",
      "prio": ""
    },
    {
      "code": "REP",
      "text": "Rosette Europrofil",
      "cont": "ZYLINDERROSETTE",
      "prio": ""
    },
    {
      "code": "RF-A",
      "text": "Niro®-Kern außen",
      "cont": "KERNMATERIAL",
      "prio": ""
    },
    {
      "code": "RF-B",
      "text": "Niro®-Kern beidseitig",
      "cont": "KERNMATERIAL",
      "prio": ""
    },
    {
      "code": "RHZ",
      "text": "Halbzylinder Rundprofil",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "RHZ-S",
      "text": "Halbzylinder Rundprofil SYMO",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "RIT",
      "text": "Funktion: Gefederte Sperrnase Rechts Rittal Schaltschrank",
      "cont": "FUNKTION",
      "prio": ""
    },
    {
      "code": "RK",
      "text": "Rundknauf",
      "cont": "KNAUFFORM",
      "prio": ""
    },
    {
      "code": "RKHZ",
      "text": "Knaufhalbzylinder Rundprofil",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "RKHZ-S",
      "text": "Knaufhalbzylinder Rundprofil SYMO",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "RKZ",
      "text": "Knaufzylinder Rundprofil",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "RKZ-S",
      "text": "Knaufzylinder Rundprofil SYMO",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "RL",
      "text": "Regenloch",
      "cont": "REGENLOCH",
      "prio": ""
    },
    {
      "code": "RM/22",
      "text": "Mortise Zylinder 22 mm (7/8\")",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "RM/25",
      "text": "Mortise Zylinder 25 mm (1\")",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "RM/29",
      "text": "Mortise Zylinder 29 mm (1 1/8\")",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "RM/39",
      "text": "Mortise Zylinder 39 mm (1 1/2\")",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "RM/47",
      "text": "Mortise Zylinder 47 mm (1 7/8\")",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "RM/57",
      "text": "Mortise Zylinder 57 mm (2 1/4\")",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "RM/67",
      "text": "Mortise Zylinder 67 mm (2 5/8\")",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "RM0-S",
      "text": "Modul Rundprofil SYMO",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "RMKHZ",
      "text": "Motorknaufhalbzylinder Rundprofil",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "RMKZ",
      "text": "Motorzylinder Rundprofil",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "RMKZ-S",
      "text": "Motorknaufzylinder Rundprofil SYMO",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "RPDZ",
      "text": "Doppelzylinder Rundprofil mit Steg",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "RPHZ",
      "text": "Halbzylinder Rundprofil mit Steg",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "RPKZ",
      "text": "Knaufzylinder Rundprofil mit Steg",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "RRP",
      "text": "Rosette Rundprofil",
      "cont": "ZYLINDERROSETTE",
      "prio": ""
    },
    {
      "code": "RT",
      "text": "Rot",
      "cont": "FARBE",
      "prio": ""
    },
    {
      "code": "RTR051",
      "text": "Rotor 051",
      "cont": "",
      "prio": ""
    },
    {
      "code": "RU",
      "text": "Unterputzrahmen",
      "cont": "MONTAGEART",
      "prio": ""
    },
    {
      "code": "S",
      "text": "Sicherheitstechnik",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "S0S",
      "text": "SOS-Funktion",
      "cont": "SPERROPTION",
      "prio": ""
    },
    {
      "code": "S100",
      "text": "Stahlbügel lichte Höhe 100 mm",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "S100A",
      "text": "Stahlbügel lichte Höhe 100 mm abnehmbar",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "S120",
      "text": "Stahlbügel lichte Höhe 120 mm",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "S150",
      "text": "Stahlbügel lichte Höhe 150 mm",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "S15A",
      "text": "Stahlbügel lichte Höhe 15 mm abnehmbar",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "S165A",
      "text": "Stahlbügel lichte Höhe 165 mm abnehmbar",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "S17",
      "text": "Stahlbügel lichte Höhe 17 mm",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "S180",
      "text": "Stahlbügel lichte Höhe 180 mm",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "S200",
      "text": "Stahlbügel lichte Höhe 200 mm",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "S200A",
      "text": "Stahlbügel lichte Höhe 200 mm abnehmbar",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "S240A",
      "text": "Stahlbügel lichte Höhe 240 mm abnehmbar",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "S30",
      "text": "Stahlbügel lichte Höhe 30 mm",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "S40",
      "text": "Stahlbügel lichte Höhe 40 mm",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "S50",
      "text": "Stahlbügel lichte Höhe 50 mm",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "S60",
      "text": "Stahlbügel lichte Höhe 60 mm",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "S60A",
      "text": "Stahlbügel lichte Höhe 60 mm abnehmbar",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "S70",
      "text": "Stahlbügel lichte Höhe 70 mm",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "S80",
      "text": "Stahlbügel lichte Höhe 80 mm",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "S90",
      "text": "Stahlbügel lichte Höhe 90 mm",
      "cont": "BÜGELAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "SEA",
      "text": "SEA - Error Descr",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "SEC",
      "text": "in Sicherheitsausführung",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "SEP",
      "text": "Europrofil",
      "cont": "SPERRNASE",
      "prio": ""
    },
    {
      "code": "SESLI",
      "text": "SESLI - SES LI",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "SESRE",
      "text": "SESRE - SES RE",
      "cont": "OPTION OLIVE",
      "prio": ""
    },
    {
      "code": "SET1",
      "text": "Starterpaket inkl. Montagewerkzeug, 3 Schlüsselanhänger und 6 KeyCredits",
      "cont": "SETARTIKEL",
      "prio": ""
    },
    {
      "code": "SEW",
      "text": "Seewasserausführung",
      "cont": "SEEWASSERAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "SF",
      "text": "Schlüssel mit Servicefunktion",
      "cont": "SCHLÜSSELFUNKTION",
      "prio": ""
    },
    {
      "code": "SI",
      "text": "Silber",
      "cont": "GLASFARBE",
      "prio": ""
    },
    {
      "code": "SIM",
      "text": "Silber matt",
      "cont": "RAHMENFARBE",
      "prio": ""
    },
    {
      "code": "SIP",
      "text": "Silber poliert",
      "cont": "RAHMENFARBE",
      "prio": ""
    },
    {
      "code": "SK",
      "text": "Skandinavisches Ovalprofil",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "SKA",
      "text": "Skandinavischer Außenzylinder",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "SKA201",
      "text": "Außenzylinder Typ 201",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "SKAN",
      "text": "SKAN - SKA NORWEGEN",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "SKAN0R",
      "text": "Außenzylinder Norwegen",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "SKG",
      "text": "Zertifiziert nach SKG***",
      "cont": "ZERTIFIKAT",
      "prio": ""
    },
    {
      "code": "SKG2-A",
      "text": "Zertifiziert nach SKG ** außen",
      "cont": "ZERTIFIZIERUNG",
      "prio": ""
    },
    {
      "code": "SKG2-B",
      "text": "Zertifiziert nach SKG ** beidseitig",
      "cont": "ZERTIFIZIERUNG",
      "prio": ""
    },
    {
      "code": "SKG3-A",
      "text": "Zertifiziert nach SKG *** außen",
      "cont": "ZERTIFIZIERUNG",
      "prio": ""
    },
    {
      "code": "SKG3-B",
      "text": "Zertifiziert nach SKG *** beidseitig",
      "cont": "ZERTIFIZIERUNG",
      "prio": ""
    },
    {
      "code": "SKI",
      "text": "Skandinavischer Innenzylinder",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "SKI202",
      "text": "Ausführung Typ 202",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "SKM512",
      "text": "Einsatzzylinder SKM512",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "SKN",
      "text": "Großer Doppenmuldenknauf",
      "cont": "KNAUFFORM",
      "prio": ""
    },
    {
      "code": "SK-S",
      "text": "Skandinavischer Profilzylinder-SYMO",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "SL",
      "text": "Schlüssel",
      "cont": "MODELL",
      "prio": ""
    },
    {
      "code": "SL-A",
      "text": "AirKey-Kombischlüssel",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "SL-BI",
      "text": "SL-BI - BIFFAR-REIDE",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "SL-BT",
      "text": "SL-BT - BT-REIDE",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "SL-D",
      "text": "Designschlüssel",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "SL-DPI",
      "text": "SL-DPI - DPI-REIDE",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "SL-DPS",
      "text": "SL-DPS - DPS-REIDE",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "SL-DS",
      "text": "SL-DS - ZUSCHLAG FÜR DESFIRE-SALTO KOMBI-SCHLÜSSEL",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "SL-GU",
      "text": "SL-GU - GUARD-REIDE",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "SL-R",
      "text": "Schlüssel mit Kunststoffreide alt",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "SL-RUND",
      "text": "SL-RUND - RUNDE-REIDE",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "SL-S",
      "text": "Salto®-Kombischlüssel",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "SL-SN",
      "text": "SL-SN - COMBI-KUNSTSTOFFREIDE FÜR NACHRÜSTMEDIUM",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "SL-VI",
      "text": "SL-VI - VIGHI-REIDE",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "SL-X",
      "text": "Xesar-Kombischlüssel",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "SN0W",
      "text": "für Snowman",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "SP01",
      "text": "Sperrbalken 1",
      "cont": "SPERRBALKEN_TYPE",
      "prio": ""
    },
    {
      "code": "SP02",
      "text": "Sperrbalken 2",
      "cont": "SPERRBALKEN_TYPE",
      "prio": ""
    },
    {
      "code": "SP03",
      "text": "Sperrbalken 3",
      "cont": "SPERRBALKEN_TYPE",
      "prio": ""
    },
    {
      "code": "SP04",
      "text": "Sperrbalken 4",
      "cont": "SPERRBALKEN_TYPE",
      "prio": ""
    },
    {
      "code": "SP05",
      "text": "Sperrbalken 5",
      "cont": "SPERRBALKEN_TYPE",
      "prio": ""
    },
    {
      "code": "SP06",
      "text": "Sperrbalken 6",
      "cont": "SPERRBALKEN_TYPE",
      "prio": ""
    },
    {
      "code": "SP07",
      "text": "Sperrbalken 7",
      "cont": "SPERRBALKEN_TYPE",
      "prio": ""
    },
    {
      "code": "SP08",
      "text": "Sperrbalken 8",
      "cont": "SPERRBALKEN_TYPE",
      "prio": ""
    },
    {
      "code": "SP09",
      "text": "Sperrbalken 9",
      "cont": "SPERRBALKEN_TYPE",
      "prio": ""
    },
    {
      "code": "SP11",
      "text": "Sperrbalken 11",
      "cont": "SPERRBALKEN_TYPE",
      "prio": ""
    },
    {
      "code": "SP12",
      "text": "Sperrbalken 12",
      "cont": "SPERRBALKEN_TYPE",
      "prio": ""
    },
    {
      "code": "SP13",
      "text": "Sperrbalken 13",
      "cont": "SPERRBALKEN_TYPE",
      "prio": ""
    },
    {
      "code": "SP14",
      "text": "Sperrbalken 14",
      "cont": "SPERRBALKEN_TYPE",
      "prio": ""
    },
    {
      "code": "SPKH",
      "text": "SPKH - SPB KURZ HORIZONTAL",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "SPKV",
      "text": "SPKV - SPB KURZ VERTIKAL",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "SPLH",
      "text": "SPLH - SPB LANG HORIZONTAL",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "SPLV",
      "text": "SPLV - SPB LANG VERTIKAL",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "SPV",
      "text": "Sperrbalken verdreht",
      "cont": "BANDUNG",
      "prio": ""
    },
    {
      "code": "SR22",
      "text": "Staub- und Witterungsschutzrosette",
      "cont": "ROSETTE",
      "prio": ""
    },
    {
      "code": "SRP",
      "text": "Sperrnase: Rundprofil",
      "cont": "SPERRNASE",
      "prio": ""
    },
    {
      "code": "SS65",
      "text": "Hangschlosseinsatz Yale®",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "SSP",
      "text": "SSP - SPERRNASE TYP S",
      "cont": "SPERRNASE",
      "prio": ""
    },
    {
      "code": "SST1",
      "text": "Schalterabzugsstellung (alte IKON 360°)",
      "cont": "SCHLÜSSELABZUG_LW",
      "prio": ""
    },
    {
      "code": "SST3",
      "text": "Schalterabzugsstellung (alte IKON 0°, 90°, 180°)",
      "cont": "SCHLÜSSELABZUG_LW",
      "prio": ""
    },
    {
      "code": "STA",
      "text": "Schließweg von links nach oben",
      "cont": "SCHLIESSWEG",
      "prio": ""
    },
    {
      "code": "STB",
      "text": "Schließweg von rechts nach oben",
      "cont": "SCHLIESSWEG",
      "prio": ""
    },
    {
      "code": "STC",
      "text": "Schließweg von links nach unten",
      "cont": "SCHLIESSWEG",
      "prio": ""
    },
    {
      "code": "STD",
      "text": "Schließweg von rechts nach unten",
      "cont": "SCHLIESSWEG",
      "prio": ""
    },
    {
      "code": "STE",
      "text": "Schließweg von oben nach links",
      "cont": "SCHLIESSWEG",
      "prio": ""
    },
    {
      "code": "STF",
      "text": "Schließweg von oben nach rechts",
      "cont": "SCHLIESSWEG",
      "prio": ""
    },
    {
      "code": "STG",
      "text": "Schließweg von unten nach links",
      "cont": "SCHLIESSWEG",
      "prio": ""
    },
    {
      "code": "STH",
      "text": "Schließweg von unten nach rechts",
      "cont": "SCHLIESSWEG",
      "prio": ""
    },
    {
      "code": "STN",
      "text": "Sternnase",
      "cont": "SPERRNASE",
      "prio": ""
    },
    {
      "code": "SW",
      "text": "Schwarz",
      "cont": "FARBE",
      "prio": ""
    },
    {
      "code": "SW-A",
      "text": "Staub- und Witterungsschutz außen",
      "cont": "STAUBSCHUTZ",
      "prio": ""
    },
    {
      "code": "SW-B",
      "text": "Staub- und Witterungsschutz beidseitig",
      "cont": "STAUBSCHUTZ",
      "prio": ""
    },
    {
      "code": "SWM",
      "text": "Schwarz matt",
      "cont": "RAHMENFARBE",
      "prio": ""
    },
    {
      "code": "SWP",
      "text": "Schwarz poliert",
      "cont": "RAHMENFARBE",
      "prio": ""
    },
    {
      "code": "SZ",
      "text": "Schalt-/Schalterzylinder",
      "cont": "MODELL",
      "prio": ""
    },
    {
      "code": "T",
      "text": "Teile",
      "cont": "SCHLÜSSELART",
      "prio": ""
    },
    {
      "code": "T1",
      "text": "40-65 mm (bei Drückerform R: 40-55 mm)",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T100",
      "text": "100 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T101",
      "text": "101 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T102",
      "text": "102 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T103",
      "text": "103 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T104",
      "text": "104 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T105",
      "text": "105 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T106",
      "text": "106 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T107",
      "text": "107 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T108",
      "text": "108 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T109",
      "text": "109 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T110",
      "text": "110 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T111",
      "text": "111 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T112",
      "text": "112 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T113",
      "text": "113 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T114",
      "text": "114 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T115",
      "text": "115 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T2",
      "text": "60-90 mm  (bei Drückerform R: 55-75 mm)",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T35",
      "text": "Türblattstärke: 35 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T36",
      "text": "Türblattstärke: 36 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T37",
      "text": "Türblattstärke: 37 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T38",
      "text": "38 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T39",
      "text": "39 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T40",
      "text": "40 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T41",
      "text": "41 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T42",
      "text": "42 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T43",
      "text": "43 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T44",
      "text": "44 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T45",
      "text": "45 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T46",
      "text": "46 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T47",
      "text": "47 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T48",
      "text": "48 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T49",
      "text": "49 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T50",
      "text": "50 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T51",
      "text": "51 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T52",
      "text": "52 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T53",
      "text": "53 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T54",
      "text": "55 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T55",
      "text": "55 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T56",
      "text": "56 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T57",
      "text": "57 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T58",
      "text": "58 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T59",
      "text": "59 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T60",
      "text": "60 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T61",
      "text": "61 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T62",
      "text": "62 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T63",
      "text": "63 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T64",
      "text": "64 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T65",
      "text": "65 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T66",
      "text": "66 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T67",
      "text": "67 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T68",
      "text": "68 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T69",
      "text": "69 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T70",
      "text": "70 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T71",
      "text": "71 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T72",
      "text": "72 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T73",
      "text": "73 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T74",
      "text": "74 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T75",
      "text": "75 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T76",
      "text": "76 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T77",
      "text": "77 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T78",
      "text": "78 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T79",
      "text": "79 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T80",
      "text": "80 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T81",
      "text": "81 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T82",
      "text": "82 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T83",
      "text": "83 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T84",
      "text": "84 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T85",
      "text": "85 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T86",
      "text": "86 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T87",
      "text": "87 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T88",
      "text": "88 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T89",
      "text": "89 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T90",
      "text": "90 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T91",
      "text": "91 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T92",
      "text": "92 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T93",
      "text": "93 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T94",
      "text": "94 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T95",
      "text": "95 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T96",
      "text": "96 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T97",
      "text": "97 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T98",
      "text": "98 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "T99",
      "text": "99 mm",
      "cont": "TÜRBLATTSTÄRKE",
      "prio": ""
    },
    {
      "code": "TAF-A",
      "text": "Temporary Access Function außen",
      "cont": "BES_SPERRFUNKTION",
      "prio": ""
    },
    {
      "code": "TBD1",
      "text": "* DOPPELZYLINDER KOMP/BRASILIEN",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "TBD2",
      "text": "* DOPPELZYLINDER KOMP/RP21,5",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "TBD3",
      "text": "* DOPPELZYLINDER KOMP/RP21",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "TBD4",
      "text": "* KNAUFZYLINDER KOMP/RP21,5",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "TEST",
      "text": "Test items",
      "cont": "",
      "prio": ""
    },
    {
      "code": "TESTALMA",
      "text": "TEST ALMA",
      "cont": "",
      "prio": ""
    },
    {
      "code": "TS56",
      "text": "Türblattstärke 46 bis 56 mm",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "TS66",
      "text": "Türblattstärke 57 bis 66 mm",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "TS76",
      "text": "Türblattstärke 67 bis 76 mm",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "TS86",
      "text": "Türblattstärke 77 bis 86 mm",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "TS96",
      "text": "Türblattstärke 87 bis 96 mm",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "U",
      "text": "U-Drücker",
      "cont": "DRÜCKERAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "UKIK",
      "text": "UKIK - Error Descr",
      "cont": "TYPE",
      "prio": ""
    },
    {
      "code": "UL",
      "text": "Für Möbelschloss UNI4000 Lade",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "UM",
      "text": "UM - AUSFÜHRUNG MMRE",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "USH",
      "text": "Unterschiedliche Schließhierarchie",
      "cont": "SPERRHIERARCHIE",
      "prio": ""
    },
    {
      "code": "USH-A",
      "text": "USH-A",
      "cont": "SPERRHIERARCHIE",
      "prio": ""
    },
    {
      "code": "USH-I",
      "text": "USH-I",
      "cont": "SPERRHIERARCHIE",
      "prio": ""
    },
    {
      "code": "UT",
      "text": "Für Möbelschloss UNI4000 Tür",
      "cont": "SPERRBALKEN",
      "prio": ""
    },
    {
      "code": "VAA",
      "text": "Vario A Schlüssel",
      "cont": "SCHLÜSSELFUNKTION",
      "prio": ""
    },
    {
      "code": "VAB",
      "text": "Vario B Schlüssel",
      "cont": "SCHLÜSSELFUNKTION",
      "prio": ""
    },
    {
      "code": "VAC",
      "text": "Vario C Schlüssel",
      "cont": "SCHLÜSSELFUNKTION",
      "prio": ""
    },
    {
      "code": "VAR",
      "text": "Umsperrfunktion VARIO",
      "cont": "BES_SPERRFUNKTION",
      "prio": ""
    },
    {
      "code": "VARF",
      "text": "Umsperrfunktion VARIO Flex",
      "cont": "BES_SPERRFUNKTION",
      "prio": ""
    },
    {
      "code": "VARR",
      "text": "Umsperrfunktion VARIO Reflex",
      "cont": "BES_SPERRFUNKTION",
      "prio": ""
    },
    {
      "code": "VB05",
      "text": "VB05 - 15MM GEKÜRZTER VERRIEGELUNGSBOLZEN",
      "cont": "SPERRNASE",
      "prio": ""
    },
    {
      "code": "VB15",
      "text": "Verriegelungsbolzen 15 mm",
      "cont": "SPERRNASE",
      "prio": ""
    },
    {
      "code": "VB25",
      "text": "VB25 - Verlängerung 5 mm für Verriegelungsbolzen",
      "cont": "SPERRNASE",
      "prio": ""
    },
    {
      "code": "VB35",
      "text": "VB35 - VERLÄNGERUNG 15MM FÜR VERRIEGELUNGSBOLZEN",
      "cont": "SPERRNASE",
      "prio": ""
    },
    {
      "code": "VB40",
      "text": "Verriegelungsbolzen 40 mm",
      "cont": "SPERRNASE",
      "prio": ""
    },
    {
      "code": "VB45",
      "text": "VB45 - VERLÄNGERUNG 25MM FÜR VERRIEGELUNGSBOLZEN",
      "cont": "SPERRNASE",
      "prio": ""
    },
    {
      "code": "VB60",
      "text": "VB60 - VERLÄNGERUNG 40MM FÜR VERRIEGELUNGSBOLZEN",
      "cont": "SPERRNASE",
      "prio": ""
    },
    {
      "code": "VDS",
      "text": "Zertifiziert nach VdS",
      "cont": "ZERTIFIZIERUNG",
      "prio": ""
    },
    {
      "code": "VI",
      "text": "Violett",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "VKCH",
      "text": "",
      "cont": "",
      "prio": ""
    },
    {
      "code": "W",
      "text": "Werbung",
      "cont": "DRÜCKERAUSFÜHRUNG",
      "prio": ""
    },
    {
      "code": "WC",
      "text": "Mit WC-Funktion",
      "cont": "FLEX_INNEN",
      "prio": ""
    },
    {
      "code": "WS",
      "text": "Weiß",
      "cont": "FARBE",
      "prio": ""
    },
    {
      "code": "WSM",
      "text": "Weiß matt",
      "cont": "RAHMENFARBE",
      "prio": ""
    },
    {
      "code": "WSP",
      "text": "Weiß poliert",
      "cont": "RAHMENFARBE",
      "prio": ""
    },
    {
      "code": "X",
      "text": "Xesar",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "X1K",
      "text": "Ovalknauf",
      "cont": "KNAUFFORM",
      "prio": ""
    },
    {
      "code": "XESAR",
      "text": "",
      "cont": "",
      "prio": ""
    },
    {
      "code": "Z",
      "text": "Nachschlüssel",
      "cont": "SCHLÜSSELART",
      "prio": ""
    },
    {
      "code": "Z0",
      "text": "ohne Elektronik",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "Z1",
      "text": "einseitiger Zutritt",
      "cont": "BAUART",
      "prio": ""
    },
    {
      "code": "Z10",
      "text": "Zahnritzel Z10",
      "cont": "SPERRNASE",
      "prio": ""
    },
    {
      "code": "Z14",
      "text": "Zahnritzel Z14",
      "cont": "SPERRNASE",
      "prio": ""
    },
    {
      "code": "Z16",
      "text": "Zahnritzel Z16",
      "cont": "SPERRNASE",
      "prio": ""
    },
    {
      "code": "Z18",
      "text": "Zahnritzel Z18",
      "cont": "SPERRNASE",
      "prio": ""
    },
    {
      "code": "ZH-A",
      "text": "Ziehschutz Hartmetall außen",
      "cont": "KERNZIEHSCHUTZ",
      "prio": ""
    },
    {
      "code": "ZH-B",
      "text": "Ziehschutz Hartmetall beidseitig",
      "cont": "KERNZIEHSCHUTZ",
      "prio": ""
    },
    {
      "code": "ZNR",
      "text": "Zusatznummeration",
      "cont": "VERRECHNUNG",
      "prio": ""
    },
    {
      "code": "ZVS-A",
      "text": "Zurückversetzter Steg außen",
      "cont": "BEFESTIGUNG_EINBAU",
      "prio": ""
    },
    {
      "code": "ZVS-I",
      "text": "Zurückversetzter Steg innen",
      "cont": "BEFESTIGUNG_EINBAU",
      "prio": ""
    },
    {
      "code": "ZYL",
      "text": "Zylinder",
      "cont": "LÄNGE",
      "prio": ""
    }
   ]
}
