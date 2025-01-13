var element = {
          elementName: "Iodine",
          chemicalSymbol: "I",
          protons: 53,
          atomicMassA: 106,
          electrons: 53,
          neutrons: 53,
          atomicMassunit: 125.9
        };
  
        document.getElementById("I").innerHTML = "Element Name: "+element.elementName+ "<br>"+
          "Chemical Symbol (X)= " + element.chemicalSymbol + "<br>" +
          "Protons (p)= " + element.protons + "<br>" + "A= Mass Number= protons + neutrons= " +
          element.atomicMassA + "<br>" + "Electrons (e)= " + element.electrons + "<br>" +
          "Neutrons(n)= " + element.neutrons + "<br>" + 
          "Atomic mass unit= " +
          element.atomicMassunit + " amu" 
          + "<br>" + element.elementName +
          " gains an electron in a chemical reaction becoming (I<sup>-</sup>). &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp; &nbsp;  &nbsp; "
          + "<br>"+ element.chemicalSymbol + " +"+ " e <sup>-</sup> &rarr;"+ element.chemicalSymbol+ "<sup> -</sup>" 
          ; 