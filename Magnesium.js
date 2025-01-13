var element = {
          elementName: "Magnesium",
          chemicalSymbol: "Mg",
          protons: 12,
          atomicMassA: 24,
          electrons: 12,
          neutrons: 12,
          atomicMassunit: 24.3050
        };
  
        document.getElementById("Mg").innerHTML = "Element Name: "+element.elementName+ "<br>"+
          "Chemical Symbol (X)= " + element.chemicalSymbol + "<br>" +
          "Protons (p)= "+ element.protons + "<br>" + "A= Mass Number= protons + neutrons= " +
          element.atomicMassA + "<br>" + "Electrons (e)= " + element.electrons + "<br>" +
          "neutrons(n)= " + element.neutrons + "<br>" + "Atomic mass unit= " +
          element.atomicMassunit + " amu" + "<br>" + element.elementName +" loses 2 electron a chemical reaction becoming "+ "(" +element.chemicalSymbol+"<sup>+2</sup>)"+". &nbsp;  &nbsp;" + "<br>"+
        element.chemicalSymbol+" &rarr; "+ element.chemicalSymbol +"<sup>+2</sup> + 2 e<sup>-</sup>"  
        ;