var element = {
          elementName: "Calcium",
          chemicalSymbol: "Ca",
          protons: 20,
          atomicMassA: 40,
          electrons: 20,
          neutrons: 20,
          atomicMassunit: 40.078
        };
  
        document.getElementById("Cl").innerHTML = "Element Name: "+element.elementName+ "<br>"+
          "Chemical Symbol (X)= " + element.chemicalSymbol + "<br>" +
          "Protons (p)= "+ element.protons + "<br>" + "A= Mass Number= protons + neutrons= " +
          element.atomicMassA + "<br>" + "Electrons (e)= " + element.electrons + "<br>" +
          "neutrons(n)= " + element.neutrons + "<br>" + "Atomic mass unit= " +
          element.atomicMassunit + " amu" + "<br>" + element.elementName +" loses 2 electron a chemical reaction becoming "+ "(" +element.chemicalSymbol+"<sup>+2</sup>)"+". &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + "<br>"+
        element.chemicalSymbol+" &rarr; "+ element.chemicalSymbol +"<sup>+2</sup> + 2 e<sup>-</sup>"  
        ;