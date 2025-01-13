var element = {
          elementName: "Rubidium",
          chemicalSymbol: "Rb",
          protons: 37,
          atomicMassA: 74,
          electrons: 37,
          neutrons: 37,
          atomicMassunit: 85.468
        };
  
        document.getElementById("Rb").innerHTML = "Element Name: "+element.elementName+ "<br>"+
          "Chemical Symbol (X)= " + element.chemicalSymbol + "<br>" +
          "Protons (p)= "+ element.protons + "<br>" + "A= Mass Number= protons + neutrons= " +
          element.atomicMassA + "<br>" + "Electrons (e)= " + element.electrons + "<br>" +
          "neutrons(n)= " + element.neutrons + "<br>" + "Atomic mass unit= " +
          element.atomicMassunit + " amu" + "<br>" + element.elementName +" loses an electron a chemical reaction becoming "+ "(" +element.chemicalSymbol+"<sup>+</sup>)"+". &nbsp;" + "<br>"+
        element.chemicalSymbol+" &rarr; "+ element.chemicalSymbol +"<sup>+</sup> + 1 e<sup>-</sup>"  
        ;