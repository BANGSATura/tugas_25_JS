function tugas() {
  var nilai = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
  var isiNilai = nilai.join(",");
  console.log("Sebelumnya: ",isiNilai);

  var isiAscending = nilai.sort();
  var nilaiAscending = isiAscending.join(",");
  console.log("Ascending: ",nilaiAscending);

  var isiDescending = nilai.reverse();
  var nilaiDescending = isiDescending.join(",");
  console.log("Descending: ",nilaiDescending);

  var Filter = nilai.filter(nilai =>(nilai > 10));
  var Filtered = Filter.join(",");
  console.log("Filter > 10: ",Filtered);
}
tugas();
