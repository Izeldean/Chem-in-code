var element = {
          elementName: "Flourine",
          chemicalSymbol: "F",
          protons: 9,
          atomicMassA: 18,
          electrons: 9,
          neutrons: 9,
          atomicMassunit: 19.00
        };
  
        document.getElementById("F").innerHTML = "Element Name: "+element.elementName+ "<br>"+
          "Chemical Symbol (X)= " + element.chemicalSymbol + "<br>" +
          "Protons (p)= " + element.protons + "<br>" + "A= Mass Number= protons + neutrons= " +
          element.atomicMassA + "<br>" + "Electrons (e)= " + element.electrons + "<br>" +
          "Neutrons(n)= " + element.neutrons + "<br>" + 
          "Atomic mass unit= " +
          element.atomicMassunit + " amu" 
          + "<br>" + element.elementName +
          " gains an electron in a chemical reaction becoming (F<sup>-</sup>). &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp"
          + "<br>"+ element.chemicalSymbol + " +"+ " e <sup>-</sup> &rarr;"+ element.chemicalSymbol+ "<sup> -</sup>" 
          ; 