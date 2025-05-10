'use client';

import Link from "next/link";
import { Container, Button } from 'react-bootstrap';
import MyNavbar from "../../components/MyNavbar";
import TitlePost from "../../components/TitlePost";
import Game from "../../components/Game";
import GameMobile from "../../components/GameMobile";
import Image from "next/image";

export default function PostPage() {
    return (
        <div>

            {/* Navbar */}
            <MyNavbar />

            {/* Background Image */}
            <TitlePost src="/post/robot.jpg" title={`AI dalam Pendidikan,\nAncaman atau Kawan?`} subtitle="" />

            {/* Konten Desktop */}
            <div className='d-none d-lg-flex' style={{ marginTop: '450px' }}>
                <Container style={{ paddingBottom: '30px', paddingLeft: '100px', paddingRight: '100px' }}>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Sebelum memulai pembahasan, mari kita bermain permainan sederhana berikut ini.
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 40 }}>
                        <Game />
                    </div>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Walaupun sederhana, cukup menghibur bukan?
                    </p>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Permainan tersebut dibuat menggunakan ChatGPT, sebuah <span style={{ fontStyle: "italic" }}>Artificial Intelligence</span> (AI) yang dikembangkan oleh OpenAI dan dirancang untuk memahami dan menghasilkan teks dalam berbagai konteks bahkan hingga menyelesaikan tugas seperti pemrograman.
                    </p>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Meskipun permainan di atas terlihat sangat sederhana dan sepele, perkembangan <span style={{ fontStyle: "italic" }}>Artificial Intelligence</span> (AI) tidak sesederhana dan sebatas itu. AI telah merambah ke berbagai bidang seperti kesehatan, militer bahkan pendidikan. Perkembangan AI sendiri sebenarnya sudah dimulai cukup lama, dimulai sejak tahun 1950-an saat seorang ilmuwan dari Massachusetts Institute of Technology (MIT) bernama John McCarthy menggagas sebuah konferensi di Dartmouth College di Hanover, Amerika Serikat.
                    </p>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Mari kita loncat ke tahun 1997, di mana pada tahun tersebut seorang Garry Kasparov yang merupakan juara catur dunia, dikalahkan oleh sebuah super komputer milik IBM bernama Deep Blue dalam sebuah pertandingan. Ini merupakan salah satu tonggak penting dalam perkembangan kecerdasan buatan/<span style={{ fontStyle: "italic" }}>Artificial Intelligence</span> (AI). <a href="https://www.merdeka.com/sumut/peristiwa-11-mei-komputer-milik-ibm-bernama-deep-blue-mengalahkan-pecatur-ulung-garry-kasparov-128206-mvk.html">(Sumber: Merdeka)</a>
                    </p>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Kembali ke masa sekarang, hype mengenai AI di masyarakat muncul saat OpenAI merilis ChatGPT pada tanggal 30 November 2022. Hype ini tidak terbendung dan kemudian melahirkan banyak chatbot lain serupa ChatGPT hingga saat ini. Tidak sebatas itu, AI kini juga hadir dalam berbagai kebutuhan, seperti membuat slide presentasi, merancang desain, menyusun laporan dan lain sebagainya.
                    </p>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20, fontWeight: 'bold' }} >
                        AI dalam Pendidikan
                    </p>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Di dunia pendidikan, AI seringkali digunakan untuk membantu proses pembelajaran seperti menjawab pertanyaan, memberikan penjelasan sebuah materi secara instan dan lain sebagainya. Ini sangat membantu peserta didik untuk mendapatkan pemahaman mengenai materi pembelajaran yang adaptif, sehingga peserta didik mampu menerima materi pembelajaran sesuai kemampuan dan gaya belajarnya masing-masing. Untuk pendidik, AI seringkali digunakan dalam proses otomatisasi, seperti mengelola berkas, membuat slide presentasi materi, menilai tugas, membuat soal bahkan merancang metode pembelajaran yang efektif.
                    </p>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Namun, semua kemudahan ini bukan berarti tanpa tantangan. AI juga membawa dampak buruk jika digunakan tidak semestinya. Dewasa ini, entah sudah berapa kali seorang pendidik menemukan kecurangan yang dilakukan oleh peserta didik, baik dalam ujian maupun tugas-tugas yang dikerjakan. Model kecurangan ini bertambah dan semakin pelik untuk dideteksi akibat munculnya AI. Peserta didik seringkali hanya mengandalkan AI untuk menjawab tugas-tugas tanpa tahu esensi sebenarnya dari materi tersebut, dan juga jawaban-jawaban yang diberikan oleh AI sulit untuk dideteksi, apakah kalimat tersebut benar ditulis langsung oleh peserta didik, hasil <span style={{ fontStyle: "italic" }}>copy-paste</span> chatbot atau  parafrase dari jawaban chatbot.
                    </p>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20, fontWeight: 'bold' }} >
                        Ancaman atau Kawan
                    </p>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Dalam artikel penulis yang lain <a href="https://blog-flozistor.vercel.app/post/dari-pythagoras-sampai-sepotong-kue">‘Dari Pythagoras Sampai Sepotong Kue’</a>, penulis menyebutkan bahwa pendidikan seharusnya adalah sebuah proses yang menggembirakan dan tercipta dari keingintahuan manusia. Jika bergantung pada AI untuk mengerjakan segala hal, tanpa pernah membaca dan memahami sendiri, maka kita bisa kehilangan keterampilan berpikir, kreativitas dan yang paling parah, kita bisa kehilangan curiosity (keingintahuan).
                    </p>

                    <Image src="/post/curio.png" alt="Keingintahuan" width={1920} height={1080} style={{ width: '60%', height: 'auto', paddingBottom: 30 }} />

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Kehilangan rasa ingin tahu dalam proses pembelajaran adalah sebuah bencana. Tanpa rasa ingin tahu, esensi dari pembelajaran tidak akan pernah ada. Proses pembelajaran hanya akan dimaknai sebagai kegiatan biasa yang melelahkan dan membosankan. Jika hal ini terus berlanjut dan banyak dialami oleh peserta didik, pada akhirnya akan menciptakan sebuah generasi yang tidak memiliki kemampuan untuk berpikir secara mandiri. Sebuah generasi yang hanya bergantung pada teknologi tanpa tahu esensi hidup mereka sendiri.
                    </p>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Namun seperti yang sudah penulis jabarkan sebelumnya, AI juga bermanfaat jika digunakan sesuai porsinya. Seperti artikel yang anda baca ini, penulis memang tidak menggunakan AI untuk sekedar <span style={{ fontStyle: "italic" }}>copy-paste</span>. Tapi penulis melakukan brainstorming dengan AI, penulis berdialog dengan ChatGPT dan membahas beberapa poin yang kemudian penulis jabarkan pada artikel ini.
                    </p>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Terakhir, untuk menjawab pertanyaan dari judul ini:
                    </p>

                    <blockquote style={{
                        fontSize: '1.3rem',
                        fontStyle: 'italic',
                        color: '#333',
                        margin: '20px auto',
                        padding: '10px',
                        paddingLeft: '20px',
                        marginBottom: '30px',
                        borderLeft: '5px solid #ccc',
                        fontWeight: 'bold',
                    }}>
                        AI dalam Pendidikan, Ancaman atau Kawan?
                    </blockquote>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Penulis dapat menyimpulkan bahwa AI adalah pedang bermata dua, ia dapat menjadi kawan yang membantu banyak hal, tetapi juga bisa menjadi musuh yang terlihat baik, namun sebenarnya menghancurkan dari dalam.
                    </p>

                </Container>
            </div>

            {/* Konten Mobile */}
            <div className="d-flex d-lg-none" style={{ marginTop: '420px' }}>
                <Container style={{ paddingBottom: '40px', paddingLeft: '20px', paddingRight: '20px' }}>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Sebelum memulai pembahasan, mari kita bermain permainan sederhana berikut ini.
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 40 }}>
                        <GameMobile />
                    </div>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Walaupun sederhana, cukup menghibur bukan?
                    </p>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Permainan tersebut dibuat menggunakan ChatGPT, sebuah <span style={{ fontStyle: "italic" }}>Artificial Intelligence</span> (AI) yang dikembangkan oleh OpenAI dan dirancang untuk memahami dan menghasilkan teks dalam berbagai konteks bahkan hingga menyelesaikan tugas seperti pemrograman.
                    </p>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Meskipun permainan di atas terlihat sangat sederhana dan sepele, perkembangan <span style={{ fontStyle: "italic" }}>Artificial Intelligence</span> (AI) tidak sesederhana dan sebatas itu. AI telah merambah ke berbagai bidang seperti kesehatan, militer bahkan pendidikan. Perkembangan AI sendiri sebenarnya sudah dimulai cukup lama, dimulai sejak tahun 1950-an saat seorang ilmuwan dari Massachusetts Institute of Technology (MIT) bernama John McCarthy menggagas sebuah konferensi di Dartmouth College di Hanover, Amerika Serikat.
                    </p>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Mari kita loncat ke tahun 1997, di mana pada tahun tersebut seorang Garry Kasparov yang merupakan juara catur dunia, dikalahkan oleh sebuah super komputer milik IBM bernama Deep Blue dalam sebuah pertandingan. Ini merupakan salah satu tonggak penting dalam perkembangan kecerdasan buatan/<span style={{ fontStyle: "italic" }}>Artificial Intelligence</span> (AI). <a href="https://www.merdeka.com/sumut/peristiwa-11-mei-komputer-milik-ibm-bernama-deep-blue-mengalahkan-pecatur-ulung-garry-kasparov-128206-mvk.html">(Sumber: Merdeka)</a>
                    </p>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Kembali ke masa sekarang, hype mengenai AI di masyarakat muncul saat OpenAI merilis ChatGPT pada tanggal 30 November 2022. Hype ini tidak terbendung dan kemudian melahirkan banyak chatbot lain serupa ChatGPT hingga saat ini. Tidak sebatas itu, AI kini juga hadir dalam berbagai kebutuhan, seperti membuat slide presentasi, merancang desain, menyusun laporan dan lain sebagainya.
                    </p>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20, fontWeight: 'bold' }} >
                        AI dalam Pendidikan
                    </p>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Di dunia pendidikan, AI seringkali digunakan untuk membantu proses pembelajaran seperti menjawab pertanyaan, memberikan penjelasan sebuah materi secara instan dan lain sebagainya. Ini sangat membantu peserta didik untuk mendapatkan pemahaman mengenai materi pembelajaran yang adaptif, sehingga peserta didik mampu menerima materi pembelajaran sesuai kemampuan dan gaya belajarnya masing-masing. Untuk pendidik, AI seringkali digunakan dalam proses otomatisasi, seperti mengelola berkas, membuat slide presentasi materi, menilai tugas, membuat soal bahkan merancang metode pembelajaran yang efektif.
                    </p>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Namun, semua kemudahan ini bukan berarti tanpa tantangan. AI juga membawa dampak buruk jika digunakan tidak semestinya. Dewasa ini, entah sudah berapa kali seorang pendidik menemukan kecurangan yang dilakukan oleh peserta didik, baik dalam ujian maupun tugas-tugas yang dikerjakan. Model kecurangan ini bertambah dan semakin pelik untuk dideteksi akibat munculnya AI. Peserta didik seringkali hanya mengandalkan AI untuk menjawab tugas-tugas tanpa tahu esensi sebenarnya dari materi tersebut, dan juga jawaban-jawaban yang diberikan oleh AI sulit untuk dideteksi, apakah kalimat tersebut benar ditulis langsung oleh peserta didik, hasil <span style={{ fontStyle: "italic" }}>copy-paste</span> chatbot atau  parafrase dari jawaban chatbot.
                    </p>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20, fontWeight: 'bold' }} >
                        Ancaman atau Kawan
                    </p>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Dalam artikel penulis yang lain <a href="https://blog-flozistor.vercel.app/post/dari-pythagoras-sampai-sepotong-kue">‘Dari Pythagoras Sampai Sepotong Kue’</a>, penulis menyebutkan bahwa pendidikan seharusnya adalah sebuah proses yang menggembirakan dan tercipta dari keingintahuan manusia. Jika bergantung pada AI untuk mengerjakan segala hal, tanpa pernah membaca dan memahami sendiri, maka kita bisa kehilangan keterampilan berpikir, kreativitas dan yang paling parah, kita bisa kehilangan curiosity (keingintahuan).
                    </p>

                    <Image src="/post/curio.png" alt="Keingintahuan" width={1920} height={1080} style={{ width: '100%', height: 'auto', paddingBottom: 30 }} />

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Kehilangan rasa ingin tahu dalam proses pembelajaran adalah sebuah bencana. Tanpa rasa ingin tahu, esensi dari pembelajaran tidak akan pernah ada. Proses pembelajaran hanya akan dimaknai sebagai kegiatan biasa yang melelahkan dan membosankan. Jika hal ini terus berlanjut dan banyak dialami oleh peserta didik, pada akhirnya akan menciptakan sebuah generasi yang tidak memiliki kemampuan untuk berpikir secara mandiri. Sebuah generasi yang hanya bergantung pada teknologi tanpa tahu esensi hidup mereka sendiri.
                    </p>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Namun seperti yang sudah penulis jabarkan sebelumnya, AI juga bermanfaat jika digunakan sesuai porsinya. Seperti artikel yang anda baca ini, penulis memang tidak menggunakan AI untuk sekedar <span style={{ fontStyle: "italic" }}>copy-paste</span>. Tapi penulis melakukan brainstorming dengan AI, penulis berdialog dengan ChatGPT dan membahas beberapa poin yang kemudian penulis jabarkan pada artikel ini.
                    </p>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Terakhir, untuk menjawab pertanyaan dari judul ini:
                    </p>

                    <blockquote style={{
                        fontSize: '1.3rem',
                        fontStyle: 'italic',
                        color: '#333',
                        margin: '20px auto',
                        padding: '10px',
                        paddingLeft: '20px',
                        marginBottom: '30px',
                        borderLeft: '5px solid #ccc',
                        fontWeight: 'bold',
                    }}>
                        AI dalam Pendidikan, Ancaman atau Kawan?
                    </blockquote>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Penulis dapat menyimpulkan bahwa AI adalah pedang bermata dua, ia dapat menjadi kawan yang membantu banyak hal, tetapi juga bisa menjadi musuh yang terlihat baik, namun sebenarnya menghancurkan dari dalam.
                    </p>

                </Container>
            </div>

        </div>
    );
}