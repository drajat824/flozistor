'use client';

import Link from "next/link";
import { Container, Button } from 'react-bootstrap';
import MyNavbar from "../components/MyNavbar";
import BackgroundImage from "../components/BackgroundImage";
import BannerDesktop from "../components/BannerDesktop";
import BannerMobile from "../components/BannerMobile";


export default function PostPage() {
  return (
    <div>

      {/* Navbar */}
      <MyNavbar />

      {/* Background Image */}
      <BackgroundImage src="/post.png" title="ARTIKEL" subtitle={`JELAJAHI BERBAGAI ARTIKEL MENARIK SEPUTAR TIPS, TUTORIAL,\nCERITA, DAN INFORMASI TERBARU MENGENAI TEKNOLOGI`} />

      {/* Konten Desktop */}
      <div className='d-none d-lg-flex' style={{ marginTop: '450px' }}>
        <Container style={{ paddingBottom: '30px', paddingLeft: '100px', paddingRight: '100px' }}>

          {/* Artikel */}

          {/* Repeatable Link Component */}

          <Link href="/post/ai-dalam-pendidikan" onClick={() => window.location.href = "/post/ai-dalam-pendidikan"} style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}>
            <p style={{ fontWeight: 'bolder', fontSize: '2.3rem' }}>AI dalam Pendidikan, Ancaman atau Kawan?</p>
            <p style={{ fontSize: '1.3rem' }}>Sebelum memulai pembahasan, mari kita bermain permainan sederhana berikut ini..</p>
            <p style={{ fontSize: '1rem' }}>Diposting oleh Drajat Fikri pada 10/5/2025 | Pendidikan</p>
          </Link>
          <hr style={{ border: '1px solid black', margin: '40px 0' }} />
          <Link href="/post/dari-pythagoras-sampai-sepotong-kue" onClick={() => window.location.href = "/post/dari-pythagoras-sampai-sepotong-kue"} style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}>
            <p style={{ fontWeight: 'bolder', fontSize: '2.3rem' }}>Dari Pythagoras Sampai Sepotong Kue</p>
            <p style={{ fontSize: '1.3rem' }}>Sebuah kutipan dari Ki Hadjar Dewantara ini membuka tulisan saya kali ini..</p>
            <p style={{ fontSize: '1rem' }}>Diposting oleh Drajat Fikri pada 1/3/2024 | Pendidikan</p>
          </Link>

        </Container>
      </div>

      {/* Konten Mobile */}
      <div className='d-flex d-lg-none' style={{ marginTop: '30px' }}>
        <Container style={{ paddingBottom: '30px' }}>

          {/* Artikel */}

          {/* Repeatable Link Component */}
          <Link href="/post/dari-pythagoras-sampai-sepotong-kue" onClick={() => window.location.href = "/post/dari-pythagoras-sampai-sepotong-kue"} style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}>
            <p style={{ fontWeight: 'bolder', fontSize: 30 }}>Dari Pythagoras Sampai Sepotong Kue</p>
            <p style={{ fontSize: 20 }}>Sebuah kutipan dari Ki Hadjar Dewantara ini membuka tulisan saya kali ini..</p>
            <p style={{ fontSize: 15 }}>Diposting oleh Drajat Fikri pada 1/3/2024 | Pendidikan</p>
          </Link>
          <hr style={{ border: '0.5px solid black', margin: '40px 0' }} />
          <Link href="/post/ai-dalam-pendidikan" onClick={() => window.location.href = "/post/ai-dalam-pendidikan"} style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}>
            <p style={{ fontWeight: 'bolder', fontSize: 30 }}>AI dalam Pendidikan, Ancaman atau Kawan?</p>
            <p style={{ fontSize: 20 }}>Sebelum memulai pembahasan, mari kita bermain permainan sederhana berikut ini..</p>
            <p style={{ fontSize: 15 }}>Diposting oleh Drajat Fikri pada 10/5/2025 | Pendidikan</p>
          </Link>

        </Container>
      </div>
    </div>
  );
}