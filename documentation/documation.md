# Dokumentation for Børnelejren på Langeland

## Funktionaliteter

### 1. **Forside**
- Viser en velkomstbesked og introduktion til organisationen.
- Indeholder et bannerbillede og en kort beskrivelse af formålet med Børnelejren.
- Bruger et responsivt grid-layout til at vise tekst og billeder.

### 2. **Om Os Side**
- Indeholder detaljeret information om organisationens mission og aktiviteter.
- Viser et galleri med billeder af faciliteter og aktiviteter.
- Bruger CSS Grid til at sikre et responsivt layout.

### 3. **Sponsor Tilmelding**
- Giver virksomheder mulighed for at tilmelde sig som sponsorer via en formular.
- Formularen validerer inputfelter som støttetype, firmanavn, adresse, telefonnummer, e-mail og beløb.
- Gemmer sponsordata i `localStorage` og viser en takke-besked ved succesfuld indsendelse.

### 4. **Takke Side**
- Viser en takke-besked til sponsorer.
- Henter og viser en liste over sponsorer fra `localStorage`.
- Bruger et grid-layout til at vise sponsordetaljer i to kolonner.

### 5. **Header Komponent**
- Indeholder navigationslinks til alle sider.
- Viser organisationens logo og titel.
- Sikrer ensartet navigation på tværs af websitet.

### 6. **Footer Komponent**
- Viser kontaktinformation for organisationen.
- Er altid placeret i bunden af siden, uanset indholdets højde.

---

## Dokumentstruktur

### 1. **Komponenter**
- Alle genanvendelige komponenter som header, footer og formular er placeret i mappen `src/components`.

### 2. **Sider**
- Hver side (f.eks. `Forside`, `Om Os`, `Sponsor Tilmelding`) er placeret i mappen `src/pages`.

### 3. **Stilarter**
- SCSS-filer er organiseret i mappen `src/sass` og opdelt efter funktionalitet.
- Genanvendelige stilarter som layout og resets er defineret i separate filer.

### 4. **Assets**
- Billeder og andre mediefiler er placeret i mappen `src/assets`.

### 5. **State Management**
- React's `useState` og `useEffect` hooks bruges til at håndtere state og sideeffekter.

### 6. **Validering**
- Formularer validerer inputfelter og viser fejlmeddelelser for manglende eller ugyldige data.

---

Jeg har gjort så meget så muligt for at holde mig inde for de rammer der er sat har ikke striefet så meget fra mit orginalle design eller farve teamet det er på den orginale side