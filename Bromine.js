var element = {
          elementName: "Bromine",
          chemicalSymbol: "Br",
          protons: 35,
          atomicMassA: 70,
          electrons: 35,
          neutrons: 35,
          atomicMassunit: 79.804
        };
  
        document.getElementById("Br").innerHTML = "Element Name: "+element.elementName+ "<br>"+
          "Chemical Symbol (X)= " + element.chemicalSymbol + "<br>" +
          "Protons (p)= " + element.protons + "<br>" + "A= Mass Number= protons + neutrons= " +
          element.atomicMassA + "<br>" + "Electrons (e)= " + element.electrons + "<br>" +
          "Neutrons(n)= " + element.neutrons + "<br>" + 
          "Atomic mass unit= " +
          element.atomicMassunit + " amu" 
          + "<br>" + element.elementName +
          " gains an electron in a chemical reaction becoming (Br<sup>-</sup>). &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp"
          + "<br>"+ element.chemicalSymbol + " +"+ " e <sup>-</sup> &rarr;"+ element.chemicalSymbol+ "<sup> -</sup>" 
          ; 