
/* ===== KONFIGURASI (ubah di sini) ===== */
var CONFIG = {
  waNumber: "6285923305899",
  waMessage: "Halo Famy Digital Studio, saya ingin berkonsultasi tentang pembuatan website untuk bisnis saya.",
  socials: [
    {name:"WhatsApp", url:"WA"},
    {name:"Instagram", url:"https://www.instagram.com/tidarscatering/"},
    {name:"TikTok", url:"https://www.tiktok.com/@famybf4"},
    {name:"GitHub", url:"https://github.com/famybisyauqi74-cyber"},
    {name:"Facebook", url:"https://www.facebook.com/profile.php?id=61592275589328&locale=id_ID"}
  ]
};
var INCLUDED=["Website satu halaman","Tampilan responsif","Profil bisnis","Galeri atau katalog sederhana","Tombol WhatsApp","Tautan media sosial","Publikasi melalui subdomain Netlify","Maksimal dua kali revisi","Dukungan perbaikan bug selama 14 hari"];
var FAQ=[
["Apakah website bisa dibuka melalui HP?","Bisa. Setiap website dibuat responsif, sehingga tampil nyaman di HP, tablet, dan laptop."],
["Berapa lama proses pengerjaannya?","Lamanya bergantung pada kelengkapan konten dan jumlah revisi. Perkiraan waktu kita bahas saat konsultasi."],
["Apakah saya perlu menyediakan foto produk?","Sebaiknya ya. Foto, logo, dan teks dari Anda membuat website lebih sesuai dengan bisnis Anda. Kita bisa diskusikan jika foto belum lengkap."],
["Apakah website bisa memiliki tombol WhatsApp?","Bisa. Tombol WhatsApp termasuk dalam paket, lengkap dengan pesan otomatis untuk pelanggan."],
["Apakah domain sudah termasuk harga?","Belum. Paket dasar dipublikasikan di subdomain Netlify. Domain khusus dan hosting berbayar, jika diperlukan, dihitung terpisah."],
["Bagaimana jika saya ingin meminta revisi?","Paket mencakup maksimal dua kali revisi. Sampaikan masukan Anda lewat WhatsApp dan kami perbaiki sesuai batas paket."]];
var ICONS={WhatsApp:'<path d="M3 21l1.700-5A9 9 0 1 1 8 19.300L3 21Z"/><path d="M9 10c0 3 2 5 5 5l1-1.500-2-1-1 .7c-.7-.3-1.400-1-1.700-1.700l.7-1-1-2L9 10Z"/>',TikTok:'<path d="M14 3v11.500a3.500 3.500 0 1 1-3.500-3.500M14 3c.3 2.500 2 4.200 4.500 4.500"/>',Instagram:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.500 6.500h.01"/>',GitHub:'<path d="M9 19c-4.300 1.400-4.300-2.500-6-3m12 5v-3.500c0-1 .1-1.400-.5-2 2.800-.3 5.500-1.400 5.500-6a4.600 4.600 0 0 0-1.300-3.200 4.200 4.200 0 0 0-.1-3.200s-1.100-.3-3.500 1.300a12 12 0 0 0-6.200 0C6.500 2.800 5.400 3.100 5.400 3.100a4.200 4.200 0 0 0-.1 3.200A4.600 4.600 0 0 0 4 9.500c0 4.600 2.700 5.700 5.500 6-.6.600-.6 1.200-.5 2V21"/>',Facebook:'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>'};
var CHECK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5 9-10"/></svg>';

var waUrl="https://wa.me/"+CONFIG.waNumber+"?text="+encodeURIComponent(CONFIG.waMessage);
document.querySelectorAll(".wa-link").forEach(function(a){a.href=waUrl;a.target="_blank";a.rel="noopener noreferrer"});
document.getElementById("yr").textContent=new Date().getFullYear();
document.getElementById("inc").innerHTML=INCLUDED.map(function(t){return "<li>"+CHECK+t+"</li>"}).join("");
document.querySelectorAll("[data-soc]").forEach(function(box){
  var lab=box.getAttribute("data-soc")==="label";
  box.innerHTML=CONFIG.socials.map(function(s){var u=s.url==="WA"?waUrl:s.url;
    return '<a href="'+u+'" target="_blank" rel="noopener noreferrer" aria-label="'+s.name+'" title="'+s.name+'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+ICONS[s.name]+'</svg>'+(lab?s.name:'')+'</a>'}).join("");
});

/* FAQ */
var fl=document.getElementById("faq-list");
FAQ.forEach(function(f,i){
  var d=document.createElement("div");d.className="q";
  d.innerHTML='<h3 style="font-size:inherit"><button type="button" aria-expanded="false" aria-controls="a'+i+'"><span>'+f[0]+'</span><span class="pm" aria-hidden="true"></span></button></h3><div class="a" id="a'+i+'" role="region"><div><p>'+f[1]+'</p></div></div>';
  fl.appendChild(d);
  d.querySelector("button").addEventListener("click",function(){
    var open=d.classList.toggle("open");this.setAttribute("aria-expanded",open)});
});

/* nav */
var nav=document.getElementById("nav"),burger=document.getElementById("burger"),menu=document.getElementById("menu");
function onScroll(){nav.classList.toggle("scrolled",window.scrollY>12)}
window.addEventListener("scroll",onScroll,{passive:true});onScroll();
function setMenu(o){menu.classList.toggle("open",o);burger.setAttribute("aria-expanded",o);burger.setAttribute("aria-label",o?"Tutup menu":"Buka menu")}
burger.addEventListener("click",function(){setMenu(!menu.classList.contains("open"))});
menu.querySelectorAll("a").forEach(function(a){a.addEventListener("click",function(){setMenu(false)})});
document.addEventListener("keydown",function(e){if(e.key==="Escape")setMenu(false)});
document.addEventListener("click",function(e){if(!menu.contains(e.target)&&!burger.contains(e.target))setMenu(false)});

/* active link */
var links=[].slice.call(menu.querySelectorAll("a[href^='#']:not(.btn)"));
var secs=links.map(function(a){return document.querySelector(a.getAttribute("href"))});
function spy(){var y=window.scrollY+160,cur=0;secs.forEach(function(s,i){if(s&&s.offsetTop<=y)cur=i});
  links.forEach(function(a,i){a.classList.toggle("active",i===cur)})}
window.addEventListener("scroll",spy,{passive:true});spy();

/* reveal */
var targets=document.querySelectorAll(".rv,.step");
if("IntersectionObserver" in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.15,rootMargin:"0px 0px -40px 0px"});
  targets.forEach(function(t){io.observe(t)});
}else{targets.forEach(function(t){t.classList.add("in")})}
