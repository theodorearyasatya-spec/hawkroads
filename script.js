function updateTraffic() {
  let density = document.getElementById("density").value;
  let lampu = document.getElementById("lampu");

  if (density === "low") {
    lampu.innerText = "Lampu: Hijau 20 detik";
  } 
  else if (density === "medium") {
    lampu.innerText = "Lampu: Hijau 40 detik";
  } 
  else {
    lampu.innerText = "Lampu: Hijau 70 detik";
  }
}
