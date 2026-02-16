import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      
      {/* HERO */}
      <section className="about-hero">
        <h1>Tentang Ma’anil Hadis</h1>
        <p className="arab">
          إِنَّمَا بُعِثْتُ لِأُتَمِّمَ مَكَارِمَ الْأَخْلَاقِ
        </p>
        <p className="tagline">
Ma’anil Hadis Interaktif adalah aplikasi pembelajaran berbasis web yang dikembangkan sebagai media digital untuk membantu mahasiswa memahami hadis secara lebih mendalam dan kontekstual. Aplikasi ini hadir sebagai respons terhadap kebutuhan pembelajaran hadis di era digital, di mana akses informasi sangat cepat namun belum tentu disertai pemahaman yang komprehensif.

Berdasarkan hasil observasi dan penelitian, sebagian besar mahasiswa masih menggunakan aplikasi hadis hanya sebatas membaca teks dan terjemahan tanpa penjelasan makna yang memadai. Oleh karena itu, aplikasi ini dirancang untuk menghadirkan pembelajaran ma’anil hadis yang lebih sistematis, akademik, dan mudah diakses.
        </p>
      </section>

      {/* VISI MISI */}
      <section className="visi-misi">
        <div className="card">
          <h2>🎯 Visi</h2>
          <ul>
            <li>Menyederhanakan pemahaman hadis untuk semua kalangan</li>
            <li>Menggabungkan teknologi dengan ilmu syar’i</li>
          </ul>
        </div>

        <div className="card">
          <h2>📌 Misi</h2>
          <ul>
            <li>Menyediakan hadis tematik untuk berbagai kebutuhan</li>
            <li>Membantu pelajar memahami makna hadis dengan jelas</li>
            <li>Mengembangkan pembelajaran digital Islami</li>
          </ul>
        </div>
      </section>

      {/* FITUR */}
      <section className="fitur">
        <h2>Fitur Utama Aplikasi</h2>
        <div className="fitur-grid">
          <div className="fitur-card"> 🔎 Pencarian Hadis berdasarkan kata kunci dan tema</div>
          <div className="fitur-card">📖 Penjelasan Ma’anil Hadis yang membantu memahami makna secara kontekstual</div>
          <div className="fitur-card">📖 Detail & Penjelasan</div>
          <div className="fitur-card">📚 Referensi Tambahan dari literatur kitab dan jurnal</div>
          <div className="fitur-card">🎓 Pendekatan Akademik sesuai kebutuhan mahasiswa Ilmu Hadis</div>
          <div className="fitur-card">🌐 Akses Multi-Platform (mobile & desktop)</div>
        </div>
      </section>

      {/* TEKNOLOGI */}
      <section className="teknologi">
        <h2>Teknologi yang Digunakan</h2>
        <div className="tech-list">
          <span>React JS</span>
          <span>Vite</span>
          <span>CSS Modern</span>
          <span>API Hadis</span>
          <span>SheetDB</span>
        </div>
      </section>

      {/* DEVELOPER */}
      <section className="developer">
        <h2>Tentang Pengembang</h2>
        <div className="dev-card">
          <img
            src="/foto.jpg.jpeg"
            alt="Foto saya"
          />
          <div>
            <h3>Kang Fadhil</h3>
            <p>Programmer & Pembelajar Ilmu Hadis</p>
            <ul>
              <li>Mahasiswa Informatika</li>
              <li>Menggabungkan teknologi & khazanah ilmu hadis</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="roadmap">
        <h2>Roadmap & Pengembangan</h2>
        <ul>
          <li>✅ Versi 1 - Kategori Dasar</li>
          <li>🔄 Versi 2 - Tafsir Hadis</li>
          <li>⭐ Versi 3 - Bookmark & Favorite</li>
          <li>🚀 Versi 4 - Mode Offline</li>
        </ul>
      </section>

    </div>
  );
}