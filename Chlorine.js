var element = {
          elementName: "Cholrine",
          chemicalSymbol: "Cl",
          protons: 17,
          atomicMassA: 34,
          electrons: 17,
          neutrons: 17,
          atomicMassunit: 35.453
        };
  
        document.getElementById("Cl").innerHTML = "Element Name: "+element.elementName+ "<br>"+
          "Chemical Symbol (X)= " + element.chemicalSymbol + "<br>" +
          "Protons (p)= " + element.protons + "<br>" + "A= Mass Number= protons + neutrons= " +
          element.atomicMassA + "<br>" + "Electrons (e)= " + element.electrons + "<br>" +
          "Neutrons(n)= " + element.neutrons + "<br>" + 
          "Atomic mass unit= " +
          element.atomicMassunit + " amu" 
          + "<br>" + element.elementName +
          " gains an electron in a chemical reaction becoming (Cl<sup>-</sup>). &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp"
          + "<br>"+ element.chemicalSymbol + " +"+ " e <sup>-</sup> &rarr;"+ element.chemicalSymbol+ "<sup> -</sup>" 
          ; 