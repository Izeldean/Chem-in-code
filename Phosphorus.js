var element = {
          elementName: "Phosphorus",
          chemicalSymbol: "P",
          protons: 15,
          atomicMassA: 30,
          electrons: 15,
          neutrons: 15,
          atomicMassunit: 30.974
        };
  
        document.getElementById("P").innerHTML = "Element Name: "+element.elementName+ "<br>"+
          "Chemical Symbol (X)= " + element.chemicalSymbol + "<br>" +
          "Protons (p)= "+ element.protons + "<br>" + "A= Mass Number= protons + neutrons= " +
          element.atomicMassA + "<br>" + "Electrons (e)= " + element.electrons + "<br>" +
          "Neutrons(n)= " + element.neutrons + "<br>" + "Atomic mass unit= " +
          element.atomicMassunit + " amu" + "<br>" + element.elementName +" gains 3 electron during a chemical reaction becoming "+ "(" +element.chemicalSymbol+"<sup>-3</sup>)"+". &nbsp; &nbsp;  " + "<br>"+
        element.chemicalSymbol+" + 3e<sup>-</sup> &rarr; "+ element.chemicalSymbol +"<sup>-3</sup>"  
        ;