var element = {
          elementName: "Radium",
          chemicalSymbol: "Ra",
          protons: 88,
          atomicMassA: 176,
          electrons: 88,
          neutrons: 88,
          atomicMassunit: "Atomic Mass unit Unknown due to half life."
        };
  
        document.getElementById("Ra").innerHTML = "Element Name: "+element.elementName+ "<br>"+
          "Chemical Symbol (X)= " + element.chemicalSymbol + "<br>" +
          "Protons (p)= "+ element.protons + "<br>" + "A= Mass Number= protons + neutrons= " +
          element.atomicMassA + "<br>" + "Electrons (e)= " + element.electrons + "<br>" +
          "Neutrons(n)= " + element.neutrons + "<br>" + "Atomic mass unit= " +
          element.atomicMassunit + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;";