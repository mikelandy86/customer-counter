-Att sätta bra namn på grupper i Azure DevOps hjälper till att hålla ordning och gör det säkrare. Beroende på projektet, välj den namnstil som passar bäst.

## **Behörighetsmodeller i Azure DevOps**

När du hanterar behörigheter i Azure DevOps finns det olika namnstandardsalternativ att överväga. Nedan är en jämförelse av de tre huvudalternativen:

### **Notering**: 
För att ge ytterligare klarhet kring vad varje behörighetsnivå faktiskt innebär, speciellt för "Edit"-behörigheten, rekommenderas det att specificera detta i beskrivningen (Desc) för varje grupp. Detta ger en mer detaljerad översikt och underlättar förståelsen för medlemmarna.

### **1. Guest-Reponamn-Read/Edit**

**Format**:
- `Guest-[Reponamn]-Read`
- `Guest-[Reponamn]-Edit`

**Fördelar**:
- **Specifikitet**: Tydligt vilket repo det gäller.
- **Granulär Kontroll**: Möjliggör finjustering av behörigheter på repo-nivå.

**Nackdelar**:
- **Skalbarhet**: Kan bli många grupper om det finns många repos.
- **Hantering**: Kräver mer arbete att upprätta och underhålla när antalet repos växer.

### **2. Guest-projektNamn-Read/Edit**

**Format**:
- `Guest-[projektNamn]-Read`
- `Guest-[projektNamn]-Edit`

**Fördelar**:
- **Översikt**: Snabb översikt över vilket projekt det gäller.
- **Hanterbarhet**: Färre grupper att hantera om flera repos inom samma projekt.

**Nackdelar**:
- **Mindre Specifik**: Svårt att avgöra vilka repos inom projektet en grupp har tillgång till.
- **Flexibilitet**: Mindre flexibel om olika repos inom samma projekt behöver olika behörighetsnivåer.

### **3. Guest-Repo-Read/Edit**

**Format**:
- `Guest-Repo-Read`
- `Guest-Repo-Edit`

**Fördelar**:
- **Allmänhet**: Indikerar att det handlar om repos generellt.
- **Enkelhet**: Lättare att hantera med färre grupper.

**Nackdelar**:
- **Brist på Specifikitet**: Inte tydligt vilka specifika repos en grupp har tillgång till.
- **Granulär Kontroll**: Svårare att tillämpa specifika behörigheter för enskilda repos.

---

