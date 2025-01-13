var element = {
          elementName: "Strontium",
          chemicalSymbol: "Sr",
          protons: 38,
          atomicMassA: 76,
          electrons: 38,
          neutrons: 38,
          atomicMassunit: 87.62
        };
  
        document.getElementById("Sr").innerHTML = "Element Name: "+element.elementName+ "<br>"+
          "Chemical Symbol (X)= " + element.chemicalSymbol + "<br>" +
          "Protons (p)= "+ element.protons + "<br>" + "A= Mass Number= protons + neutrons= " +
          element.atomicMassA + "<br>" + "Electrons (e)= " + element.electrons + "<br>" +
          "neutrons(n)= " + element.neutrons + "<br>" + "Atomic mass unit= " +
          element.atomicMassunit + " amu" + "<br>" + element.elementName +" loses 2 electron a chemical reaction becoming "+ "(" +element.chemicalSymbol+"<sup>+2</sup>)"+". &nbsp; &nbsp; &nbsp; &nbsp;" + "<br>"+
        element.chemicalSymbol+" &rarr; "+ element.chemicalSymbol +"<sup>+2</sup> + 2 e<sup>-</sup>"  
        ;