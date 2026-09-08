# Setup Supabase — Wajib dilakukan sekali sebelum fitur "Submit Foto" jalan

Kode-nya udah siap, tapi kamu perlu bikin project Supabase-nya sendiri
(gratis, ~10 menit) dan isi 2 baris config. Ikutin urutan ini.

---

## 1. Bikin akun & project

1. Buka https://supabase.com → Sign up (bisa pakai akun GitHub).
2. Klik **New Project**.
3. Isi nama project (bebas, misal `roblox-memories`), bikin password
   database (simpan baik-baik, jarang dipakai tapi kalau ilang ribet),
   pilih region terdekat (Singapore paling deket buat Indonesia).
4. Tunggu ~2 menit sampai project selesai dibuat.

---

## 2. Bikin tabel `photos`

1. Di sidebar kiri, klik **SQL Editor**.
2. Klik **New query**.
3. Paste SQL ini, terus klik **Run**:

```sql
create table photos (
    id uuid primary key default gen_random_uuid(),
    image_url text not null,
    title text,
    caption text,
    game text,
    date text,
    people text,
    status text not null default 'pending' check (status in ('pending','approved','rejected')),
    created_at timestamptz not null default now()
);

alter table photos enable row level security;

-- Siapa aja boleh submit foto baru, TAPI statusnya harus "pending"
-- (nggak bisa langsung set diri sendiri jadi "approved")
create policy "Anyone can insert pending photos"
on photos for insert
to anon
with check (status = 'pending');

-- Siapa aja boleh BACA foto yang statusnya udah "approved" doang.
-- Foto yang masih "pending"/"rejected" nggak keliatan di publik.
create policy "Anyone can read approved photos"
on photos for select
to anon
using (status = 'approved');
```

---

## 3. Bikin Storage bucket buat nyimpen file foto

1. Di sidebar kiri, klik **Storage**.
2. Klik **New bucket**.
3. Nama bucket: `photos` (harus persis ini, kode-nya udah nyari nama ini).
4. Toggle **Public bucket** → nyalain (ON). Ini penting biar foto bisa
   ditampilin di web tanpa perlu login.
5. Klik **Create bucket**.

Habis itu, masih di halaman Storage, buka tab **Policies** buat bucket
`photos`, klik **New policy**, dan bikin 2 policy ini (bisa lewat SQL
Editor juga, sama aja):

```sql
create policy "Anyone can upload photos"
on storage.objects for insert
to anon
with check (bucket_id = 'photos');

create policy "Anyone can view photos"
on storage.objects for select
to anon
using (bucket_id = 'photos');
```

---

## 4. Ambil URL & anon key project kamu

1. Di sidebar kiri, klik ⚙️ **Project Settings** → **API**.
2. Copy **Project URL** (bentuknya `https://xxxxx.supabase.co`).
3. Copy **anon public** key (yang panjang, bukan yang `service_role`!).

Buka file `js/supabase-config.js`, ganti baris ini:

```js
const SUPABASE_URL = "https://xxxxxxxxxxxxxxxxxxxx.supabase.co";
const SUPABASE_ANON_KEY = "ISI-ANON-PUBLIC-KEY-KAMU-DI-SINI";
```

dengan punya kamu sendiri. Save, upload ke GitHub, selesai — fitur
submit foto sekarang aktif.

---

## 5. Cara approve foto yang masuk

Setiap ada yang submit foto lewat halaman **Submit Foto** di situs kamu,
foto itu masuk dengan status `pending` — **belum muncul** di galeri
sampai kamu approve manual (biar nggak sembarang orang bisa nyampah).

Cara approve:
1. Buka dashboard Supabase kamu → **Table Editor** → tabel `photos`.
2. Kamu bakal lihat baris-baris foto yang masuk, kolom `status`-nya
   `pending`.
3. Klik cell `status` di baris yang mau di-approve → ganti jadi
   `approved` → Enter/save.
4. Foto itu langsung muncul di Gallery, Statistics, dan bisa di-favorite
   begitu ada yang buka situsnya lagi.

Kalau ada foto yang nggak pantes/spam, tinggal ganti statusnya jadi
`rejected` (atau hapus barisnya sekalian), foto itu nggak akan pernah
muncul di publik.

---

## Yang perlu diinget

- **Foto lama (di `photos-data.js`) tetap ada** — nggak kepengaruh sama
  sekali, tetap muncul kayak biasa. Fitur baru ini cuma NAMBAHIN foto
  submisi ke atasnya.
- **Project Supabase gratis kamu "tidur" otomatis** kalau situsnya nggak
  ada yang buka selama 7 hari — begitu ada yang buka lagi, otomatis
  nyala sendiri, cuma loading pertamanya agak lambat (~30-90 detik).
  Nggak perlu diapa-apain, ini normal.
- **anon key itu AMAN** ditaruh di kode (bisa dilihat siapa aja lewat
  "View Source") — dia dibatasi sama RLS policy yang kita bikin di
  langkah 2 & 3 tadi. Yang HARUS dirahasiain adalah `service_role` key,
  dan itu nggak kepake sama sekali di kode ini.
