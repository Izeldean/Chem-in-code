var element = {
          elementName: "Sodium",
          chemicalSymbol: "Na",
          protons: 11,
          atomicMassA: 22,
          electrons: 11,
          neutrons: 11,
          atomicMassunit: 22.99
        };
  
        document.getElementById("Na").innerHTML = "Element Name: "+element.elementName+ "<br>"+
          "Chemical Symbol (X)= " + element.chemicalSymbol + "<br>" +
          "Protons (p)= "+ element.protons + "<br>" + "A= Mass Number= protons + neutrons= " +
          element.atomicMassA + "<br>" + "Electrons (e)= " + element.electrons + "<br>" +
          "neutrons(n)= " + element.neutrons + "<br>" + "Atomic mass unit= " +
          element.atomicMassunit + " amu" + "<br>" + element.elementName +" loses an electron a chemical reaction becoming "+ "(" +element.chemicalSymbol+"<sup>+</sup>)"+". &nbsp; &nbsp; &nbsp; " + "<br>"+
        element.chemicalSymbol+" &rarr; "+ element.chemicalSymbol +"<sup>+</sup> + 1 e<sup>-</sup>"  
        ;