var element = {
          elementName: "Sulfur",
          chemicalSymbol: "S",
          protons: 16,
          atomicMassA: 32,
          electrons: 16,
          neutrons: 16,
          atomicMassunit: 32.07
        };
  
        document.getElementById("S").innerHTML = "Element Name: "+element.elementName+ "<br>"+
          "Chemical Symbol (X)= " + element.chemicalSymbol + "<br>" +
          "Protons (p)= "+ element.protons + "<br>" + "A= Mass Number= protons + neutrons= " +
          element.atomicMassA + "<br>" + "Electrons (e)= " + element.electrons + "<br>" +
          "Neutrons(n)= " + element.neutrons + "<br>" + "Atomic mass unit= " +
          element.atomicMassunit + " amu" + "<br>" + element.elementName +" gains 2 electron during a chemical reaction becoming "+ "(" +element.chemicalSymbol+"<sup>-2</sup>) &nbsp &nbsp"+". &nbsp; &nbsp; &nbsp; &nbsp;" + "<br>"+
        element.chemicalSymbol+" + 2e<sup>-</sup> &rarr; "+ element.chemicalSymbol +"<sup>-2</sup>"  
        ;