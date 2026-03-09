function doPost(e) {
  try {
    // 1. Buka spreadsheet aktif
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // 2. PASTI KAN nama di bawah ini sama persis dengan nama TAB di Google Sheets Anda
    var sheet = ss.getSheetByName('Sheet1'); 

    // 3. Mengambil data dari form HTML
    var NamaLengkap     = e.parameter.NamaLengkap;
    var Kelas           = e.parameter.Kelas;
    var NamaSekolah     = e.parameter.NamaSekolah;
    var Tanggal         = e.parameter.Tanggal;
    var WaktuInput      = e.parameter.WaktuInput;

    // 4. Masukkan ke baris baru (Kolom: NamaLengkap, Kelas, NamaSekolah, Tanggal, WaktuInput)
    sheet.appendRow([new Date(), NamaLengkap, Kelas, NamaSekolah, Tanggal, WaktuInput]);

    // 5. Kembalikan respon sukses
    return ContentService.createTextOutput("Data Berhasil Disimpan!")
                         .setMimeType(ContentService.MimeType.TEXT);
    
  } catch (error) {
    // Jika ada eror, munculkan pesannya
    return ContentService.createTextOutput("Terjadi Eror: " + error.toString())
                         .setMimeType(ContentService.MimeType.TEXT);
  }
} // <--- Pastikan kurung penutup ini ada di baris paling bawah