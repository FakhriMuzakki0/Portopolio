// Script untuk menangani form pencarian dan mengarahkan ke halaman yang sesuai
document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Menghindari reload halaman
  
    // Ambil nilai input pencarian dan ubah menjadi huruf kecil
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();
  
    // Daftar bagian dan halaman yang relevan
    const sections = {
      "about": "#about",  // Pencarian untuk 'about' akan menuju ke ID #about
      "skills": "#skills",  // Pencarian untuk 'skills' akan menuju ke ID #skills
      "projects": "#projects",  // Pencarian untuk 'projects' akan menuju ke ID #projects
      "contact": "#contact",  // Pencarian untuk 'contact' akan menuju ke ID #contact
      "about page": "about.html",  // Pencarian untuk 'about page' akan menuju ke halaman about.html
      "skills page": "skills.html",  // Pencarian untuk 'skills page' akan menuju ke halaman skills.html
      "projects page": "projects.html",  // Pencarian untuk 'projects page' akan menuju ke halaman projects.html
      "contact page": "contact.html"  // Pencarian untuk 'contact page' akan menuju ke halaman contact.html
    };
  
    // Cek apakah input pencarian cocok dengan bagian atau halaman tertentu
    if (sections[searchQuery]) {
      if (sections[searchQuery].endsWith(".html")) {
        // Jika pencarian mengarah ke halaman lain, buka halaman tersebut
        window.location.href = sections[searchQuery];
      } else {
        // Jika pencarian mengarah ke bagian dalam halaman, gulir ke ID yang relevan
        document.querySelector(sections[searchQuery]).scrollIntoView({
          behavior: 'smooth'
        });
      }
    } else {
      alert("Section not found!");
    }
  });
  