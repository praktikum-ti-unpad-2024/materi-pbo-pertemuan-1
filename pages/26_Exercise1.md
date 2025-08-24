---
layout: center
---
# Assignment 1 Soal 1 <kbd>soal1/<span class='text-teal'>Test.java</span></kbd>

<br>
Buatlah program sederhana yang dapat menerima input berupa string sebanyak 3 kali lalu gabungkan setiap input string menjadi satu string dengan urutan dari string yang memiliki char paling sedikit.

<div class='mt-6 grid grid-cols-[0.2fr_1.5fr] items-center text-sm'>
    <span class='text-xs text-white font-extrabold uppercase text-yellow'>Input</span>
    <div class='flex flex-col mb-3'>
        <span>string kata1, kata2, kata3</span>
    </div>
    <span class='text-xs text-white font-extrabold uppercase text-yellow'>Output</span>
    <span>1. Jika ada 1 string atau lebih inputan yang KOSONG, Output = "Error, ada string kosong" 
    <br>  2. Jika string inputan TIDAK ADA YANG KOSONG, Output = gabungan dari semua string & gabungan dari semua string berhuruf kapital tanpa spasi sesuai urutan</span>
    <span class='text-xs text-white font-extrabold uppercase text-yellow'>Contoh</span>
    <div class='mt-4 flex flex-col mb-2'>
```bash
INPUT                                           INPUT
saya                                            saya
suka                                            suka
                                                mie

OUTPUT                                          OUTPUT
Error, ada string kosong                        miesayasuka
                                                MIESAYASUKA
```
    </div>
</div>
<details class='p-2 flex flex-col'>
<summary class='text-xs text-white font-extrabold uppercase text-yellow'>Hint</summary>
<span class='text-xs'>
Gunakan  <span class="text-yellow">string</span>.length() untuk mendapatkan panjang string. Gunakan  <span class="text-yellow">string</span>.toUpperCase() untuk mendapatkan mengubah string menjadi kapital semua.
</span>
</details>