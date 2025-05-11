'use client';

import Link from "next/link";
import { Container, Button } from 'react-bootstrap';
import MyNavbar from "../components/MyNavbar";
import BackgroundImage from "../components/BackgroundImage";


export default function PostPage() {
  return (
    <div>

      {/* Navbar */}
      <MyNavbar />

      {/* Background Image */}
      <BackgroundImage src="/me.png" title={`TENTANG\nSAYA`} subtitle="" />

      {/* Konten Desktop */}
      <div className='d-none d-lg-flex' style={{ marginTop: '450px' }}>
        <Container style={{ paddingBottom: '30px', paddingLeft: '100px', paddingRight: '100px' }}>

          {/* Artikel */}
          <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
            Penulis adalah mahasiswa Pendidikan Teknik Elektronika di Universitas Negeri Yogyakarta yang tertarik dengan dunia teknologi, khususnya di bidang elektronika dan pemrograman. Penulis suka bagaimana gabungan antara hardware dan software bisa menciptakan sesuatu yang tidak hanya digital, tapi juga hadir dalam bentuk fisik. 
          </p>
          <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
            Tujuan utama blog ini adalah sebagai tempat untuk mendokumentasikan apa yang sudah penulis pelajari dan tutorial dari berbagai projek yang sudah penulis buat. Namun, terkadang penulis juga menuliskan pandangan penulis tentang beberapa hal yang penulis temui.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
            <a href="https://www.linkedin.com/in/drajatfikri/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ width: '50px', height: '50px', backgroundColor: 'black', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/icons/linkedin.svg" alt="LinkedIn" style={{ width: '24px', height: '24px' }} />
              </div>
            </a>
            <a href="mailto:drajat.fikria@gmail.com" style={{ textDecoration: 'none' }}>
              <div style={{ width: '50px', height: '50px', backgroundColor: 'black', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/icons/email.svg" alt="Email" style={{ width: '24px', height: '24px' }} />
              </div>
            </a>
          </div>
        </Container>
      </div>

      {/* Konten Mobile */}
      <div className="d-flex d-lg-none" style={{ marginTop: '30px' }}>
        <Container style={{ paddingBottom: '40px' }}>

          {/* Artikel */}
          <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
            Penulis adalah mahasiswa Pendidikan Teknik Elektronika di Universitas Negeri Yogyakarta yang tertarik dengan dunia teknologi, khususnya di bidang elektronika dan pemrograman. Penulis suka bagaimana gabungan antara hardware dan software bisa menciptakan sesuatu yang tidak hanya digital, tapi juga hadir dalam bentuk fisik. 
          </p>
          <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
            Tujuan utama blog ini adalah sebagai tempat untuk mendokumentasikan apa yang sudah penulis pelajari dan tutorial dari berbagai projek yang sudah penulis buat. Namun, terkadang penulis juga menuliskan pandangan penulis tentang beberapa hal yang penulis temui.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
            <a href="https://www.linkedin.com/in/drajatfikri/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ width: '50px', height: '50px', backgroundColor: 'black', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/icons/linkedin.svg" alt="LinkedIn" style={{ width: '24px', height: '24px' }} />
              </div>
            </a>
            <a href="mailto:drajat.fikria@gmail.com" style={{ textDecoration: 'none' }}>
              <div style={{ width: '50px', height: '50px', backgroundColor: 'black', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/icons/email.svg" alt="Email" style={{ width: '24px', height: '24px' }} />
              </div>
            </a>
          </div>
        </Container>
      </div>
    </div>
  );
}