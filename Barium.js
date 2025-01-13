var element = {
          elementName: "Barium",
          chemicalSymbol: "Ba",
          protons: 56,
          atomicMassA: 112,
          electrons: 56,
          neutrons: 56,
          atomicMassunit: 137.33
        };
  
        document.getElementById("Ba").innerHTML = "Element Name: "+element.elementName+ "<br>"+
          "Chemical Symbol (X)= " + element.chemicalSymbol + "<br>" +
          "Protons (p)= "+ element.protons + "<br>" + "A= Mass Number= protons + neutrons= " +
          element.atomicMassA + "<br>" + "Electrons (e)= " + element.electrons + "<br>" +
          "neutrons(n)= " + element.neutrons + "<br>" + "Atomic mass unit= " +
          element.atomicMassunit + " amu" + "<br>" + element.elementName +" loses 2 electron a chemical reaction becoming "+ "(" +element.chemicalSymbol+"<sup>+2</sup>)"+". &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + "<br>"+
        element.chemicalSymbol+" &rarr; "+ element.chemicalSymbol +"<sup>+2</sup> + 2 e<sup>-</sup>"  
        ;