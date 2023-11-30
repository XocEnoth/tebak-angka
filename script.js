function game() {
    // Memulai permainan tebak angka
    const start = confirm("Selamat datang di permainan tebak angka!\nRules : -Player hanya memiliki 3x kesempatan untuk menebak.\n           -Angka yang ditebak yaitu antara 0-9.\n\nTekan OK untuk memulai permainan");

    // Jika player ingin bermain
    if (start == true) {
        // Kemenangan player
        let menang = 0;

        // Kesempatan menebak player
        let kesempatan_menebak = 3;

        // Menentukan angka random
        let bot = Math.random() * 10;
        bot = Math.floor(bot);

        // Rules
        do {
            if (kesempatan_menebak == 0) {
                kesempatan_menebak--;

                let kalah = confirm("Sayang sekali anda gagal\nAngka yang harus ditebak : " + bot + "\nApakah anda ingin mengulang?");
                if (kalah == true) {
                    game();
                } else {
                    alert("Sampai jumpa!");
                }
            } else if (menang == 1) {
                kesempatan_menebak = -1;

                let ulang = confirm("Selamat! tebakan anda benar\nApakah anda ingin mengulang permainan?");
                if (ulang == true) {
                    game();
                } else {
                    alert("Sampai jumpa!");
                }
            } else {
                // Menentukan tebakan player
                let player = parseInt(prompt("Masukkan angka tebakan (0-9) :"));

                if (player > -1 && player < 10) {
                    if (player + 2 == bot || player + 1 == bot) {
                        kesempatan_menebak--;
                        alert("Salah! Tebakan anda sedikit lebih rendah\nSisa tebakan anda = " + kesempatan_menebak + "");
                    } else if (player - 2 == bot || player - 1 == bot) {
                        kesempatan_menebak--;
                        alert("Salah! Tebakan anda sedikit lebih tinggi\nSisa tebakan anda = " + kesempatan_menebak + "");
                    } else if (player < bot) {
                        kesempatan_menebak--;
                        alert("Salah! Tebakan anda lebih rendah\nSisa tebakan anda = " + kesempatan_menebak + "");
                    } else if (player > bot) {
                        kesempatan_menebak--;
                        alert("Salah! Tebakan anda lebih tinggi\nSisa tebakan anda = " + kesempatan_menebak + "");
                    } else {
                        menang++;
                    }
                } else {
                    alert("Tebakan anda tidak memenuhi peraturan!");
                }
            }
        } while (kesempatan_menebak > -1);
    } else {
        // Jika player tidak ingin bermain
        alert("Sampai jumpa!");
    }
}

game();
