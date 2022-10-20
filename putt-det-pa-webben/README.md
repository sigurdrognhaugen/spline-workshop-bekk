# Putt det på web'n 🧑‍💻🌐
Nå skal vi se hvordan man kan exportere den fine splinen vår til en enkel react app. 

## Installasjon
1. Clone repoet
2. `cd spline-workshop-bekk/putt-det-pa-webben`
3. Kjør `npm install` i terminalen
4. Kjør `npm start`


## Bytt til din figur
For å endre figuren på nettsiden må du først eksportere spline-scenen din. I Spline editoren, velg export øverst på skjermen. Velg å eksportere som Code og deretter React. Det bør se slik ut 


<img width="250" src="https://raw.githubusercontent.com/splinetool/react-spline/main/.github/screenshots/react-export-pane.png">



Kopier URL'n, og legg den inn i `<Spline/>` komponenten du finner i `src/App.tsx`


```tsx
function App() {
  return (
    <div className="App">
      <Wrapper>
        <Spline
          className="spline"
          scene="https://prod.spline.design/9WbkNC19UHvdk7ta/scene.splinecode"
        />
```

