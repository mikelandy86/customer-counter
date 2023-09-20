Absolut, jag ska ge dig en fullständig och snyggt formaterad guide redo att klistras in i din Wiki:

---

## **Azure DevOps Behörighetsmodeller för Repos**

I Azure DevOps är behörighetshantering avgörande för att säkerställa att rätt personer har åtkomst till rätt resurser.

### **Viktiga Punkter**

- Varje projekt kan ha sina egna unika scenarior när det gäller att dela och ge behörigheter. 
- Grupper som börjar med "Guest-" indikerar att de är avsedda för personer **utanför** projektets kärnmedlemmar.
- Var noga med att göra detta tydligt för teamet för att undvika förväxlingar.

### **Steg 1: Skapa Behörighetsgrupper**

1. **Navigera till ditt Projekt**:
   - Gå till "Project settings" i ditt Azure DevOps-projekt.
  
2. **Säkerhetsinställningar**:
   - Under "Permissions", klicka på "Security".
  
3. **Skapa Grupper**:
   - Klicka på "Create group".
   - Namnge grupperna enligt följande modeller:
     - `Guest-[Reponamn]-Read` 
     - `Guest-[Reponamn]-Edit`
     - `Guest-Repos-Read`
     - `Guest-Repos-Edit`

### **Steg 2: Konfigurera Behörigheter**

1. **Sätt Standardbehörigheter**:
   - För varje grupp du skapade, sätt "Deny" på högsta nivå för alla repos. Detta säkerställer att ingen åtkomst ges som standard.

2. **Individuell Behörighetstilldelning**:
   - Gå in i varje enskilt repo du vill justera.
     - För `Guest-[Reponamn]-Read`: Ge "Read" behörighet.
     - För `Guest-[Reponamn]-Edit`: Ge "Edit" behörighet.
     - För `Guest-Repos-Read`: Ge "Read" behörighet.
     - För `Guest-Repos-Edit`: Ge "Edit" behörighet.

### **Exemplariska Scenarier**

**Scenario 1:** 
- **Situation:** Repo "FrontendCode". Extern utvecklare ska läsa, men inte redigera.
- **Lösning:** Sätt "Deny" för alla på högsta nivå. Justera sedan behörigheterna inom "FrontendCode" repo för `Guest-FrontendCode-Read`.

**Scenario 2:** 
- **Situation:** Repo "BackendCode". Extern utvecklare ska kunna redigera.
- **Lösning:** Sätt "Deny" för alla på högsta nivå. Justera sedan behörigheterna inom "BackendCode" repo för `Guest-BackendCode-Edit`.

---

Hoppas att detta passar dina behov för din Wiki! Låt mig veta om du behöver ytterligare ändringar eller förtydliganden.
