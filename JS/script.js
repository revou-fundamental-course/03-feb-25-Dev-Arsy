document.getElementById('convert').addEventListener('click', function () {
    const celsius = parseFloat(document.getElementById('celsius').value);
    if (isNaN(celsius)) {
      alert('Masukkan suhu yang valid!');
      return;
    }
    const fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    document.getElementById('calculation').textContent = `${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
  });
  
  document.getElementById('reset').addEventListener('click', function () {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('calculation').textContent = '';
  });
  
  document.getElementById('reverse').addEventListener('click', function () {
    const celsiusGroup = document.getElementById('celsiusGroup');
    const fahrenheitGroup = document.getElementById('fahrenheitGroup');
  
    // Simpan nilai input sebelum ditukar
    const celsiusValue = document.getElementById('celsius').value;
    const fahrenheitValue = document.getElementById('fahrenheit').value;
  
    // Tukar label dan placeholder
    const celsiusLabel = celsiusGroup.querySelector('label');
    const fahrenheitLabel = fahrenheitGroup.querySelector('label');
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
  
    if (celsiusLabel.textContent.includes("Celsius")) {
      // Jika saat ini Celsius di atas, tukar ke Fahrenheit di atas
      celsiusLabel.textContent = "Fahrenheit (°F):";
      fahrenheitLabel.textContent = "Celsius (°C):";
      celsiusInput.placeholder = "Masukkan suhu dalam °F";
      fahrenheitInput.placeholder = "Hasil konversi dalam °C";
    } else {
      // Jika saat ini Fahrenheit di atas, tukar ke Celsius di atas
      celsiusLabel.textContent = "Celsius (°C):";
      fahrenheitLabel.textContent = "Fahrenheit (°F):";
      celsiusInput.placeholder = "Masukkan suhu dalam °C";
      fahrenheitInput.placeholder = "Hasil konversi dalam °F";
    }
  
    // Tukar nilai input
    document.getElementById('celsius').value = fahrenheitValue;
    document.getElementById('fahrenheit').value = celsiusValue;
  
    // Update kalkulasi jika ada nilai
    if (celsiusValue && fahrenheitValue) {
      if (celsiusLabel.textContent.includes("Celsius")) {
        const celsius = parseFloat(celsiusValue);
        const fahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById('calculation').textContent = `${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
      } else {
        const fahrenheit = parseFloat(celsiusValue);
        const celsius = (fahrenheit - 32) * 5 / 9;
        document.getElementById('calculation').textContent = `${fahrenheit}°F - 32) * (5/9) = ${celsius.toFixed(2)}°C`;
      }
    }
  });